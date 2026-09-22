import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

// Data-model reads that must project explicitly. Writes (create/update/
// upsert/delete), counts, aggregates and raw queries are out of scope.
const FIND_METHODS = new Set([
  'findFirst',
  'findMany',
  'findUnique',
  'findUniqueOrThrow',
]);

// Legitimate exceptions: file path suffix -> reason. Keep this list empty
// by projecting instead; every entry here is reviewed tech debt.
const FIND_ALLOWLIST: { file: string; reason: string }[] = [];

const PASSWORD_ALLOWLIST = new Set([
  'src/modules/auth/auth-select.ts',
  'src/modules/maker/maker-select.ts',
]);

function sourceFiles(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry !== 'node_modules') sourceFiles(full, out);
    } else if (
      full.endsWith('.ts') &&
      !full.endsWith('.spec.ts') &&
      !full.endsWith('.d.ts')
    ) {
      out.push(full);
    }
  }
  return out;
}

function callsWithoutProjection(
  file: string,
): { method: string; line: number }[] {
  const source = readFileSync(file, 'utf8');
  const node = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
  const violations: { method: string; line: number }[] = [];

  const visit = (child: ts.Node): void => {
    if (
      ts.isCallExpression(child) &&
      ts.isPropertyAccessExpression(child.expression) &&
      FIND_METHODS.has(child.expression.name.text) &&
      child.arguments.length > 0
    ) {
      const [first] = child.arguments;
      const hasProjection =
        ts.isObjectLiteralExpression(first) &&
        first.properties.some(
          (p) =>
            ts.isPropertyAssignment(p) &&
            (p.name.getText() === 'select' || p.name.getText() === 'include'),
        );
      if (!hasProjection) {
        const { line } = node.getLineAndCharacterOfPosition(child.getStart());
        violations.push({
          method: child.expression.name.text,
          line: line + 1,
        });
      }
    }
    ts.forEachChild(child, visit);
  };
  visit(node);
  return violations;
}

function passwordKeys(file: string): number[] {
  const source = readFileSync(file, 'utf8');
  const node = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
  const lines: number[] = [];
  const visit = (child: ts.Node): void => {
    if (
      ts.isPropertyAssignment(child) &&
      child.name.getText() === 'password'
    ) {
      const { line } = node.getLineAndCharacterOfPosition(child.getStart());
      lines.push(line + 1);
    }
    ts.forEachChild(child, visit);
  };
  visit(node);
  return lines;
}

const SCAN_DIRS = ['src/modules', join('src', 'infra', 'media')];

describe('select conventions', () => {
  it('every data-model find projects via select/include', () => {
    const failures: string[] = [];
    for (const dir of SCAN_DIRS) {
      for (const file of sourceFiles(join(ROOT, dir))) {
        const rel = file.split(`${sep}backend${sep}`)[1] ?? file;
        if (FIND_ALLOWLIST.some((a) => rel.endsWith(a.file))) continue;
        for (const v of callsWithoutProjection(file)) {
          failures.push(`${rel}:${v.line} ${v.method}() without select/include`);
        }
      }
    }
    expect(failures).toEqual([]);
  });

  it('no select constant exposes password except allowlisted login selects', () => {
    const failures: string[] = [];
    for (const dir of SCAN_DIRS) {
      for (const file of sourceFiles(join(ROOT, dir))) {
        if (!file.endsWith('-select.ts')) continue;
        const rel = file.split(`${sep}backend${sep}`)[1] ?? file;
        const normalized = rel.split(sep).join('/');
        if (PASSWORD_ALLOWLIST.has(normalized)) continue;
        for (const line of passwordKeys(file)) {
          failures.push(`${rel}:${line} password key in select`);
        }
      }
    }
    expect(failures).toEqual([]);
  });
});

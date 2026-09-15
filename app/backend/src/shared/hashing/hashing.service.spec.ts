import { Test, TestingModule } from '@nestjs/testing';
import { HashingService } from './hashing.service.js';
import { describe, it, expect, beforeEach } from 'vitest';

describe('HashingService', () => {
  let service: HashingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HashingService],
    }).compile();

    service = module.get<HashingService>(HashingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('hash', () => {
    it('should generate a hash that is different from the plain text', async () => {
      const password = 'securePassword123';
      const hash = await service.hash(password);

      expect(hash).toBeDefined();
      expect(hash).not.toBe(password);
      expect(typeof hash).toBe('string');
      expect(hash.startsWith('$argon2')).toBe(true);
    });
  });

  describe('compare', () => {
    it('should return true for a matching password and hash', async () => {
      const password = 'mySecretPassword';
      const hash = await service.hash(password);

      const isMatch = await service.compare(password, hash);
      expect(isMatch).toBe(true);
    });

    it('should return false for a non-matching password', async () => {
      const password = 'mySecretPassword';
      const wrongPassword = 'wrongPassword';
      const hash = await service.hash(password);

      const isMatch = await service.compare(wrongPassword, hash);
      expect(isMatch).toBe(false);
    });
  });
});

import { describe, it, expect } from 'vitest';
import {
  monthRange,
  weekRange,
  yearRange,
  weekNumber,
} from './date-range.utils.js';

describe('date-range utils', () => {
  describe('monthRange', () => {
    it('should span a full UTC month', () => {
      expect(monthRange('2026-08')).toEqual({
        gte: new Date('2026-08-01T00:00:00.000Z'),
        lt: new Date('2026-09-01T00:00:00.000Z'),
      });
    });

    it('should handle December rollover', () => {
      expect(monthRange('2026-12').lt).toEqual(
        new Date('2027-01-01T00:00:00.000Z'),
      );
    });
  });

  describe('weekRange (Sunday–Saturday)', () => {
    it('should start on Sunday for a Wednesday anchor', () => {
      expect(weekRange('2026-08-26')).toEqual({
        gte: new Date('2026-08-23T00:00:00.000Z'),
        lt: new Date('2026-08-30T00:00:00.000Z'),
      });
    });

    it('should start on the anchor itself when it is Sunday', () => {
      expect(weekRange('2026-08-23')).toEqual({
        gte: new Date('2026-08-23T00:00:00.000Z'),
        lt: new Date('2026-08-30T00:00:00.000Z'),
      });
    });

    it('should cross month and year boundaries', () => {
      expect(weekRange('2026-01-01')).toEqual({
        gte: new Date('2025-12-28T00:00:00.000Z'),
        lt: new Date('2026-01-04T00:00:00.000Z'),
      });
    });

    it('should include leap day in its week', () => {
      const { gte, lt } = weekRange('2024-02-29');
      expect(gte).toEqual(new Date('2024-02-25T00:00:00.000Z'));
      expect(lt).toEqual(new Date('2024-03-03T00:00:00.000Z'));
    });
  });

  describe('yearRange', () => {
    it('should span the calendar year in UTC', () => {
      expect(yearRange(2026)).toEqual({
        gte: new Date('2026-01-01T00:00:00.000Z'),
        lt: new Date('2027-01-01T00:00:00.000Z'),
      });
    });
  });

  describe('weekNumber', () => {
    it('should number weeks from the first Sunday-start week', () => {
      expect(weekNumber('2026-08-26')).toEqual({ year: 2026, week: 35 });
    });
  });
});

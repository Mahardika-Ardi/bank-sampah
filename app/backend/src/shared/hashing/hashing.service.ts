import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';

@Injectable()
export class HashingService {
  /**
   * Hashes an input string using Argon2.
   * @param data String to hash (e.g. a password).
   * @returns Promise resolving to the hash string.
   */
  async hash(data: string): Promise<string> {
    return argon2.hash(data);
  }

  /**
   * Verifies an input string against a stored Argon2 hash.
   * @param data String to verify (e.g. the provided password).
   * @param hashedData Stored hash to compare against.
   * @returns Promise resolving to true on match, false otherwise.
   */
  async compare(data: string, hashedData: string): Promise<boolean> {
    return argon2.verify(hashedData, data);
  }
}

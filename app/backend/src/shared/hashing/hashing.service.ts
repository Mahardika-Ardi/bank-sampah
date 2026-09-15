import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';

@Injectable()
export class HashingService {
  /**
   * Meng-hash string input menggunakan Argon2.
   * @param data String yang akan di-hash (misalnya, password).
   * @returns Promise yang resolve dengan hash string.
   */
  async hash(data: string): Promise<string> {
    return argon2.hash(data);
  }

  /**
   * Memverifikasi string input terhadap hash Argon2 yang diberikan.
   * @param data String yang akan diverifikasi (misalnya, password yang dimasukkan pengguna).
   * @param hashedData Hash yang disimpan untuk perbandingan.
   * @returns Promise yang resolve dengan boolean, true jika cocok, false jika tidak.
   */
  async compare(data: string, hashedData: string): Promise<boolean> {
    return argon2.verify(hashedData, data);
  }
}

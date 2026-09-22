import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Redis } from 'ioredis';
import { LoggerService } from '../logger/logger.service.js';

/**
 * Tenant-scoped JSON cache over Redis.
 *
 * Graceful degradation: any Redis failure resolves to a bypass
 * (miss on read, silent skip on write) with a warn log — requests
 * must never fail because the cache is down.
 */
@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private readonly context = RedisService.name;
  private client: Redis | null = null;
  private available = false;

  constructor(
    private readonly config: ConfigService,
    private readonly logger: LoggerService,
  ) {}

  async onModuleInit(): Promise<void> {
    const host = this.config.getOrThrow<string>('redis.host') ?? 'localhost';
    const port = Number(this.config.getOrThrow<string>('redis.port') ?? 6379);
    const password =
      this.config.getOrThrow<string>('redis.password') || undefined;
    let pending: Redis | null = null;
    try {
      pending = new Redis({
        host,
        port,
        password,
        lazyConnect: true,
        enableOfflineQueue: true,
        connectTimeout: 2000,
        maxRetriesPerRequest: 1,
      });

      const client: Redis = pending;

      client.on('error', (error: Error) => {
        this.available = false;
        this.logger.warn(`Redis error, bypassing cache: ${error.message}`, {
          context: this.context,
        });
      });

      await client.ping();
      this.client = client;
      this.available = true;
      this.logger.log(`Redis cache connected at ${host}:${port}`, {
        context: this.context,
      });
    } catch (error) {
      this.available = false;
      pending?.disconnect();
      this.logger.warn(
        `Redis unavailable, caching disabled: ${(error as Error).message}`,
        { context: this.context },
      );
    }
  }

  async onModuleDestroy(): Promise<void> {
    if (this.client) {
      this.client.disconnect();
      this.client = null;
      this.available = false;
    }
  }

  isAvailable(): boolean {
    return this.available && this.client !== null;
  }

  static key(tenantId: string, domain: string, qualifier: string): string {
    return `bank:${tenantId}:${domain}:${qualifier}`;
  }

  /** Prefix covering all cached reports of a tenant. */
  static reportsPrefix(tenantId: string): string {
    return RedisService.key(tenantId, 'reports', '');
  }

  async get<T>(key: string): Promise<T | null> {
    if (!this.isAvailable() || !this.client) return null;
    try {
      const raw = await this.client.get(key);
      if (!raw) return null;
      return JSON.parse(raw) as T;
    } catch (error) {
      this.logger.warn(
        `Redis GET failed for ${key}, bypassing: ${(error as Error).message}`,
        { context: this.context },
      );
      return null;
    }
  }

  async set(key: string, value: unknown, ttlSeconds: number): Promise<void> {
    if (!this.isAvailable() || !this.client) return;
    try {
      await this.client.set(key, JSON.stringify(value), 'EX', ttlSeconds);
    } catch (error) {
      this.logger.warn(
        `Redis SET failed for ${key}, skipping: ${(error as Error).message}`,
        { context: this.context },
      );
    }
  }

  async delByPrefix(prefix: string): Promise<void> {
    if (!this.isAvailable() || !this.client) return;
    try {
      let cursor = '0';
      do {
        const [next, keys] = await this.client.scan(
          cursor,
          'MATCH',
          `${prefix}*`,
          'COUNT',
          100,
        );
        cursor = next;
        if (keys.length > 0) {
          await this.client.del(...keys);
        }
      } while (cursor !== '0');
    } catch (error) {
      this.logger.warn(
        `Redis DEL failed for ${prefix}*, skipping: ${(error as Error).message}`,
        { context: this.context },
      );
    }
  }
}

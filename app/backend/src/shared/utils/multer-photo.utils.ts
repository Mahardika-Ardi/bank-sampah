import { BadRequestException } from '@nestjs/common';
import multer from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

/** Re-exported so feature modules never touch `any` for uploaded files. */
export type UploadedPhoto = Express.Multer.File;

export const PHOTO_MAX_BYTES = 5 * 1024 * 1024; // 5MB

const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

/**
 * Shared Multer setup: memory storage, 5MB cap, JPG/PNG/WebP only.
 * Return type follows Nest's FileInterceptor options exactly.
 */
export function photoUploadOptions(): Parameters<typeof FileInterceptor>[1] {
  return {
    storage: multer.memoryStorage(),
    limits: { fileSize: PHOTO_MAX_BYTES },
    fileFilter: (_req, file, callback) => {
      if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
        callback(
          new BadRequestException('Photo must be JPG, PNG, or WebP.'),
          false,
        );
        return;
      }
      callback(null, true);
    },
  };
}

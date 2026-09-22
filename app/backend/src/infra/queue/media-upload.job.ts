import { MediaKind } from '../../../generated/prisma/client.js';

/** Payload for a media-upload job (photo file travels as base64). */
export type MediaUploadJobData = {
  tenantId: string;
  kind: MediaKind;
  ownerId: string;
  fileBase64: string;
  mime: string;
  sizeBytes: number;
  folder: string;
  deletedBy?: string;
};

export const MEDIA_UPLOAD_QUEUE = 'media-upload';

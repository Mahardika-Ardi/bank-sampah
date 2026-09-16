import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../../../generated/prisma/enums.js';

export const ROLE_KEY = 'roles';
export const Role = (...roles: UserRole[]) => SetMetadata(ROLE_KEY, roles);

# Digital Waste Bank & Recycling API (Backend)

Backend RESTful API service built with **NestJS**, **Prisma 7**, and **PostgreSQL** for the Digital Waste Bank & Recycling application (UKK RPL 2026/2027).

## Tech Stack & Architecture

- **Framework:** NestJS 12 (Modular Monolith)
- **Database & ORM:** PostgreSQL with Prisma ORM 7 (`prisma7.config.ts`)
- **Authentication:** JWT (Access & Refresh tokens) & Argon2 password hashing
- **Multi-Tenancy:** Tenant isolation enforced via `x-app-key` header middleware

---

## Getting Started

### 1. Environment Configuration

Copy the example environment file and configure your PostgreSQL connection and secrets:

```bash
cp .env.example .env
```

Ensure `DATABASE_URL` is correctly set in `.env`:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/bank-sampah?schema=public"
JWT_SECRET="your_jwt_access_secret_key"
JWT_REFRESH_SECRET="your_jwt_refresh_secret_key"
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Database Migration & Client Generation

```bash
npx prisma migrate deploy --config ./prisma7.config.ts
npx prisma generate --config ./prisma7.config.ts
```

---

## Running the Application

```bash
# Development watch mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

---

## API Documentation (Swagger)

When running in development mode (`NODE_ENV !== 'production'`), interactive Swagger documentation is available at:

👉 **`http://localhost:3000/api/docs`**

### Key Authentication Headers

1. **Multi-Tenant Isolation:**
   Every request (except public App Maker registration/login/check-key) requires header:
   `x-app-key: <app_key_obtained_from_maker_register>`

2. **User Authentication (Customer / Admin):**
   Protected endpoints require Bearer token:
   `Authorization: Bearer <jwt_token>`

---

## Testing & Quality Assurance

```bash
# Run unit tests (Vitest)
npm run test

# Run E2E tests
npm run test:e2e

# Run linter (oxlint)
npm run lint

# Format code (Prettier)
npm run format
```

---

## Seed Data Initialization

To quickly populate sample test data (Admin, 2 Customers, 4 Waste Categories, 3 Rewards, and transactions) for frontend integration:

```http
POST /api/v1/seed
Header: x-app-key: <your-app-key>
```

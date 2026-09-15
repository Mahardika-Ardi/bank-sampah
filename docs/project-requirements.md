# Project Requirements

## Digital Waste Bank & Recycling Application

## 1. Project Details

- Title: Digital Waste Bank & Recycling Application
- System Name: Eco-Waste Management
- Package: A
- Academic Year: 2026/2027
- Development Role: Full-Stack
- Users:
  - Customers
  - Waste Bank Admin
- Database: PostgreSQL
- Backend: NestJS
- ORM: Prisma 7
- Frontend: Next.js/React
- Authentication: JWT
- Passwords: Must be hashed

## 2. Customer Features

Customers can:

1. Register an account.
2. Log in.
3. View waste categories.
4. View the price per kilogram.
5. View points per kilogram.
6. Submit a waste deposit request with multiple items.
7. Enter an estimated weight of waste.
8. View the status of their request.
9. View deposit history by month.
10. View their point balance.
11. Redeem points for rewards or vouchers.
12. View point redemption history.
13. Print a drop-off receipt.
14. Print a point redemption receipt.
15. View the dashboard summary.

## 3. Admin Features

Admins can:

1. Register a waste bank unit.
2. Log in.
3. Edit a waste bank unit’s profile.
4. Perform CRUD operations on customers.
5. Perform CRUD operations on waste categories.
6. Perform CRUD operations on rewards or vouchers.
7. View all deposit requests.
8. Verify waste weight.
9. Change deposit status.
10. View deposit transactions by month.
11. View redemption transactions by month.
12. Change point redemption status.
13. View monthly summaries.
14. View dashboard statistics.

## 4. Multi-Tenant

The system uses a multi-tenant architecture based on App Maker accounts.

Every request, except for the App Maker registration and login endpoints, must include:

```http
x-app-key: <app-key>
```

Rules:

- Data from different App Maker instances must not be mixed.
- All business data must be associated with a tenant/App Maker.
- The `appKey` must be unique.
- Queries must be restricted to the active tenant.
- Users with the same username may belong to different tenants.
- Do not retrieve data based solely on an ID without tenant validation.

## 5. Roles

User roles are limited to:

```text
CUSTOMER
ADMIN
```

In the database, you can use an enum:

```prisma
enum UserRole {
  customer
  admin
}
```

A user may only have one profile corresponding to their role:

- A user with the `customer` role has the Customer profile.
- A user with the `admin` role has the Bank Admin profile.

## 6. Deposit Status

Deposit statuses:

```text
pending_confirmation
verified
in_progress
completed
rejected
```

Minimum statuses that must be supported by the API:

- `pending_confirmation`
- `verified`
- `completed`
- `rejected`

The `in_progress` status can be used as an additional internal status.

## 7. Exchange Status

Redemption statuses:

```text
in_progress
completed
```

## 8. Key Entities

Required entities:

- AppMaker/Tenant
- User
- Customer
- BankAdmin
- WasteCategory
- WasteDeposit
- DepositDetails
- Reward
- PointRedemption

Important fields:

### AppMaker/Tenant

- id
- email
- password
- studentName
- class
- appName
- appKey
- createdAt
- updatedAt
- deletedAt

### User

- id
- unique username within the tenant
- password hash
- role
- tenantId
- createdAt
- updatedAt
- deletedAt

### Customer

- id
- customerName
- address
- phone
- dateOfBirth if required
- pointBalance (default 0)
- photo
- unique userId
- tenantId

### BankAdmin

- id
- unitName
- managerName
- phone
- unique userId
- tenantId

### Waste Category

- id
- categoryName
- pricePerKg
- pointsPerKg
- type
- photo
- tenantId

Waste types:

```text
plastic
paper
metal
glass
```

### Waste Submission

- id
- uniqueSubmissionCode
- submissionDate
- notes
- adminNotes
- status
- totalWeightKg
- totalPoints
- customerId
- adminId
- tenantId

### SubmissionDetails

- id
- submissionId
- categoryId
- estimatedWeightKg
- actualWeightKg
- subtotalPoints
- tenantId

### Rewards

- id
- reward code or ID, if required
- unique reward name within the tenant
- pointsRequired
- stock
- photo
- tenantId

### Point Redemption

- id
- unique redemption code
- date
- customerId
- rewardId
- pointsUsed
- status
- tenantId

## 9. Points Rules

### Deposits

```text
subtotalPoints = weightInKgReal × pointsPerKg
```

If not yet verified, use the estimated weight to display an estimate.

The point balance only increases when a deposit is successful and has a status of `completed`.

### Redemption

Redemption requirements:

- The customer’s balance must be sufficient.
- The reward inventory must be available.
- The point balance is decremented atomically.
- The reward inventory is decremented atomically.
- Use Prisma database transactions.

## 10. Soft Delete and History

All business models have:

```text
createdAt
updatedAt
deletedAt
deletedBy
restoredAt
restoredBy
```

Rules:

- The Delete API uses soft delete.
- Soft-deleted data is not displayed in normal queries.
- Data can be restored.
- Data that has been soft-deleted for 30 days can be permanently deleted via a scheduled process.
- Permanent deletion must not be executed without confirmation during development.
- Transaction data should not be deleted before its derived data is safe.

## 11. API Endpoints

Required endpoints:

### App Maker

- `POST /api/v1/maker/register`
- `POST /api/v1/maker/login`
- `GET /api/v1/maker/profile`
- `GET /api/v1/maker/check-key`

### Auth

- `POST /api/v1/auth/customer/register`
- `POST /api/v1/auth/admin/register`
- `POST /api/v1/auth/login`
- `GET /api/v1/auth/me`

### Customer

- `GET /api/v1/admin/customer`
- `POST /api/v1/admin/customer`
- `GET /api/v1/admin/customer/:id`
- `PUT /api/v1/admin/customer/:id`
- `DELETE /api/v1/admin/customer/:id`

### Waste Categories

- `GET /api/v1/waste-categories`
- `POST /api/v1/waste-categories`
- `GET /api/v1/waste-categories/:id`
- `PUT /api/v1/waste-categories/:id`
- `DELETE /api/v1/waste-categories/:id`

### Waste Disposal

- `POST /api/v1/waste-disposal/request`
- `GET /api/v1/waste-disposal/my-disposal`
- `GET /api/v1/waste-disposal/admin/list`
- `GET /api/v1/trash-drop-off/:id`
- `PUT /api/v1/trash-drop-off/admin/verify/:id`

### Rewards

- `GET /api/v1/rewards`
- `POST /api/v1/rewards`
- `GET /api/v1/rewards/:id`
- `PUT /api/v1/rewards/:id`
- `DELETE /api/v1/rewards/:id`

### Redemption

- `POST /api/v1/point-redemption/redeem`
- `GET /api/v1/point-redemption/my-redemption`
- `GET /api/v1/point-redemption/admin/list`
- `PUT /api/v1/point-redemption/admin/status/:id`
- `GET /api/v1/point-redemption/receipt/:id`

### Dashboard and Reports

- `GET /api/v1/summary/monthly`
- `GET /api/v1/dashboard/summary`
- `GET /api/v1/dashboard/stats`
- `POST /api/v1/seed`

## 12. Response Format

Successful response:

```json
{
  “statusCode”: 200,
  “success”: true,
  “message”: “Operation successful”,
  “data”: {}
}
```

Error response:

```json
{
  “statusCode”: 400,
  “success”: false,
  “message”: “Error message”,
  “errors”: null,
  “timestamp”: “2026-08-26T09:35:50.328Z”
}
```

## 13. General Validation

- Usernames must be unique within the tenant.
- App Maker email addresses must be unique.
- App keys must be unique.
- Category names must be unique within the tenant.
- Reward names must be unique within the tenant.
- Passwords must be at least 6 characters long.
- Price, points, and weight cannot be negative.
- Weight must be in kilograms.
- Stock cannot be negative.
- Photo files must be JPG, PNG, or WebP.
- IDs must be UUIDs.
- Dates must follow the ISO 8601 format.
- Do not return the password in the response.

## 14. Frontend

The frontend must:

- Support the Customer and Admin roles.
- Provide login and registration pages.
- Display waste categories.
- Display deposit requests and history.
- Display the point balance.
- Display the rewards catalog.
- Provide a point redemption feature.
- Display the dashboard.
- Provide an admin CRUD page.
- Provide a deposit verification page.
- Provide monthly reports.
- Handle loading, errors, empty states, and form validation.
- Use a responsive design based on the wireframe.

## 15. Backend

Backend requirements:

- Use NestJS.
- Use Prisma 7 and PostgreSQL.
- Use JWT.
- Use password hashing.
- Use role-based guards.
- Use DTO validation.
- Use Prisma transactions for critical processes.
- Document endpoints using Swagger or Postman.
- Follow the standard response format.
- Implement tenant isolation on all queries.

## 16. Development Guidelines

- Use Indonesian for explanations.
- Read this documentation before working on a feature.
- Use relevant skills from `.agents/skills`.
- Do not make assumptions if requirements are unclear.
- Ask for clarification before making major changes.
- Do not run destructive commands without explicit approval.
- After making changes to Prisma, run `format`, `validate`, and `generate`.

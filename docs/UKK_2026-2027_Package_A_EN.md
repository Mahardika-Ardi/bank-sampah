# VOCATIONAL COMPETENCY EXAMINATION (UJI KOMPETENSI KEAHLIAN)

## ACADEMIC YEAR 2026/2027

### COMPETENCY TEST ASSIGNMENT

| Item                        | Detail                                                            |
| :-------------------------- | :---------------------------------------------------------------- |
| **Educational Unit**  | Vocational High School (Sekolah Menengah Kejuruan)                |
| **Skill Competency**  | Software Engineering (Rekayasa Perangkat Lunak)                   |
| **Assignment Format** | Individual Assignment (Practical)                                 |
| **Assignment Title**  | Digital Waste Bank & Recycling Application (Eco-Waste Management) |
| **Question Package**  | Package A                                                         |

---

## GENERAL INSTRUCTIONS

1. Carefully inspect the practical examination question document.
2. Inspect the equipment and materials required.
3. Use the main equipment and the occupational safety equipment that has been provided.
4. Use the equipment in accordance with the SOP (Standard Operating Procedure).
5. Work while paying attention to the instructions of the Supervisor/Examiner.
6. Remain calm and do not create a disturbance while inside the competency testing venue.

---

## HOW TO USE THIS DOCUMENT

1. Read Part I (Skills Aspect) and Part II (Working Drawing) — these apply to **ALL** categories.
2. Determine your working category: Fullstack, Backend, Frontend (Web), Mobile App, or UI/UX Design.
3. Proceed directly to the Appendix corresponding to your category (Appendix A–E) for the work steps, API requirements, and the list of files that must be submitted. You do **NOT** need to read the appendices of other categories.

---

## EQUIPMENT LIST

### A. Tools

| No. | Name of Tool/Material/Component   | Minimum Specification                                                                                               | Quantity | Notes                                      |
| :-- | :-------------------------------- | :------------------------------------------------------------------------------------------------------------------ | :------- | :----------------------------------------- |
| 1   | Computer, either a PC or a Laptop | Processor: Core i5 / equivalentRAM: 8GB (minimum, 16GB recommended for the mobile platform)Keyboard, Mouse, Monitor | 1        | -                                          |
| 2   | Mobile device / Emulator          | Android 10 (Q) or above                                                                                             | 1        | For those choosing the Mobile App category |
| 3   | Internet connection               | Stable, for accessing the API provided by the committee                                                             | 1        | For the Frontend and Mobile App categories |

### B. Supporting Software

| No. | Name of Tool/Material/Component | Minimum Specification                                                              | Quantity | Notes                                                                  |
| :-- | :------------------------------ | :--------------------------------------------------------------------------------- | :------- | :--------------------------------------------------------------------- |
| 1   | Operating System                | Windows 10 / Linux / another operating system matching the computer specifications | 1        | -                                                                      |
| 2   | Code Editor Application         | Visual Studio Code / Sublime Text / Bracket, Android Studio, etc.                  | 1        | -                                                                      |
| 3   | Image Processing Application    | Adobe Photoshop / Corel Draw / Adobe Illustrator, etc.                             | 1        | Optional                                                               |
| 4   | Web Server Application          | Node.js / XAMPP, latest version                                                    | 1        | For the Backend and Fullstack categories                               |
| 5   | Design / Wireframe Application  | Figma / Adobe XD, latest version                                                   | 1        | Mandatory for the UI/UX Design category; optional for other categories |
| 6   | API Client                      | Postman / Insomnia                                                                 | 1        | For the Backend, Frontend, and Mobile App categories (for API testing) |

---

# I. SKILLS ASPECT ASSIGNMENT

## General Work Steps (applicable to all categories)

1. Prepare the equipment and supporting applications that will be used according to your chosen category.
2. Perform the installation of the required supporting applications, if they have not been installed yet.
3. Perform the configuration setup of the supporting applications that will be used.
4. Prepare the image files and dummy data files that will be used (if required).
5. Identify the feature requirements based on the general application overview in Part II (Working Drawing).
6. Perform an analysis of the data entities required to build the application.

*The subsequent work steps are category-specific — see Appendix A–E according to your chosen category.*

## Working Category Options (Choose one)

| Category                 | Output                                                                               | Data Source                                                                           | Notes                                                                                             |
| :----------------------- | :----------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------ |
| **Fullstack**      | Fullstack web application (server-side rendering, without consuming an external API) | Database is created and managed by yourself                                           | At minimum uses a PHP framework (Laravel/CodeIgniter) or native PHP                               |
| **Backend**        | RESTful API in accordance with the API Contract (see Part III)                       | Database is created and managed by yourself                                           | Laravel/Node.js/Express/etc. Endpoint documentation (Postman collection/Swagger) must be included |
| **Frontend (Web)** | A web application that consumes the API                                              | API is provided by the committee (base URL & documentation are given during the exam) | React/Vue/etc. The appearance refers to the wireframe (flow adapted from the mobile version)      |
| **Mobile App**     | Mobile application (APK/project ready to run on an emulator) that consumes the API   | API is provided by the committee (base URL & documentation are given during the exam) | Kotlin/Flutter/etc. The appearance refers to the attached mobile wireframe                        |
| **UI/UX Design**   | Interface design (hi-fi mockup) and a user flow prototype                            | Does not use an API — focus is on the design                                         | Figma/Adobe XD. There is no coding process                                                        |

---

# II. WORKING DRAWING

The Digital Waste Bank Management intends to build an online system for managing and exchanging recyclable waste in order to encourage environmental awareness within the community.

The system being developed consists of two users, namely the **Customer/Member (Nasabah — Students/Community)** and the **Waste Bank Admin**. This application is used to record waste deposit submissions and point redemptions. The minimum application requirements are as follows:

## Customer (Nasabah):

1. The Customer can register an account as a user.
2. The Customer can log in to the application.
3. The Customer can view the list of recyclable waste types along with the price per kg and their point value.
4. The Customer can submit a waste deposit request (selecting the waste type, estimated weight, and deposit date).
5. The Customer can view the status of the waste deposit submission (Awaiting Confirmation, Verified, Rejected, Completed).
6. The Customer can view the total point balance and the deposit history by month.
7. The Customer can redeem points for the available vouchers/rewards.
8. The Customer can print the proof/receipt of the deposit transaction and the point redemption.

## Waste Bank Admin:

1. The Admin can register / enroll their waste bank unit.
2. The Admin can log in to the management page.
3. The Admin can update the waste bank unit's profile data.
4. The Admin can perform CRUD operations on customer data.
5. The Admin can perform CRUD operations on recyclable waste category data along with their point weighting.
6. The Admin can perform CRUD operations on the goods/voucher reward data for point redemption.
7. The Admin can confirm, re-weigh, and change the status of waste deposit submissions.
8. The Admin can view all deposit and point redemption transaction data by month.
9. The Admin can view the recapitulation of the total tonnage of waste collected and the estimated payment per month.

## Database Design

### ERD — Waste Bank System (Points Program)

**Table: `users`**

| Key | Column       | Data Type                         |
| :-- | :----------- | :-------------------------------- |
| PK  | `id`       | `INT (PK)`                      |
|     | `username` | `VARCHAR(50)`                   |
|     | `password` | `VARCHAR(255)`                  |
|     | `role`     | `ENUM('admin_bank', 'nasabah')` |

**Table: `nasabah` (Customer)**

| Key | Column           | Data Type        |
| :-- | :--------------- | :--------------- |
| PK  | `id`           | `INT (PK)`     |
|     | `nama_nasabah` | `VARCHAR(100)` |
|     | `alamat`       | `TEXT`         |
|     | `telp`         | `VARCHAR(20)`  |
|     | `saldo_poin`   | `DOUBLE`       |
| FK  | `id_user`      | `INT`          |
|     | `foto`         | `VARCHAR(255)` |

**Table: `admin_bank` (Waste Bank Admin)**

| Key | Column             | Data Type        |
| :-- | :----------------- | :--------------- |
| PK  | `id`             | `INT (PK)`     |
|     | `nama_unit`      | `VARCHAR(100)` |
|     | `nama_pengelola` | `VARCHAR(100)` |
|     | `telp`           | `VARCHAR(20)`  |
| FK  | `id_user`        | `INT`          |

**Table: `kategori_sampah` (Waste Category)**

| Key | Column            | Data Type                                      |
| :-- | :---------------- | :--------------------------------------------- |
| PK  | `id`            | `INT (PK)`                                   |
|     | `nama_kategori` | `VARCHAR(100)`                               |
|     | `harga_per_kg`  | `DOUBLE`                                     |
|     | `poin_per_kg`   | `DOUBLE`                                     |
|     | `jenis`         | `ENUM('plastik', 'kertas', 'logam', 'kaca')` |
|     | `foto`          | `VARCHAR(255)`                               |

**Table: `setor_sampah` (Waste Deposit)**

| Key | Column         | Data Type                                                     |
| :-- | :------------- | :------------------------------------------------------------ |
| PK  | `id`         | `INT (PK)`                                                  |
|     | `tanggal`    | `DATETIME`                                                  |
| FK  | `id_admin`   | `INT`                                                       |
| FK  | `id_nasabah` | `INT`                                                       |
|     | `status`     | `ENUM('belum dikonfirm', 'diproses', 'selesai', 'ditolak')` |

**Table: `detail_setor` (Deposit Detail)**

| Key | Column                 | Data Type    |
| :-- | :--------------------- | :----------- |
| PK  | `id`                 | `INT (PK)` |
| FK  | `id_setor`           | `INT`      |
| FK  | `id_kategori_sampah` | `INT`      |
|     | `berat_kg`           | `DOUBLE`   |
|     | `subtotal_poin`      | `DOUBLE`   |

**Table: `penukaran_poin` (Point Redemption)**

| Key | Column            | Data Type                       |
| :-- | :---------------- | :------------------------------ |
| PK  | `id`            | `INT (PK)`                    |
|     | `tanggal`       | `DATETIME`                    |
| FK  | `id_setor`      | `INT`                         |
| FK  | `id_hadiah`     | `INT`                         |
|     | `poin_terpakai` | `DOUBLE`                      |
|     | `status`        | `ENUM('diproses', 'selesai')` |

**Table: `hadiah` (Reward)**

| Key | Column              | Data Type        |
| :-- | :------------------ | :--------------- |
| PK  | `id`              | `INT (PK)`     |
|     | `nama_hadiah`     | `VARCHAR(100)` |
|     | `poin_dibutuhkan` | `INT`          |
|     | `stok`            | `INT`          |
|     | `foto`            | `VARCHAR(255)` |

### LEGEND

- **PK** : Primary Key
- **FK** : Foreign Key
- **1** : One
- **<** : Many

### RELATIONSHIP MAPPING

- `users.id` = `nasabah.id_user` (One-to-One)
- `users.id` = `admin_bank.id_user` (One-to-One)
- `nasabah.id` = `setor_sampah.id_nasabah` (One-to-Many)
- `admin_bank.id` = `setor_sampah.id_admin` (One-to-Many)
- `setor_sampah.id` = `detail_setor.id_setor` (One-to-Many)
- `kategori_sampah.id` = `detail_setor.id_kategori_sampah` (One-to-Many)
- `setor_sampah.id` = `penukaran_poin.id_setor` (One-to-Many)
- `hadiah.id` = `penukaran_poin.id_hadiah` (One-to-Many)

### MAIN RELATIONSHIP FLOW

1. Users have a role as either `admin_bank` or `nasabah`.
2. The waste bank admin manages the waste deposit data from the customers.
3. Every waste deposit has many deposit details.
4. The deposit detail refers to the waste category.
5. The customer earns points from completed waste deposits.
6. The customer can redeem points for rewards.

> *The database design above may be adjusted, but it must not reduce the features that have already been described.*

---

# III. API CONTRACT (APPLICATION PROGRAMMING INTERFACE)

The following API Contract serves as the standard technical reference for participants of the Vocational Competency Examination (UKK) Package A: Multi-Tenant Digital Waste Bank Application (Eco-Waste Management System). This documentation covers the entire specification of the backend REST API endpoints provided by the committee, including the per-student data isolation mechanism (App Maker), the Multi-Role JWT authentication system (Customer & Unit Admin), the management of recyclable waste deposits & weighing, the reward point catalog & redemption, as well as the monthly reporting recapitulation.

### API URL: `https://learn.smktelkom-mlg.sch.id/bank_sampah/`

## 1. Summary of the API Endpoint List

| No | Endpoint                                     | Method     | Role & Brief Description                                                  |
| :- | :------------------------------------------- | :--------- | :------------------------------------------------------------------------ |
| 1  | `/api/v1/maker/register`                   | `POST`   | Public: Student Account Registration (Obtain a Unique App Key)            |
| 2  | `/api/v1/maker/login`                      | `POST`   | Public: Frontend Student Account Login                                    |
| 3  | `/api/v1/maker/profile`                    | `GET`    | App Maker: Student Profile & Overall Data Statistics                      |
| 4  | `/api/v1/maker/check-key`                  | `GET`    | Public: Check/Search App Key based on Student Email                       |
| 5  | `/api/v1/auth/nasabah/register`            | `POST`   | Public: Registration of a New Waste Bank Customer Account (Photo Upload)  |
| 6  | `/api/v1/auth/admin/register`              | `POST`   | Public: Registration of a New Waste Bank Admin Unit                       |
| 7  | `/api/v1/auth/login`                       | `POST`   | Public: User Account Login (both Customer and Bank Admin)                 |
| 8  | `/api/v1/auth/me`                          | `GET`    | Bearer User: Check the Profile & Role of the Currently Logged-In User     |
| 9  | `/api/v1/admin/nasabah`                    | `GET`    | Admin: Retrieve All Waste Bank Customer Data                              |
| 10 | `/api/v1/admin/nasabah`                    | `POST`   | Admin: Add New Customer Data (Photo Upload)                               |
| 11 | `/api/v1/admin/nasabah/{id}`               | `GET`    | Admin: Get Customer Data Detail by ID                                     |
| 12 | `/api/v1/admin/nasabah/{id}`               | `PUT`    | Admin: Update Customer Data (Photo Upload)                                |
| 13 | `/api/v1/admin/nasabah/{id}`               | `DELETE` | Admin: Delete Customer Data                                               |
| 14 | `/api/v1/kategori-sampah`                  | `GET`    | Customer/Admin: List of Waste Categories, Price/Kg & Points/Kg            |
| 15 | `/api/v1/kategori-sampah`                  | `POST`   | Admin: Add a New Waste Category (Photo Upload)                            |
| 16 | `/api/v1/kategori-sampah/{id}`             | `GET`    | Customer/Admin: Get Waste Category Detail                                 |
| 17 | `/api/v1/kategori-sampah/{id}`             | `PUT`    | Admin: Update Waste Category (Photo Upload)                               |
| 18 | `/api/v1/kategori-sampah/{id}`             | `DELETE` | Admin: Delete Waste Category                                              |
| 19 | `/api/v1/setor-sampah/pengajuan`           | `POST`   | Customer: Submit a Waste Deposit Request (Multi-Item & Estimate)          |
| 20 | `/api/v1/setor-sampah/my-setor`            | `GET`    | Customer: Own Deposit History & Status (Filter`?bulan`)                 |
| 21 | `/api/v1/setor-sampah/admin/list`          | `GET`    | Admin: All Waste Deposit Submissions (Filter`?status` & `?bulan`)     |
| 22 | `/api/v1/setor-sampah/{id}`                | `GET`    | Customer/Admin: Transaction Detail / Waste Deposit Receipt                |
| 23 | `/api/v1/setor-sampah/admin/verify/{id}`   | `PUT`    | Admin: Verification of Real Waste Weighing & Status Change                |
| 24 | `/api/v1/hadiah`                           | `GET`    | Customer/Admin: Get the Catalog of Reward Goods / Vouchers                |
| 25 | `/api/v1/hadiah`                           | `POST`   | Admin: Add New Reward Data (Photo Upload)                                 |
| 26 | `/api/v1/hadiah/{id}`                      | `GET`    | Customer/Admin: Get Goods / Reward Detail                                 |
| 27 | `/api/v1/hadiah/{id}`                      | `PUT`    | Admin: Update Reward Data (Photo Upload)                                  |
| 28 | `/api/v1/hadiah/{id}`                      | `DELETE` | Admin: Delete Reward Data                                                 |
| 29 | `/api/v1/penukaran-poin/tukar`             | `POST`   | Customer: Redeem Points for a Reward/Voucher                              |
| 30 | `/api/v1/penukaran-poin/my-penukaran`      | `GET`    | Customer: Own Point Redemption History                                    |
| 31 | `/api/v1/penukaran-poin/admin/list`        | `GET`    | Admin: All Customer Point Redemption Transactions (Filter`?bulan`)      |
| 32 | `/api/v1/penukaran-poin/admin/status/{id}` | `PUT`    | Admin: Update Point Redemption Status (`diproses` / `selesai`)        |
| 33 | `/api/v1/penukaran-poin/nota/{id}`         | `GET`    | Customer/Admin: Detail of the Receipt / Proof of Redemption Transaction   |
| 34 | `/api/v1/rekapitulasi/bulanan`             | `GET`    | Admin: Recap of Total Waste Tonnage & Payment Estimate (`?bulan`)       |
| 35 | `/api/v1/dashboard/summary`                | `GET`    | Customer: Summary of Balance, Income, Expenditure & Latest Transactions   |
| 36 | `/api/v1/dashboard/stats`                  | `GET`    | Admin: General Statistics (Total Customers, Balance, Waste, Transactions) |
| 37 | `/api/v1/seed`                             | `POST`   | Testing: Generate Complete Dummy Sample Data for Frontend Testing         |

## GLOBAL PROVISIONS & GENERAL API RESPONSE FORMAT

1. **Multi-Tenant Mechanism (Header `x-app-key`):** Every request to a backend endpoint (except public app maker registration/login) **MUST** include the Header: `x-app-key: <appKey_milik_siswa>`. This App Key is obtained during the student's initial registration at `POST /api/v1/maker/register`. This mechanism ensures that data between students is 100% safely isolated and does not become intermingled.
2. **User Authentication (JWT Bearer Token):** Endpoints that require Customer or Admin access rights must include the Header: `Authorization: Bearer <token_jwt>`, which is obtained from the `POST /api/v1/auth/login` process.
3. **Standard JSON Response Structure:** Every API response is always returned in a standard JSON structure:

   - **Success Format:** `{ "statusCode": 200/201, "success": true, "message": "keterangan", "data": { ... } atau [ ... ] }`
   - **Error Format:** `{ "statusCode": 400/401/403/404/500, "success": false, "message": "pesan error", "errors": null / [...], "timestamp": "ISO 8601" }`
4. **Date & Data Type Standards:** The date format uses the ISO 8601 standard: `YYYY-MM-DD` or `YYYY-MM-DDTHH:mm:ss.sssZ` (example: `2026-08-26`). The weight unit uses Kilograms (Kg) with support for fractions/decimals (example: 2.5 kg). Monetary values are in Rupiah (Rp) with an integer / number type.
5. **Quick Data Initialization (Seed Data):** Participants may directly run `POST /api/v1/seed` with the `x-app-key` header to populate the initial data consisting of an Admin account, 2 active Customers, 4 Waste Categories, 3 Reward Catalog items, as well as a history of deposit & redemption transactions.

## 2. Data Model Schema & DTO (Data Transfer Object) Specification

The following is the specification of all DTO data structures used in the request body payloads of the backend endpoints. Use the following data types, field names, and validation rules when designing input forms and state models in the Frontend application.

### Model Schema: `RegisterAppMakerDto` — DTO for the registration of the Frontend developer student account

| Field Name    | Data Type  | Required / Status | Example Value         | Description                                             |
| :------------ | :--------- | :---------------- | :-------------------- | :------------------------------------------------------ |
| `email`     | `string` | Required          | `siswa1@smk.sch.id` | Unique student email for login & appKey recovery        |
| `password`  | `string` | Required          | `password123`       | Student account password, minimum 6 characters          |
| `namaSiswa` | `string` | Required          | `Budi Santoso`      | Full name of the student exam participant               |
| `kelas`     | `string` | Required          | `XII RPL 1`         | Participant's class / study group                       |
| `namaApp`   | `string` | Required          | `Bank Mini RPL Hub` | Name / branding of the frontend application being built |

### Model Schema: `LoginAppMakerDto` — DTO for student account login authentication

| Field Name   | Data Type  | Required / Status | Example Value         | Description              |
| :----------- | :--------- | :---------------- | :-------------------- | :----------------------- |
| `email`    | `string` | Required          | `siswa1@smk.sch.id` | Registered student email |
| `password` | `string` | Required          | `password123`       | Student account password |

### Model Schema: `RegisterNasabahBankDto` — DTO for self-registration of a new waste bank customer account

| Field Name      | Data Type       | Required / Status      | Example Value          | Description                                |
| :-------------- | :-------------- | :--------------------- | :--------------------- | :----------------------------------------- |
| `username`    | `string`      | Required               | `nasabah_budi`       | Unique username for customer login         |
| `password`    | `string`      | Required               | `password123`        | Customer account password                  |
| `namaNasabah` | `string`      | Required               | `Budi Santoso`       | Full name of the customer                  |
| `alamat`      | `string`      | Required               | `Jl. Merdeka No. 10` | Customer's residential address             |
| `telp`        | `string`      | Required               | `081234567890`       | Active telephone / WhatsApp number         |
| `foto`        | `binary/file` | Optional (binary file) | —                     | Customer profile photo file (JPG/PNG/WebP) |

### Model Schema: `RegisterAdminBankDto` — DTO for registering the identity of the waste bank management unit

| Field Name        | Data Type  | Required / Status | Example Value             | Description                                   |
| :---------------- | :--------- | :---------------- | :------------------------ | :-------------------------------------------- |
| `username`      | `string` | Required          | `admin_banksampah`      | Unique username of the managing admin account |
| `password`      | `string` | Required          | `admin123`              | Unit admin account password                   |
| `namaUnit`      | `string` | Required          | `Bank Sampah Asri Jaya` | Unit name / waste bank name                   |
| `namaPengelola` | `string` | Required          | `Bapak H. Sukirman`     | Name of the person in charge of management    |
| `telp`          | `string` | Required          | `081234567890`          | Operational contact number of the waste bank  |

### Model Schema: `LoginUserDto` — Shared login DTO (for both Customer and Bank Admin)

| Field Name   | Data Type  | Required / Status | Example Value    | Description                              |
| :----------- | :--------- | :---------------- | :--------------- | :--------------------------------------- |
| `username` | `string` | Required          | `nasabah_budi` | Username of the Customer / Admin account |
| `password` | `string` | Required          | `password123`  | Account password                         |

### Model Schema: `CreateNasabahDto` — DTO for adding customer data by the Waste Bank Admin

| Field Name      | Data Type       | Required / Status      | Example Value         | Description                               |
| :-------------- | :-------------- | :--------------------- | :-------------------- | :---------------------------------------- |
| `username`    | `string`      | Required               | `nasabah_dewi`      | Unique login username of the new customer |
| `password`    | `string`      | Required               | `password123`       | Customer account password                 |
| `namaNasabah` | `string`      | Required               | `Dewi Lestari`      | Full name of the customer                 |
| `alamat`      | `string`      | Required               | `Jl. Kenanga No. 5` | Place of residence address                |
| `telp`        | `string`      | Required               | `081987654321`      | Customer's telephone number               |
| `foto`        | `binary/file` | Optional (binary file) | —                    | Customer profile photo file               |

### Model Schema: `UpdateNasabahDto` — DTO for updating customer profile information by the Admin

| Field Name       | Data Type       | Required / Status      | Example Value            | Description                                    |
| :--------------- | :-------------- | :--------------------- | :----------------------- | :--------------------------------------------- |
| `namaLengkap`  | `string`      | Required               | `Ahmad Dahlan Putra`   | Corrected full name of the customer            |
| `noTelepon`    | `string`      | Required               | `081299998888`         | Latest telephone number                        |
| `alamat`       | `string`      | Required               | `Jl. Sudirman No. 120` | Latest customer address                        |
| `tanggalLahir` | `string`      | Required               | `2000-01-15`           | Customer's date of birth (`YYYY-MM-DD`)      |
| `foto`         | `binary/file` | Optional (binary file) | —                       | New profile photo file if it is to be replaced |

### Model Schema: `CreateKategoriSampahDto` — DTO for adding a master category of recyclable waste type

| Field Name       | Data Type       | Required / Status      | Example Value         | Description                                                             |
| :--------------- | :-------------- | :--------------------- | :-------------------- | :---------------------------------------------------------------------- |
| `namaKategori` | `string`      | Required               | `Botol Plastik PET` | Specific name of the waste category                                     |
| `hargaPerKg`   | `number`      | Required               | `3500`              | Estimated purchase price per kg (Rupiah)                                |
| `poinPerKg`    | `number`      | Required               | `10`                | Reward point conversion per kg of waste                                 |
| `jenis`        | `string`      | Required               | `plastik`           | Type choices:`'plastik'` \| `'kertas'` \| `'logam'` \| `'kaca'` |
| `foto`         | `binary/file` | Optional (binary file) | —                    | Visual photo of the waste type example                                  |

### Model Schema: `UpdateKategoriSampahDto` — DTO for updating a master category of recyclable waste type

| Field Name       | Data Type       | Required / Status      | Example Value                | Description                                                                   |
| :--------------- | :-------------- | :--------------------- | :--------------------------- | :---------------------------------------------------------------------------- |
| `namaKategori` | `string`      | Required               | `Botol Plastik PET Bersih` | Update of the waste category name                                             |
| `hargaPerKg`   | `number`      | Required               | `4000`                     | Update of the purchase price per kg                                           |
| `poinPerKg`    | `number`      | Required               | `12`                       | Update of the point conversion value per kg                                   |
| `jenis`        | `string`      | Required               | `plastik`                  | Waste type choices:`'plastik'` \| `'kertas'` \| `'logam'` \| `'kaca'` |
| `foto`         | `binary/file` | Optional (binary file) | —                           | Update of the waste sample photo file                                         |

### Model Schema: `ItemSetorDto` — DTO for a single waste item within a deposit submission

| Field Name           | Data Type  | Required / Status | Example Value            | Description                                  |
| :------------------- | :--------- | :---------------- | :----------------------- | :------------------------------------------- |
| `kategoriSampahId` | `string` | Required          | `uuid-kategori-sampah` | Reference ID of the selected Waste Category  |
| `beratKg`          | `number` | Required          | `2.5`                  | Estimated weight of the deposited waste (Kg) |

### Model Schema: `CreateSetorSampahDto` — DTO for a waste deposit submission by the Customer

| Field Name  | Data Type               | Required / Status | Example Value            | Description                                      |
| :---------- | :---------------------- | :---------------- | :----------------------- | :----------------------------------------------- |
| `tanggal` | `string`              | Required          | `2026-08-26T10:00:00Z` | Date & time of the deposit submission (ISO 8601) |
| `catatan` | `string`              | Required          | `Sampah sudah dipilah` | Note/instructions for the waste pickup           |
| `items`   | `array[ItemSetorDto]` | Required          | `[ {...}, {...} ]`     | List of waste items being deposited              |

### Model Schema: `VerifyItemSetorDto` — DTO for the real weighed item resulting from Admin verification

| Field Name           | Data Type  | Required / Status | Example Value            | Description                                                   |
| :------------------- | :--------- | :---------------- | :----------------------- | :------------------------------------------------------------ |
| `kategoriSampahId` | `string` | Required          | `uuid-kategori-sampah` | ID of the related Waste Category                              |
| `beratKgReal`      | `number` | Required          | `3.0`                  | Actual scale weight measured by the officer in the field (Kg) |

### Model Schema: `VerifySetorSampahDto` — DTO for verification & finalization of the weighing by the Admin

| Field Name       | Data Type                     | Required / Status | Example Value              | Description                                                     |
| :--------------- | :---------------------------- | :---------------- | :------------------------- | :-------------------------------------------------------------- |
| `status`       | `string`                    | Required          | `selesai`                | New status:`'diverifikasi'` \| `'ditolak'` \| `'selesai'` |
| `catatanAdmin` | `string`                    | Required          | `Berat sesuai timbangan` | Inspection note from the Admin                                  |
| `itemsReal`    | `array[VerifyItemSetorDto]` | Optional          | `[ {...} ]`              | List of the real weighings from the Admin                       |

### Model Schema: `CreateHadiahDto` — DTO for adding a reward / voucher catalog item

| Field Name         | Data Type       | Required / Status      | Example Value             | Description                                  |
| :----------------- | :-------------- | :--------------------- | :------------------------ | :------------------------------------------- |
| `namaHadiah`     | `string`      | Required               | `Minyak Goreng 1 Liter` | Name of the reward item / voucher            |
| `poinDibutuhkan` | `number`      | Required               | `100`                   | Points that must be redeemed by the customer |
| `stok`           | `number`      | Required               | `50`                    | Quantity of reward stock availability        |
| `foto`           | `binary/file` | Optional (binary file) | —                        | Photo file of the reward product             |

### Model Schema: `UpdateHadiahDto` — DTO for updating the reward / voucher catalog data

| Field Name         | Data Type       | Required / Status      | Example Value                | Description                                  |
| :----------------- | :-------------- | :--------------------- | :--------------------------- | :------------------------------------------- |
| `namaHadiah`     | `string`      | Required               | `Minyak Goreng Premium 1L` | Update of the reward item / voucher name     |
| `poinDibutuhkan` | `number`      | Required               | `120`                      | Update of the number of redemption points    |
| `stok`           | `number`      | Required               | `45`                       | Update of the quantity of stock availability |
| `foto`           | `binary/file` | Optional (binary file) | —                           | Update of the product photo file             |

### Model Schema: `CreatePenukaranPoinDto` — DTO for a reward point redemption transaction by the Customer

| Field Name   | Data Type  | Required / Status | Example Value   | Description                                         |
| :----------- | :--------- | :---------------- | :-------------- | :-------------------------------------------------- |
| `hadiahId` | `string` | Required          | `uuid-hadiah` | ID of the Reward that the customer wishes to redeem |

## 3. Request & Response Details per Endpoint

The values in the example request and response payloads below are representative and conform to the actual multi-tenant backend schema structure. Adjust the UUID ID values, dates, and JWT tokens to match your running implementation.

### 1. App Maker (Frontend Student Account & Tenant Key Management)

#### `POST /api/v1/maker/register` — Registration of a new Student Account (App Maker) to obtain an `appKey`

**Auth:** Not required

**Request Body:**

```json
{
  "email": "siswa1@smk.sch.id",
  "password": "password123",
  "namaSiswa": "Budi Santoso",
  "kelas": "XII RPL 1",
  "namaApp": "Bank Sampah Digital Hub"
}
```

**Response (201):**

```json
{
  "statusCode": 201,
  "success": true,
  "message": "Registrasi App Maker berhasil! Simpan appKey berikut untuk dimasukkan di header x-app-key pada setiap request API frontend.",
  "data": {
    "id": "160adcd8-d080-4b0d-818f-eb31c7e30976",
    "email": "siswa1@smk.sch.id",
    "namaSiswa": "Budi Santoso",
    "kelas": "XII RPL 1",
    "namaApp": "Bank Sampah Digital Hub",
    "appKey": "97945213-34a7-48cf-baac-8740c1d18765",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNjBhZGNkOCIsImVtYWlsIjoic2lzd2ExQHNtay5zY2guaWQiLCJ0eXBlIjoiQVBQX01BS0VSIiwiZXhwIjoxNzg4MzQxNzUwfQ...",
    "createdAt": "2026-08-26T09:35:50.328Z"
  }
}
```

**Error Response (400):**

```json
{
  "statusCode": 400,
  "success": false,
  "message": "Email sudah terdaftar sebagai App Maker.",
  "errors": null,
  "timestamp": "2026-08-26T09:35:50.328Z"
}
```

#### `POST /api/v1/maker/login` — Student Account (App Maker) Login

**Auth:** Not required

**Request Body:**

```json
{
  "email": "siswa1@smk.sch.id",
  "password": "password123"
}
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Login App Maker berhasil",
  "data": {
    "id": "160adcd8-d080-4b0d-818f-eb31c7e30976",
    "email": "siswa1@smk.sch.id",
    "namaSiswa": "Budi Santoso",
    "kelas": "XII RPL 1",
    "namaApp": "Bank Sampah Digital Hub",
    "appKey": "97945213-34a7-48cf-baac-8740c1d18765",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Response (401):**

```json
{
  "statusCode": 401,
  "success": false,
  "message": "Email atau password salah.",
  "errors": null,
  "timestamp": "2026-08-26T09:35:50.328Z"
}
```

#### `GET /api/v1/maker/profile` — Get the Student App Maker Profile Data along with data statistics

**Auth:** Header `x-app-key: <appKey_milik_siswa>`

**Query / Path Parameter:**

```http
Header: x-app-key: 97945213-34a7-48cf-baac-8740c1d18765
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Data profile App Maker berhasil diambil",
  "data": {
    "id": "160adcd8-d080-4b0d-818f-eb31c7e30976",
    "email": "siswa1@smk.sch.id",
    "namaSiswa": "Budi Santoso",
    "kelas": "XII RPL 1",
    "namaApp": "Bank Sampah Digital Hub",
    "appKey": "97945213-34a7-48cf-baac-8740c1d18765",
    "stats": {
      "totalNasabah": 2,
      "totalKategoriSampah": 4,
      "totalTransaksiSetor": 1,
      "totalHadiah": 3
    }
  }
}
```

#### `GET /api/v1/maker/check-key` — Search for the App Key based on the Student Email (if forgotten)

**Auth:** Not required

**Query / Path Parameter:**

```http
?email=siswa1@smk.sch.id
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "App Key ditemukan",
  "data": {
    "email": "siswa1@smk.sch.id",
    "namaSiswa": "Budi Santoso",
    "namaApp": "Bank Sampah Digital Hub",
    "appKey": "97945213-34a7-48cf-baac-8740c1d18765"
  }
}
```

**Error Response (404):**

```json
{
  "statusCode": 404,
  "success": false,
  "message": "Akun App Maker dengan email tersebut tidak ditemukan.",
  "errors": null,
  "timestamp": "2026-08-26T09:35:50.328Z"
}
```

### 2. User Authentication (Customer & Waste Bank Admin)

#### `POST /api/v1/auth/nasabah/register` — Registration of a New Waste Bank Customer Account (Supports Profile Photo Upload)

**Auth:** Header `x-app-key: <appKey_milik_siswa>`

**Additional Header:**

```http
Content-Type: multipart/form-data (atau application/json jika tanpa file foto)
```

**Request Body:**

```json
{
  "username": "nasabah_dewi",
  "password": "password123",
  "namaNasabah": "Dewi Lestari",
  "alamat": "Jl. Kenanga No. 5, RT 02/01",
  "telp": "081987654321",
  "foto": "(opsional file binary jpg/png)"
}
```

**Response (201):**

```json
{
  "statusCode": 201,
  "success": true,
  "message": "Registrasi nasabah berhasil",
  "data": {
    "id": "78a1b2c3-d4e5-4678-9abc-def012345678",
    "username": "nasabah_dewi",
    "role": "NASABAH",
    "nasabah": {
      "id": "c1234567-89ab-cdef-0123-456789abcdef",
      "namaNasabah": "Dewi Lestari",
      "alamat": "Jl. Kenanga No. 5, RT 02/01",
      "telp": "081987654321",
      "saldoPoin": 0,
      "foto": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
    }
  }
}
```

**Error Response (400):**

```json
{
  "statusCode": 400,
  "success": false,
  "message": "Username sudah digunakan pada database aplikasi Anda.",
  "errors": null,
  "timestamp": "2026-08-26T09:35:51.307Z"
}
```

#### `POST /api/v1/auth/admin/register` — Registration of the Waste Bank Admin Unit Identity

**Auth:** Header `x-app-key: <appKey_milik_siswa>`

**Request Body:**

```json
{
  "username": "admin_banksampah",
  "password": "admin123",
  "namaUnit": "Bank Sampah Asri Jaya",
  "namaPengelola": "Bapak H. Sukirman",
  "telp": "081234567890"
}
```

**Response (201):**

```json
{
  "statusCode": 201,
  "success": true,
  "message": "Pendaftaran unit Bank Sampah berhasil",
  "data": {
    "id": "40203124-6f99-4a08-9e4a-6458ca692f23",
    "username": "admin_banksampah",
    "role": "ADMIN",
    "adminBank": {
      "id": "d46d5a47-1418-4960-b028-af6d5da8c888",
      "namaUnit": "Bank Sampah Asri Jaya",
      "namaPengelola": "Bapak H. Sukirman",
      "telp": "081234567890"
    }
  }
}
```

#### `POST /api/v1/auth/login` — Account Login (Can be used by both Customers and Waste Bank Admins)

**Auth:** Header `x-app-key: <appKey_milik_siswa>`

**Request Body:**

```json
{
  "username": "nasabah_budi",
  "password": "password123"
}
```

**Response (201):**

```json
{
  "statusCode": 201,
  "success": true,
  "message": "Login NASABAH berhasil",
  "data": {
    "id": "654edb1a-7add-43f4-9c3d-81c44bda08fb",
    "username": "nasabah_budi",
    "role": "NASABAH",
    "nasabah": {
      "id": "b17688a8-91e5-4d4b-8e3a-429d2b3415ea",
      "namaNasabah": "Budi Santoso",
      "alamat": "Jl. Merdeka No. 12, RT 03/05",
      "telp": "085678901234",
      "saldoPoin": 150,
      "foto": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
    },
    "adminBank": null,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTRlZGIxYSIsInVzZXJuYW1lIjoibmFzYWJhaF9idWRpIiwicm9sZSI6Ik5BU0FCQUgiLCJleHAiOjE3ODgzNDE3NTl9..."
  }
}
```

**Error Response (401):**

```json
{
  "statusCode": 401,
  "success": false,
  "message": "Username atau password salah.",
  "errors": null,
  "timestamp": "2026-08-26T09:35:52.558Z"
}
```

#### `GET /api/v1/auth/me` — Get the Profile & Role Detail of the Currently Logged-In User

**Auth:** Header `x-app-key` + Bearer token (customer/admin)

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Data profile user berhasil diambil",
  "data": {
    "id": "654edb1a-7add-43f4-9c3d-81c44bda08fb",
    "username": "nasabah_budi",
    "role": "NASABAH",
    "nasabah": {
      "id": "b17688a8-91e5-4d4b-8e3a-429d2b3415ea",
      "namaNasabah": "Budi Santoso",
      "alamat": "Jl. Merdeka No. 12, RT 03/05",
      "telp": "085678901234",
      "saldoPoin": 150,
      "foto": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
    },
    "adminBank": null
  }
}
```

### 3. Admin: CRUD of Customer Data

#### `GET /api/v1/admin/nasabah` — Admin: Get All Waste Bank Customer Data

**Auth:** Header `x-app-key` + Bearer token (admin)

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Daftar nasabah berhasil diambil",
  "data": [
    {
      "id": "b17688a8-91e5-4d4b-8e3a-429d2b3415ea",
      "namaNasabah": "Budi Santoso",
      "alamat": "Jl. Merdeka No. 12, RT 03/05",
      "telp": "085678901234",
      "saldoPoin": 150,
      "foto": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
      "user": {
        "username": "nasabah_budi",
        "role": "NASABAH"
      }
    },
    {
      "id": "5cda1646-8749-4f3e-8bb7-332c3cf89c27",
      "namaNasabah": "Siti Aminah",
      "alamat": "Jl. Mawar Indah No. 45",
      "telp": "081987654321",
      "saldoPoin": 80,
      "foto": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      "user": {
        "username": "nasabah_siti",
        "role": "NASABAH"
      }
    }
  ]
}
```

#### `POST /api/v1/admin/nasabah` — Admin: Add New Customer Data (Photo Upload)

**Auth:** Header `x-app-key` + Bearer token (admin)

**Additional Header:**

```http
Content-Type: multipart/form-data
```

**Request Body:**

```json
{
  "username": "nasabah_dewi",
  "password": "password123",
  "namaNasabah": "Dewi Lestari",
  "alamat": "Jl. Kenanga No. 5",
  "telp": "081987654321",
  "foto": "(file binary foto jpg/png)"
}
```

**Response (201):**

```json
{
  "statusCode": 201,
  "success": true,
  "message": "Nasabah baru berhasil ditambahkan",
  "data": {
    "id": "c1234567-89ab-cdef-0123-456789abcdef",
    "namaNasabah": "Dewi Lestari",
    "alamat": "Jl. Kenanga No. 5",
    "telp": "081987654321",
    "saldoPoin": 0,
    "foto": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
    "user": {
      "username": "nasabah_dewi",
      "role": "NASABAH"
    }
  }
}
```

#### `GET /api/v1/admin/nasabah/{id}` — Admin: Get Customer Data Detail by ID

**Auth:** Header `x-app-key` + Bearer token (admin)

**Query / Path Parameter:**

```http
Path: /api/v1/admin/nasabah/b17688a8-91e5-4d4b-8e3a-429d2b3415ea
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Detail nasabah berhasil diambil",
  "data": {
    "id": "b17688a8-91e5-4d4b-8e3a-429d2b3415ea",
    "namaNasabah": "Budi Santoso",
    "alamat": "Jl. Merdeka No. 12, RT 03/05",
    "telp": "085678901234",
    "saldoPoin": 150,
    "foto": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
    "user": {
      "username": "nasabah_budi",
      "role": "NASABAH"
    },
    "createdAt": "2026-08-26T09:35:51.307Z"
  }
}
```

#### `PUT /api/v1/admin/nasabah/{id}` — Admin: Update Customer Data (Photo Upload)

**Auth:** Header `x-app-key` + Bearer token (admin)

**Query / Path Parameter:**

```http
Path: /api/v1/admin/nasabah/b17688a8-91e5-4d4b-8e3a-429d2b3415ea
```

**Request Body:**

```json
{
  "namaNasabah": "Budi Santoso, S.Kom",
  "alamat": "Jl. Merdeka No. 15, RT 04/05",
  "telp": "085678909999",
  "foto": "(opsional file binary)"
}
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Data nasabah berhasil diperbarui",
  "data": {
    "id": "b17688a8-91e5-4d4b-8e3a-429d2b3415ea",
    "namaNasabah": "Budi Santoso, S.Kom",
    "alamat": "Jl. Merdeka No. 15, RT 04/05",
    "telp": "085678909999",
    "saldoPoin": 150
  }
}
```

#### `DELETE /api/v1/admin/nasabah/{id}` — Admin: Delete Customer Data

**Auth:** Header `x-app-key` + Bearer token (admin)

**Query / Path Parameter:**

```http
Path: /api/v1/admin/nasabah/5cda1646-8749-4f3e-8bb7-332c3cf89c27
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Data nasabah berhasil dihapus",
  "data": {
    "id": "5cda1646-8749-4f3e-8bb7-332c3cf89c27"
  }
}
```

### 4. Recyclable Waste Categories

#### `GET /api/v1/kategori-sampah` — Customer & Admin: Get the List of Waste Categories, Price/kg & Points/kg

**Auth:** Header `x-app-key: <appKey_milik_siswa>`

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Daftar kategori sampah daur ulang berhasil diambil",
  "data": [
    {
      "id": "eacfc2cf-2dc6-40c3-96fe-d55806f96b50",
      "namaKategori": "Botol Plastik PET (Bersih)",
      "hargaPerKg": 3500,
      "poinPerKg": 10,
      "jenis": "plastik",
      "foto": "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=300"
    },
    {
      "id": "5b2eff42-e462-400f-95c7-4b096e8cc6e1",
      "namaKategori": "Kardus & Karton Bekas",
      "hargaPerKg": 2000,
      "poinPerKg": 5,
      "jenis": "kertas",
      "foto": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300"
    },
    {
      "id": "ae28e806-940e-4c7f-8c93-c3184eb105a0",
      "namaKategori": "Kaleng Aluminium / Minuman",
      "hargaPerKg": 12000,
      "poinPerKg": 30,
      "jenis": "logam",
      "foto": "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=300"
    },
    {
      "id": "440f0550-7e61-44d2-889b-8f9bef8835e7",
      "namaKategori": "Botol Kaca Bening",
      "hargaPerKg": 1500,
      "poinPerKg": 4,
      "jenis": "kaca",
      "foto": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300"
    }
  ]
}
```

#### `POST /api/v1/kategori-sampah` — Admin: Add a New Waste Category (Photo Upload)

**Auth:** Header `x-app-key` + Bearer token (admin)

**Additional Header:**

```http
Content-Type: multipart/form-data
```

**Request Body:**

```json
{
  "namaKategori": "Tembaga Super",
  "hargaPerKg": 75000,
  "poinPerKg": 150,
  "jenis": "logam",
  "foto": "(opsional file binary)"
}
```

**Response (201):**

```json
{
  "statusCode": 201,
  "success": true,
  "message": "Kategori sampah baru berhasil disimpan",
  "data": {
    "id": "f1234567-89ab-cdef-0123-456789abcdef",
    "namaKategori": "Tembaga Super",
    "hargaPerKg": 75000,
    "poinPerKg": 150,
    "jenis": "logam",
    "foto": "https://images.unsplash.com/photo-tembaga"
  }
}
```

#### `GET /api/v1/kategori-sampah/{id}` — Customer & Admin: Get Waste Category Detail

**Auth:** Header `x-app-key: <appKey_milik_siswa>`

**Query / Path Parameter:**

```http
Path: /api/v1/kategori-sampah/eacfc2cf-2dc6-40c3-96fe-d55806f96b50
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Detail kategori sampah berhasil diambil",
  "data": {
    "id": "eacfc2cf-2dc6-40c3-96fe-d55806f96b50",
    "namaKategori": "Botol Plastik PET (Bersih)",
    "hargaPerKg": 3500,
    "poinPerKg": 10,
    "jenis": "plastik",
    "foto": "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=300"
  }
}
```

#### `PUT /api/v1/kategori-sampah/{id}` — Admin: Update Waste Category (Photo Upload)

**Auth:** Header `x-app-key` + Bearer token (admin)

**Query / Path Parameter:**

```http
Path: /api/v1/kategori-sampah/eacfc2cf-2dc6-40c3-96fe-d55806f96b50
```

**Request Body:**

```json
{
  "namaKategori": "Botol Plastik PET Bersih & Kering",
  "hargaPerKg": 4000,
  "poinPerKg": 12,
  "jenis": "plastik"
}
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Kategori sampah berhasil diperbarui",
  "data": {
    "id": "eacfc2cf-2dc6-40c3-96fe-d55806f96b50",
    "namaKategori": "Botol Plastik PET Bersih & Kering",
    "hargaPerKg": 4000,
    "poinPerKg": 12,
    "jenis": "plastik"
  }
}
```

#### `DELETE /api/v1/kategori-sampah/{id}` — Admin: Delete Waste Category

**Auth:** Header `x-app-key` + Bearer token (admin)

**Query / Path Parameter:**

```http
Path: /api/v1/kategori-sampah/f1234567-89ab-cdef-0123-456789abcdef
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Kategori sampah berhasil dihapus",
  "data": {
    "id": "f1234567-89ab-cdef-0123-456789abcdef"
  }
}
```

### 5. Waste Deposits (Submission & Weighing Verification)

#### `POST /api/v1/setor-sampah/pengajuan` — Customer: Submit a Waste Deposit (Selecting Waste Type & Estimated Weight)

**Auth:** Header `x-app-key` + Bearer token (customer)

**Request Body:**

```json
{
  "tanggal": "2026-08-26T10:00:00.000Z",
  "catatan": "Sampah sudah dipilah rapi dalam karung",
  "items": [
    {
      "kategoriSampahId": "eacfc2cf-2dc6-40c3-96fe-d55806f96b50",
      "beratKg": 4.5
    },
    {
      "kategoriSampahId": "5b2eff42-e462-400f-95c7-4b096e8cc6e1",
      "beratKg": 2.0
    }
  ]
}
```

**Response (201):**

```json
{
  "statusCode": 201,
  "success": true,
  "message": "Pengajuan penyetoran sampah berhasil dibuat",
  "data": {
    "id": "a9876543-210b-cdef-0123-456789abcdef",
    "kodeSetor": "STR-202608-1002",
    "tanggal": "2026-08-26T10:00:00.000Z",
    "status": "menunggu_konfirmasi",
    "totalBeratKg": 6.5,
    "estimasiTotalPoin": 55,
    "catatan": "Sampah sudah dipilah rapi dalam karung",
    "detailSetors": [
      {
        "kategoriSampahId": "eacfc2cf-2dc6-40c3-96fe-d55806f96b50",
        "beratKg": 4.5,
        "subtotalPoin": 45
      },
      {
        "kategoriSampahId": "5b2eff42-e462-400f-95c7-4b096e8cc6e1",
        "beratKg": 2.0,
        "subtotalPoin": 10
      }
    ]
  }
}
```

#### `GET /api/v1/setor-sampah/my-setor` — Customer: Get the Status & History of Own Waste Deposits (Filter `?bulan=YYYY-MM`)

**Auth:** Header `x-app-key` + Bearer token (customer)

**Query / Path Parameter:**

```http
?bulan=2026-08 (opsional, format filter YYYY-MM)
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Histori pengajuan penyetoran sampah berhasil diambil",
  "data": [
    {
      "id": "9498c6d6-c2de-450d-a391-e80fbff5386c",
      "kodeSetor": "STR-202608-1001",
      "tanggal": "2026-08-26T09:35:51.874Z",
      "status": "selesai",
      "totalBeratKg": 15,
      "totalPoin": 150,
      "catatan": "Sampah sudah dipilah rapi dalam karung",
      "detailSetors": [
        {
          "kategoriSampahId": "eacfc2cf-2dc6-40c3-96fe-d55806f96b50",
          "beratKg": 10,
          "subtotalPoin": 100,
          "kategoriSampah": {
            "namaKategori": "Botol Plastik PET (Bersih)",
            "jenis": "plastik"
          }
        },
        {
          "kategoriSampahId": "5b2eff42-e462-400f-95c7-4b096e8cc6e1",
          "beratKg": 5,
          "subtotalPoin": 25,
          "kategoriSampah": {
            "namaKategori": "Kardus & Karton Bekas",
            "jenis": "kertas"
          }
        }
      ]
    }
  ]
}
```

#### `GET /api/v1/setor-sampah/admin/list` — Admin: Get All Waste Deposit Submissions (`?status=...&bulan=...`)

**Auth:** Header `x-app-key` + Bearer token (admin)

**Query / Path Parameter:**

```http
?status=menunggu_konfirmasi (opsional: menunggu_konfirmasi / diverifikasi / selesai / ditolak)
?bulan=2026-08 (opsional: filter bulan YYYY-MM)
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Seluruh data pengajuan penyetoran sampah berhasil diambil",
  "data": [
    {
      "id": "9498c6d6-c2de-450d-a391-e80fbff5386c",
      "kodeSetor": "STR-202608-1001",
      "tanggal": "2026-08-26T09:35:51.874Z",
      "nasabah": {
        "namaNasabah": "Budi Santoso",
        "telp": "085678901234"
      },
      "status": "menunggu_konfirmasi",
      "totalBeratKg": 15,
      "totalPoin": 150
    }
  ]
}
```

#### `GET /api/v1/setor-sampah/{id}` — Customer & Admin: Get the Transaction Detail / Waste Deposit Receipt

**Auth:** Header `x-app-key` + Bearer token (customer/admin)

**Query / Path Parameter:**

```http
Path: /api/v1/setor-sampah/9498c6d6-c2de-450d-a391-e80fbff5386c
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Detail transaksi penyetoran sampah berhasil diambil",
  "data": {
    "id": "9498c6d6-c2de-450d-a391-e80fbff5386c",
    "kodeSetor": "STR-202608-1001",
    "tanggal": "2026-08-26T09:35:51.874Z",
    "status": "selesai",
    "nasabah": {
      "namaNasabah": "Budi Santoso",
      "alamat": "Jl. Merdeka No. 12, RT 03/05",
      "telp": "085678901234"
    },
    "totalBeratKg": 15,
    "totalPoin": 150,
    "catatanAdmin": "Penimbangan selesai dan akurat.",
    "detailSetors": [
      {
        "kategori": "Botol Plastik PET (Bersih)",
        "jenis": "plastik",
        "beratKg": 10,
        "poinPerKg": 10,
        "subtotalPoin": 100
      },
      {
        "kategori": "Kardus & Karton Bekas",
        "jenis": "kertas",
        "beratKg": 5,
        "poinPerKg": 5,
        "subtotalPoin": 25
      }
    ]
  }
}
```

#### `PUT /api/v1/setor-sampah/admin/verify/{id}` — Admin: Confirmation & Verification of the Real Waste Weighing (Update status to `diverifikasi`/`selesai`/`ditolak`)

**Auth:** Header `x-app-key` + Bearer token (admin)

**Query / Path Parameter:**

```http
Path: /api/v1/setor-sampah/admin/verify/9498c6d6-c2de-450d-a391-e80fbff5386c
```

**Request Body:**

```json
{
  "status": "selesai",
  "catatanAdmin": "Berat sampah sesuai hasil timbangan real petugas.",
  "itemsReal": [
    {
      "kategoriSampahId": "eacfc2cf-2dc6-40c3-96fe-d55806f96b50",
      "beratKgReal": 10.5
    }
  ]
}
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Verifikasi penyetoran sampah berhasil disimpan dan poin nasabah telah diperbarui",
  "data": {
    "id": "9498c6d6-c2de-450d-a391-e80fbff5386c",
    "status": "selesai",
    "totalPoin": 105,
    "catatanAdmin": "Berat sampah sesuai hasil timbangan real petugas."
  }
}
```

### 6. Reward Catalog & Point Redemption Vouchers

#### `GET /api/v1/hadiah` — Customer & Admin: Get the Catalog of Reward Goods / Vouchers

**Auth:** Header `x-app-key: <appKey_milik_siswa>`

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Daftar barang/voucher hadiah berhasil diambil",
  "data": [
    {
      "id": "8bd74595-8016-42b9-a585-a0e40d0fe42f",
      "namaHadiah": "Voucher Pulsa / E-Wallet Rp 25.000",
      "poinDibutuhkan": 75,
      "stok": 50,
      "foto": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300"
    },
    {
      "id": "4c641c7f-f36a-47a9-9431-587e780eaf09",
      "namaHadiah": "Minyak Goreng Bimoli 1 Liter",
      "poinDibutuhkan": 100,
      "stok": 25,
      "foto": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300"
    },
    {
      "id": "eef2d71a-02bf-4799-b8d5-17052294271b",
      "namaHadiah": "Beras Super Pulen 2.5 Kg",
      "poinDibutuhkan": 180,
      "stok": 15,
      "foto": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300"
    }
  ]
}
```

#### `POST /api/v1/hadiah` — Admin: Add New Reward Data (Photo Upload)

**Auth:** Header `x-app-key` + Bearer token (admin)

**Additional Header:**

```http
Content-Type: multipart/form-data
```

**Request Body:**

```json
{
  "namaHadiah": "Gula Pasir 1 Kg",
  "poinDibutuhkan": 60,
  "stok": 30,
  "foto": "(opsional file binary)"
}
```

**Response (201):**

```json
{
  "statusCode": 201,
  "success": true,
  "message": "Hadiah baru berhasil ditambahkan",
  "data": {
    "id": "b1234567-89ab-cdef-0123-456789abcdef",
    "namaHadiah": "Gula Pasir 1 Kg",
    "poinDibutuhkan": 60,
    "stok": 30,
    "foto": "https://images.unsplash.com/photo-gula"
  }
}
```

#### `GET /api/v1/hadiah/{id}` — Customer & Admin: Get Goods / Reward Detail

**Auth:** Header `x-app-key: <appKey_milik_siswa>`

**Query / Path Parameter:**

```http
Path: /api/v1/hadiah/8bd74595-8016-42b9-a585-a0e40d0fe42f
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Detail hadiah berhasil diambil",
  "data": {
    "id": "8bd74595-8016-42b9-a585-a0e40d0fe42f",
    "namaHadiah": "Voucher Pulsa / E-Wallet Rp 25.000",
    "poinDibutuhkan": 75,
    "stok": 50,
    "foto": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300"
  }
}
```

#### `PUT /api/v1/hadiah/{id}` — Admin: Update Reward Data (Photo Upload)

**Auth:** Header `x-app-key` + Bearer token (admin)

**Query / Path Parameter:**

```http
Path: /api/v1/hadiah/8bd74595-8016-42b9-a585-a0e40d0fe42f
```

**Request Body:**

```json
{
  "namaHadiah": "Voucher Pulsa / E-Wallet Rp 50.000",
  "poinDibutuhkan": 140,
  "stok": 40
}
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Data hadiah berhasil diperbarui",
  "data": {
    "id": "8bd74595-8016-42b9-a585-a0e40d0fe42f",
    "namaHadiah": "Voucher Pulsa / E-Wallet Rp 50.000",
    "poinDibutuhkan": 140,
    "stok": 40
  }
}
```

#### `DELETE /api/v1/hadiah/{id}` — Admin: Delete Reward Data

**Auth:** Header `x-app-key` + Bearer token (admin)

**Query / Path Parameter:**

```http
Path: /api/v1/hadiah/8bd74595-8016-42b9-a585-a0e40d0fe42f
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Hadiah berhasil dihapus",
  "data": {
    "id": "8bd74595-8016-42b9-a585-a0e40d0fe42f"
  }
}
```

### 7. Reward Point Redemption & Receipts

#### `POST /api/v1/penukaran-poin/tukar` — Customer: Redeem Points for Reward Goods / Vouchers

**Auth:** Header `x-app-key` + Bearer token (customer)

**Request Body:**

```json
{
  "hadiahId": "8bd74595-8016-42b9-a585-a0e40d0fe42f"
}
```

**Response (201):**

```json
{
  "statusCode": 201,
  "success": true,
  "message": "Penukaran poin berhasil diajukan",
  "data": {
    "id": "082f54c6-a2f0-4919-98cb-94e6c43bcb79",
    "kodePenukaran": "TKR-202608-5001",
    "tanggal": "2026-08-26T09:35:52.333Z",
    "hadiahId": "8bd74595-8016-42b9-a585-a0e40d0fe42f",
    "poinTerpakai": 75,
    "sisaSaldoPoin": 75,
    "status": "diproses",
    "hadiah": {
      "namaHadiah": "Voucher Pulsa / E-Wallet Rp 25.000"
    }
  }
}
```

**Error Response (400):**

```json
{
  "statusCode": 400,
  "success": false,
  "message": "Saldo poin Anda (45 poin) tidak mencukupi untuk menukar hadiah ini (75 poin).",
  "errors": null,
  "timestamp": "2026-08-26T09:35:52.333Z"
}
```

#### `GET /api/v1/penukaran-poin/my-penukaran` — Customer: Get Own Point Redemption History

**Auth:** Header `x-app-key` + Bearer token (customer)

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Histori penukaran poin nasabah berhasil diambil",
  "data": [
    {
      "id": "082f54c6-a2f0-4919-98cb-94e6c43bcb79",
      "kodePenukaran": "TKR-202608-5001",
      "tanggal": "2026-08-26T09:35:52.333Z",
      "poinTerpakai": 75,
      "status": "selesai",
      "hadiah": {
        "namaHadiah": "Voucher Pulsa / E-Wallet Rp 25.000",
        "poinDibutuhkan": 75,
        "foto": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300"
      }
    }
  ]
}
```

#### `GET /api/v1/penukaran-poin/admin/list` — Admin: Get All Point Redemption Transactions (`?bulan=YYYY-MM`)

**Auth:** Header `x-app-key` + Bearer token (admin)

**Query / Path Parameter:**

```http
?bulan=2026-08 (opsional, filter bulan YYYY-MM)
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Seluruh data transaksi penukaran poin berhasil diambil",
  "data": [
    {
      "id": "082f54c6-a2f0-4919-98cb-94e6c43bcb79",
      "kodePenukaran": "TKR-202608-5001",
      "tanggal": "2026-08-26T09:35:52.333Z",
      "nasabah": {
        "namaNasabah": "Budi Santoso",
        "telp": "085678901234"
      },
      "hadiah": {
        "namaHadiah": "Voucher Pulsa / E-Wallet Rp 25.000"
      },
      "poinTerpakai": 75,
      "status": "diproses"
    }
  ]
}
```

#### `PUT /api/v1/penukaran-poin/admin/status/{id}` — Admin: Update the Point Redemption Status (`diproses` / `selesai`)

**Auth:** Header `x-app-key` + Bearer token (admin)

**Query / Path Parameter:**

```http
Path: /api/v1/penukaran-poin/admin/status/082f54c6-a2f0-4919-98cb-94e6c43bcb79
```

**Request Body:**

```json
{
  "status": "selesai"
}
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Status transaksi penukaran poin berhasil diperbarui",
  "data": {
    "id": "082f54c6-a2f0-4919-98cb-94e6c43bcb79",
    "status": "selesai"
  }
}
```

#### `GET /api/v1/penukaran-poin/nota/{id}` — Customer & Admin: Get the Receipt / Proof of the Point Redemption Transaction

**Auth:** Header `x-app-key` + Bearer token (customer/admin)

**Query / Path Parameter:**

```http
Path: /api/v1/penukaran-poin/nota/082f54c6-a2f0-4919-98cb-94e6c43bcb79
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Struk nota penukaran poin berhasil diambil",
  "data": {
    "id": "082f54c6-a2f0-4919-98cb-94e6c43bcb79",
    "kodePenukaran": "TKR-202608-5001",
    "tanggal": "2026-08-26T09:35:52.333Z",
    "nasabah": {
      "namaNasabah": "Budi Santoso",
      "telp": "085678901234"
    },
    "hadiah": {
      "namaHadiah": "Voucher Pulsa / E-Wallet Rp 25.000",
      "poinDibutuhkan": 75
    },
    "poinTerpakai": 75,
    "status": "selesai"
  }
}
```

### 8. Admin: Recapitulation & Monthly Reports

#### `GET /api/v1/rekapitulasi/bulanan` — Admin: Get the Recapitulation of Total Collected Waste Tonnage & the Estimated Payment Per Month

**Auth:** Header `x-app-key` + Bearer token (admin)

**Query / Path Parameter:**

```http
?bulan=2026-08 (wajib, format YYYY-MM)
```

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Rekapitulasi Bank Sampah Bulan 8/2026 berhasil diambil",
  "data": {
    "periode": "2026-08",
    "rekapitulasiTonase": {
      "totalKg": 15,
      "totalTon": 0.015,
      "totalEstimasiPembayaranRupiah": 45000,
      "totalPoinDiterbitkan": 125
    },
    "breakdownJenisSampah": {
      "plastik": {
        "tonaseKg": 10,
        "rupiah": 35000,
        "poin": 100
      },
      "kertas": {
        "tonaseKg": 5,
        "rupiah": 10000,
        "poin": 25
      },
      "logam": {
        "tonaseKg": 0,
        "rupiah": 0,
        "poin": 0
      },
      "kaca": {
        "tonaseKg": 0,
        "rupiah": 0,
        "poin": 0
      }
    },
    "rekapitulasiPenukaranPoin": {
      "totalTransaksiPenukaran": 1,
      "totalPoinTerpakai": 75
    }
  }
}
```

### 9. Dashboard & Analytics

#### `GET /api/v1/dashboard/summary` — Customer: Get the Dashboard Summary of Balance, Income, Expenditure & Latest Transactions

**Auth:** Header `x-app-key` + Bearer token (customer)

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Summary dashboard nasabah berhasil diambil",
  "data": {
    "saldoPoinSaatIni": 150,
    "totalSampahDisetorKg": 15,
    "totalPoinDidapat": 150,
    "totalPoinDitukar": 75,
    "transaksiTerakhirSetor": {
      "kodeSetor": "STR-202608-1001",
      "tanggal": "2026-08-26T09:35:51.874Z",
      "beratKg": 15,
      "poin": 150,
      "status": "selesai"
    },
    "transaksiTerakhirTukar": {
      "kodePenukaran": "TKR-202608-5001",
      "tanggal": "2026-08-26T09:35:52.333Z",
      "hadiah": "Voucher Pulsa / E-Wallet Rp 25.000",
      "poin": 75,
      "status": "selesai"
    }
  }
}
```

#### `GET /api/v1/dashboard/stats` — Admin & App Maker: Get the Overall Admin Stats (Total Customers, Balance, Waste Weight, Transactions)

**Auth:** Header `x-app-key: <appKey_milik_siswa>`

**Response (200):**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Statistik dashboard Bank Sampah milik App Maker",
  "data": {
    "totalNasabah": 2,
    "totalKategoriSampah": 4,
    "totalTransaksiSetor": 1,
    "totalHadiah": 3,
    "totalBeratSampahKg": 15,
    "totalPoinTersalurkan": 150
  }
}
```

### 10. Testing & Utility (Sample Seed Data)

#### `POST /api/v1/seed` — Generate Dummy Sample Customer & Transaction Data for the Convenience of Student Frontend Testing

**Auth:** Header `x-app-key: <appKey_milik_siswa>`

**Response (201):**

```json
{
  "statusCode": 201,
  "success": true,
  "message": "Dummy sample data Bank Sampah berhasil dibuat!",
  "data": {
    "admin": {
      "username": "admin_banksampah",
      "password": "admin123",
      "namaUnit": "Bank Sampah Asri Jaya"
    },
    "nasabah1": {
      "username": "nasabah_budi",
      "password": "password123",
      "namaNasabah": "Budi Santoso",
      "saldoPoin": 150
    },
    "nasabah2": {
      "username": "nasabah_siti",
      "password": "password123",
      "namaNasabah": "Siti Aminah",
      "saldoPoin": 80
    },
    "kategoriSampahCount": 4,
    "hadiahKatalogCount": 3
  }
}
```

---

# APPENDICES

## Worksheets per Category

---

## APPENDIX A: FULLSTACK CATEGORY

| Item                            | Detail                                                                               |
| :------------------------------ | :----------------------------------------------------------------------------------- |
| **Output**                | Fullstack web application (server-side rendering, without consuming an external API) |
| **Main Tools**            | PHP (Laravel) / native PHP / Express / NextJS                                        |
| **Data Source**           | Database is created and managed by yourself                                          |
| **Committee API Access?** | Not required                                                                         |

### Work Steps

- [ ] Prepare the environment (PHP/NodeJS, database server, code editor).
- [ ] Create the database according to the ERD in Part II (may be adjusted without reducing features).
- [ ] Implement all Customer features (register, login, view waste categories, submit a deposit, view status & history, redeem points, print receipt).
- [ ] Implement all Admin features (register unit, login, update profile, CRUD customers, CRUD waste categories, CRUD rewards, confirm deposits, view transactions & recapitulation).
- [ ] Apply input validation and password hashing.
- [ ] Test the entire application flow end-to-end before submission.

### Files That Must Be Submitted

- [ ] Complete source code (project folder).
- [ ] Database file (SQL export) or migration script.
- [ ] A brief document: the framework used and how to run the application.

---

## APPENDIX B: BACKEND CATEGORY

| Item                            | Detail                                                     |
| :------------------------------ | :--------------------------------------------------------- |
| **Output**                | RESTful API in accordance with the API Contract (Part III) |
| **Main Tools**            | Node.js/Express, Laravel, or NestJS                        |
| **Data Source**           | Database is created and managed by yourself                |
| **Committee API Access?** | Not required (you are the one providing the API)           |

### Work Steps

- [ ] Prepare the environment (Node.js/Laravel/Express, database server).
- [ ] Create the database according to the ERD in Part II (may be adjusted without reducing features).
- [ ] Implement all endpoints in the API Contract (Part III).
- [ ] Apply authentication and password hashing.
- [ ] Test every endpoint using Postman/Insomnia before considering it complete.
- [ ] Export the API documentation (Postman collection or Swagger export).

*See the complete endpoint list in Part III — API Contract.*

### Files That Must Be Submitted

- [ ] Complete source code (project folder).
- [ ] Database file (SQL export) or migration script.
- [ ] API documentation (Postman collection/Swagger export).
- [ ] A brief document on how to run the application (base URL, port, etc.).

---

## APPENDIX C: FRONTEND (WEB) CATEGORY

| Item                            | Detail                                                                              |
| :------------------------------ | :---------------------------------------------------------------------------------- |
| **Output**                | A web application that consumes the API                                             |
| **Main Tools**            | NextJS/ReactJS/VueJS or a framework of your choice                                  |
| **Data Source**           | API provided by the committee                                                       |
| **Committee API Access?** | Yes — the base URL & documentation are given by the committee when the exam begins |

### Work Steps

- [ ] Prepare the environment (Node.js, Next/React/Vue/a framework of your choice).
- [ ] Request the API base URL and endpoint documentation from the committee.
- [ ] Build the pages according to the Customer & Admin features in Part II (Working Drawing).
- [ ] Adapt the layout of the attached mobile wireframe for the web version.
- [ ] Connect every form/action to the corresponding API endpoint.
- [ ] Test the responsive appearance, at minimum for laptop/tablet screen sizes.

*See the complete endpoint list in Part III — API Contract.*

### Files That Must Be Submitted

- [ ] Complete source code (project folder).
- [ ] A brief document: the framework used and how to run the application.

---

## APPENDIX D: MOBILE APP CATEGORY

| Item                            | Detail                                                                              |
| :------------------------------ | :---------------------------------------------------------------------------------- |
| **Output**                | Mobile application (APK/project ready to run on an emulator) that consumes the API  |
| **Main Tools**            | Kotlin/Flutter with Android Studio                                                  |
| **Data Source**           | API provided by the committee                                                       |
| **Committee API Access?** | Yes — the base URL & documentation are given by the committee when the exam begins |

### Work Steps

- [ ] Prepare the environment (Android Studio/Flutter SDK, emulator/Android device version 10 or above).
- [ ] Request the API base URL and endpoint documentation from the committee.
- [ ] Build the screens according to the mobile wireframe in Part II (Working Drawing).
- [ ] Connect every screen to the corresponding API endpoint.
- [ ] Test the application on an emulator/device before submission.
- [ ] Prepare a debug APK or a project that is ready to be run directly for assessment.

*See the complete endpoint list in Part III — API Contract.*

### Files That Must Be Submitted

- [ ] Complete source code (project folder).
- [ ] Debug APK file (if available).
- [ ] A brief document: the framework used and how to run the application.

### Wireframe for Mobile

*(The attached wireframe image contains the following screen layouts.)*

**A. CUSTOMER (NASABAH)**

1. **Register Account** — Full Name, Phone No., Username, Password, Password Confirmation, "I agree to the Terms & Conditions" checkbox, **REGISTER** button, "Already have an account? Login".
2. **Login** — BANK SAMPAH logo, Username, Password (with show/hide icon), **LOGIN** button, "Forgot Password?", "Don't have an account yet? Register".
3. **Recyclable Waste Type List** — search field ("Search for waste type..."), list of cards: Plastic (Rp 3,000 / kg — 2.0 Points / kg), Paper (Rp 1,000 / kg — 1.5 Points / kg), Metal (Rp 4,000 / kg — 4.0 Points / kg), Glass (Rp 1,000 / kg — 1.0 Points / kg).
4. **Submit Waste Deposit** — Deposit Date (24/05/2024, with date picker), Select Waste ("+ Add Waste"), item rows: Plastic 2.0 kg — Points 4.0, Paper 1.5 kg — Points 2.25, Total Estimated Points 6.25 Points, Note (optional), **SUBMIT** button.
5. **Waste Deposit Status** — filter tabs: All, Awaiting, Verified, Completed, Rejected; list of transactions: #SET00012 / 24 May 2024 / Total Points 6.25 — *Awaiting Confirmation*; #SET00011 / 20 May 2024 / Total Points 12.50 — *Verified*; #SET00010 / 15 May 2024 / Total Points 8.75 — *Completed*; #SET00009 / 10 May 2024 / Total Points 3.00 — *Rejected*.
6. **Point Balance & Deposit History** — Total Point Balance card: 125.75 Points; Deposit History (May 2024): 24 May 2024 / SET00012 / + 6.25 Points (Awaiting); 20 May 2024 / SET00011 / + 12.50 Points (Verified); 15 May 2024 / SET00010 / + 8.75 Points (Completed); 10 May 2024 / SET00009 / + 3.00 Points (Rejected). Bottom navigation: Home, Deposit, History, Account.
7. **Point Redemption** — Point Balance 125.75 Points; reward list with a **Redeem** button each: Shopping Voucher Rp 20,000 (Requires 100 Points, Stock 10), Mobile Credit Voucher Rp 10,000 (Requires 60 Points, Stock 15), Eco Friendly Tumbler (Requires 150 Points, Stock 5), Folding Umbrella (Requires 120 Points, Stock 7).
8. **Transaction Proof/Receipt** — tabs: Deposit, Redemption; Bank Sampah header; Transaction No.: SET00012; Date: 24 May 2024 10:30; Deposit Detail: Plastic 2.0 kg — 4.00, Paper 1.5 kg — 2.25; Total Points 6.25; "Thank you!"; **Save** and **Print** buttons.

**B. WASTE BANK ADMIN**

1. **Register Waste Bank Unit** — Waste Bank Unit Registration form: Waste Bank Unit Name, Manager Name, Phone No., Username, Password, Password Confirmation, "I agree to the Terms & Conditions" checkbox, **REGISTER** button.
2. **Admin Login** — BANK SAMPAH logo, Username, Password (with show/hide icon), **LOGIN** button, "Forgot Password?".
3. **Waste Bank Unit Profile** — unit photo/logo (with edit icon), Unit Name: Bank Sampah Hijau, Manager Name: Budi Santoso, Phone No.: 0812-3456-7890, **SAVE CHANGES** button.
4. **Customer Data (CRUD)** — search field ("Search for a customer..."), customer list: Siti Aminah / 0812-1111-2222 / 125.75 Points; Andi Wijaya / 0812-3333-4444 / 80.50 Points; Rina Kartika / 0812-5555-6666; plus a floating **+** add button.
5. **Waste Category Data (CRUD)** — "+ Add" button; category list with edit & delete icons: Plastic (Rp 3,000 / kg — 2.0 Points / kg), Paper (Rp 1,000 / kg — 1.5 Points / kg), Metal (Rp 4,000 / kg — 4.0 Points / kg), Glass (Rp 1,000 / kg — 1.0 Points / kg).
6. **Reward Data (CRUD)** — "+ Add" button; reward list with edit & delete icons: Shopping Voucher Rp 20,000 (100 Points / Stock 10), Mobile Credit Voucher Rp 10,000 (60 Points / Stock 15), Eco Friendly Tumbler (150 Points / Stock 5), Folding Umbrella (120 Points / Stock 7).
7. **Deposit Confirmation** — Deposit Detail: Transaction No.: SET00012, Date: 24 May 2024 10:30, Customer: Siti Aminah; table Waste / Weight (kg) / Points: Plastic 2.0 — 4.00, Paper 1.5 — 2.25; Total Points 6.25; "Change Weight (re-weigh)" with a **Re-weigh** button; Status: Verified (dropdown); **REJECT** and **SAVE** buttons.
8. **Transaction Data (Deposits & Redemptions)** — tabs: Deposit, Redemption; month filter (May 2024): SET00012 / 24 May 2024 / Andi Wijaya — + 6.25 Points (Verified); SET00011 / 20 May 2024 / Andi Wijaya — + 12.50 Points (Completed); TUK00005 / 18 May 2024 / Siti Aminah — 100 Points (Completed); TUK00004 / 15 May 2024 / Rina Kartika — 60 Points (Completed).
9. **Recapitulation** — period May 2024; Total Waste Collected: 1,250 kg; Estimated Payment: Rp 2,875,000; Detail per Type: Plastic 600 kg — Rp 1,200,000; Paper 350 kg — Rp 525,000; Metal 200 kg — Rp 800,000; Glass 100 kg — Rp 100,000.

**Bottom navigation bars:** *CUSTOMER* — Home, Deposit, History, Redeem Points, Account. *ADMIN* — Dashboard, Transactions, Data, Reports, Account.

---

## APPENDIX E: UI/UX DESIGN CATEGORY

| Item                            | Detail                                                    |
| :------------------------------ | :-------------------------------------------------------- |
| **Output**                | Interface design (hi-fi mockup) and a user flow prototype |
| **Main Tools**            | Figma or Adobe XD                                         |
| **Data Source**           | Does not use an API — focus is on the design             |
| **Committee API Access?** | Not required                                              |

### Work Steps

- [ ] Study all the Customer & Admin feature requirements in Part II (Working Drawing).
- [ ] Compose a basic design system (color palette, typography, button/card/form field components).
- [ ] Create hi-fi mockups of all Customer screens (8 screens) and Admin screens (9 screens) according to the attached wireframe.
- [ ] Compose an interactive prototype for at least 2 main flows: waste deposit submission and point redemption.
- [ ] Export all screens to PDF/PNG format.
- [ ] Prepare a Figma/Adobe XD share link (view/comment mode).

### Files That Must Be Submitted

- [ ] Figma/XD share link (view/comment mode).
- [ ] PDF/PNG export file of all screens.
- [ ] Design system document (colors, typography, components).

---

## "GOOD LUCK & MAY YOU SUCCEED"

*COMPETENCY TEST ASSIGNMENT RPL 2026/2027 — SMK TELKOM MALANG*

# React Contact Management

Aplikasi web Contact Management yang dikembangkan menggunakan React.js untuk mengelola data kontak. Proyek ini dikembangkan sebagai bagian dari implementasi Software Development dan DevOps, dengan penerapan unit testing, Continuous Integration (CI), serta containerization menggunakan Docker.

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Project Structure](#3-project-structure)
4. [Prerequisites](#4-prerequisites)
5. [Installation and Setup](#5-installation-and-setup)
6. [Running the Application](#6-running-the-application)
7. [Unit Testing](#7-unit-testing)
8. [Code Quality and Production Build](#8-code-quality-and-production-build)
9. [Docker and Docker Compose](#9-docker-and-docker-compose)
10. [CI/CD Pipeline](#10-cicd-pipeline)
11. [Troubleshooting](#11-troubleshooting)

---

## 1. Project Overview

React Contact Management merupakan aplikasi berbasis web yang dikembangkan menggunakan React.js dan Vite.

Proyek ini memiliki direktori utama frontend dan backend. Dokumentasi ini berfokus pada pengembangan frontend React, proses pengujian, dan containerization menggunakan Docker.

### Project Objectives

- Mengembangkan aplikasi web menggunakan React.js.
- Menerapkan pengujian otomatis menggunakan Vitest.
- Memastikan kualitas kode melalui ESLint.
- Mengotomatisasi proses build dan testing menggunakan CI/CD.
- Mengemas aplikasi ke dalam Docker Image.
- Menyediakan mekanisme deployment menggunakan Docker Compose.

## 2. Technology Stack

Teknologi yang digunakan dalam proyek ini:

| Technology | Version / Description |
|---|---|
| React | 19.1.1 |
| React DOM | 19.1.1 |
| Vite | 7.1.12 |
| React Router | 7.9.3 |
| Tailwind CSS | 4.1.16 |
| Vitest | 5.0.5 |
| React Testing Library | 16.3.3 |
| jsdom | 29.1.1 |
| ESLint | 9.36.0 |
| Node.js | 22.x recommended |
| npm | Package manager |
| Docker | Application containerization |
| Docker Compose | Container orchestration |

## 3. Project Structure

Struktur utama repository:

```text
reactjs-contact-management/
│
├── .github/
│   └── workflows/
│       └── [CI workflow]
│
├── backend/
│   └── [Backend application]
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── test/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── .dockerignore
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── compose.yaml
├── .gitignore
├── CI-DOCUMENTATION.md
└── README.md
```

**Main directories:**

- `frontend/`: Source code aplikasi React.
- `backend/`: Source code aplikasi backend.
- `.github/workflows/`: Konfigurasi otomatisasi CI/CD menggunakan GitHub Actions.
- `CI-DOCUMENTATION.md`: Dokumentasi implementasi dan optimasi CI/CD.

## 4. Prerequisites

Pastikan perangkat telah memiliki beberapa kebutuhan berikut:

- Git
- Node.js 22.x
- npm
- Docker Engine
- Docker Compose Plugin

Verifikasi instalasi:

```bash
git --version
node --version
npm --version
docker --version
docker compose version
```

## 5. Installation and Setup

### Step 1. Clone Repository

Clone repository dari GitHub:

```bash
git clone https://github.com/fzsptr/reactjs-contact-management.git
```

Masuk ke direktori proyek:

```bash
cd reactjs-contact-management
```

### Step 2. Navigate to Frontend Directory

```bash
cd frontend
```

### Step 3. Install Dependencies

Install seluruh dependency berdasarkan `package-lock.json`:

```bash
npm ci
```

Perintah `npm ci` digunakan untuk menginstal dependency berdasarkan lockfile sehingga instalasi lebih konsisten antar lingkungan pengembangan.

### Step 4. Run Development Server

```bash
npm run dev
```

Aplikasi dapat diakses melalui:

```text
http://localhost:5173
```

## 6. Running the Application

Untuk menjalankan aplikasi dalam mode development:

```bash
cd frontend
npm run dev
```

Untuk menghentikan development server, tekan:

```text
CTRL + C
```

## 7. Unit Testing

Pengujian unit dilakukan menggunakan Vitest dan React Testing Library.

Vitest digunakan sebagai test runner untuk menjalankan pengujian secara otomatis, sedangkan React Testing Library digunakan untuk melakukan pengujian terhadap komponen React dan interaksi pengguna.

### 7.1. Testing Configuration

Konfigurasi pengujian terdapat pada `frontend/vite.config.js`.

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
  }
})
```

Keterangan:

- `environment: 'jsdom'`: Menyediakan simulasi lingkungan browser agar komponen React dapat diuji menggunakan DOM.
- `vitest`: Menjalankan dan mengelola proses pengujian.

### 7.2. Testing Dependencies

Dependency pengujian yang digunakan:

```json
{
  "@testing-library/dom": "^10.4.2",
  "@testing-library/react": "^16.3.3",
  "jsdom": "^29.1.1",
  "vitest": "^5.0.5"
}
```

Dependency tersebut sudah tercantum dalam `frontend/package.json`.

### 7.3. Available Test Command

Script pengujian yang tersedia pada `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest run"
  }
}
```

### 7.4. Step-by-Step Unit Testing

Ikuti tahapan berikut untuk menjalankan unit test.

**Step 1 — Navigate to Frontend Directory**

```bash
cd frontend
```

**Step 2 — Install Dependencies**

```bash
npm ci
```

Pastikan instalasi dependency berhasil tanpa error.

**Step 3 — Execute Unit Tests**

```bash
npm test
```

Perintah tersebut menjalankan:

```bash
vitest run
```

Vitest akan mencari dan menjalankan file pengujian yang sesuai dengan pola penamaan file test.

**Step 4 — Analyze Test Results**

Perhatikan hasil pengujian pada terminal.

Contoh ilustrasi hasil yang diharapkan:

```text
✓ test/login.test.jsx
  ✓ should render login form
  ✓ should accept user input
  ✓ should handle successful login
  ✓ should handle failed login

Test Files  1 passed (1)
Tests       4 passed (4)
```

Catatan: Hasil di atas merupakan ilustrasi. Jumlah test dan status aktual mengikuti file pengujian yang tersedia di repository.

**Step 5 — Verify Test Status**

Pastikan:
- Tidak ada test yang gagal.
- Tidak ada error pada proses rendering komponen.
- Seluruh assertion berhasil dijalankan.
- Proses pengujian selesai dengan exit code 0.

### 7.5. Testing Scenarios

Beberapa skenario pengujian frontend yang digunakan atau dapat dikembangkan:

| No. | Test Scenario | Expected Result |
|---|---|---|
| 1 | Login form rendering | Form login berhasil ditampilkan |
| 2 | User input | Input pengguna dapat dimasukkan |
| 3 | Successful login | Proses login berhasil ditangani |
| 4 | Failed login | Kegagalan login ditangani dengan benar |

### 7.6. Unit Testing Troubleshooting

Jika mengalami kendala ketika menjalankan unit test, periksa beberapa hal berikut:

**Error: `document is not defined`**

Penyebab: Lingkungan pengujian belum menggunakan DOM environment.

Solusi: Pastikan konfigurasi berikut tersedia di `vite.config.js`:

```javascript
test: {
  environment: 'jsdom',
}
```

**Error: Cannot find module**

Penyebab: Dependency belum terinstall atau terdapat dependency yang tidak tersedia.

Solusi:

```bash
npm ci
```

**Unit test tidak ditemukan**

Penyebab: File pengujian tidak sesuai dengan pola penamaan yang dikenali Vitest.

Solusi: Gunakan ekstensi yang sesuai, misalnya:

```text
login.test.jsx
login.spec.jsx
```

Kemudian jalankan kembali:

```bash
npm test
```

## 8. Code Quality and Production Build

### 8.1. Run ESLint

Untuk memeriksa kualitas kode:

```bash
npm run lint
```

ESLint digunakan untuk mendeteksi potensi kesalahan dan masalah konsistensi kode.

### 8.2. Build Production

Untuk membuat production build:

```bash
npm run build
```

Vite akan menghasilkan file production pada direktori:

```text
frontend/dist/
```

Direktori tersebut berisi file statis yang siap disajikan oleh web server.

### 8.3. Preview Production Build

Untuk melihat hasil production build secara lokal:

```bash
npm run preview
```

## 9. Docker and Docker Compose

Aplikasi frontend dapat dijalankan menggunakan Docker dan Docker Compose.

### 9.1. Build Docker Image

Jalankan dari root repository:

```bash
docker compose build
```

### 9.2. Run Application

```bash
docker compose up --build -d
```

### 9.3. Access Application

Buka browser:

```text
http://localhost:8080
```

### 9.4. Check Container Status

```bash
docker compose ps
```

### 9.5. View Container Logs

```bash
docker compose logs -f frontend
```

### 9.6. Stop Application

```bash
docker compose down
```

### 9.7. Docker Image Version

Image frontend:

```text
contact-management-frontend:v1.0.0
```

Catatan: Perintah Docker Compose di atas mengasumsikan konfigurasi `frontend/Dockerfile`, `frontend/nginx.conf`, dan `compose.yaml` sudah dibuat sesuai dokumentasi containerization proyek.

## 10. CI/CD Pipeline

Proyek menggunakan GitHub Actions untuk mengotomatisasi proses Continuous Integration.

Workflow CI digunakan untuk menjalankan proses build dan unit testing secara otomatis ketika terdapat perubahan pada repository.

### 10.1. Pipeline Objectives

- Memastikan aplikasi dapat dibangun tanpa error.
- Menjalankan unit test secara otomatis.
- Memeriksa kualitas kode.
- Mempercepat proses CI melalui parallel jobs.
- Mengurangi waktu instalasi dependency melalui dependency caching.

### 10.2. Pipeline Execution

Pipeline dapat dipicu melalui:

- Push ke branch `main`.
- Pull Request menuju branch `main`.

### 10.3. Pipeline Jobs

| Job | Description |
|---|---|
| Build | Memastikan production build berhasil |
| Test | Menjalankan unit testing menggunakan Vitest |

### 10.4. Dependency Cache

Dependency caching digunakan untuk menyimpan cache npm agar proses instalasi dependency pada workflow berikutnya dapat berjalan lebih efisien.

### 10.5. Parallel Jobs

Build dan Test dapat dijalankan secara paralel apabila tidak memiliki ketergantungan satu sama lain.

Dokumentasi lebih lanjut mengenai optimasi pipeline dapat dilihat pada:

`CI-DOCUMENTATION.md`

## 11. Troubleshooting

### Port Already in Use

Jika port `8080` sudah digunakan:

Ubah konfigurasi port pada `compose.yaml`:

```yaml
ports:
  - "8081:80"
```

Akses aplikasi melalui:

```text
http://localhost:8081
```

### Docker Container Not Running

Periksa status container:

```bash
docker compose ps -a
```

Periksa log:

```bash
docker compose logs frontend
```

### Docker Build Failed

Bangun ulang image:

```bash
docker compose build --no-cache
```

Kemudian jalankan:

```bash
docker compose up -d
```

### Unit Test Failed

Jalankan kembali pengujian:

```bash
cd frontend
npm ci
npm test
```

Periksa pesan error untuk mengetahui penyebab kegagalan pengujian.

---

## Author and Repository

**Repository:** [reactjs-contact-management](https://github.com/fzsptr/reactjs-contact-management)

**Platform:** GitHub

**Project:** React Contact Management

**Documentation:** README.md
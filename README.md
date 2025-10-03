# Monorepo Vue + Express

## Project

- **Frontend**: Vue 3 (Vite) pada folder `client`
- **Backend**: Express.js (ES Modules) pada folder `api`
- **Database**: PostgreSQL

---

## Quickstart

### 1. Clone & Install

```bash
git clone https://github.com/fajarhidayad/fullstack-todo-vue
cd fullstack-todo-vue

# Frontend
cd client && npm install && cd ..

# Backend
cd api && npm install && cd ..
```

### 2. Konfigurasi Environment

Salin file `.env.example` menjadi `.env` di masing-masing folder (`client` & `api`).

**api/.env**

```env
PORT=4000
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
```

**client/.env**

```env
VITE_API_URL=http://localhost:4000
```

Pastikan PORT api dan VITE_API_URL memiliki nilai yang sama

### 3. Setup Database

Gunakan PostgreSQL (contoh Docker):

Buat database baru pada Database Postgres sesuai dengan nilai `.env` `DATABASE_NAME`
Lalu menjalankan perintah migrasi

```bash
cd api
npm run db:migrate
```

---

## 🛠️ Development

**Backend**

```bash
cd api
npm run dev   # http://localhost:4000
```

**Frontend**

```bash
cd client
npm run dev   # http://localhost:5173
```

---

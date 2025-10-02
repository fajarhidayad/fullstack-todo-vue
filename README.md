# Monorepo Vue + Express

## Project

- **Frontend**: Vue 3 (Vite) pada folder `client`
- **Backend**: Express.js (ES Modules) pada folder `api`
- **Database**: PostgreSQL

---

## Quickstart

### 1. Clone & Install

```bash
git clone <repo-url>
cd <repo-folder>

# Frontend
cd client && npm install && cd ..

# Backend
cd api && npm install && cd ..
```

````

### 2. Konfigurasi Environment

Salin file `.env.example` menjadi `.env` di masing-masing folder (`client` & `api`).

**api/.env**

```env
PORT=4000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=appdb
DB_USER=appuser
DB_PASS=apppass
```

**client/.env**

```env
VITE_API_BASE_URL=http://localhost:4000
```

### 3. Setup Database

Gunakan PostgreSQL (contoh Docker):

```yaml
# docker-compose.yml
version: '3.9'
services:
  db:
    image: postgres:16
    environment:
      POSTGRES_DB: appdb
      POSTGRES_USER: appuser
      POSTGRES_PASSWORD: apppass
    ports:
      - '5432:5432'
```

Jalankan:

```bash
docker compose up -d
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

## 📦 Production Build

**Backend**

```bash
cd api
npm run start
```

**Frontend**

```bash
cd client
npm run build
npm run preview
```
````

# PMT-BARA (Putra Mulia Telecommunication - Technical Assessment)

Proyek ini dibuat sebagai bagian dari technical test oleh **PT. Putra Mulia Telecommunication**.

## Tech Stack
- Node.js: v24.21.0
- Express.js: v5.2.1
- PostgreSQL: 16-alpine
- Docker & Docker Compose

## Struktur
- `Dockerfile`: image aplikasi (node 24.21.0-alpine)
- `docker-compose.yml`: integrasi 1 network (`pmt-bara-network`) dengan volume persisten
- `.env`: kredensial database (tidak dipublikasikan, sudah di `.gitignore`)
- `.gitignore`: `.env`, `node_modules/`, `*.log`

## Instruksi
```bash
docker-compose up --build
```

Port aplikasi: `3000` | Port database: `5432`

## Catatan Penting
- Kredensial tersimpan di `.env` dan TIDAK akan dipublikasikan ke repository publik (sesuai regulasi PDP).
- Volume persisten (`postgres_data`, `node_modules`) menyimpan data di localhost.
- Semua layanan terintegrasi dalam 1 network (`pmt-bara-network`).

---
*Disiapkan untuk evaluasi teknikal PT. Putra Mulia Telecommunication.*

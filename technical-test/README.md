# Technical Test - PT PMT Indonesia

## Struktur
- q1-api/    : Backend API subscriber usage (Express, in-memory)
- q2-automation/ : Cron snapshot CSV + cleanup (>30 hari)
- q3-sql/    : SQL queries
- q4-troubleshoot/ : Bug fix reduce + penjelasan

## Q1 - Jalankan API
```bash
cd q1-api
node server.js
```

## Q2 - Otomasi
Tambahkan ke crontab:
```
0 8,12,15 * * * python3 /.../snapshot.py

Script cleanup:
python3 /.../cleanup.py
```

## Urutan Cek Manual
1. Q4: `q4-troubleshoot/fix.js` (reduce + return + initial value)
2. Q3: `q3-sql/queries.sql`
3. Q1: `npm install express` → `PORT=3001 node server.js` → `curl POST/GET /usage` → `curl /usage/SUB01`
4. Q2: `cat cron.txt` → `python3 snapshot.py` (dry run) → `python3 cleanup.py`

## Instruksi Menjalankan & Menguji (Manual)
1. **Q4**: Buka `q4-troubleshoot/fix.js` → verifikasi `reduce` memiliki `0` dan `return total`
2. **Q3**: Buka `q3-sql/queries.sql` → jalankan setiap query secara manual
3. **Q1 (API)**:
   - `cd q1-api`
   - `npm install express`
   - `PORT=3001 node server.js`
   - `curl -X POST http://localhost:3001/usage -H "Content-Type: application/json" -d '{"subscriberId":"SUB01","callMinutes":40,"smsCount":10,"dataUsageMB":1500}'`
   - `curl http://localhost:3001/usage` (semua data)
   - `curl http://localhost:3001/usage/SUB01` (filter subscriber)
4. **Q2 (Otomasi)**:
   - `cat q2-automation/cron.txt`
   - `python3 q2-automation/snapshot.py` (dry run, akan membuat file CSV di snapshots/)
   - `python3 q2-automation/cleanup.py` (hapus CSV > 30 hari)

## Q3 - SQL
Lihat `q3-sql/queries.sql`

## Q4 - Bug
Lihat `q4-troubleshoot/fix.js` dan `README.md`

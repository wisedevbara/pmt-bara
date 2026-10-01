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

## Q3 - SQL
Lihat `q3-sql/queries.sql`

## Q4 - Bug
Lihat `q4-troubleshoot/fix.js` dan `README.md`

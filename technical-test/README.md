# Technical Test — PT Putra Mulia Telecommunication (PMT) Indonesia

This repository contains the complete submission for the technical assessment. The solution is organized into four structured modules (Q1–Q4) with a single root-level `README.md`, an in-memory backend, automated CSV snapshotting, SQL reference queries, a documented bug fix, and a verified manual test sequence.

---

## Project Structure

| Module | Description | Key Artifacts |
|--------|-------------|---------------|
| `q1-api/` | Subscriber Usage Backend Service | `server.js`, `README.md` |
| `q2-automation/` | Usage Snapshot Automation | `cron.txt`, `snapshot.py`, `cleanup.py` |
| `q3-sql/` | SQL Reference & Aggregation Queries | `queries.sql` |
| `q4-troubleshoot/` | Root Cause Analysis & Fix | `fix.js`, `README.md` |

---

## Q1 — Subscriber Usage API

A lightweight Express-based backend that records and retrieves subscriber usage records. Storage is in-memory. The endpoint design follows REST conventions with explicit request/response contracts.

### Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/usage` | Record a new usage entry |
| `GET` | `/usage` | Retrieve all usage records |
| `GET` | `/usage/:subscriberId` | Retrieve records for a specific subscriber |

### Running the Service

```bash
cd q1-api
npm install express
PORT=3001 node server.js
```

### Verification Commands

```bash
curl -X POST http://localhost:3001/usage \
  -H "Content-Type: application/json" \
  -d '{"subscriberId":"SUB01","callMinutes":40,"smsCount":10,"dataUsageMB":1500}'

curl http://localhost:3001/usage
curl http://localhost:3001/usage/SUB01
```

---

## Q2 — Usage Snapshot Automation

A cron-driven automation pipeline that captures subscriber usage snapshots and enforces retention policies.

### Scheduling (WIB)

```
0 8,12,15 * * * python3 q2-automation/snapshot.py
```

### File Naming Convention

`snapshot_YYYYMMDD_HHMMSS.csv`

### Scripts

- `snapshot.py` — writes current subscriber usage to CSV.
- `cleanup.py` — removes CSV files older than 30 days.

---

## Q3 — Subscriber & Usage SQL

Reference SQL queries (`q3-sql/queries.sql`) covering:

1. Insert subscriber (`Fajar`, Basic, 24-Jan-2024).
2. Update plan to Premium.
3. Aggregate `dataUsageMB` for Premium subscribers.
4. Top 3 subscribers by total data usage.
5. Subquery: average `callMinutes` per snapshot `<= 30`.

---

## Q4 — Troubleshoot & Explain

### Issue
`getTotalUsageMB` used `reduce` without an initial accumulator (`0`) and without returning the accumulated total.

### Fix (`q4-troubleshoot/fix.js`)
Added `0` initial value and `return total` inside the reducer.

### Prevention
Unit tests for accumulator functions combined with static analysis rules prevent this class of bug.

---

## Manual Test Sequence

1. **Q4** — Inspect `q4-troubleshoot/fix.js`; confirm `reduce` uses `0` and returns `total`.
2. **Q3** — Inspect `q3-sql/queries.sql`; validate each query statement.
3. **Q1** — `npm install express` → `PORT=3001 node server.js` → `curl` POST, GET all, GET by subscriber.
4. **Q2** — `cat q2-automation/cron.txt` → `python3 snapshot.py` (dry-run) → `python3 cleanup.py`. 

---

## Documentation & Setup

- `README.md` explains backend operation and automation setup.
- Each module includes local documentation (`q1-api/README.md`, `q4-troubleshoot/README.md`).
- Configuration is explicit; no hidden dependencies.

---

## Repository Status

All files committed to a local Git repository (`.git` initialized with root commit). `.gitignore` excludes `node_modules/`, `snapshots/*.csv`, `*.log`, and `.env`.

---

*Direct execution preferred — verified artifacts only, no abstract deployment descriptions.*

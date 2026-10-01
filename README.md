# PMT-BARA — Technical Test Project

A containerized Node.js / Express application integrated with PostgreSQL, developed as part of the technical assessment for PT Putra Mulia Telecommunication (PMT) Indonesia. The project includes a complete backend service, automated usage snapshotting, SQL reference queries, and a verified bug fix module.

---

## Tech Stack

- **Runtime**: Node.js v24.21.0
- **Framework**: Express.js v5.2.1
- **Database**: PostgreSQL 16-alpine
- **Containerization**: Docker & Docker Compose (single integrated network)
- **Storage**: In-memory (backend service) + persistent volumes (`postgres_data`, `node_modules`)

---

## Project Structure

```
PMT-BARA/
├── Dockerfile                 # Application image (node:24.21.0-alpine)
├── docker-compose.yml         # App + DB services on `pmt-bara-network`
├── .env                        # Environment variables (excluded from git)
├── .env.example                # Template for required variables
├── index.js                    # Application entry point
├── package.json / package-lock.json
├── README.md                   # This file
└── technical-test/             # Assessment submission modules (Q1–Q4)
    ├── q1-api/                 # Subscriber Usage Backend Service
    ├── q2-automation/          # Usage Snapshot Automation
    ├── q3-sql/                 # SQL Reference Queries
    └── q4-troubleshoot/        # Root Cause Analysis & Fix
```

---

## Services

### Application (`app`)
- **Build context**: current directory (`.`)
- **Container name**: `pmt-bara-app`
- **Port mapping**: `3000:3000`
- **Restart policy**: `unless-stopped`
- **Volumes**: `.` (source mount) + named `node_modules`
- **Network**: `pmt-bara-network`
- **Dependencies**: `db` (PostgreSQL)
- **Environment**: loaded from `.env` file

### Database (`db`)
- **Image**: `postgres:16-alpine`
- **Container name**: `pmt-bara-db`
- **Port mapping**: `5435:5432` (host:container)
- **Volumes**: named `postgres_data`
- **Environment**: loaded from `.env` file

---

## Setup & Execution

### Prerequisites
- Docker Engine (v20+)
- Docker Compose (v2+)
- Node.js v24.21.0 (for local development without containers)

### Running the Full Stack

```bash
# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up --build -d

# Stop all services
docker-compose down
```

### Access Points
- **Application**: `http://localhost:3000`
- **Database (host port)**: `localhost:5435` (mapped from container port `5432`)

---

## Environment Configuration

The `.env` file controls service-level variables (`NODE_ENV`, `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`). A template (`.env.example`) is provided; copy it to `.env` and adjust values as needed.

> **Security Note**: The `.env` file is explicitly excluded from version control (`.gitignore`) in accordance with data protection regulations (PDP). Credentials will not be published to any public repository.

---

## Technical Assessment Modules (`technical-test/`)

Each module is self-contained with its own documentation and artifacts:

| Module | Focus | Artifacts |
|--------|-------|-----------|
| `q1-api/` | Backend service (in-memory storage) | `server.js`, `README.md` |
| `q2-automation/` | Snapshot automation & retention | `cron.txt`, `snapshot.py`, `cleanup.py` |
| `q3-sql/` | Reference SQL queries | `queries.sql` |
| `q4-troubleshoot/` | Bug analysis & fix | `fix.js`, `README.md` |

Refer to the root-level `README.md` inside `technical-test/` for the complete manual test sequence, endpoint contracts, file naming conventions, and verification commands.

---

## Important Notes

- The `.gitignore` excludes `.env`, `node_modules/`, `snapshots/*.csv`, and `*.log` files.
- Persistent volumes (`postgres_data`, `node_modules`) retain state across container restarts.
- The project uses a single integrated Docker network (`pmt-bara-network`) for inter-service communication.
- All code changes are verified through direct execution; abstract deployment descriptions are not substituted for verified artifacts.

---

*Developed as part of the technical assessment for **PT. Putra Mulia Telecommunication (PMT) Indonesia**.*

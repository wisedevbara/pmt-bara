# PMT-BARA

## Tech Stack
- Node.js: v24.21.0
- Express.js: v5.2.1
- PostgreSQL: 16-alpine
- Docker & Docker Compose

## Structure
- `Dockerfile`: application image (node 24.21.0-alpine)
- `docker-compose.yml`: integrated single network (`pmt-bara-network`) with persistent volumes
- `.env`: database credentials (not published, excluded via `.gitignore`)
- `.gitignore`: `.env`, `node_modules/`, `*.log`

## Instructions
```bash
docker-compose up --build
```

Application port: `3000` | Database port: `5432`

## Important Notes
- Credentials are stored in `.env` and will NOT be published to any public repository (in compliance with data protection regulations).
- Persistent volumes (`postgres_data`, `node_modules`) retain data on localhost.
- All services are integrated within a single network (`pmt-bara-network`).

---
*This project was developed as part of a technical assessment by **PT. Putra Mulia Telecommunication**.*

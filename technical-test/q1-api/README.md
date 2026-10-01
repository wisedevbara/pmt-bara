# Q1 - Subscriber Usage API

## Endpoints
- POST /usage - record usage (body: subscriberId, callMinutes, smsCount, dataUsageMB)
- GET /usage - retrieve all
- GET /usage/:subscriberId - retrieve per subscriber

## Run
node server.js

const express = require('express');
const app = express();
app.use(express.json());

// In-memory storage
const usageRecords = [];

// POST /usage - record subscriber usage
app.post('/usage', (req, res) => {
  const { subscriberId, callMinutes, smsCount, dataUsageMB } = req.body;
  if (!subscriberId || callMinutes == null || smsCount == null || dataUsageMB == null) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const record = { subscriberId, callMinutes, smsCount, dataUsageMB, timestamp: new Date().toISOString() };
  usageRecords.push(record);
  res.status(201).json({ message: 'Usage recorded', data: record });
});

// GET /usage - retrieve all usage records
app.get('/usage', (req, res) => {
  res.json({ count: usageRecords.length, records: usageRecords });
});

// GET /usage/:subscriberId - retrieve for specific subscriber
app.get('/usage/:subscriberId', (req, res) => {
  const filtered = usageRecords.filter(r => r.subscriberId === req.params.subscriberId);
  res.json({ subscriberId: req.params.subscriberId, records: filtered });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Usage API running on port ' + PORT));

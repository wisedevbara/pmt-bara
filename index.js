const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'OK', node: process.version, express: '5.2.1', project: 'PMT-BARA' });
});

app.listen(PORT, () => {
  console.log(`PMT-BARA running on port ${PORT}`);
});

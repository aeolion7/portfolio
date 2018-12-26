const express = require('express');
const app = express();
const path = require('path');
const PORT = 716;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log('App listening on port', PORT);
});

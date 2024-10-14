const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set the Content-Type header for the apple-app-site-association file
app.use('/.well-known/apple-app-site-association', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.join(__dirname, '.well-known', 'apple-app-site-association'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
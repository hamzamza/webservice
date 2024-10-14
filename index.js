const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve apple-app-site-association file
app.get('/apple-app-site-association', (req, res) => {
  // Log the request to indicate the route is hit
  console.log('Received request for /apple-app-site-association');

  // Resolve the absolute file path
  const filePath = path.resolve(__dirname, 'apple-app-site-association');
  
  // Log the resolved file path to verify it
  console.log(`Attempting to serve file from: ${filePath}`);
  
  res.setHeader('Content-Type', 'application/json');
  
  // Send the file and handle any potential errors
  res.sendFile(filePath, (err) => {
    if (err) {
      // Log the error message and details
      console.error('Error sending file:', err);
      
      // Respond with the appropriate error code and message
      res.status(err.status || 500).send('File not found or server error');
    } else {
      // Log success if the file is successfully sent
      console.log(`Successfully sent file from: ${filePath}`);
    }
  });
});

// Start the server and log the startup details
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
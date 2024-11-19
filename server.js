const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'assets' folder.
app.use(express.static(path.join(__dirname, 'assets')));

// Serve the landing page when the rool URL is accessed.
app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server

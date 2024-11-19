import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import open from 'open';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;

// Serve static files from the 'assets' folder.
app.use(express.static(path.join(__dirname, 'assets')));

// Serve the landing page when the root URL is accessed.
app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    open(`http://localhost:${port}`)
    console.log(`Server running at http://localhost:${port}`);
});
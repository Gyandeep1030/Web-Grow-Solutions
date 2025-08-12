import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.get('/api/ping', (_req, res) => {
  res.json({ message: 'Hello from Express server!' });
});

app.get('/api/demo', (_req, res) => {
  res.json({ 
    message: 'Demo API endpoint',
    timestamp: new Date().toISOString()
  });
});

// Serve static files from the React app
const clientBuildPath = path.join(__dirname, '../dist/spa');
app.use(express.static(clientBuildPath));

// Handle React routing, return all requests to React app
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

export default app;

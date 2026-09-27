const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  // Extract path and decode URL
  let cleanUrl = req.url.split('?')[0].split('#')[0];
  try {
    cleanUrl = decodeURIComponent(cleanUrl);
  } catch (e) {}

  // Healthcheck endpoint
  if (cleanUrl === '/health' || cleanUrl === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
    return;
  }

  // Routing defaults
  if (cleanUrl === '/' || cleanUrl === '') cleanUrl = '/index.html';
  if (cleanUrl === '/cart') cleanUrl = '/cart.html';

  let filePath = path.join(__dirname, cleanUrl);

  // Security: prevent directory traversal
  const relative = path.relative(__dirname, filePath);
  if (relative.startsWith('..') || path.isAbsolute(relative) === false && relative.startsWith('/')) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  // Check file existence
  if (!fs.existsSync(filePath)) {
    if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    } else {
      // Fallback to index.html for SPA/clean URLs
      filePath = path.join(__dirname, 'index.html');
    }
  }

  // If path is a directory, serve index.html inside it
  try {
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }
  } catch (e) {}

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      return;
    }

    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'X-Content-Type-Options': 'nosniff'
    };

    if (ext === '.html') {
      headers['Cache-Control'] = 'no-cache, must-revalidate';
    } else if (['.jpg', '.jpeg', '.png', '.webp', '.svg', '.ico'].includes(ext)) {
      headers['Cache-Control'] = 'public, max-age=604800, immutable';
    } else {
      headers['Cache-Control'] = 'public, max-age=86400';
    }

    res.writeHead(200, headers);
    res.end(content);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`ER PARFUM web server running on http://${HOST}:${PORT}`);
});

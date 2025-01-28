const http = require('http');

const port = 3000;

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/api/greeting') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ message: 'Hello! This is your GET API response AMAN.' }));
//     } else {
//         res.writeHead(404, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ error: 'Not Found' }));
//     }
// });

module.exports = (req, res) => {
    if (req.method === 'GET' && req.url === '/api/greeting') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello! This is your GET API response.' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
};


server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

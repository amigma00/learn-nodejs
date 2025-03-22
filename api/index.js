module.exports = (req, res) => {
    if (req.method === 'GET' && req.url === '/api/greeting') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello! This is your GET API response. I am Aman Ali' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
};

/*
const http = require('node:http');

const IP = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Ciao! Il server risponde.');
    } else if (req.url === '/saluto') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Pagina non trovata.');
    }
});

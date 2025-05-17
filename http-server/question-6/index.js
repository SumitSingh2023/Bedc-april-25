const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.statusCode = 200
        res.setHeader('Content-Type','text/plain')
        res.end('Welcome to Home page')
    } else if (req.url == '/about') {
        res.statusCode=200
        res.setHeader('Content-Type','text/html')
        res.end('<h2>Welcome to About page</h2>')
    } else if (req.url == '/contact') {
        res.statusCode=200
        res.setHeader('Content-Type','text/html')
        res.end('<a href="https://www.masaischool.com" target="_blank">Contact Us</a>')

    } else if (req.url == '/index') {
        fs.readFile('index.js','utf-8', (err, data) => {
            if (err) {
                res.statusCode=500
                res.setHeader('Content-Type','text/plain')
                res.end('error in handling the file')
            } else {
                res.statusCode=200
                res.setHeader('Content-Type','text/plain')
                res.end(data)
            }
        })

    } else {
        res.statusCode=400
        res.setHeader('Content-Type','text/html')
        res.end('<h2>404 page not found</h2>')
    }

})

server.listen(8080, () => {
    console.log('server is running on port 8080')
})
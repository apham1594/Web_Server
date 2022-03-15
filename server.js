const http = require('http')
const port = 3000
const fs = require('fs')

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('Hello World')
})


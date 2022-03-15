const http = require('http')

const fs = require('fs')
const port = 7000

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }) 
    fs.readFile('index.html', function (error, data) {
        if (error) {
            res.write(404, { 'Content-Type': 'text/html' })
            res.write('Error: File could not be found')
        } else {
            res.write(data)
        }
        res.end()
    })
})
server.listen(port, function (error) {
    if (error) {
        console.log('Something Went Wrong',error)
    } else {
        console.log('Server is working')
    }
})


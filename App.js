const http = require('http')
const fs = require ('fs')
const port= 3005

const server = http.createServer( function(req,res){
    res.writeHead(200, { 'Content-type' :'text/html' })
    fs.readFile('index.html', function(error, data){
        if (error){
            res.writeHead(404)
            res.write('error : File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error){
    if (error){
        console.log('Server down')
    } else {
        console.log('server is running with port' + port)
    }
})
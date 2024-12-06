
const port=process.env.PORT || 3000

const http=require('./app')
const server= require('http').createServer(http)

server.listen(port, () => {
    console.log('server is runnign on port', port)
})

const port=process.env.PORT || 3000

const app=require('./app')
const server= require('http').createServer(app)

server.listen(port, () => {
    console.log('server is runnign on port', port)
})
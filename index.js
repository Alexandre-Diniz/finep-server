const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const SearchRoutes = require('./src/routes/Search')
const ProfileRoutes = require('./src/routes/Profile')
const TokenRoutes = require('./src/routes/Token')
const onFollowers =  require('./src/sockets/onFollowers')

const app = express()
app.use(cors())
app.use(express.json())

//rotas
app.use('/search/', SearchRoutes)
app.use('/profiles/', ProfileRoutes)
app.use('/token/', TokenRoutes)

const server = http.createServer(app)

const io = new Server(server)

io.on('connection', socket=>{
  console.log('nova conexao')

  socket.on('profileID', profileID=>{
    console.log('profileID: ',profileID)
    onFollowers(socket, profileID)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
})

const PORT = process.env.PORT || 3001

server.listen(PORT, ()=>{
  console.log(`server running on port ${PORT}`)
})


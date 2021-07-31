const { server, io } = require('./src/services/app')
const onFollowers = require('./src/sockets/onFollowers')
const { onUpdateProfiles } = require('./src/sockets/onUpdatepProfiles')

io.on('connection', socket=>{
  console.log('nova conexao')

  socket.on('profileID', profileID=>{
    console.log('profileID: ',profileID)
    onFollowers(socket, profileID)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('profiles_update', async ()=>{
    try {
      onUpdateProfiles(socket)
    } catch (error) {
      console.error(error)
    }
  })

  socket.on('remove_profiles_update',()=>{
    socket.removeAllListeners('profiles_update')
  })
})

const PORT = process.env.PORT || 3001

server.listen(PORT, ()=>{
  console.log(`server running on port ${PORT}`)
})


const express = require('express')
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io')

const SearchRoutes = require('../routes/Search')
const ProfileRoutes = require('../routes/Profile')
const TokenRoutes = require('../routes/Token')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/search/', SearchRoutes)
app.use('/profiles/', ProfileRoutes)
app.use('/token/', TokenRoutes)

const server = http.createServer(app)

const io = new Server(server)

module.exports = { app, server, io}
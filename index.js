// implement your API here
const express = require('express')

const db = require('./data/db')
const server = express();

const PORT = 9000

server.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

server.listen(PORT, () => {
console.log(`Server is listening on port ${PORT}`)
})
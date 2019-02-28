// implement your API here
const express = require('express')
const server = express();
const parser = express.json()


const PORT = 9000
const db = require('./data/db')


//*************
// middleware 
//*************
//server.use(express.json())
server.use(parser)





server.listen(PORT, () => {
console.log(`Server is listening on port ${PORT}`)
})


server.post('/api/users', (req, res) => {
  if (req.body.name && req.body.bio) {
    const { name, bio } = req.body
    db.insert({ name, bio })
      .then(user => res.status(201).json(user))
      .catch(err =>
        res.status(500).json({
          error: 'There was an error while saving the user to the database'
        })
      )
  } else {
    res.status(400).json({ error: 'Please provide name and bio for the user.' })
  }
})
// get endpoints
server.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})


server.get('/hobbits', (req, res) => {
  const hobbits = [
    {
      id: 1,
      name: 'samwize Gamgee'
    },
    {
      id: 2,
      name: 'frodo Baggins'
    }
  ]

  res.status(200).json(hobbits)
})

server.get('/stuff', (req, res) => {
  res.send(200, { message: 'request received'});
});


// server.get('/greet/:name', (req, res) => {
//   const name = req.params.name;
//   res.send(`Hello There ${name}!`);
// });
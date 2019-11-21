const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// Enabling cross-origin resource sharing for requests with cors-middleware
app.use(cors())
// Enabling bodyParser for accessing the request data for post request
app.use(bodyParser.json())

// Hard coded test scores. Will remain when the server is shut down
let scores = [
  {player: 'Player1', points: 100}, 
  {player: 'Player2', points: 200}, 
  {player: 'Player3', points: 350}
]

// Upon a get request to .../scores sends a response with the scores array in json
app.get('/scores', (req, res) => {
  res.json(scores)
})

/* Upon a post request to .../scores takes the request data and creates a new score.
   Adds the new score to the scores array and responds with the added score in json */
app.post('/scores', (req, res) => {
  const body = req.body
  
  const score = {
    player: body.player,
    points: body.points
  }
  scores = scores.concat(score)
  res.json(score)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
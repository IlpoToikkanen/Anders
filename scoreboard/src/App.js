import React, { useState, useEffect } from 'react'
import ScoreForm from './components/ScoreForm'
import ScoreList from './components/ScoreList'
import scoreService from './services/scoreService'



const App = () => {
  // The state in which all the scores are stored
  const [scores, setScores] = useState([])
  // State responsible for storing the contents of the "Player" input field
  const [newPlayer, setNewPlayer] = useState('')
  // State responsible for storing the contents of the "Points input" field
  const [newPoints, setNewPoints] = useState('')
  // State which tells whether to sort the scores from highest to lowest (true) or lowest to highest
  const [sorted, setSorted] = useState(true)

  // Loads the scores for the first time. Only executed once in the beginning
  useEffect(() => {

    // Using scoreService to get scores data from the server and setting the data to scores state
    scoreService.getAll().then(data => {
      setScores(data)
    })
  }, [])

  // Creating a new score, adding it to the scores state and resetting the input fields
  const addScore = event => {
    event.preventDefault()

    // Checking that the "Player" and "Points" input fields are not empty and that "Points" input is a number
    if (newPlayer && newPoints && !isNaN(+newPoints)) {
      // Creating the new score object that is to be added
      const newScore = {
        player: newPlayer,
        points: +newPoints
      }

      // Using scoreService to create a new score which is sent to the server
      scoreService.create(newScore).then(addedScore => {
        // Upon successful creation, scores state is replaced to contain the new score and input fields reset to empty
        setScores(scores.concat(addedScore))
        setNewPlayer('')
        setNewPoints('')
      })
    } else {
      console.log('name missing, points missing or invalid type of points')
    }
  }
  
  // Storing the changes in "Player" input field to the appointed state
  const handlePlayerChange = event => {
    setNewPlayer(event.target.value)
  }

  // Storing the changes in "Points" input field to the appointed state
  const handlePointsChange = event => {
    setNewPoints(event.target.value)
  }

 // A function that returns a suitable button depending on the current sorting of the score list
  const scoreButton = () => {
    if (!sorted) {
      return <button onClick={() => setSorted(!sorted)}>Sort by highest</button>
    } else {
      return <button onClick={() => setSorted(!sorted)}>Sort by lowest</button>
    }
  }

  // Returns the content that is to be visible for the app user
  return (
    <div>
      <h1>Scoreboard</h1>
      <ScoreList scores={scores} sorted={sorted} />
      {scoreButton()}
      <ScoreForm 
        newPlayer={newPlayer}
        newPoints={newPoints}
        addScore={addScore} 
        handlePlayerChange={handlePlayerChange}  
        handlePointsChange={handlePointsChange} 
      />
    </div>
  );
}


// Hardcoded scores for testing the app

export default App;

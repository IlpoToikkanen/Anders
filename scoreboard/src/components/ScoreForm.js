import React from 'react'

// Component that returns the fields and submit mechanism required for creating a new score
const ScoreForm = ({newPlayer, newPoints, addScore, handlePlayerChange, handlePointsChange}) => {
  
  return (
    <>
    <h2>add a new score</h2>
    <div>
      <form onSubmit={addScore}>
        <div>
          Player:{' '}
          <input type='text' value={newPlayer} onChange={handlePlayerChange}></input>
        </div>
        <div>
          Points:{' '}
          <input type='text' value={newPoints} onChange={handlePointsChange}></input>
        </div>
        <button type="submit">add</button>
      </form>
    </div>
    </>
  )
}

export default ScoreForm
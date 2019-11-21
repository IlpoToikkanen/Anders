import React from 'react'
import ScoreLine from './ScoreLine'

/* 
    Component, which gets scores array and how the scores should be sorted as parameters.
    Returns the desired score table.
*/
const ScoreList = ({scores, sorted}) => {

  // A copy of the results sorted from highest to lowest
  const highScores = [...scores].sort((a, b) => b.points - a.points)
  // A copy of the results sorted from lowest to highest
  const lowScores = [...scores].sort((a, b) => a.points - b.points)


  // A function that returns the score lines in the desired order
  const listScores = () => {
    if (sorted) {
      // Mapping through the scores and creating the line to be rendered one by one
      return highScores.map(score => (
        <ScoreLine 
          key={Math.random()*1000}
          player={score.player} 
          points={score.points} 
        />
      ))
      } else {
        // Mapping through the scores and creating the line to be rendered one by one
        return lowScores.map(score => (
          <ScoreLine 
            key={Math.random()*1000}
            player={score.player} 
            points={score.points} 
          />
      ))
    }
  }

  // Returns a table containing all player-points matches listed under headers "Player" and "Points"
  return (
  <div>
        <table>
          <thead style={{fontSize: '1.4em', fontWeight: 'bold'}}>
            <tr>
              <td>Player</td>
              <td>Points</td>
            </tr>
          </thead>
          <tbody>
            {listScores()}
          </tbody>
        </table>
  </div> 
  )
}

export default ScoreList
import React from 'react'

// Component responsible for the visuals and creation of a single score line
const ScoreLine = ({player, points}) => {
  // Style for the Player side of the table
  const tdLeftStyle = {
    borderLeft: 'solid black 1px',
    borderBottom: 'solid black 1px',
    paddingRight: '30px'
  }
  // Style for the Points side of the table
  const tdRightStyle = {
    borderLeft: 'solid black 1px',
    borderBottom: 'solid black 1px',
    paddingRight: '10px'
  }

  return (
    <tr style={{fontWeight: 'bold'}}>
      <td style={tdLeftStyle}>{player}</td>
      <td style={tdRightStyle}>{points}</td>
    </tr>
  )
}

export default ScoreLine
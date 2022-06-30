import React from 'react'

function Intervener({children}) {
  const divStyle = {
    padding: 10,
    border: '3px solid red'
  }
  return (
    <div style={divStyle}>{children}</div>
  )
}

export default Intervener
import React from 'react'

function Person({ img, h2, p }) {
  return (
    <div className='person'>
      <img src={img} alt={h2}/>
      <div>
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
    </div>
  )
}

export default Person

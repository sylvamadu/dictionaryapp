import React from 'react'

function Random({word,pronunciation,definition}) {
  return (
    <div className='random-page'>
        <div className="top">
            <h2>{word}</h2>
            <span>{`/${pronunciation}/`}</span>
        </div>
        <div className="definition">
            <h3>Definition</h3>
            <p>{definition}</p>
        </div>
    </div>
  )
}

export default Random
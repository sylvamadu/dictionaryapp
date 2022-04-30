import React from 'react';

function Search({handleOnchange, text, handleSubmit}) {
    console.log(text)
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleOnchange}/>
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default Search
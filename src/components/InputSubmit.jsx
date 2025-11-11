import React, { useState } from 'react'

const InputSubmit = () => {
    const[input, setInput] = useState('');
    const[display, setDisplay] = useState('');
  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter Something to show in button press...' />
      <button onClick={() => setDisplay(input)}>Submit</button>
      <h3>{display}</h3>
    </div>
  )
}

export default InputSubmit

import React, { useState } from 'react'

const InputChange = () => {
    const[input, setInput] = useState('');
  return (
    <div>
      <>
        <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='Write Something to print...'/>
        <h3>{input}</h3>
      </>
    </div>
  )
}

export default InputChange

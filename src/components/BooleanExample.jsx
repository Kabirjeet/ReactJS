import React, { useState } from 'react'

const BooleanExample = () => {
    const[visible, setVisible] = useState(false);
  return (
    <>
        <button onClick={() => setVisible(!visible)}>{(!visible)? "Unhinde" : "Hide"}</button>
        {visible && <h1>Hello</h1>}
    </>
  )
}

export default BooleanExample

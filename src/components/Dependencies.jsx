import React, { useEffect, useState } from 'react'

const Dependencies = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    useEffect(()=>{
        console.log(`count a is ${a}, count b is ${b}, count c is ${c}`);
    },[a,b])
  return (
    <>
        <h1>COUNT of A is {a}</h1>
        <h1>COUNT of B is {b}</h1>
        <h1>COUNT of C is {c}</h1>
        <button onClick={() => {setA(a+1)}}>Increase A</button>
        <button onClick={() => {setB(b+1)}}>Increase B</button>
        <button onClick={() => {setC(c+1)}}>Increase C</button>
    </>
  )
}

export default Dependencies

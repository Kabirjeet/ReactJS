import React, { useEffect, useState } from 'react'

const LocalStorageExample = () => {
    const [name, setName] = useState('');

    useEffect(()=>{
        if(name){
            localStorage.setItem("user", name);
        }
    })

    useEffect(()=>{
        const getName = localStorage.getItem("user");
        if(getName){
            setName(getName)
        }
    })

    const reset = () => {
        localStorage.removeItem("user");
        setName('');
    }

  return (
    <>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>name is {"stranger" || name}</p>
        <button onClick={reset}>Reset</button>
    </>
  )
}

export default LocalStorageExample

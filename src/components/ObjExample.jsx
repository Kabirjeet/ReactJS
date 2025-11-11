import React, { useState } from 'react'

const ObjExample = () => {
    const [data, setData] = useState({
        name:"",
        age:""
    })

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleClick = (e) => {
        e.preventDefault();
        alert(`Hello ${data.name}`)

    }
  return (
    <>
        <input type="text" name='name' value={data.name} onChange={handleChange} placeholder='Write Username...' />
        <input type="number" name='age' value={data.age} onChange={handleChange} placeholder='Write age...' />
        <button onClick={handleClick}>Submit</button>

        {data.name && data.age && <h1>Hello my name is {data.name} and my age is {data.age} </h1>}
    </>
  )
}

export default ObjExample

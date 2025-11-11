import React, { useState } from 'react'

const ArrayExample = () => {
    const [item, setItem] = useState("");
    const [data, setData] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();

        setData([...data, item]);
    }
  return (
    <>
        <input value={item} onChange={(e) => setItem(e.target.value)} type="text" placeholder='Write here to add to the list' />
        <button onClick={handleClick}>Add</button>

        <ul>
            {(data)? data.map((data) => (
                <li>{data}</li>
            )): <p>Data is not added upto now</p>}
        </ul>
    </>
  )
}

export default ArrayExample

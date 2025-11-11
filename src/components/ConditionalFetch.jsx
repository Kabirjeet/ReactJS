import React, { useEffect, useState } from 'react'

const ConditionalFetch = () => {
    const [userId, setUserId] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const result = await response.json();
        console.log(result);
        setData(result);
        // setLoading(false);
        };
        fetchData();
    },[userId])
  return (
    <>
        <button onClick={() => setUserId(1)}>Fetch User 1</button>
        <button onClick={() => setUserId(2)}>Fetch User 2</button>

        {(data) ? <p>{data.name}</p> : <p>Data not found!</p>}
    </>
  )
}

export default ConditionalFetch

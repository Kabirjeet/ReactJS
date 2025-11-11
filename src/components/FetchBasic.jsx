import React, { useEffect, useState } from 'react';

const FetchBasic = () => {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/');
      const result = await response.json();
      console.log(result);
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []); // Fetch only once

  return (
    <>
    {(loading) ? <p>loading...</p> :
      <ul>
        {data?.map((d,index) => (
          <li key={index}>{d.name}</li>
        ))}
      </ul>
    }

      {/* {(data) ? <ul>
        {data?.map((d,index) => (
          <li key={index}>{d.name}</li>
        ))}
      </ul>: <p>loading...</p>} */}
    </>
  );
};

export default FetchBasic;

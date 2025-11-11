import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time, seTime] = useState(0);
    useEffect(()=>{
        if(time >= 5) return;
        const timer = setInterval(() => {
            seTime(prev => prev+1)
        }, 1000);

        return () => clearInterval(timer); // clean up function
    }, [time])
  return (
    <>
        <h1>{time}s</h1>
    </>
  )
}

export default Timer

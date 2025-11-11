import React, { useEffect } from 'react'

const UseEffectBasic = () => {
    useEffect (() => {
        console.log("Component Mounted");
    })
  return (
    <>
        <p>Go to console to check the output</p>
    </>
  )
}

export default UseEffectBasic

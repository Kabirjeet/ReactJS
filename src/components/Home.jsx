import React from 'react'
import Skills from './Skills'
import Data from './Data'
import Card from './Card'

const Home = ({object}) => {
  const style = {
    background: "#3a3a3a",
    color: "#fff"
  }
  return (
    <>
      <div style={style}>
        <h1>Main Home Data</h1>
        <Skills />
        <Data />
      </div>
      <Card object={object}/>
    </>
  )
}

export default Home

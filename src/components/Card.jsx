import React from 'react'

const Card = ({object}) => {
    const style = {
        border: "2px solid black",
        paddingLeft: "50px",
        width: "300px"
    }
  return (
    <div style={style}>
      <h1>{object.name}</h1>
      <p>{object.paragraph}</p>
      <img src={object.image} alt="Image" />
    </div>
  )
}

export default Card

import React, { useEffect, useState } from 'react'

const TitleUpdate = () => {
    const [title, setTitle] = useState("")
    useEffect(() => {
        document.title = title;
    })
  return (
    <>
        <input type="text" onChange={(e) => {setTitle(e.target.value)}} placeholder='Write here to set as title' />
    </>
  )
}

export default TitleUpdate

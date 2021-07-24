import React from "react"
// import Button from "react-bootstrap/Button"

import './postDetails.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const postDetails = () => {
  const handleClick = () => (
    alert (" name: Couch \n" + 
    "\n category: Furniture \n" +
    "\n condition: Excellent \n" )
  )

  return (
    <main>
      <img src='https://www.thespruce.com/thmb/5ZpyukLcBAS448-r2P43k9wDmEs=/3360x2240/filters:fill(auto,1)/signs-to-replace-your-couch-4165258-hero-5266fa7b788c41f6a02f24224a5de29b.jpg' id="couch" onClick={handleClick} />
    </main>
  )
}

export default postDetails


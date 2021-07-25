import React from 'react'
import Button from "react-bootstrap/Button"

import './Modal.css'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none"

  return (
    <div className={showHideClassName}>
      <div id="closeModal" onClick={handleClose}>
      </div>
      <section className="modal-main">
        {/* <section className="modal-header">
        </section> */}
        <div id="modalPicBoxContainer">
          <div className="modalPicBox">
            <img src='https://www.thespruce.com/thmb/5ZpyukLcBAS448-r2P43k9wDmEs=/3360x2240/filters:fill(auto,1)/signs-to-replace-your-couch-4165258-hero-5266fa7b788c41f6a02f24224a5de29b.jpg' className="modalPicBox" />
          </div>
        </div>
        {children}
      </section>
    </div>
  )
}

export default Modal

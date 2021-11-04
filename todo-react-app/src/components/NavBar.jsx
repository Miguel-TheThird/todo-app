import React, { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";


const NavBar = () => {

  const [openModal, setOpenModal] = useState(false)

  const modalHandler = () => {
    setOpenModal(true)
  }

  return (
    <nav>
      <button className={"buttons"} onClick={modalHandler} >Settings</button>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <h4>To-Do List</h4>
      <Link to='/'>
        <button className={"buttons"} >Logout</button>
      </Link>
    </nav>
  )
};

export default NavBar;


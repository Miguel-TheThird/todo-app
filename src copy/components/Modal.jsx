import React from "react";
import "../ModalStyle.css"

function Modal(props) {

    const closeModalHandler = () =>{
        props.setOpenModal(false)
      };

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title"><h1>What Would You Like To Change?</h1></div>
                <div className="body"><p>Sorry This Page Is Under Maintenance, Please Comeback Later!</p></div>
                <div className="footer">
                    <button onClick={closeModalHandler}>Close</button>
                </div>
            </div>
        </div>
    )
};

export default Modal;
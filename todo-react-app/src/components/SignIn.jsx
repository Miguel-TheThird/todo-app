import React, { useState } from "react";
import { Link } from "react-router-dom";
import App from "../App";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function SignIn() {
    const [userName, setUserName] = useState('')
    const [errorMessage, setErrorMessage] = useState('');



    function checkUserName(input) {
        const userInput = /^[A-Za-z]\w{5,14}$/;
        if (input.match(userInput)) {
            return true;
        }
        return false;
    }

    const handleInputChange = (e) => {
        let inputValue = e.target.value;
        console.log(inputValue)
        setUserName(inputValue)
    }


    const handleFormSubmit = (e) => {


        if (!checkUserName(userName)) {
            setErrorMessage(`User Name must be 5 digits long`);
            e.preventDefault();
        }
        setUserName('');

    };


    return (
        <div >
            <form className="signInForm">
                <div className={"sign"} >
                    <label>User Name</label>
                    <input className={"select"} placeholder=" 4+ Characters" type="text" onChange={handleInputChange} value={userName} />
                    <Link to='/dashboard'>
                        <Route path="/dashboard" component={App} /><button className={"buttons"} onClick={handleFormSubmit} type="submit">login</button>
                    </Link>
                    {errorMessage && (<div><p className="error-text">{errorMessage}</p></div>)}

                </div>

            </form>
        </div>
    )

};

export default SignIn;
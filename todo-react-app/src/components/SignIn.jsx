import React, { useState } from "react";
import { Link } from "react-router-dom";
import App from "../App";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function SignIn(){
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const path = "/dashboard"
    

     function checkPassword(input) {
        const userInput = /^[A-Za-z]\w{7,14}$/;
        if (input.match(userInput)) {
          return true;
        }
        return false;
      }

    const handleInputChange = (e) =>{
        let inputValue = e.target.value;
        console.log(inputValue)
        setPassword(inputValue)
    }
      

    const handleFormSubmit = (e) => {
        

        if(!checkPassword(password)) {
          setErrorMessage(`Password must be 4 digits long`);
          e.preventDefault();
        }
        setPassword('');
        
    };
    

    return (
        <div>
        <form className="signInForm">
            <div >
                <label>Name</label>
                <input placeholder="4+ characters" type="text" onChange={handleInputChange}value={password} />
            </div>
            <Link to='/dashboard'>
                <Route path="/dashboard" component={App} /><button onClick={handleFormSubmit} type="submit">login</button>
            </Link>
        </form>
              {errorMessage && (<div><p className="error-text">{errorMessage}</p></div>)}
              </div>
    )

};

export default SignIn;
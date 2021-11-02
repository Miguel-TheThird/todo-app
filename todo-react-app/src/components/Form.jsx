import React from "react";


const Form = (props) => {
    const inputTextHandler = (e) => {
        props.setInputText(e.target.value) // Value of form-input into inputText variable
        
      }
      
      const submitTodoHandler = (e) => {
        e.preventDefault(); //Prevent refresh after submit
        props.setTodos([ //Add following to todos variable
          ...props.todos,{  //Copy whatever existing todos that you have in the state, then add this {} 
            text: props.inputText, //Copy inputText variable from first State***
            completed: false, //All todos will be false at the start
            id: Math.random()*100 //Generate a random id
          }
        ])
        props.setInputText(""); //To get rid of the writing afterpressing sumbit
      }
      
      /* const statusHandler = (e) => {
        props.setStatus(e.target.value)
      } */

    return(
        <section>
              <form>
                <label>Add todo</label>
                <div className="input-wrapper">
                  <input 
                  value={props.inputText} //To keep the UI in sync with the state
                  onChange={inputTextHandler} 
                  type="text" 
                  placeholder="Type to-do here..." 
                  />
                  <button onClick={submitTodoHandler} type="submit">+</button>
                </div>
              </form>
            </section>
    )
};

export default Form;

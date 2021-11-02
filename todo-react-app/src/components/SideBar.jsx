//Parent of ListTodo
import React from "react";
import ListTodo from "./ListTodo"; 


//Now props have access to "todos" variable from state //Map it to create a new ListTodo component
const SideBar = (props) => {
    const statusHandler = (e) => {
        console.log("Something happened!" , e.target.value)
        props.setStatus(e.target.value)
      }

    return(
        <aside>
              <div className="todo-container">
                <label htmlFor="select-status">List of TODOS  </label>
                <select onChange={statusHandler} name="select-status" id="status">
                  <option value="all">All Todos</option>
                  <option value="completed">Completed</option>
                  <option value="uncompleted">Uncompleted</option>
                </select>
              </div>
              <ol>
              {props.filteredTodos.map((todo) =>(
              <ListTodo 
              key={todo.id} 
              text={todo.text} //Text from 1st state goes to the 2dn state through text prop
              todos={props.todos} 
              setTodos={props.setTodos} 
              todo={todo}
              />))} {/* After we gro through each element, pass it to have access to each one and therefore we can get the .id */}

              </ol>
            </aside>
    )
};

export default SideBar;
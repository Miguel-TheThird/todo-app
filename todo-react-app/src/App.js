import React, {useState , useEffect}  from "react"; 
import './App.css';
//Import components
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import SideBar from "./components/SideBar";

function App() {
  //States
  const [inputText, setInputText] = useState(""); //Initial state of the Form input " "
  const [todos, setTodos] = useState([]); //Array to store todos
  //States for filtering
  const [status, setStatus] = useState('all'); //Default 'all'
  const [filteredTodos, setFilteredTodos] = useState([]);//Filtering Todos

  useEffect(() => {
    getLocalTodos(); 
  },[])   

  useEffect(() =>{ filterHandler(); saveLocalTodos();}, [todos,status]) 

  const filterHandler = () => {
     switch (status) {
       case "completed":
         setFilteredTodos(todos.filter((todo) => todo.completed === true))
         break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false))
         break;
         default: setFilteredTodos(todos);
         break;
     }
  }

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
};

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }

  }


  return (
    <div className="App">
      {/* <!--Nav--> */}
      <NavBar />
      <main>
        {/* <!--Form(Main) content--> */}
        <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
        {/* <!--Side bar--> */}
        <SideBar todos={todos} setTodos={setTodos} setStatus={setStatus} filteredTodos={filteredTodos}/> {/* Pass it to keep the UI in sync with the state */}
      </main>
    </div>
  );
}

export default App;

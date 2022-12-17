
import './App.css';
import Header from "./MyComponents/header";
import Todos from "./MyComponents/todos";
import Footer from "./MyComponents/footer";
import About from "./MyComponents/about";
import AddTodo from "./MyComponents/addTodo";
import React, { useState , useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

function App() {
    let initTodo;
    if(localStorage.getItem("todos")===null){
        initTodo=[];
    }
    else{
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    const onDelete = (todo)=>{
        console.log("I am on delete todo",todo);
        // Deleting this way not working in react
        // let index = todos.indexOf(todo);
        // todos.splice(index,1);

        setTodos(todos.filter((e)=>{
            return e!==todo; 
        }));
        localStorage.setItem("todos",JSON.stringify(todos));
    }
    const addTodo = (title,desc)=>{
        let sno;
        if(todos.length===0){
            sno = 0;
        }
        else{
            sno = todos[todos.length-1].sno + 1;
        }
        
        const myTodo = {
            sno : sno,
            title : title,
            desc : desc
        }
        setTodos([...todos,myTodo]);

    }
    const [todos,setTodos] = useState(initTodo);
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos])
    return ( 
        <>
            <Router>
                <Header title="My Todos List" searchbar={false}/>
                <Routes>
                    <Route exact path="/" element={[<AddTodo addTodo={addTodo}/>,<Todos todos={todos} onDelete={onDelete}/>]}/>
                    <Route exact path="/about" element={<About />} />
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
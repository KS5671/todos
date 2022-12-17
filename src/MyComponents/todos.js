import React from 'react'

import TI from './todoItem';

const todos = (props) => {
  const myStyle = {
    minHeight:"100vh",
    margin:"20px auto"
  }
    return ( 
      <div className="container" style={myStyle}>
        <h3 className='my-3'>Todos List</h3>
        {props.todos.length===0 ? "No Todos To Display":
          props.todos.map((todo)=>{
            return <TI todo={todo} onDelete={props.onDelete}/>
          })
        }
      </div>
    )
}

export default todos
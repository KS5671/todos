import React from 'react'

const todoItem = ({todo , onDelete}) => {
    return ( 
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.desc}</p>
        <button className="btn btn-s btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        <hr />
      </div>
    )
}

export default todoItem
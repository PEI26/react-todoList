import React from 'react'
function TodoItem(props) {
    const completedStyle = {
        fontStyle:"italic",
        color:"#008000",
        textDecoration:"line-through"
}
    
    return (
      <div className="Todo-item">
       
        <input type="checkbox" 
               checked={props.todo.completed}
               onChange={()=>props.handleChange(props.todo.id)}
               />
       
        <p style= {props.todo.completed ? completedStyle : null} >{props.todo.text}</p>
       
      </div>
    );
  }
  export default TodoItem
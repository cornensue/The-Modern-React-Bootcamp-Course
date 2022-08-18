import React from 'react'

const Todo = (props) => {
  
  const handleRemove = () => props.removeTodo(props.id);

  return (
    <div>
        <button>Edit</button>
        <button onClick={handleRemove}>X</button>
        <li>{props.task}</li>
    </div>
  )
}

export default Todo;
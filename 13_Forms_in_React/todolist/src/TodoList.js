import React, {useState} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    function create(newTodo) {
      setTodos([...todos, newTodo]);
    }

    function remove(id) {
      setTodos(todos.filter(t => t.id !== id))
    }

    const mapTodos = todos.map(todo => {
      return <Todo key={todo.id} task={todo.task} id={todo.id} removeTodo={remove}/>
    });

  return (
    <div>
      <h1>Todo List!</h1>
      <NewTodoForm createTodo={create}/>
      <ul>
          {mapTodos}
      </ul>
    </div>
  )
}

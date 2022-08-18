import React, {useState} from 'react';
import { v4 as uv4 } from 'uuid';

const NewTodoForm = (props) => {
    const [task, setTask] = useState('');

    const handleChange = evt => {
       setTask(evt.target.value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        if (evt.target.value !== '') {
            if (task) {
                props.createTodo({task, id: uv4()});
            }  
        }
        setTask('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='task'>New Todo</label>
            <input 
                type='text' 
                placeholder='New Todo' 
                id='task'
                value={task}
                onChange={handleChange}
                />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodoForm;
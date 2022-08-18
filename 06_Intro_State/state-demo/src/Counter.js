import React, { useState} from "react";
import './Counter.css';

const Counter = () => {

    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <section>
            <h1>Welcome to Counter App</h1>
            <p>The count is: {count}</p>
            <button onClick={decrement}>➖</button>
            <button onClick={increment}>➕ </button>
        </section>
    ) 
};

export default Counter;
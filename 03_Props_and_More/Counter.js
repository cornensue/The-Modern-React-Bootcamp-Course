const Counter = () => {
    const [count, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Increase</button>
        </div>
    )
}



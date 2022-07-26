const LoopsJSX = props => {

    const {name,  hobbies} = props;

    return (
        <div>
            <h1>Using Loops in JXS</h1>
            <h2>I'm {name}</h2>
            <ul>
                {hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    )
}
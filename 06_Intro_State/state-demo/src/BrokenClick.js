import React, {useState} from "react";

const BrokenClick = () => {
    const [clicked, setCliked] = useState(false);
    // Updating our state
    function handeClick(e) {
        setCliked(true);
    }

    return (
        <div>
            <h1>{clicked ? 'Clicked!!!' : 'Not Clicked'}</h1>
            <button onClick={handeClick}>Click Me!</button>
        </div>
    )
}

export default BrokenClick;
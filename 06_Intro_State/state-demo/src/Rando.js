import React, {useState} from "react";

const Rando = (props) => {

    let [num, setNum] = useState(0);

    function makeTimer() {
        setInterval(() => {
            let rand = Math.floor(Math.random() * props.maxNum);
            setNum(rand);
        }, 1000);
    }

    makeTimer();

    return (

        <h1>{num}</h1>
    )

}

export default Rando;
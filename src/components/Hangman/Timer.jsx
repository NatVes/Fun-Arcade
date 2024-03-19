import React, {useState, useEffect} from "react";


function Timer (props) {
    const [counter, setCounter] = useState(100);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]); 
    return (
        <div>Countdown: {counter}</div>
    );
}
export default Timer;
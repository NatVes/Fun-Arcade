import React, {useState, useEffect} from "react";


function Timer (props) {
    const [counter, setCounter] = useState(90);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]); 
    if ([counter] < 10) {
        return (
            <div className="timer-red">Time Remaining: {counter}s</div>
        );
    } else {
        return (
            <div className="timer">Time Remaining: {counter}s</div>
        )
    };
}
export default Timer;
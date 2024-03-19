import React from "react";

function Restart () {
    function reload(e) {
        e.preventDefault();
        window.location.reload(false);
    }
    return (
        <div className="restart-container">
            <button type="button" onClick={reload} className="restart-button">Restart</button>
        </div>
    )
}

export default Restart;

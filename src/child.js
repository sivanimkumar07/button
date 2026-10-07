import React from "react";

function Child({ isOn, setIsOn }) {
    return (
        <button
            className="btn btn-primary mt-3"
            onClick={() => setIsOn(!isOn)}
        >
            {isOn ? "Turn OFF" : "Turn ON"}
        </button>
    );
}

export default Child;
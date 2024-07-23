import React from "react";
import useMouseTracker from "../hooks/useMouseTracker";

const MouseTrackerWithHook = () => {
    const mousePosition = useMouseTracker();

    return (
        <div style={{ height: "200px", border: "1px solid #ccc" }}>
            <p>
                Posición del ratón: {mousePosition.x}, {mousePosition.y}
            </p>
        </div>
    );
};

export default MouseTrackerWithHook;

import React, { useState } from "react";

const MouseTracker = ({ render }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div
            style={{ height: "200px", border: "1px solid #ccc" }}
            onMouseMove={handleMouseMove}
        >
            {render(mousePosition)}
        </div>
    );
};

export default MouseTracker;

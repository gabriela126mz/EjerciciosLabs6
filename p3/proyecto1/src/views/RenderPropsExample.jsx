import React from "react";
import MouseTracker from "../components/MouseTracker";
import MouseTrackerWithHook from "../components/MouseTrackerWithHook";
import { Item, List } from "../components/ListItem";

const itemList = ["Elemento 1", "Elemento 2", "Elemento 3"];

function RenderPropsExample() {
    return (
        <div>
            <h1 style={{ color: "#646cff" }}>Render Props</h1>
            <div>
                <h1>Seguimiento del Ratón con Render Props</h1>
                <MouseTracker
                    render={(mousePosition) => (
                        <p>
                            Posición del ratón: {mousePosition.x}, {mousePosition.y}
                        </p>
                    )}
                />
            </div>
            <div>
                <h1>Seguimiento del Ratón con Hooks</h1>
                <MouseTrackerWithHook />
            </div>
            <div>
                <h1>Lista de Items</h1>
                <List
                    items={itemList}
                    renderListItem={({ content, onRemove }) => (
                        <Item content={content} onRemove={onRemove} />
                    )}
                />
            </div>
        </div>
    );
}

export default RenderPropsExample;

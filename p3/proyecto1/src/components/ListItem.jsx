import React from "react";

export const Item = ({ content, onRemove }) => {
    return (
        <div>
            <span>{content}</span>
            <button onClick={onRemove}>Eliminar</button>
        </div>
    );
};

export const List = ({ items, renderListItem }) => {
    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    {renderListItem({
                        content: item,
                        onRemove: () => console.log(`Eliminar elemento: ${item}`)
                    })}
                </div>
            ))}
        </div>
    );
};

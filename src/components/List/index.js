import React from "react";

function List({ items, onRemove }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          {item}{" "}
          <span
            style={{ color: "red", cursor: "pointer" }}
            data-id={item}
            onClick={onRemove}
          >
            x
          </span>
        </li>
      ))}
    </ul>
  );
}

export default List;

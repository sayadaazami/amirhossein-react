import React, { useState } from "react";
import "./style.css";

function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");

  return (
    <section className="AddTask">
      <input
        placeholder="Enter the task title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <br />
      <textarea
        placeholder="Enter the task info"
        onChange={(e) => setInfo(e.currentTarget.value)}
      >
        {info}
      </textarea>{" "}
      <button
        onClick={() => onAdd(title, info)}
        disabled={title.trim().length === 0}
      >
        add
      </button>
    </section>
  );
}

export default AddTask;

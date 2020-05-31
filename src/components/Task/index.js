import React from "react";
import "./style.css";

function Task({ task, onRemove, onChangeStatus }) {
  return (
    <section className="Task">
      <header>
        <h3>{task.title}</h3>

        <button className="remove" onClick={() => onRemove(task.id)}>
          X
        </button>
      </header>

      <main>
        <p>{task.info}</p>
      </main>

      <footer>
        <div>
          {task.status === "doing" && (
            <button onClick={() => onChangeStatus(task.id, "todo")}>
              movto TODO
            </button>
          )}
          {(task.status === "todo" || task.status === "done") && (
            <button onClick={() => onChangeStatus(task.id, "doing")}>
              movto DOING
            </button>
          )}
          {task.status === "doing" && (
            <button onClick={() => onChangeStatus(task.id, "done")}>
              movto DONE
            </button>
          )}
        </div>

        <span className={`status ${task.status}`}>{task.status}</span>
      </footer>
    </section>
  );
}

export default Task;

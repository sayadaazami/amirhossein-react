import React, { useState, useEffect, useCallback, useMemo } from "react";
import Task from "../Task";
import "./style.css";
import AddTask from "../AddTask";
import { getTasksApi } from "../../api/tasks";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasksApi());
  }, []);

  const startDate = useMemo(function () {
    return new Date();
  }, []);

  const lastUpdate = useMemo(
    function () {
      return new Date();
    },
    [tasks]
  );

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleRemoveTask = useCallback(
    (id) => {
      console.log(tasks, id);
      setTasks(tasks.filter((task) => task.id !== id));
    },
    [tasks]
  );

  // function handleRemoveTask(id) {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // }

  function handleAddTask(title, info) {
    const id = tasks[tasks.length - 1].id + 1;
    setTasks([{ id, title, info, status: "todo" }, ...tasks]);
  }

  function handleChangeStatus(id, status) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  }

  return (
    <section className="TaskList">
      <p>startDate: {startDate.toLocaleString()}</p>
      <p>lastUpdate: {lastUpdate.toLocaleString()}</p>

      <AddTask onAdd={handleAddTask} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onRemove={handleRemoveTask}
          onChangeStatus={handleChangeStatus}
        />
      ))}
    </section>
  );
}

export default TaskList;

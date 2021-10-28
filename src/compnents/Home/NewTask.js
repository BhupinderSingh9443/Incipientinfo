import React, { useState } from "react";
import Task from "./Task";
import CreateTask from "./CreateTask";
import "./new.css";

function Todo() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <div className="header">ToDo List</div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;

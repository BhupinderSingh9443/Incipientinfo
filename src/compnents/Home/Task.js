import React from "react";
import { Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const Task = ({ task, index, completeTask, removeTask }) => {
  function onChange() {
    completeTask(index);
  }

  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      <Checkbox className="checkBox" onChange={() => onChange()} />
      <div className="title">{task.title}</div>
      <DeleteOutlined className="icon" onClick={() => removeTask(index)} />
    </div>
  );
};

export default Task;

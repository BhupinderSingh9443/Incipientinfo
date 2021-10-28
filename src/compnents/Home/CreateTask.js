import React, { useState } from "react";

const CreateTask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        className="input"
        value={value}
        placeholder="New Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="button" onClick={() => addTask(value)}>
        Add
      </button>
    </form>
  );
};

export default CreateTask;

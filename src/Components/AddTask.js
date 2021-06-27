import React, { useState } from "react";

const AddTask = (props) => {
  const [Task, setTask] = useState("");

  const handleAdd = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addTask(Task);
  };

  return (
    <div class="container text-center">
      <div class="row mt-2 offset-4">
        <form onSubmit={handleSubmit}>
          <label class="form-group">Add Your Task Here</label>
          <input
            class="form-control"
            type="text"
            name="addTask"
            value={Task.name}
            onChange={handleAdd}
          />
          <button class="btn-outline-dark mt-2" type="submit">
            Add Task
          </button>
          <button
            class="btn-outline-dark mt-2"
            type="reset"
            onClick={() => setTask("")}
          >
            Resets
          </button>
        </form>
      </div>
      <hr />
    </div>
  );
};

export default AddTask;

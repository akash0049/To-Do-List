import React, { useState } from "react";
import AddTask from "./AddTask";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const taskAddHandler = (task) => {
    if (!task) {
      return;
    }
    setTasks([...tasks, task]);
  };

  const taskDeleteHandler = (task) => {
    let newTasks = [...tasks];

    let index = newTasks.indexOf(task);
    if (index === 0) {
      newTasks.pop(task);
    } else {
      newTasks.splice(index, 1);
    }

    setTasks(newTasks);
  };

  return (
    <div class="container">
      <AddTask addTask={taskAddHandler} />
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Ongoing Tasks
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Completed Tasks
          </a>
        </li>
      </ul>

      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="Ongoinng"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {tasks.length > 0 ? (
            tasks.map((task, key) => (
              <div>
                <div className="card">
                  <h4>
                    {++key}
                    {".  "}
                    {task}
                  </h4>
                  <div style={{ marginLeft: 550 }}>
                    <button>Edit</button>
                    <button onClick={taskDeleteHandler.bind(this, task)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3 style={{ textAlign: "center", margin: "3px", color: "green" }}>
              Hurray!! No Tasks Today
            </h3>
          )}
        </div>
        <div
          class="tab-pane fade"
          id="Completed"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          Completed Tasks
        </div>
      </div>
    </div>
  );
};

export default Tasks;

import React from "react";

import Task from "../task/Task";

import "./style.css";
import appImage from "../../assets/todo.png";

function TaskList({ tasks, onDelete, onComplete }) {
  return (
    <>
      <div className="list">
        <div className="image-cntainer">
          <img src={appImage} className="image" alt="react logo" />
        </div>
        <div className="list-container">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onDelete={onDelete}
                onComplete={onComplete}
              />
            ))
          ) : (
            <p className="emptyTasks"> No tasks available</p>
          )}
        </div>
      </div>
    </>
  );
}

export default TaskList;

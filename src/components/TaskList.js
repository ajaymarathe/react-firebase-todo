import React from "react";
import TaskFilter from "./TaskFilter";
import Navbar from "./Navbar";

function TaskList() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <TaskFilter />
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center">Your Tasks</h2>
            <ul className="list-group">
              {/* Sample Task Item */}
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>Task Title</span>
                <div>
                  <button className="btn btn-sm btn-warning me-2">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </div>
              </li>
              {/* Repeat above block for more tasks */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;

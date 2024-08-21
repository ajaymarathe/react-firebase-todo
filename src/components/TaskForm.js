import React from "react";
import Navbar from "./Navbar";

function TaskForm() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center">New Task</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Task Title
                </label>
                <input type="text" className="form-control" id="title" />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea className="form-control" id="description"></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select className="form-control" id="category">
                  <option>Work</option>
                  <option>Personal</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="priority" className="form-label">
                  Priority
                </label>
                <select className="form-control" id="priority">
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Save Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskForm;

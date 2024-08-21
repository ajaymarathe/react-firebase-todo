import React from 'react';

function TaskFilter() {
  return (
    <div className="mb-4">
      <div className="row">
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder="Search Tasks" />
        </div>
        <div className="col-md-4">
          <select className="form-control">
            <option>All Categories</option>
            <option>Work</option>
            <option>Personal</option>
          </select>
        </div>
        <div className="col-md-4">
          <select className="form-control">
            <option>All Priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TaskFilter;

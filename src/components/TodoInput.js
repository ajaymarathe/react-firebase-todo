import React from 'react';

const TodoInput = () => {
  return (
    <div className="todo-input">
      <input type="text" placeholder="Enter a new task..." />
      <button>Add Task</button>
    </div>
  );
};

export default TodoInput;

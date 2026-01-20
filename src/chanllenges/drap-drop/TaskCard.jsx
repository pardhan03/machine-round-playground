import React from 'react'
import './kanban.css'

const TaskCard = ({ title }) => {
  return (
    <div className="task-card" draggable={true}>
      {title}
    </div>
  );
};


export default TaskCard
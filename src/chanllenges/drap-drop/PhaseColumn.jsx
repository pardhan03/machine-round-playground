import React from 'react'
import './kanban.css'
import TaskCard from './TaskCard';

const PhaseColumn = ({ title, tasks }) => {
  return (
    <div className="phase-column">
      <h3 className="phase-title">{title}</h3>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.id} title={task.title} />
        ))}
      </div>
    </div>
  );
};

export default PhaseColumn
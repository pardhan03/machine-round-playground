import React from 'react'
import './kanban.css'

const PhaseColumn = ({
  title,
  data,
  column,
  onDrag,
  onDragOver,
  onDrop,
}) => {

  return (
    <div
      className="phase-column"
      onDrop={(event) => onDrop(event, column?.id)}
      onDragOver={(e) => onDragOver(e)}

    >
      <h3 className="phase-title">{title}</h3>

      <div className="task-list">
        {data.map((task) => (
          <div
            id={task?.id}
            className="task-card"
            draggable={true}
            onDrag={(e) => onDrag(e, task, column?.id)}
          >
            {task?.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhaseColumn
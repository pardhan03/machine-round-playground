import React from 'react'
import PhaseColumn from './PhaseColumn'
import { kanbanData } from '../../shared/utils/constant'
import './kanban.css'

const DragDrop = () => {
    return (
        <div className="kanban-board">
            {kanbanData.map((column) => (
                <PhaseColumn
                    key={column.id}
                    title={column.title}
                    tasks={column.tasks}
                />
            ))}
        </div>
    )
}

export default DragDrop
import React, { useCallback, useRef, useState } from 'react'
import PhaseColumn from './PhaseColumn'
import './kanban.css'

const DragDrop = ({ initialData }) => {
    const [tasks, setTasks] = useState(initialData);
    const dragItem = useRef();
    const dragContainerId = useRef();

    const handleOnDrag = (event, data, columnId) => {
        event.preventDefault();
        dragItem.current = data;
        dragContainerId.current = columnId;
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event, targetColumnId) => {
        event.preventDefault();

        const draggedItem = dragItem.current;
        const sourceColumnId = dragContainerId.current;

        if (sourceColumnId === targetColumnId) {
            console.log('dropped in the same column')
            return;
        }
        setTasks((prev) => {
            const data = [...prev];
            const newData = data?.map((column) => {
                // Remove task from source column
                if (column?.id === sourceColumnId) {
                    return {
                        ...column,
                        tasks: column.tasks.filter(
                            (task) => task.id !== draggedItem.id
                        ),
                    }
                };

                // Add task to target column
                if (column.id === targetColumnId) {
                    return {
                        ...column,
                        tasks: [...column.tasks, draggedItem],
                    };
                };
                return column;
            })
            return newData;
        })
    };

    const renderKanbanBoard = useCallback(() => tasks.map((column) => (
        <PhaseColumn
            key={column.id}
            title={column.title}
            column={column}
            data={column.tasks}
            onDrag={handleOnDrag}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        />
    )), [tasks]);

    return (
        <div className="kanban-board">
            {renderKanbanBoard()}
        </div>
    )
}

export default DragDrop
import ModalOutsideClickApp from "../../chanllenges/modal-outside-click/App"
import DragDrop from "../../chanllenges/drap-drop/App"

export const ROUTES = [
  {
    path: "/modal-outside-click",
    label: "Modal Outside Click",
    element: <ModalOutsideClickApp />,
  },
  {
    path: "/kanban-board",
    label: "Drag&Drop",
    element: <DragDrop />,
  },
];

export const kanbanData = [
  {
    id: "todo",
    title: "Todo",
    tasks: [
      { id: "todo-1", title: "Design UI mockups" },
      { id: "todo-2", title: "Set up project repository" },
      { id: "todo-3", title: "Write unit test" },
      { id: "todo-4", title: "Integrate payment gateway" },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      { id: "progress-1", title: "Develop authentication flow" },
      { id: "progress-2", title: "Implement responsive design" },
    ],
  },
  {
    id: "completed",
    title: "Completed",
    tasks: [
      { id: "completed-1", title: "Set up CI/CD pipeline" },
      { id: "completed-2", title: "Conduct code reviews" },
      { id: "completed-3", title: "Deploy initial version to staging" },
    ],
  },
];
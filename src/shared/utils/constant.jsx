import ModalOutsideClickApp from "../../chanllenges/modal-outside-click/App"
import DragDrop from "../../chanllenges/drap-drop/App"
import InfiniteScroll from "../../interview-questions/infinite-scroll/from-scratch/InfiniteScroll";

export const kanbanData = [
  {
    id: "todo",
    title: "Todo",
    tasks: [
      { id: 1, title: "Design UI mockups" },
      { id: 2, title: "Set up project repository" },
      { id: 3, title: "Write unit test" },
      { id: 4, title: "Integrate payment gateway" },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      { id: 5, title: "Develop authentication flow" },
      { id: 6, title: "Implement responsive design" },
    ],
  },
  {
    id: "completed",
    title: "Completed",
    tasks: [
      { id: 7, title: "Set up CI/CD pipeline" },
      { id: 8, title: "Conduct code reviews" },
      { id: 9, title: "Deploy initial version to staging" },
    ],
  },
];

export const ROUTES = [
  {
    path: "/modal-outside-click",
    label: "Modal Outside Click",
    element: <ModalOutsideClickApp />,
  },
  {
    path: "/kanban-board",
    label: "Drag&Drop",
    element: <DragDrop initialData={kanbanData}/>,
  },
  {
    path: "/infinite-scroll",
    label: "Infinite-scroll",
    element: <InfiniteScroll/>,
  },
];
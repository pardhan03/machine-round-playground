import ModalOutsideClickApp from "../../chanllenges/modal-outside-click/App"
import DragDrop from "../../chanllenges/drap-drop/App"
import InfiniteScroll from "../../interview-questions/infinite-scroll/from-scratch/InfiniteScroll";
import InfiniteScrollObserver from "../../interview-questions/infinite-scroll/intersection-observer/InfiniteScrollObserver";
import VirtualizedList from "../../chanllenges/virtualization/VirtualizedList";
import LazyLoading from "../../interview-questions/code-splitting/LazyLoading";

const kanbanData = [
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
  {
    path: "/infinite-scroll-observer",
    label: "Infinite Scroll (Observer API)",
    element: <InfiniteScrollObserver />,
  },
  {
    path: "/windowed-rendering",
    label: "Virtualized Inventory",
    element: <VirtualizedList />,
  },
  {
    path: "/code-splitting",
    label: "Code Splitting & Lazy Loading",
    element: <LazyLoading />,
  },
];

export const virtualizedListData = [
    {
      "id": 11,
      "title": "Annibale Colombo Bed",
      "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
      "category": "furniture",
      "price": 1899.99,
      "discountPercentage": 8.57,
      "rating": 4.77,
      "stock": 88,
      "tags": [
        "furniture",
        "beds"
      ],
      "brand": "Annibale Colombo",
      "sku": "FUR-ANN-ANN-011",
      "weight": 10,
      "dimensions": {
        "width": 28.16,
        "height": 25.36,
        "depth": 17.28
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 2,
          "comment": "Would not recommend!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Christopher West",
          "reviewerEmail": "christopher.west@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly impressed!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Vivian Carter",
          "reviewerEmail": "vivian.carter@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Poor quality!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Mason Wright",
          "reviewerEmail": "mason.wright@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "3610757456581",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp"
    },
    {
      "id": 12,
      "title": "Annibale Colombo Sofa",
      "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
      "category": "furniture",
      "price": 2499.99,
      "discountPercentage": 14.4,
      "rating": 3.92,
      "stock": 60,
      "tags": [
        "furniture",
        "sofas"
      ],
      "brand": "Annibale Colombo",
      "sku": "FUR-ANN-ANN-012",
      "weight": 6,
      "dimensions": {
        "width": 12.75,
        "height": 20.55,
        "depth": 19.06
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Very unhappy with my purchase!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Christian Perez",
          "reviewerEmail": "christian.perez@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Fast shipping!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Lillian Bishop",
          "reviewerEmail": "lillian.bishop@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Poor quality!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Lillian Simmons",
          "reviewerEmail": "lillian.simmons@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "1777662847736",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/3.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
    },
  ];
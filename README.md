# Machine Round Playground 🚀

A curated collection of **React machine-coding round questions** built using **Vite + React**.
This repository is designed to simulate **real frontend interview environments**, focusing on clean architecture, reusable components, and scalable solutions.

---

## 🎯 Purpose of This Repository

- Practice **React machine-coding rounds** asked in interviews
- Improve **problem-solving under time constraints**
- Build **production-quality UI components**
- Showcase **clean code & folder structure** to recruiters

This repo is ideal for **Frontend / React Developer interviews** at startups and product-based companies.

---

## 🛠 Tech Stack

- ⚛️ React
- ⚡ Vite
- 🧭 React Router DOM
- 💅 Plain CSS / Modular styles
- 🧠 React Hooks (useState, useEffect, useMemo, useCallback)

---

## 📁 Project Structure

    machine-round-playground/
    │
    ├── src/
    │ ├── main.jsx
    │ ├── App.jsx
    │ │
    │ ├── challenges/ # Individual machine-coding problems
    │ │ ├── counter/
    │ │ ├── todo-app/
    │ │ ├── infinite-scroll/
    │ │ └── ...
    │ │
    │ ├── shared/ # Reusable components & hooks
    │ │ ├── components/
    │ │ ├── hooks/
    │ │ └── utils/
    │ │
    │ ├── routes/
    │ │ └── ChallengeRouter.jsx
    │ │
    │ └── constants/
    │
    ├── public/
    ├── README.md
    └── package.json


## Challenges

> Each challenge contains its **own folder** and **README** explaining requirements and concepts.

---

# Drag and Drop List

A React machine-coding challenge that demonstrates **drag and drop functionality** for reordering list items. 
This challenge focuses on handling user interactions, DOM events, and state updates in a clean and scalable way.

## Requirements

- Display a list of items
- Drag an item and drop it at a new position
- Update list order after drop
- Maintain smooth UX while dragging
- No external drag-and-drop libraries (unless specified)

## 🧠 Concepts

- Mouse / Drag events
- State management with `useState`
- Event handling
- Conditional styling
- Immutability in state updates
- Component re-rendering

# Modal Close on Outside Click

## Requirements
- Open modal on button click
- Close modal when clicking outside
- Close on ESC key

## 🧠 Concepts
- useRef
- useEffect
- Event bubbling

## 🧪 How to Run Locally

```bash
npm install
npm run dev

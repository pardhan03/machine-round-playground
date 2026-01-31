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
    │ ├── challenges/ # Machine-coding problems
    │ │ ├── drag-and-drop/
    | | ├── virtualization/
    │ │ └── modal-outside-click/
    | |
    │ ├── interview-questions/ # React theory & interview concepts
    │ │ ├── controlled-uncontrolled
    | | ├── Infinit scroll
    | | └──this-keyword
    | |
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

# Progress Bar Challenge

## 📌 What is a Progress Bar?

A **progress bar** visually represents the completion status of a task.

It is commonly used for:
- File uploads
- Form steps
- Loading states
- Task completion tracking

## ❓ Why Is This Asked in Interviews?

Interviewers use progress bars to check:
- State management
- UI updates based on logic
- Edge case handling
- Clean component design

## 🧠 Core Concept

A progress bar is driven by a **percentage value (0–100)**.

# Infinite Scroll

Infinite scroll is a common frontend pattern where more data is loaded automatically
as the user scrolls down the page.

This challenge demonstrates **two different implementations**:
  1. Building infinite scroll **from scratch**
  2. Using the **Intersection Observer API**

### 1️⃣ From Scratch (Scroll Events)
- Uses `scroll` event listeners
- Manual scroll position calculations
- Full control over behavior

## 💡 When to Use This Approach

- When full control is required
- Small applications
- Interview rounds to show fundamentals

## 🎤 Interview Tip

> Always debounce the scroll handler to avoid performance issues.

### 2️⃣ Intersection Observer API
- Uses browser-native observer
- More performant
- Cleaner and scalable solution

## 💡 When to Use This Approach

- Large lists
- Production applications
- Performance-critical UIs

## 🧠 Concepts Covered

- Pagination
- Scroll events
- Debouncing
- Custom hooks
- Intersection Observer API
- Performance optimization

# Virtualized List (List Virtualization)

## 📌 What is Virtualization?

**Virtualization** is a performance optimization technique where:
- Only the **visible items** in a large list are rendered
- Off-screen items are **not mounted in the DOM**
- Improves performance for large datasets (1000+ items)

Instead of rendering all items, we calculate:
- Start index
- End index
- Render only what the user can see

---

## ❓ Why Do We Need Virtualization?

Rendering a large list:
- Blocks the main thread
- Causes slow scrolling
- Increases memory usage

Virtualization solves this by:
- Reducing DOM nodes
- Improving scroll performance
- Making UI smooth

---

## 🧠 Core Concept

Virtualization works using:
- Fixed item height
- Scroll position (`scrollTop`)
- Visible viewport height

```text
scrollTop
   ↓
┌─────────────────────────┐
│ spacer (top)            │  ← height = itemsAbove * itemHeight
├─────────────────────────┤
│ visible items (rendered)│
├─────────────────────────┤
│ spacer (bottom)         │  ← height = itemsBelow * itemHeight
└─────────────────────────┘

```

## 💡 Interview Angle (Important)

**Virtualization vs Infinite Scroll**

| Infinite Scroll      | Virtualization      |
|----------------------|---------------------|
| Loads data gradually | Data already exists |
| Focus: network       | Focus: DOM          |
| Uses pagination      | Uses scroll math    |
| Observer / events    | Calculated indices  |

### Interview Questions

```md
Along with machine-coding challenges, this repository also includes **commonly asked React interview questions**, explained with **clear definitions, examples, and real-world use cases**.

> These questions are structured similarly to challenges so they’re easy to revise before interviews.

---

# Controlled Component

A **controlled component** is a form element whose value is fully controlled by **React state**.

## ❓ What is a Controlled Component?

In a controlled component:
- Form data is handled by React using `useState`
- The input value is always driven by state
- UI and state stay in sync

## ✅ Characteristics

- Uses `useState`
- Uses `onChange` handler
- Single source of truth (React)


# Uncontrolled Component

An **uncontrolled component** stores its state inside the **DOM**, not React.

## ❓ What is an Uncontrolled Component?

In an uncontrolled component:
- React does not manage input state
- Data is accessed using `useRef`
- The DOM is the source of truth

## ✅ Characteristics

- Uses `useRef`
- No re-render on every input change
- Simpler and faster for basic use cases

# `this` Keyword in JavaScript

The `this` keyword in JavaScript refers to the **execution context** in which a function is called.

Its value depends on **how and where the function is invoked**, not where it is defined.
In simple terms:

> **`this` refers to the object that is currently calling the function.**

But the tricky part is 👉 **its value changes depending on how a function is called**.


## 🧠 Golden Rule of `this`

> **`this` is decided at the time of function execution, not definition.**
  **this refers to the object before the dot**

So don’t ask:
❌ “Where is the function written?”

Always ask:
✅ **“How is the function called?”**

## ❓ What is `this`?

- `this` points to an object
- The value of `this` is determined at **runtime**
- Different invocation patterns result in different `this` values

# Code Splitting (Lazy Loading) in React

## 📌 What Is Code Splitting?

**Code Splitting** is a performance optimization technique where your app loads **only the required JavaScript** instead of the entire bundle at once.

In React, this is achieved using **`React.lazy()`** and **`Suspense`**.

---

## ❓ Why Is This Asked in Interviews?

Interviewers check:
- Performance optimization knowledge
- Understanding of bundle size reduction
- Ability to defer loading heavy components
- Real-world production patterns

---

## 🧠 Core Idea (Simple Terms)

> Instead of loading everything at app start, load components **only when they are needed**.

This:
- Reduces initial load time
- Improves user experience
- Speeds up First Contentful Paint (FCP)

---

## 🧩 Key APIs Used

### `React.lazy()`
Used to **dynamically import** a component.

```js
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));
```
```

## 🧪 How to Run Locally

```bash
npm install
npm run dev

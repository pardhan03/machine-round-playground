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
    │ │ └── modal-outside-click/
    | |
    │ ├── interview-questions/ # React theory & interview concepts
    │ │ ├── controlled-uncontrolled
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

## Interview Questions

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

## 🧪 How to Run Locally

```bash
npm install
npm run dev

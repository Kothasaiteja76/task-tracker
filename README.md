# 📝 Task Tracker CLI

A simple command-line task management application built using Node.js.

This project allows users to manage tasks directly from the terminal.  
Tasks are stored locally in a JSON file.

---

## 📖 About The Project

Task Tracker CLI is a lightweight command-line application that helps you manage your daily tasks directly from the terminal.

It allows you to:

- Add tasks
- Update tasks
- Delete tasks
- Track progress
- Store everything locally in a JSON file

This project is built using only **Node.js native modules** — no external libraries.

---

## 🛠 Built With

- JavaScript (Node.js)
- File System Module (fs)
- JSON for data storage

---

## 📂 Project Structure

task-cli/
│
├── task-cli.js     # Main application logic  
├── tasks.json      # Auto-generated task storage  
└── README.md       # Project documentation  

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

Make sure Node.js is installed:

node -v

If not installed, download from:  
https://nodejs.org/

---

### 2️⃣ Run the Project

Navigate to the project folder:

cd task-cli

Run commands using:

node task-cli.js <command>

---

# 📌 Available Commands

---

## ➕ Add a Task

node task-cli.js add "Task description"

Example:

node task-cli.js add "Learn JavaScript"

---

## 📋 List All Tasks

node task-cli.js list

---

## 📂 List Tasks by Status

node task-cli.js list todo  
node task-cli.js list in-progress  
node task-cli.js list done  

---

## ✏️ Update a Task

node task-cli.js update <id> "New description"

Example:

node task-cli.js update 1 "Learn Advanced JavaScript"

---

## 🚀 Mark Task as In Progress

node task-cli.js mark-in-progress <id>

---

## ✅ Mark Task as Done

node task-cli.js mark-done <id>

---

## ❌ Delete a Task

node task-cli.js delete <id>

---

# 🗂 Task Data Structure

Each task is stored in tasks.json like this:

{
  "id": 1,
  "description": "Learn JavaScript",
  "status": "todo",
  "createdAt": "2026-02-28T10:00:00.000Z",
  "updatedAt": "2026-02-28T10:00:00.000Z"
}

---

# 🧠 What I Learned

- Working with Node.js CLI
- Parsing command-line arguments
- Using the File System module
- JSON data handling
- CRUD operations
- Error handling
- Building real-world beginner projects

---

# 🌟 Future Improvements

- 🎨 Add colored terminal output
- ⏰ Add due dates
- 🔥 Add priority levels
- 📦 Convert to global CLI tool
- 🔎 Add search feature
- 🧪 Add automated tests

---

# 👨‍💻 Author

Sai Teja

---

⭐ If you like this project, give it a star!
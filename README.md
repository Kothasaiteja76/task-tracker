# 📝 Task Tracker CLI

A simple command-line task manager built with Node.js.  
Tasks are stored locally in a JSON file.

---
   # task-tracker
   the simple solution of give [task-tracker](https://roadmap.sh/projects/task-tracker)

## 🚀 Features

- Add tasks
- Update tasks
- Delete tasks
- Mark as in-progress
- Mark as done
- List all tasks
- List tasks by status

---

## 🛠 Tech Used

- Node.js
- Built-in `fs` module
- JSON for storage

---

## ▶️ Usage

Run commands using:

node task-cli.js <command>

### Add Task
node task-cli.js add "Task description"

### List Tasks
node task-cli.js list  
node task-cli.js list todo  
node task-cli.js list in-progress  
node task-cli.js list done  

### Update Task
node task-cli.js update <id> "New description"

### Mark Task
node task-cli.js mark-in-progress <id>  
node task-cli.js mark-done <id>

### Delete Task
node task-cli.js delete <id>

---

## 📂 Structure

task-cli.js – Main CLI logic  
tasks.json – Auto-created task storage  

---

## 👨‍💻 Author

Sai Teja
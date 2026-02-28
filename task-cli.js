const fs = require("fs");

const fileName = "tasks.json";

// Ensure file exists
if (!fs.existsSync(fileName)) {
  fs.writeFileSync(fileName, JSON.stringify([], null, 2));
}

function loadTasks() {
  return JSON.parse(fs.readFileSync(fileName));
}

function saveTasks(tasks) {
  fs.writeFileSync(fileName, JSON.stringify(tasks, null, 2));
}

function getNextId(tasks) {
  return tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
}

function findTask(tasks, id) {
  return tasks.find(task => task.id === id);
}

const command = process.argv[2];
const tasks = loadTasks();

switch (command) {

  case "add": {
    const description = process.argv[3];
    if (!description) return console.log("Please provide task description.");

    const newTask = {
      id: getNextId(tasks),
      description,
      status: "todo",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Task added successfully (ID: ${newTask.id})`);
    break;
  }

  case "list": {
    const status = process.argv[3];
    const filtered = status ? tasks.filter(t => t.status === status) : tasks;

    if (!filtered.length) return console.log("No tasks found.");

    filtered.forEach(t =>
      console.log(`${t.id}. ${t.description} [${t.status}]`)
    );
    break;
  }

  case "update": {
    const id = parseInt(process.argv[3]);
    const description = process.argv[4];
    const task = findTask(tasks, id);

    if (!task || !description)
      return console.log("Usage: node task-cli.js update <id> \"new description\"");

    task.description = description;
    task.updatedAt = new Date().toISOString();

    saveTasks(tasks);
    console.log("Task updated successfully.");
    break;
  }

  case "delete": {
    const id = parseInt(process.argv[3]);
    if (!findTask(tasks, id)) return console.log("Task not found.");

    saveTasks(tasks.filter(t => t.id !== id));
    console.log("Task deleted successfully.");
    break;
  }

  case "mark-in-progress":
  case "mark-done": {
    const id = parseInt(process.argv[3]);
    const task = findTask(tasks, id);

    if (!task) return console.log("Task not found.");

    task.status = command === "mark-done" ? "done" : "in-progress";
    task.updatedAt = new Date().toISOString();

    saveTasks(tasks);
    console.log(`Task marked as ${task.status}.`);
    break;
  }

  default:
    console.log("Invalid command");
}
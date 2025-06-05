// Import required modules
import express from "express";
import { tasks } from "./task";
import cors from "cors";
const app = express();
const PORT = 4500;
app.use(cors());
app.use(express.json());

app.get("/api/tasks", async (req, res) => {
  try {
    // Simulate a delay for async operarion like a database read
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Sending all tasks");
    res.status(200).json({ success: true, tasks: tasks });
  } catch (error) {
    console.log("Error while getting tasks:", error.message);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

app.get("/api/tasks/:taskId", async (req, res) => {
  const taskId = req.params.taskId;

  try {
    const foundTask = tasks.find((item) => item.task_id === taskId);
    if (foundTask) {
      res.status(200).json(foundTask);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (err) {
    console.log("Error finding task:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.post("/api/tasks", async (req, res) => {
  const newTask = req.body;

  try {
    if (!newTask.title || newTask.title.trim() === "") {
      return res.status(400).json({ error: "Title is required" });
    }

    if (!newTask.description || newTask.description.trim() === "") {
      return res.status(400).json({ error: "Description is required" });
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));

    newTask.task_id = "task" + (tasks.length + 1);
    tasks.push(newTask);
    console.log("New task added:", newTask);
    res.status(201).json({ success: true, message: "Task created" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.put("/api/tasks/:taskId", async (req, res) => {
  const taskId = req.params.taskId;
  const updateData = req.body;

  console.log("Trying to update task:", taskId);

  try {
    const taskIndex = tasks.findIndex((t) => t.task_id === taskId);
    if (taskIndex === -1) {
      return res.status(404).json({ error: "Task not found" });
    }

    if (updateData.title && updateData.title.trim() === "") {
      return res.status(400).json({ error: "Title cannot be empty" });
    }

    if (updateData.description && updateData.description.trim() === "") {
      return res.status(400).json({ error: "Description cannot be empty" });
    }

    tasks[taskIndex] = {
      ...tasks[taskIndex],
      ...updateData,
    };

    res.status(200).json({ success: true, message: "Task updated" });
  } catch (error) {
    console.log("Error updating task:", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.delete("/api/tasks/:taskId", async (req, res) => {
  const taskId = req.params.taskId;

  try {
    const index = tasks.findIndex((task) => task.task_id === taskId);
    if (index === -1) {
      return res.status(404).json({ error: "Task not found" });
    }

    tasks.splice(index, 1);
    console.log("Task deleted");

    res.status(200).json({ success: true, message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

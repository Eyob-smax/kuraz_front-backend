# 🧠 Fullstack Task Manager App

> 👋 Hey! So, funny story — I forgot which role I applied for (frontend or backend), so I went ahead and built **both** sides just in case! 😅  
> This project includes a **Node.js + Express backend** and a **React frontend**, covering all the **required** and even some of the **optional** features listed in the task.

---

## 🔧 What I Built

### ✅ Backend (Node.js + Express)
- RESTful API endpoints to **Create, Read, Update, and Delete** tasks.
- Each task has:
  - `task_id`
  - `title`
  - `description`
  - `status` (e.g., `not_started`, `in_progress`, `completed`)
  - `priority` (e.g., `low`, `medium`, `high`)
  - `due_date`
- Basic validation (e.g. making sure title/description aren't empty).
- Edit task functionality.
- Mark task as done.
- Simple error handling and clear response messages.
- CORS enabled for frontend integration.

### ✅ Frontend (React)
- Fetches tasks from the backend and displays them.
- Task card UI using Tailwind CSS (light and beginner-friendly).
- Users can:
  - **Add new tasks** (with validation)
  - **Edit existing tasks**
  - **Delete tasks**
  - **Mark tasks as done**
  - **Filter by category**
  - **Search tasks by title or description**
- A modal is used to add and edit tasks.

---

## 📁 Folder Structure

```bash
├── backend/
│   ├── index.js          # Express server
│   └── task.js           # Fake DB (task array)
│
├── frontend/
│   ├── src/
│   │   ├── components/   # Task cards, modal, etc.
│   │   ├── pages/        # Header, Main, Category UI
│   │   └── App.js        # Main app logic

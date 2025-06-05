import Header from "./page/Header";
import Catagory from "./page/Catagory";
import Main from "./page/Main";
import AddModal from "./page/AddModal";
import { useState } from "react";

const dummyTasks = [
  {
    id: 1,
    title: "Frontend Fixes",
    desc: "Fix navbar bugs",
    category: "Frontend",
    bgColor: "#7D4BD9",
    done: false,
  },
  {
    id: 2,
    title: "Backend API",
    desc: "Build login API",
    category: "Backend",
    bgColor: "#E75359",
    done: false,
  },
  {
    id: 3,
    title: "Backend API",
    desc: "Build login API",
    category: "Backend",
    bgColor: "#7D4Ba2",
    done: false,
  },
  {
    id: 4,
    title: "Backend API",
    desc: "Build login API",
    category: "Backend",
    bgColor: "#E75379",
    done: false,
  },
];

export default function App() {
  const [tasks, setTasks] = useState(dummyTasks);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const filtered = tasks.filter((task) => {
    const matchesCat = category === "All" || task.category === category;
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), done: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setTaskToEdit(null);
  };

  const openEditModal = (task) => {
    setTaskToEdit(task);
    setShowModal(true);
  };

  return (
    <div className="w-[70%] mx-auto bg-[#393652] h-screen relative">
      <Header onSearch={setSearch} />
      <Catagory onCategoryChange={setCategory} />
      <Main
        tasks={filtered}
        onDelete={deleteTask}
        onToggleDone={toggleDone}
        onEdit={openEditModal}
      />

      <button
        className="fixed bottom-6 right-6 bg-pink-500 text-white px-4 py-2 rounded-full"
        onClick={() => {
          setTaskToEdit(null);
          setShowModal(true);
        }}
      >
        + Add Task
      </button>

      {showModal && (
        <AddModal
          onClose={() => setShowModal(false)}
          onSave={addTask}
          onEditSave={editTask}
          taskToEdit={taskToEdit}
        />
      )}
    </div>
  );
}

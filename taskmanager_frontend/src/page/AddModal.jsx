import { useState, useEffect } from "react";

export default function AddModal({ onClose, onSave, onEditSave, taskToEdit }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Frontend");
  const [error, setError] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDesc(taskToEdit.desc);
      setCategory(taskToEdit.category);
    }
  }, [taskToEdit]);

  const getColor = (cat) => {
    if (cat === "Frontend") return "#7D4BD9";
    if (cat === "Backend") return "#612DD2";
    return "#E34D84";
  };

  const handleSave = () => {
    if (!title.trim() || !desc.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const taskData = {
      id: taskToEdit ? taskToEdit.id : null,
      title,
      desc,
      category,
      bgColor: getColor(category),
      done: taskToEdit?.done || false,
    };

    if (taskToEdit) {
      onEditSave(taskData);
    } else {
      onSave(taskData);
    }

    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white text-black rounded-xl p-6 w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {taskToEdit ? "Edit Task" : "Add New Task"}
        </h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 mb-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full border p-2 mb-2 rounded"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <select
          className="w-full border p-2 mb-4 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Frontend</option>
          <option>Backend</option>
          <option>DevOps</option>
        </select>

        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-400 px-4 py-2 rounded text-white"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-pink-500 px-4 py-2 rounded text-white"
            onClick={handleSave}
          >
            {taskToEdit ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

import { FaRegCircle, FaCheckCircle, FaTrash, FaEdit } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

export default function Card({ task, onDelete, onToggleDone, onEdit }) {
  const cardStyle = {
    backgroundColor: task.bgColor,
    opacity: task.done ? 0.6 : 1,
    textDecoration: task.done ? "line-through" : "none",
  };

  return (
    <div
      className="rounded-2xl w-[90%] py-6 px-5 flex items-center justify-start gap-4 mb-4 text-white"
      style={cardStyle}
    >
      <button onClick={() => onToggleDone(task.id)}>
        {task.done ? <FaCheckCircle /> : <FaRegCircle />}
      </button>
      <div className="flex flex-col justify-start">
        <h3 className="font-bold">{task.title}</h3>
        <p>{task.desc}</p>
      </div>
      <div className="ml-auto flex items-center gap-3">
        <FaEdit
          className="text-lg cursor-pointer hover:text-yellow-400"
          onClick={() => onEdit(task)}
        />
        <FaTrash
          className="text-lg cursor-pointer hover:text-red-500"
          onClick={() => onDelete(task.id)}
        />
      </div>
    </div>
  );
}

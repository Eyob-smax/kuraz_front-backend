import Card from "../components/Card";

export default function Main({ tasks, onDelete, onToggleDone, onEdit }) {
  return (
    <section className="min-h-[70vh] pt-10 flex flex-col items-center bg-[#393652]">
      {tasks.map((task) => (
        <Card
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleDone={onToggleDone}
          onEdit={onEdit}
        />
      ))}
    </section>
  );
}

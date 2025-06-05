export default function CategoryItem({ text, onClick }) {
  return (
    <li
      onClick={() => onClick(text)}
      className="flex items-center gap-2 cursor-pointer"
    >
      <p className=" font-bold cursor-pointer hover:border-b-2 hover:border-b-[#C65F6A]">
        {text}
      </p>
    </li>
  );
}

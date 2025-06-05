import CategoryItem from "../components/CatagoryItem";

export default function Catagory({ onCategoryChange }) {
  const categories = ["All", "Frontend", "Backend", "DevOps"];

  return (
    <div className="flex justify-between items-center p-4 bg-[#393652] text-white">
      <nav className="mx-auto w-full">
        <ul className="space-x-4 flex items-center justify-around">
          {categories.map((cat) => (
            <CategoryItem
              key={cat}
              text={cat}
              onClick={() => onCategoryChange(cat)}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}

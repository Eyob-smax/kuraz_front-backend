import { MdSearch } from "react-icons/md";

export default function Header({ onSearch }) {
  return (
    <header>
      <div className="flex justify-between items-center p-4 bg-[#393652] text-white">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="flex items-center space-x-2">
              <MdSearch className="text-3xl cursor-pointer" />
              <input
                type="text"
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search task"
                className="bg-transparent border-b border-white px-2 text-white placeholder:text-white outline-none"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

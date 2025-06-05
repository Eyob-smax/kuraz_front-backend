export default function CategoryItem({ text }: { text: string }) {
  return (
    <li>
      <p className=" font-bold cursor-pointer hover:border-b-2 hover:border-b-[#C65F6A]">
        {text}
      </p>
    </li>
  );
}

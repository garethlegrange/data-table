import Link from "next/link";

const Sidebar = () => {
  return (
    <nav className="p-6 border-r border-gray-200 bg-gray-50 min-w-40">
      <ul>
        <li>
          <Link href="/users" className="text-indigo-400 font-bold hover:text-indigo-600">
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

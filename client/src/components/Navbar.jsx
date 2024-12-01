import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
        <Link to="/" className="hover:text-gray-400">Workout Planner
        </Link>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/planner" className="hover:text-gray-400">Planner</Link>
          </li>
          <li>
            <Link to="/library" className="hover:text-gray-400">Library</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
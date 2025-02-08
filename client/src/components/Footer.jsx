
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-row justify-between items-center px-4">
        <div className="text-left">
          <h2 className="text-md font-semibold">Workout Planner</h2>
          <p className="text-xs text-gray-300">Plan, track, and achieve your fitness goals.</p>
        </div>
        <div className="flex space-x-10 items-center">
          <nav>
            <ul className="flex space-x-6 text-xs">
              <li><a href="/about" className="hover:text-gray-300">About</a></li>
              <li><a href="/workouts" className="hover:text-gray-300">Workouts</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
          <p className="mt-4 text-xs text-center text-gray-500">&copy; {new Date().getFullYear()} Workout Planner. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// TODO: add image that pops up on muscle group hover
const muscleGroups = [
  { name: "Chest" },
  { name: "Back" },
  { name: "Biceps" },
  { name: "Triceps" },
  { name: "Abs" },
  { name: "Glutes" },
  { name: "Hamstrings" },
  { name: "Shoulders" },
  { name: "Cardio" },
  { name: "Calves" },
  { name: "Stretches" },
  { name: "Calisthenics" },
];

// TODO: lead to a page that shows all the exercises for that muscle group
// TODO: connect to database for exercises
const WorkoutLibrary = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-8">
      <h1 className="text-white text-5xl font-bold mb-20">Workout Library</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {muscleGroups.map((group, index) => (
          <Link to={`/workouts/${group.name.toLowerCase()}`} key={group.name}>
            <motion.div
              className={`w-32 h-32 lg:w-40 lg:h-40 rounded-lg shadow-lg text-xl font-semibold flex items-center justify-center bg-gray-300 border-4 border-white ${group.color}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {group.name}
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WorkoutLibrary;

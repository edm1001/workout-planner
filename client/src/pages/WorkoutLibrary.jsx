
import { motion } from "framer-motion";

const muscleGroups = [
  { name: "Chest", color: "bg-red-500" },
  { name: "Back", color: "bg-blue-500" },
  { name: "Biceps", color: "bg-green-500" },
  { name: "Triceps", color: "bg-yellow-500" },
  { name: "Abs", color: "bg-orange-500" },
  { name: "Legs", color: "bg-purple-500" },
  { name: "Shoulders", color: "bg-pink-500" },
  { name: "Cardio", color: "bg-teal-500" },
];

const WorkoutLibrary = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">
      <h1 className="text-white text-4xl font-bold mb-8">Workout Library</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {muscleGroups.map((group, index) => (
          <motion.div
            key={group.name}
            className={`w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-lg shadow-lg text-white text-xl font-semibold flex items-center justify-center cursor-pointer ${group.color}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.2 }}
          >
            {group.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutLibrary;
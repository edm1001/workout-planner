import { motion } from "framer-motion";

// TODO: add image that pops up on muscle group hover
const muscleGroups = [
  { name: "Chest" },
  { name: "Back"  },
  { name: "Biceps"},
  { name: "Triceps" },
  { name: "Abs"  },
  { name: "Legs" },
  { name: "Shoulders" },
  { name: "Cardio" },
];

// TODO: lead to a page that shows all the exercises for that muscle group
const WorkoutLibrary = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-700 p-6">
      <h1 className="text-white text-5xl font-bold mb-20">Workout Library</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        {muscleGroups.map((group, index) => (
          <motion.div
            key={group.name}
            className="w-32 h-32 lg:w-40 lg:h-40 rounded-lg shadow-lg border-4 border-black bg-gray-300 text-xl font-semibold flex items-center justify-center cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3  }}
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

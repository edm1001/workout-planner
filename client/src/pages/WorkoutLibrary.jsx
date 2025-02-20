import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// TODO: add image that pops up on muscle group hover
const muscleGroups = [
  { name: "Chest" },
  { name: "Triceps" },
  { name: "Back" },
  { name: "Biceps" },
  { name: "Shoulders" },
  { name: "Abs" },
  { name: "Booty" },
  { name: "Thighs" },
  { name: "Calves" },
  { name: "Cardio" },
  { name: "Calisthenics" },
  { name: "Stretches" },
];

// TODO: lead to a page that shows all the exercises for that muscle group
// TODO: connect to database for exercises
const WorkoutLibrary = () => {
  const [selectedGroup, setSelectedGroup] = useState(null); // To store selected muscle group
  const [exercises, setExercises] = useState([]); // To store exercises of the selected muscle group

  // Fetch exercises when a muscle group is selected
  useEffect(() => {
    if (selectedGroup) {
      fetch(`/api/exercises?tag=${selectedGroup.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => setExercises(data));
    }
  }, [selectedGroup]); // Re-fetch exercises whenever selectedGroup changes

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-8">
      <h1 className="text-white text-5xl font-bold mb-20">Workout Library</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {muscleGroups.map((group, index) => (
          <motion.div
            key={group.name}
            className={`w-32 h-32 lg:w-40 lg:h-40 rounded-lg shadow-lg text-xl font-semibold flex items-center justify-center bg-gray-300 border-4 border-white cursor-pointer`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedGroup(group.name)}
          >
            {group.name}
          </motion.div>
        ))}
      </div>

      {/* Show exercises when a muscle group is selected */}
      {selectedGroup && (
        <div className="mt-10">
          <h2 className="text-3xl text-white mb-6">{selectedGroup} Workouts</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {exercises.map((exercise) => (
              <div
                key={exercise._id}
                className="w-64 p-4 bg-gray-800 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold">{exercise.name}</h3>
                <p>{exercise.description}</p>
                <button
                  className="text-blue-500"
                  onClick={() =>
                    (window.location.href = `/exercise/${exercise._id}`)
                  }
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutLibrary;

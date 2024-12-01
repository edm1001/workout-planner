import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <section className="text-gray-800 h-screen flex flex-col justify-center items-center my-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pb-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Explore Our Features</h2>
        <p className="text-lg mt-2">
          Plan your workouts or discover new routines tailored just for you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-4xl">
        {/* Workout Planner */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center text-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Workout Planner</h3>
          <p className="text-gray-600">
            Plan your monthly workout schedule, set goals, and track your
            progress with ease.
          </p>
          <button className="mt-6 bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Start Planning
          </button>
        </motion.div>

        {/* Workout Library */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center text-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Workout Library</h3>
          <p className="text-gray-600">
            Browse a curated library of workouts for every fitness goal and
            level.
          </p>
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-gray-800">
            Explore Workouts
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

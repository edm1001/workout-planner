import { motion } from "framer-motion";
import { Link } from "react-router";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-r from-gray-800 to-blue-600 text-white py-20 px-8 text-center"
    >
      <div className="container mx-auto">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Your Fitness Journey Starts Now
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl"
        >
          Join us to create your personalized workout plan and achieve your fitness goals!
        </motion.p>
        <div className="mt-8 space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            <Link to="/library">
            Explore Workouts
            </Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-transparent border border-white px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            <Link to="/planner">Plan Your Workout</Link>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;

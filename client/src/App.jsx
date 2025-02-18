import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Planner from "./pages/Planner.jsx";
import WorkoutLibrary from "./pages/WorkoutLibrary.jsx";

const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/library" element={<WorkoutLibrary />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;

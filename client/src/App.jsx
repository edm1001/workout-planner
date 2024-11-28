import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Planner from "./pages/Planner.jsx";
import WorkoutLibrary from "./pages/WorkoutLibrary.jsx";

console.log("App");

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/library" element={<WorkoutLibrary />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;

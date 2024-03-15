import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProSidebar from "./components/ProSidebar/ProSidebar";
import Games from "./components/Pages/Games/Games.jsx";
import MCardLogic from "./components/MemoryCards/MCardLogic"
import Score from "./components/Pages/Scores/Score.jsx";
import FunFacts from "./components/Pages/FunFacts/FunFacts.jsx";
import Contact from "./components/Pages/Contact/Contact.jsx";


function App() {

  return (
    <Router>
      <ProSidebar />
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Games />} />
        <Route path="/games/:id" element={<MCardLogic />} />
        <Route path="/scores" element={<Score />} />
        <Route path="/funfacts" element={<FunFacts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;


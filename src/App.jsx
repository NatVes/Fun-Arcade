import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProSidebar from "./components/ProSidebar/ProSidebar";
import Games from "./components/Games/Games";
import MemoryCard from "./components/MemoryCards/MemoryCard/MemoryCard.jsx";
import Score from "./components/Scores/Score";
import FunFacts from "./components/FunFacts/FunFacts";
import Contact from "./components/Contact/Contact";


function App() {

  return (
    <Router>
      <ProSidebar />
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Games />} />
        <Route path="/:id" element={<MemoryCard />} />
        <Route path="/scores" element={<Score />} />
        <Route path="/funfacts" element={<FunFacts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

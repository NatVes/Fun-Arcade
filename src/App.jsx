import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProSidebar from "./components/ProSidebar/ProSidebar";
import Games from "./components/Pages/Games/Games.jsx";
import Score from "./components/Pages/Scores/Score.jsx";
import FunFacts from "./components/Pages/FunFacts/FunFacts.jsx";
import Contact from "./components/Pages/Contact/Contact.jsx";
import PlayGame from "./components/Pages/PlayGame/PlayGame.jsx";
import FunFactsInfo from "./components/Pages/FunFactsInfo/FunFactsInfo.jsx";


function App() {

  return (
    <Router>
      <div>
      <ProSidebar />
        <div className="d-flex flex-column">
          <Routes>
            <Route path="/" element={<Games />} />
            <Route path="/games/:title" element={<PlayGame />} />
            <Route path="/scores" element={<Score />} />
            <Route path="/funfacts" element={<FunFacts />} />
            <Route path="/funfacts/:title" element={<FunFactsInfo />}/>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


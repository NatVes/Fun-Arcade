// import fetchData from "./utils/API";
import ProSidebar from "./components/ProSidebar/ProSidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Games from "./components/Games/Games";
import Score from "./components/Scores/Score";
import FunFacts from "./components/FunFacts/FunFacts";
import Contact from "./components/Contact/Contact";


function App() {
  // const img = fetchData();
  // console.log(img);

  return (
    <Router>
      <ProSidebar />
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Games />} />
        <Route path="/scores" element={<Score />} />
        <Route path="/funfacts" element={<FunFacts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

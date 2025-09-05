import Home from "./pages/Home.jsx";
import ContactMe from "./pages/ContactMe.jsx"
import HireMe from "./pages/HireMe.jsx"
import About from "./pages/About.jsx"
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hireme" element={<HireMe />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {
  return (
    <Router>
      <div className="layout">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/app/Home";
import "@/styles/index.css";
import "@/components/navbar/navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

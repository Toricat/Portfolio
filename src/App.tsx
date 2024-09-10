import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/app/Home";
import "@/styles/index.css";
import Navbar  from "@/components/navbar/navbar";

const App = () => {
  return (

    <Router>
      <div className="flex  w-full h-full ">
       <Navbar/>
       <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </div>
        </div>
    </Router>
  );
};

export default App;

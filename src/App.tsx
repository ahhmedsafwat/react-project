import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Home, CreatePost } from "./pages";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

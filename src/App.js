import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header";
import SideNav from "./Components/Shared/SideNav";
import Support from "./Components/Support/Support";

function App() {
  return (
    <div className="App">
      <Header />
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

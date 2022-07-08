import './App.css';
import Header from './components/Header';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Admin from './components/Admin';
import { useEffect } from 'react';


function App() {
 
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="projects/*" element={<Projects />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;

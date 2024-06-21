import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Project from "./pages/Project/Project";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/project" element={<Project />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

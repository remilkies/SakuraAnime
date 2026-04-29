import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Compare from "./Compare";
import Timeline from "./Timeline";
import Button from "./Buttons";

function NavBar() {
    return (
        <>
            
            <nav className="navBar">
                <Link to="/">
                    <Button>Home</Button>
                </Link>

                <Link to="/Compare">
                    <Button>Compare</Button>
                </Link>

                <Link to="/Timeline">
                    <Button>Timeline</Button>
                </Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Compare" element={<Compare />} />
                <Route path="/Timeline" element={<Timeline />} />
            </Routes>
        </>
    );
}

export default NavBar;
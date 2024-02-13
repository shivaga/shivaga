import React, { useEffect, useState } from 'react';
import {useLocation } from "react-router-dom";
import { useRef } from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import Projects from "../pages/Projects.js";
import Home from '../pages/Home.js';
import Skills from '../pages/Skills.js';
import Experience from '../pages/Experience.js';
import Footer from '../pages/contact.js';
import "../styles/navbar.css"
function Navbar() {
    const home= useRef(null);
    const skill = useRef(null);
    const project = useRef(null);
    const experience = useRef(null);
    const contact = useRef(null);
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }
    useEffect(() => { setExpandNavbar(false) }, [location]);
    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button
                    onClick={() => { setExpandNavbar((prev) => !prev) }}>
                    <ReorderIcon />
                </button>
            </div>
            <div className='links'>
            <p onClick={() => scrollToSection(home)}>Home</p>
                <p onClick={() => scrollToSection(skill)}>Skills</p>
                <p onClick={() => scrollToSection(project)}>Projects</p>
                <p onClick={() => scrollToSection(experience)}>Experience</p>
                <p onClick={() => scrollToSection(contact)}>Contact me</p>
            </div>
            <div ref={home}><Home/></div>
            <div ref={skill}><Skills /></div>
            <div ref={project}><Projects /></div>
            <div ref={experience}><Experience /></div>
            <div ref={contact}><Footer/></div>

        </div>
    )
}

export default Navbar;

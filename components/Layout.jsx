import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; 

export default function Layout() {
    return (
        <>
            <h1 className="portfolio-title"> Kripa Pravin Acharya <img 
                    src="./public/images/logo.jpeg" 
                    alt="Custom Logo" 
                    style={{ width: '100px', height: '100px', marginRight: '10px',
                        fontFamily: 'Times New Roman, sans-serif',
                     }} 
                /></h1>
            
            <nav className="navbar">
                <Link to="/">Home</Link>
                <span> | </span>
                <Link to="/about">About</Link>
                <span> | </span>
                <Link to="/services">Services</Link>
                <span> | </span>
                <Link to="/project">Project</Link>
                <span> | </span>
                <Link to="/contact">Contact</Link>
            </nav>
            <br />
            <hr />
        </>
    );
}

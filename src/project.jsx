import React from 'react';

export default function Project() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Times New Roman, sans-serif' }} >
            <h2>My Projects</h2>

            <div className="project">
                <h3>Bug Smasher Game</h3>
                <img src="./public/images/project1.jpg" 
                alt="Bug Smasher Game" 
                style={{ width: '250px', height: '200px' }} 
                />
                <p>
                    <strong>Description:</strong> A browser-based game where the player clicks on randomly hopping bugs to score points. I implemented game logic, score tracking, and gradually increasing difficulty using JavaScript and HTML5 Canvas.
                </p>
                <p><strong>Outcome:</strong> Successfully developed and deployed the game with a smooth user experience and increasing challenge levels over time.</p>
            </div>

            
            <div className="project">
                <h3>Registration Page</h3>
                <img src="./public/images/project2.jpg" 
                alt="Registration Page"
                style={{ width: '250px', height: '200px' }} 
                 />
                <p>
                    <strong>Role:</strong> Front-End Developer <br/>
                    <strong>Description:</strong> A registration page for users to sign up. I implemented form validation and responsive design using HTML, CSS, and JavaScript.
                </p>
                <p><strong>Outcome:</strong> Created a clean and responsive registration page that captures and validates user input efficiently.</p>
            </div>

            
            <div className="project">
                <h3>Real Estate Listing Page</h3>
                <img src="./public/images/project3.jpg" 
                alt="Real Estate Listing Page" 
                style={{ width: '250px', height: '200px' }} 
                />
                <p>
                    <strong>Description:</strong> A dynamic real estate listing page that fetches data from an API to display property details. I handled both the front-end (React) and back-end (Node.js) development.
                </p>
                <p><strong>Outcome:</strong> Developed a fully functional listing page that integrates with external APIs to display property listings in real time.</p>
            </div>
        </div>
    );
}

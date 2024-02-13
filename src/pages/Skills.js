import React from 'react';
import "../styles/Home.css";

function Skills() {
  return (
    <div>
       <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Web-Technologies</h2>
            <span>
              HTML, CSS, Bootstrap, NodeJS, ExpressJS, ReactJS
            </span>
          </li>
          <li className="item">
            <h2>App-Technologies</h2>
            <span>
              Flutter, Firebase, Dart
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C, C++</span>
          </li>
          <li className="item">
            <h2>Database Management</h2>
            <span>MySQL, MongoDB</span>
          </li>
        </ol>
      </div>
      
    </div>
  )
}

export default Skills;

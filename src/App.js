import React from 'react';
import './App.css';
import logo from './images/black.svg';


function App() {
  return (
    <div className="challenge-light" id="light">
      <section id="body">
        <div className="container">
          <div className="header">
            <div><a><img src={logo} alt="logo" id="logo"></img></a></div>
            <div className="nav">
              <ul className="navbar" id='menu'>
                <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Our Lab</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Team</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Case Study</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Community</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
              </ul>
            </div>
            <div>
              <button>Resgister for free</button>
            </div>
          </div>
          <div className="content">
            <h1>Discover reality  in every pixel</h1>
            <p>Explore your reality in an immersive environment with every tool to move and participate using our VR headsets. This is an headshot VR/AR concept design.</p>
            <div className="group-button">
              <div><button className="play">Play a reality</button></div>
              <div><button className="watch">Watch a demo</button></div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;
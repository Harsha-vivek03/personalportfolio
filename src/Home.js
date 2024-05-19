import { Link } from 'react-router-dom';
import img1 from './images/h2.jpg';
import React from 'react';
import Header from './Header';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <img src={img1} alt="Profile" />
        <div className="content">
          <h1>Androthu Harsha Vivek Gangadhar</h1>
          <div className="paras">
            <p>
              I am a self-motivated and hardworking student in the IT sector. My projects and applications in web designing
              and data science have given me personal experience and a strong interest in web development and data
              analytics. I am now looking forward to a challenging and rewarding career in a professional environment where I
              can enhance my skills and contribute towards achieving organizational goals.
            </p>
          </div>
          <div className="buttons">
            <Link to="/about">
              <button>About Me</button>
            </Link>
            <Link to="/projects">
              <button>Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

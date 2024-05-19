import React from 'react';
import Header from './Header';
import img1 from './images/issue1.png';
import img2 from './images/resucraft.png';
import img3 from './images/portfolio.png';
import img4 from './images/library.png';
import img5 from './images/learn.png';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <Header name="Projects" />
      <div className="projects-grid">
        <div className="project-card">
          <img className="issue" height={190} src={img1} alt="Issue Tracking System" />
          <h2>Issue Tracking System</h2>
          <p>Developed an Issue Tracking System with HTML, CSS, JSP, Java Servlets, JDBC for database connections, and MySQL for database. Authorized users can log in to the application to manage issues by adding, deleting, and updating issue information, facilitating efficient issue resolution and collaboration with MVC architecture.</p>
        </div>

        <div className="project-card">
          <img src={img2} alt="ResuCraft" />
          <h2>ResuCraft</h2>
          <p>Led a team of three in the development of a full-stack resume builder application using ReactJS for the front-end, Django for the back-end, and PostgreSQL for the database. The application allows users to input their information, select a template, and generate downloadable resumes.</p>
        </div>

        <div className="project-card">
          <img src={img5} alt="Learn React" />
          <h2>Learn React</h2>
          <p>Built a small website using ReactJS to explain the fundamentals of React, including useState(), onMouseDown(), onMouseUp(), onKeyPress(), onChange() events, and props concepts. The project displays both the view and the working code, making it easy for users to understand how these elements function.</p>
        </div>

        <div className="project-card">
          <img src={img4} alt="Library Management System" />
          <h2>Library Management System</h2>
          <p>Designed and implemented a front-end system using HTML, CSS, and JavaScript to manage approximately 400 books. Users can efficiently search for, borrow, and return books, enhancing accessibility and streamlining library operations.</p>
        </div>

        <div className="project-card">
          <img src={img3} alt="Personal Portfolio" />
          <h2>Personal Portfolio</h2>
          <p>I utilized ReactJS to design and develop a responsive, simple portfolio website showcasing my skills and experience. I conceptualized and implemented the design, ensuring it effectively reflects my abilities and presents my professional profile in a clear and engaging manner.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

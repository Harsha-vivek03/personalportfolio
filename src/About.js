import React from 'react'
import Header from './Header'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt,faUser } from '@fortawesome/free-solid-svg-icons';
const About = () => {
  return (
    <div>
         <Header name="About"/>
         <div className="about">
              {/* <div className="divs"> */}
                  <div className="leftdiv1 left">
                    <p>Personal Info</p>
                  </div>
                  <div className="rightdiv1 right">
                     
                   <ul>
                    <li><FontAwesomeIcon className="icon" icon={faUser} />  A Harsha Vivek Gangadhar</li>
                    <li><FontAwesomeIcon className="icon" icon={faPhone}/>  +91 9550617522</li>
                    <li><FontAwesomeIcon className="icon" icon={faEnvelope} />  hvgnani79813@gmail.com</li>
                    <li><FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />  Siddhardha Nagar , Rajahmundry</li>
                   </ul>

                  </div>
              {/* </div> */}
              {/* <div className="divs" > */}
                  <div className="leftdiv2 left">
                  <p>Education</p>
                  </div>
                  <div className="rightdiv2 right">
                   <ul>
                    <li>Bachelor Of Technology</li><p>Present I am persuing B.Tech 3rd year , IT department in Jawaharlal Nehru Technological University -Gurajada , vizianagaram</p>
                    <li>Intermediate</li><p>Narayana Junior College, Rajahmundry |
(BIEAP board) |
Year of completion: 2021 |
CGPA: 10.00/10</p>
                    <li>Schooling</li><p>Nagaraja Municipal High School, Rajahmundry | 
(SSC board) |
Year of completion: 2019 |
CGPA: 9.80/10</p>
                   </ul>

                  </div>
              {/* </div> */}
              <div className="leftdiv3 left">
                  <p>Skills</p>
                  </div>
                  <div className="rightdiv3 right">
                   <ul>
                    <li>C language</li>
                    <div className="skilldivs">
                        <div id="c">70%</div>
                    </div>
                    <li>Python</li>
                    <div className="skilldivs">
                        <div id="python">60%</div>
                    </div>
                    <li>Java</li>
                    <div className="skilldivs">
                        <div id="java">70%</div>
                    </div>
                    <li>Html</li>
                    <div className="skilldivs">
                        <div id="html">90%</div>
                    </div>
                    <li>Css</li>
                    <div className="skilldivs">
                        <div id="css">80%</div>
                    </div>
                    <li>ReactJs</li>
                    <div className="skilldivs">
                        <div id="react">60%</div>
                    </div >
                    <li>NodeJs</li>
                    <div className="skilldivs">
                        <div id="node">40%</div>
                    </div >
                    <li>Microsoft Excel</li>
                    <div className="skilldivs">
                        <div id="ms">70%</div>
                    </div>
                    <li>Communication</li>
                    <div className="skilldivs">
                        <div id="cs">70%</div>
                    </div>
                

                   </ul>

                  </div>


              <div className="leftdiv4 left">
                    <p>Certifications</p>
                  </div>
                  <div className="rightdiv4 right">
                     
                   <ul>
                    <li>SQL For Data Science | IBM</li>
                    <li>Application Development Foundations | Oracle</li>
                    <li>Python | Kaggle</li>
                    <li>Front End development | IBM skillbuild</li>
                    <li>Java Foundation | Oracle</li>
                    <li>Web Development and Designing Intern |
                        Oasis Infobyte</li>
                    <li>AWS Cloud Essentials | Amazon</li>
                    
                   </ul>

                  </div>

                  <div className="leftdiv2 left">
                  <p>Positions of Responsibility</p>
                  </div>
                  <div className="rightdiv2 right">
                   <ul>
                    <li>ReactJS Workshop</li><p>WEBBLAZE – REACT JS WORKSHOP conducted on March
15 & 16 2024 .I led a technical workshop on React JS
.Serving as the resource person, I instructed participants
and guided them in enhancing their web design abilities
using React JS.</p>
                    <li>Hour of Code</li><p>CONDUCTED – HOUR OF CODE event during Computer
Science Week by ACM JNTU GV Student Chapter. I
mentored students in Python programming, fostering
their coding skills. Also, I guided students in building the
Rock Paper Scissors game.</p>
                   </ul>

                  </div>
                  <br></br>         <br></br>         <br></br>
         </div>
        
    </div>
  )
}

export default About

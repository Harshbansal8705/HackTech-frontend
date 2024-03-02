import React from "react";
import "./styles/landingpage.css";
import { Link } from "react-router-dom";
import Navbar from './navbar';
import landingimg from '../images/sysadmin_03.jpg';

const LandingPage = () => {
  return (
    <>
    {/* <Navbar /> */}
      <div className="container-landingpage">
        <div className="left-landingpage">
          <pre>
            <h1 className="heading">
              {"Welcome Buddy!\nLet’s optimize your "}<span style={{color:"#296dd0"}}>{"Breadth selection"}</span>
            </h1>
          </pre>

          <div className="para-landingpage">The current breadth selection process at IIT Kharagpur is often chaotic and stressful
                    for students. The high demand for specific breadth courses, coupled with limited
                    availability, leads to a last-minute scramble during subject registration. Students
                    often face difficulty in choosing the right breadth based on various factors such as:
                    <ul style={{ listStyleType: 'disc' }}>
                        <li> Academic performance</li>
                        <li> Career goals</li>
                        <li> Personal interests</li>
                        <li> Course difficulty</li>
                    </ul>
                    This can result in hasty decisions that may not be in the student's best academic or
                    career interests. So here our website to all solve this problem.
                </div>
        
          <Link to={"/register"}><button className="get-started">Get Started</button></Link>
        </div>
        <div className="right-landingpage">
            {/* <img src="./src/images/sysadmin_03.jpg"></img> */}
            <img src={landingimg} style={{mixBlendMode: "multiply"}}></img>
        </div>
      </div>
    </>
  );
};

export default LandingPage;


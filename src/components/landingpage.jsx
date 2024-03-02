import React from "react";
import "./styles/landingpage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="container-landingpage">
        <div className="left-landingpage">
          <pre>
            <h1 className="heading">
              {"Welcome Buddy!\nLet’s optimize your "}<span style={{color:"#296dd0"}}>{"Breadth selection"}</span>
            </h1>
          </pre>

          <p className="text-landingpage">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore .
          </p>

          <Link to={"/register"}><button className="get-started">Get Started</button></Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

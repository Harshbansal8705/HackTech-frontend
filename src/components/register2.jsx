import React, { useState } from "react";
import "./styles/register2.css";
import user from "../images/person.png";
import email from "../images/email.png";
import rollno from "../images/rollno.png";
import depart from "../images/depart.png";


let user_icon = "../images/person.pnng";
let user_email = "../images/email.png";
let user_rollno = "../images/roll.png";
let user_depart =  "../images/roll/depart";



export default function Register2(){

    function handleSubmit(){

    }
    function handleLogIn(){
if(action!="LogIn"){
    setAction("LogIn");
}
else{
    handleSubmit();
}
    }

    function handleRegister(){
        if(action!="Register"){
            setAction("Register");
        }
        else{
            handleSubmit();
        }
    }
    const[action, setAction] = useState("Register");
    return(<>
    <div className="reg-conatiner">
        <div className="reg-header">
            <div className="reg-text">Register</div>
            <div className="reg-underline"></div>
        </div>
        <div className="reg-inputs">
            {action==="LogIn"?<div></div>: <div className="reg-input">
                <img src={user} alt="" />
                <input type="text" placeholder="Full Name"/>
            </div>}
           

            <div className="reg-input">
                <img src={email} alt="" />
                <input type="email" placeholder="Institute Email"/>
            </div>

            <div className="reg-input">
                <img src={rollno} alt="" />
                <input type="text" placeholder="Roll Number"/>
            </div>
            {action==="LogIn"?<div></div>: <div className="reg-input">
                <img src={depart} alt="" />
                <input type="text" placeholder="Department"/>
            </div> }
           
        </div>

        <div className="reg-submit-container">
            <div className={action==="LogIn"?"reg-submit gray":"reg-submit"} onClick={handleRegister}>Register</div>
            <div className={action==="Register"?"reg-submit gray":"reg-submit"} onClick={handleLogIn}>LogIn</div>
        </div>
    </div>
    </>)
}
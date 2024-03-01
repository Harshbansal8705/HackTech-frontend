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

function handleOTP(){

}

    async function handleRegSubmit(){
setModal(false);

    }
    async function handleLogInSubmit(){
        setModal(false);
    }

    function handleLogIn(){
if(action!="LogIn"){
    setAction("LogIn");
}
else{
    handleLogInSubmit();
}
    }

    function handleRegister(){
        if(action!="Register"){
            setAction("Register");
        }
        else{
            handleRegSubmit();
        }
    }

    const[modal, setModal]=useState(true);
    const[action, setAction] = useState("Register");
    return(<>
    {modal && <div className="reg-conatiner">
        <div className="reg-header">
            <div className="reg-text">{action}</div>
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
    </div> }

    {!modal && <div className="otp-body"><div className="otp-container">
        <h4 className="otp-h4">Enter your 4 digit OTP</h4>
        <form action="#"> 
        <div className="otp-input-fields">
            <input type="number"/>
            <input type="number" />
            <input type="number" />
            <input type="number"/>
        </div>

        <button className="otp-submit" onClick={handleOTP}>Verify OTP</button>
        </form>
        </div></div>}
    
    </>)
}
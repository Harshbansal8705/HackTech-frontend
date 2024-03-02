import React, { useState } from "react";
import "./styles/register2.css";
import userIcon from "../images/person.png";
import emailIcon from "../images/email.png";
import rollnoIcon from "../images/rollno.png";
import departIcon from "../images/depart.png";
import Input from "./Input";
import { redirect } from "react-router-dom";



export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [department, setDepartment] = useState("");

    const [isEmailVerified, setIsEmailVerified] = useState(false);
    function handleSubmit(e){
        e.preventDefault();
        alert('load h bhai sdf')
        if(isEmailVerified){
            // dispatch(registerUser({name, email, rollNo, department}));
            alert('submit h bhai');
        }else{
            // dispatch(sendOtp(email));
            alert('load h bhai')
            redirect('/verify/otp')
            setIsEmailVerified(true);
        }
    }
 
  return (
    <>
      <div className="reg-conatiner">
        <div className="reg-header">
          <div className="reg-text">register</div>
          <div className="reg-underline"></div>
        </div>
        <div className="reg-inputs">
        <form className="form flex gap-1 flex-col justify-center items-center" onSubmit={(e) => handleSubmit(e)}>
          {isEmailVerified ? <Input placeholder="Name" type="text" icon={userIcon}  value={name} setValue={setName}/> : null }
         {!isEmailVerified ? <Input placeholder="Institute Email" type="email" icon={emailIcon}  value={email} setValue={setEmail}/> : null}
          {isEmailVerified ? <Input placeholder="rollNo" type="text" icon={rollnoIcon} value={rollNo} setValue={setRollNo} /> : null}
        {isEmailVerified ?   <Input placeholder="Department" type="text" icon={departIcon} value={department} setValue={setDepartment} /> : null}
          <button type="submit" style={{background: "black7"}}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

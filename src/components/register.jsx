import React, { useState } from "react";
import { redirect } from "react-router-dom";
import "./styles/register2.css";
import userIcon from "../images/person.png";
import emailIcon from "../images/email.png";
import rollnoIcon from "../images/rollno.png";
import departIcon from "../images/depart.png";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { signupWithOtpAsync } from "../auth/authSlice";




export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [department, setDepartment] = useState("");
    const dispatch = useDispatch()

    const [isEmailVerified, setIsEmailVerified] = useState(false);
    function handleSubmit(e){
        e.preventDefault();
        
        if(isEmailVerified){
            dispatch(signupWithOtpAsync({name, email, rollNo, department}));
        }else{
           fetch(process.env.REACT_APP_BACKEND_URL + "register/otp", {
                method: "POST",
                headers: {
                     "Content-Type": "application/json"
                },
                body: JSON.stringify({email})
              }).then(res => res.json()).then(data => {
                console.log(data);
                if(data.error){
                     alert(data.error);
                }else{
                     setIsEmailVerified(true);
                }
              }
           )
           redirect("/register/otpverification");
        }
    }
 
  return (
    <>
      <div className="">
        <div className="reg-header">
          <div className="reg-text">register</div>
          <div className="reg-underline"></div> 
         </div>
        <div className="flex flex-col justify-center items-center gap-7 m-10">
        <form className="form flex gap-1 flex-col justify-center items-center" >
          {isEmailVerified ? <Input placeholder="Name" type="text" icon={userIcon}  value={name} setValue={setName}/> : null }
         {!isEmailVerified ? <Input placeholder="Institute Email" type="email" icon={emailIcon}  value={email} setValue={setEmail}/> : null}
          {isEmailVerified ? <Input placeholder="rollNo" type="text" icon={rollnoIcon} value={rollNo} setValue={setRollNo} /> : null}
        {isEmailVerified ?   <Input placeholder="Department" type="text" icon={departIcon} value={department} setValue={setDepartment} /> : null}
          
          </form>
            <button onClick={(e) => handleSubmit(e)} className="bg-black w-1/5 m-3 p-4 rounded-md text-white">{isEmailVerified ? "Signup" : "Verify"}</button>
         
        </div>
      </div>
    </>
  );
}

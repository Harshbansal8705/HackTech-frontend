import React, { useEffect, useState } from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import "./styles/register2.css";
import userIcon from "../images/person.png";
import emailIcon from "../images/email.png";
import rollnoIcon from "../images/rollno.png";
import departIcon from "../images/depart.png";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { signupWithOtpAsync } from "../auth/authSlice";




export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [department, setDepartment] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation();
    const registered = useSelector(state => state.auth.registered)
    
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    useEffect(() => {
     setIsEmailVerified(location.state?.isEmailVerified);
     setEmail(location.state?.email);
    }, [location.state]);

    useEffect(() => {
        if(registered){
            navigate("/login");
        }
    }, [])
    async function handleSubmit(e){
        e.preventDefault();
        
        if(isEmailVerified){
          const res =  dispatch(signupWithOtpAsync({name, email, rollNo, department}));
          console.log(res);
          if(res.error){
              alert(res.error);
          }
          else{
              navigate("/login");
          }
        }else{
           await fetch(process.env.REACT_APP_BACKEND_URL + "register/otp", {
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
                     navigate("/register/verify", {state: {email : email, isSignUp: true}});
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
          <div className="reg-text">Register</div>
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
        <div className="flex justify-center">
          <a href="/login" className="text-center text-2xl underline"> login </a>
        </div>
      </div>
    </>
  );
}

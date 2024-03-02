import React, { useState } from "react";
import "./styles/register2.css";
import departIcon from "../images/depart.png";
import Input from "./Input";
import { useLocation, useNavigate } from "react-router-dom";





export default function Verification() {
  const [otp , setOtp ] = useState("");
  const location = useLocation();
  const email = location.state.email;
  const isSignUp = location.state.isSignUp;
  const navigate = useNavigate();
   async function handleSubmit(e){
    if(isSignUp){
              e.preventDefault();
           fetch(process.env.REACT_APP_BACKEND_URL + "register/verify", {
                method: "POST",
                headers: {
                     "Content-Type": "application/json"
                },
                body: JSON.stringify({email : email , otp : otp})
              }).then(res => res.json()).then(data => {
                console.log(data);
                if(data.error){
                     alert(data.error);
                }else{
                  if(data.success === true){
                    navigate("/register" , {state: {email , isEmailVerified: true}});
                }
                else{
                  alert("Invalid OTP");
                }
              }
           
            })
            
          }
          else{
              e.preventDefault();
           fetch(process.env.REACT_APP_BACKEND_URL + "login/verify", {
                method: "POST",
                headers: {
                     "Content-Type": "application/json"
                },
                body: JSON.stringify({email : email , otp : otp})
              }).then(res => res.json()).then(data => {
                console.log(data);
                if(data.error){
                     alert(data.error);
                }else{
                  if(data.success === true){
                     navigate("/dashboard" ) ;
                }
                else{
                  alert("Invalid OTP");
                }
              }
           
            })
          }

        }
 
  return (
    <>
      <div className="">
        <div className="reg-header">
          <div className="reg-text">register , </div>
          <div className="reg-underline"></div> 
          <h1> verify your email : {email} </h1>
         </div>
        <div className="flex flex-col justify-center items-center gap-7 m-10">
        <form className="form flex gap-1 flex-col justify-center items-center" >
         
        <Input placeholder="otp" type="text" icon={departIcon} value={otp} setValue={setOtp} /> 
          
          </form>
            <button onClick={(e) => handleSubmit(e)} className="bg-black w-1/5 m-3 p-4 rounded-md text-white">Verify</button>
         
        </div>
      </div>
    </>
  );
}

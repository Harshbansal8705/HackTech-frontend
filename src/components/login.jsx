import React, { useState } from "react";
import Input from "./Input";
import emailIcon from "../images/email.png";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    async function handleClick(){
        await fetch(process.env.REACT_APP_BACKEND_URL + "login/otp", {
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
                alert("OTP sent to your email");
                navigate("/register/verify", {state: {email , isSignup : false}});
            }
        }
        )
    }
    return(
        <>
        <div className="reg-header">
          <div className="reg-text">login</div>
          <div className="reg-underline"></div> 
         </div>
        <div className="flex flex-col justify-center items-center gap-7 m-10">
        <Input placeholder="email" type="text" icon={emailIcon} value={email} setValue={setEmail} />
        <button className="bg-black w-1/5 m-3 p-4 rounded-md text-white" onClick={handleClick}>Login</button>
        </div>
        </>
    )
}
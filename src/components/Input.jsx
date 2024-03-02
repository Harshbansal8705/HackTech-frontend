import React from 'react'
import "./styles/register2.css";

export default function Input({placeholder, type, value, setValue, icon}) {
    return (
        <div className="reg-input">
            <img src={icon} alt="" />
            <input type={type} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} value={value} />
        </div>
    )
}

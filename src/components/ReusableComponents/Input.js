import React from "react";

export default function Input({placeholder, value, name, onChange, type}){
    return(
        <div>
            <input className="mt-3" type={type} placeholder={placeholder}
             name={name} value={value} onChange={onChange} />
        </div>
    )
}
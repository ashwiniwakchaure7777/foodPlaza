import React,{useState} from "react";

const User = ({name}) =>{
    const [count] = useState(0);
    return(
        <div className="user-card">
            <h1>{count}</h1>
            <h2>Name:{name}</h2>
            <h3>Location: Pune</h3>
            <h4>Contact at ashwakchaure@gmail.com</h4>
        </div>
    )
}

export default User
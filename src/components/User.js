import React, { useState } from "react";

const User = (props) =>{
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(1);
    console.log(count1)
        return(
            <div className="user-card">
                <button onClick={()=>setCount1(count1+1)} >Increase Count</button>
                <h1>{count1}</h1>
                <h1>{count2}</h1>
                <h2>Name: {props.name}</h2>
                <h3>Location: chennai</h3>
                <h4>Contact: @selvi</h4>
            </div>
        )
    }


export default User
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () =>{
    // Create Local Variable
    const [btnName,setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    {/*<button className="loginButton" onClick={()=>{btnName="LogOut"; console.log(btnName)}}>{btnName}</button>
                       We cannnot directly modify the local state variable, we have to use second parameter which we get from useState
                       **** 
                        If we want our componet dynamic(something should changes in our component) we use "Local State Variable"
                    */}
                    <li>
                        <button className="loginButton" 
                                onClick={()=>{
                                    (btnName === "Login") ? setBtnName("LogOut") : setBtnName("Login")}}>
                                {btnName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
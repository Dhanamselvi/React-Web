import { LOGO_URL } from "../utils/constants"

const Header = () =>{
    // Create Local Variable
    let btnName = "Login"
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="loginButton" onClick={()=>{btnName="LogOut"; console.log(btnName)}}>{btnName}</button>
                    {/* If I clicking the Button it Printed Logout. 
                        That means this variable btnNamegot updated to "logout"
                        But that UI didnot update (Did not rerender (refresh)). So this is why JS variable does not work in such cases.
                        **** 
                        If we want our componet dynamic(something should changes in our component) we use "Local State Variable"
                    */}
                </ul>
            </div>
        </div>
    )
}

export default Header
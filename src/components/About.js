import User from "./User"
import UserClass from "./UserClass"

const About = () =>{
    return (
      <div>
      <h1>This is About Apge</h1>
      {/* Passing Props */}
      <User name={"Blesson"}/>
      <UserClass name={"Blesson Class"}/>
      </div>
    )
}

export default About
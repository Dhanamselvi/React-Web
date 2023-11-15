import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            count : 0,
            count2 : 2
        }
    }
    render(){
        return(
            <div className="user-card">
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count + 1})}}>Increase the Count using Class based State variable</button>
                <h1>Count2 : {this.state.count2}</h1>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: chennai</h3>
                <h4>Contact: @selvi</h4>
            </div>
        )
    }
}

export default UserClass
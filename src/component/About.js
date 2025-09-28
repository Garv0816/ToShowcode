import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{

    constructor(props){
         console.log("Parent Constructor called")
        super(props)
        this.state={
            count : 0,
        }
    }

    
componentDidMount(){
    console.log("Parent Mount called")
}

  render(){
    console.log("Parent Render Called")
   return (
        <div>
            <h1>This is About Us Page !</h1> 
            < UserClass 
            name ={"Hemant"} Location = {"Temple"} contact = {"999-888-28"}/>

            
        </div>
    )
  }

}

export default About;
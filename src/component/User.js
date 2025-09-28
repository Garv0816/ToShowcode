import { useState } from "react";
import React from "react";

class User extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            count :0,
        }

    }

    componentDidMount(){
        
    }
    render(){
            return (
        <div>
            <h1>Count Parent : {this.state.count}</h1>
             
        </div>
    )
    }

}


export default User;
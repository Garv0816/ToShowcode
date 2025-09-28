import React from "react"

class UserClass extends React.Component{
    

    constructor(props){
        console.log("Children Constructor called")
        super(props)

        this.state = {
            login : "default",
            followers: "null"

        }
    }

async componentDidMount(){

    const data = await fetch("https://api.github.com/users/Garv0816")
    const json = await data.json()

    this.setState({
        login : json,
    })

  

    console.log(json)
    console.log(json.id)
}

    render(){
        const{login , followers} = this.state.login

        console.log("Children Render called")
          return (
        <div>
            
            <h1>login ID :{login}</h1>
            <h2>Follower :{followers}</h2>
            <h2>Contact US : @99-22-372</h2>

        </div>
    )
    }
}

export default UserClass




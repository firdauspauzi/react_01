//react class component
import React from "react";
import homeStyle from "./home.module.css";

class Home extends React.Component {
    render(){
        return(
            <>
            <div id = {homeStyle.container}>
                {/* inline style */}
                <h1>About Me</h1>
            </div>
            </>
        )
    }
};



export default Home;

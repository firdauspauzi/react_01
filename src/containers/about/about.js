import React from "react";
import nature_01 from "../../assets/nature_01.jfif";
import nature_02 from "../../assets/nature_02.jfif";
import aboutStyle from "./about.module.css";
import man_01 from "../../assets/man_01.jpeg";


class About extends React.Component{
    render(){
        return(
            <>

            <div id = {aboutStyle.container}>
            <div id = {aboutStyle.about_01}>
                <img src = {man_01} />
            </div>
            
            <div id = {aboutStyle.about_02}>
                    <h1>Hello I'm Firdaus</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
            </div>
            </div>
            
            </>
        )
    }
}

export default About;
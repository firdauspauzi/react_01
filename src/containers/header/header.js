import React from "react";
import logo_01 from "../../assets/logo_01.png";
import headerStyle from "./header.module.css";



class Header extends React.Component{
    render(){
        return(
            <div id = {headerStyle.container}>
                <div>
                    <img src={logo_01} />
                </div>
                <div>
                    <ul>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default Header;
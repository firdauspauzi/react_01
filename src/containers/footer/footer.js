import React from "react";
import footStyle from "./footer.module.css";

class Footer extends React.Component{
    render(){
        return(
            <>
                <div id = {footStyle.container}>
                    <div id = {footStyle.contact}>
                        <h3>Contact Me</h3>
                        <p>Email: firdauspauzi09@gmail.com</p>
                    </div>

                    <div id = {footStyle.social}>
                        <h3>Social</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Github</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer;
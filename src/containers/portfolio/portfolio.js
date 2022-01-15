import React from "react";
import portStyle from "./portfolio.module.css";
import day10 from "../../assets/day10.PNG";

class Portfolio extends React.Component{
    constructor(props){
        super(props);
        
        //state object - contain properties (same as var to a function)
        // this.state = {
        // testname: "Daus",
        // testage: 30,
        // count: 0,
        // }; 
    }

    render(){
        return(
            <>
            <div id = {portStyle.container}>
                <div>
                    <h2>Weather App</h2>
                    <img src={day10}></img>
                </div>
            </div>
            </>
        )
    }
};

export default Portfolio; 


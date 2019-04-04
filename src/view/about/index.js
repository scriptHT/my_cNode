import React ,{Component} from "react";
import data from "./data";
import PubCard from "../pubCard";

class About extends Component {
    render(){
        console.log(data)
        return(
            <PubCard data = {data}/>
        )
    }
}
export default About;
import React ,{Component} from "react";
import {Card} from "antd";
import data from "./data";

class About extends Component {
    render(){
        console.log(data)
        return(
        <div>
            {data.map((item,index)=>(<Card
                title={item.title}
                // loading={true}
                key={index}
                id="card"
            >
                <div
                    dangerouslySetInnerHTML={{
                        __html:item.content
                    }}
                >
                </div>
            </Card>))}
        </div>
        )
    }
}
export default About;
import React ,{Component} from "react";
import data from "./data";
import {Card} from "antd";

class Book extends Component {
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
export default Book;
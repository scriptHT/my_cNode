import React ,{Component} from "react";
import {Card} from "antd";

class PubCard extends Component {
    render(){
        let {data} = this.props;
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
export default PubCard;
import React ,{Component} from "react";
import {Card,Avatar} from "antd";
import data from "./data";
import TxtTag from "../txtTag";
import {Link} from "react-router-dom";
class Details extends Component {
    render(){
        console.log(data);
        const title1 = (<div>
            <h2>{data.data.title}</h2>
            <TxtTag data = {data.data}/>
            <Avatar data= {data.data.author.avatar_url}/>
            <Link to={"/user/"+data.data.author.loginname}>{data.data.author.loginname}</Link>
            <span>发表于：{data.data.create_at.split("T")[0]}</span>
        </div>)
        const title2 = (<div>
            <span>{data.data.replies.length}条回复</span>
        </div>)
        return(
            <div className= "wrap">
                <Card title={title1}>
                    <div dangerouslySetInnerHTML={{__html:data.data.content }}></div>
                </Card>
                <Card className="replies" title={title2}>
                    <div>{
                        data.data.replies.map((item,index)=>(
                            <Card key = {index} >
                                <Avatar data={item.avatar_url}/>
                                <Link to={"/user/"+item.author.loginname} data={item.author.loginname}>
                                    {item.author.loginname}
                                </Link>
                                <span>发表于：{item.create_at.split("T")[0]}</span>
                                <div dangerouslySetInnerHTML={{__html:item.content}}></div>
                            </Card>
                        ))
                        }</div>
                </Card>
            </div>
        )
    }
}
export default Details;
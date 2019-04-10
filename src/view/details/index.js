import React ,{Component} from "react";
import {Card,Avatar} from "antd";
import {connect} from "react-redux";
import axios from "axios";
import TxtTag from "../txtTag";
import {Link} from "react-router-dom";
class Details extends Component {
    constructor(arg){
        super(arg);
        let id = this.props.match.params.id;
        this.getData(id);
    }
    // shouldComponentUpdate(nextProps){

    // }
    getData(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:"DETAILS_UPDATE"
            });
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
            .then((res)=>{
                dispatch({
                    type:"DETAILS_UPDATE_SUCC",
                    data:res.data
                })
            })
            .catch((error)=>{
                dispatch({
                    type:"DETAILS_UPDATE_ERROR"
                })
            })
        })
    }
    render(){
        // console.log(data);
        // console.log(this.props);
        // loading, data
        // loading, replies, reply_count, data, 
        let {loading,data} = this.props;

        const title1 = (<div>
            <h2>{data.title}</h2>
            <TxtTag data = {data}/>
            <Avatar data= {data.author.avatar_url}/>
            <Link to={"/user/"+data.author.loginname}>{data.author.loginname}</Link>
            <span>发表于：{data.create_at.split("T")[0]}</span>
        </div>)
        const title2 = (<div>
            <span>{data.reply_count}条回复</span>
        </div>)
        return(
            <div className= "wrap">
                <Card title={title1} loading={loading}>
                    <div dangerouslySetInnerHTML={{__html:data.content }}></div>
                </Card>
                
                <Card className="replies" title={title2}>
                    <div>{
                        data.replies.map((item,index)=>(
                            <Card key = {index} loading={loading}>
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
export default connect(state=>(state.details)) (Details);
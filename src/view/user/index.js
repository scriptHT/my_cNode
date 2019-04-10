import React ,{Component} from "react";
import {Avatar,Row,Col} from "antd";
import UserList from "./userList";
import {connect} from "react-redux";
import axios from "axios";

class User extends Component{
    constructor(arg){
        super(arg);
        let id = this.props.match.params.id;
        this.getData(id);
    }
    
    getData(id){
        this.props.dispatch((dispatch)=>{
                
            axios.get(`https://cnodejs.org/api/v1/user/${id}`)
            .then((res)=>{
                dispatch({
                    type:"USER_UPDATE_SUCC",
                    data:res.data
                })
            })
            .catch((error)=>{
                dispatch({
                    type:"USER_UPDATE_ERROR"
                })
            })
        })
    }
    render(){
        // console.log("+++++++++++")
        // console.log(this.props);
        let {loading,data} = this.props;
        let {avatar_url,loginname,create_at,score,recent_topics,recent_replies} = data;
        return(
            <div className="wrap">
                <Avatar className="avatar" data={avatar_url} ></Avatar>
                <Row className="userInfo">
                    <Col md={8} >用户名：<a><strong>{loginname}</strong></a></Col>
                    <Col md={8} >积分：<a>{score}</a></Col>
                    <Col md={8} >注册时间：<a>{create_at.split("T")[0]}</a></Col>
                </Row>
                <UserList 
                    data={recent_topics}
                    loading={loading} 
                    title="最近创建的话题"
                />
                
                <UserList 
                    data={recent_replies}
                    loading={loading} 
                    title="最近回复的话题"
                />
            </div>
        )
    }
}
export default connect(state=>(state.user)) (User);
import React ,{Component} from "react";
import {Avatar,Row,Col} from "antd";
import data from "./data";
import UserList from "./userList";
import {connect} from "react-redux";

class User extends Component{
    render(){
        // console.log(data)
        let {avatar_url,loginname,create_at,score,recent_topics,recent_replies} = data.data
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
                    loading={false} 
                    title="最近创建的话题"
                    className="recentThings"
                />
                
                <UserList 
                    data={recent_replies}
                    loading={false} 
                    title="最近回复的话题"
                    className="recentThings"
                />
            </div>
        )
    }
}
export default connect(state=>state.user) (User);
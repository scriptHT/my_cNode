import React ,{Component} from "react";
import {Card,Avatar,Row,Col} from "antd";
import data from "./data"

class User extends Component{
    render(){
        console.log(data)
        const title=(<div>
            <Avatar className="avatar" data={data.data.avatar_url} ></Avatar>
            <div className="userInfo">
                <Row>
                    <Col md={8} >用户名：{data.data.loginname}</Col>
                    <Col md={8} >积分：{data.data.score}</Col>
                    <Col md={8} >注册时间：{data.data.create_at.split("T")[0]}</Col>
                </Row>
            </div>

            </div>)
        console.log(data);
        return(
            <div className="wrap">
                <Card title={title}>
                </Card>
            </div>
        )
    }
}
export default User;
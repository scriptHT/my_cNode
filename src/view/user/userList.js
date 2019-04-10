import React ,{Component} from "react";
import {Card,List,Avatar,Row,Col} from "antd";
import {Link} from "react-router-dom";

class UserList extends Component{
    render(){
        let{loading,title,data} =this.props;
        // console.log(data)
        return(<div>
            <Card 
                loading={loading}
                title={title}
            >
                <List 
                    className="recentThings"
                    dataSource={data}
                    renderItem={item=>(<List.Item > 
                        <Row style={{width:'100%'}} type="flex" justify="space-between">
                            <Col xs={2}  md={1}><Avatar className="userAvatar" src={item.author.avatar_url}></Avatar></Col>
                            <Col xs={14}  md={2}><Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link></Col>
                            <Col xs={0} md={17}><Link to={"/details/" + item.id}><strong>{item.title}</strong></Link></Col>
                            <Col xs={8}  md={4}><span>最后回复：{item.last_reply_at.split("T")[0]}</span></Col>
                            <Col xs={24} md={0}><br/><Link to={"/details/" + item.id}><strong>{item.title}<strong/></strong></Link></Col>
                        </Row>
                    </List.Item>)}>
                </List>

            </Card>
        </div>)
    }
}
export default UserList;
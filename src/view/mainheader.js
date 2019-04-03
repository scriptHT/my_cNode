import React,{Component} from "react";
import {Layout,Row,Col,Divider,Icon,Dropdown,Button} from "antd";
import Nav from "./nav"
import 'antd/lib/date-picker/style/css'

class MainHeader extends Component{
    render(){
        return(
            <Layout.Header className = "header">
                <Row className="wrap" >
                    <Col md={6} xs={24}>
                        <h1 id="logo">CNode</h1>
                    </Col>
                    <Col md={18} xs={0}>
                    <Divider className="divider" type="vertical"/>
                        <Nav mode = "horizontal" id = "nav"></Nav>
                    </Col>
                    <Col md={0} xs={24} className="xsMenu">
                        <Dropdown overlay={
                            <Nav mode = "vertical" id = "xsNav"/>}   
                            trigger = {["click","touched"]}
                            placement = "bottomRight"
                        >
                            <Button> <Icon type="bars"></Icon></Button>
                        </Dropdown>
                    </Col>

                </Row>
            </Layout.Header>
        );
    }
}
export default MainHeader;
import React,{Component} from "react";
import {Menu,Icon} from "antd";
import {Link,withRouter} from "react-router-dom";

class Nav extends Component{
    constructor(arg){
        super(arg);
        let now = this.getNow(this.props.location)
        this.state = {
            //当前选中的menu
            now:now
        }
    }
    getNow(location){
        // console.log(location)
        let now = location.pathname.split("/");
        return now[1];
    }
    shouldComponentUpdate(nextProps){
        let now = this.getNow(nextProps.location);
        if(now !== this.state.now){
            this.setState({
                now
            })
            return false
        }
        return true
    }
    render(){
        let {mode,id} = this.props;
        // console.log("1111111111111111")
        // console.log(this.props)
        return(
            <Menu theme="light" mode={mode} id={id} selectedKeys={[this.state.now]}>
            <Menu.Item key='index'>
                <Link to="/index/all"><Icon type="home"/>首页</Link>
            </Menu.Item>
            <Menu.Item key='book'>
                <Link to="/book"><Icon type="book"/>教程</Link>
            </Menu.Item>
            <Menu.Item key='about'>
                <Link to="/about"><Icon type="exclamation-circle" />关于</Link>
            </Menu.Item>
        </Menu>
        )
    }
}
export default withRouter((props)=>{
    let {mode,id,location} = props
    return(
        <Nav 
            mode = {mode}
            id  = {id}
            location = {location}
        />
    )
});
import React ,{Component} from "react";
import {List, Avatar} from "antd";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import axios from "axios";
import TxtTag from "../txtTag";
class  IndexList extends Component{
    constructor(arg){
        super(arg);
        this.state={
            page:1,
        }
        this.getData(this.props.tab,this.state.page);
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.page !== nextState.page){
            this.getData(nextProps.tab,nextState.page)
            return false;
        }
        // console.log(nextProps)
        if(this.props.tab !== nextProps.tab){
            this.state.page = 1;
            this.getData(nextProps.tab,1);
            return false;
        }
        return true;
    }
    getData(tab,page){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:"LIST_UPDATA"
            })
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=10`)
            .then((res)=>{
                dispatch({
                    type:"LIST_UPDATA_SUCC",
                    data:res.data
                })
            })
            .catch((error)=>{
                dispatch({
                    type:"LIST_UPDATA_ERROR",
                    data:error
                })
            })
        })
    }
    render(){
        //需要的数据：
        //loading,data,tab,page
        // console.log(this.props);
        let {loading,data} = this.props
        let pagination = {
            current:this.state.page,
            pageSize:10,
            showQuickJumper :true,
            total:1000,
            onChange:((current)=>{
                console.log(current);
                this.setState({
                    page:current
                })
            })
        }
        return(
            <List
                loading={loading}
                dataSource={data}
                pagination={loading?false:pagination}
                renderItem={item=>(
                <List.Item actions={["回复"+item.reply_count,"访问"+item.visit_count]}>
                <List.Item.Meta
                    avatar={<Avatar src={item.author.avatar_url}/>}
                    title={<div><TxtTag data = {item}/><Link to={"/details/" + item.id}>{item.title}</Link></div>}
                    description={<p><Link to = {"/user/" + item.author.loginname}>{item.author.loginname}</Link>发表于{item.create_at.split("T")[0]}</p>}
                />
                </List.Item>)}
            >
            </List>
        )
    }
}
export default connect(state=>state.list) (IndexList);
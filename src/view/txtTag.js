import React ,{Component} from "react";
import {Tag} from "antd";

const tab = { 
    top: {
        color:"magenta",
        txt:"置顶"
    },
    good: {
        color:"blue",
        txt:"精华"
    },
    ask: {
        color:"cyan",
        txt:"问答"
    },
    job: {
        color:"blue",
        txt:"招聘"
    },
    share: {
        color:"lime",
        txt:"分享"
    },
    dev: {
        color:"geekblue",
        txt:"测试"
    },

}
function getTab(data){
    return(data.top?
        "top":
        data.good?
        "good":data.tab
    )
}
class TxtTag extends Component{
    render(){
        let nowTab = tab[getTab(this.props.data)]
        // console.log(nowTab)
        return(
            <Tag color={nowTab.color}>{nowTab.txt}</Tag>
        )
    }
}
export default TxtTag; 
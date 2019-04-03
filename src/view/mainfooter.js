import React,{Component} from "react";
import {Layout} from "antd";
class MainFooter extends Component {
    render(){
        return(
            <Layout.Footer className = "footer">
                <span>京ICP备08102442号-1 2007-2018 MIAOV.COM 版权所有</span>
            </Layout.Footer>
        );
    }
}
export default MainFooter;
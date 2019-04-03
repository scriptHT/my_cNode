import React, { Component } from 'react';
import RouterIndex from "./router/index";
import MainHeader from "./view/mainheader";
import MainFooter from "./view/mainfooter";
// import Index from "./view/index/index";
import "./view/index.css";

class App extends Component {
  render() {
    return (
      <div className = "pageWrap">
        <MainHeader></MainHeader>
        <div className="main">
          <RouterIndex />
          {/* <Index></Index> */}
        </div>
        <MainFooter></MainFooter>
      </div>
    );
  }
}

export default App;

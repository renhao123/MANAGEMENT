import React, { Component } from 'react';
// import { getAction } from '@/axios'

class index extends Component {
    constructor(props){
        super(props);
        this.state={
            userName: "娜娜"
        }
    }

    logout = () => {
        localStorage.clear();
        window.location.href = `http://${window.location.host}`;
    }

    render() {
        return (
            <header style={{background: "#fff",padding: "0",flex: "0 0 80px",boxShadow: "0 2px 4px 0 rgba(35, 36, 37, 0.3)"}}>
                <div style={{float:"right",lineHeight: "80px",padding: "0px 10px",fontsize: "16px"}}>
                    <span>{this.state.userName}</span>
                    <span onClick={this.logout} style={{padding:"0px 10px",cursor:"pointer"}}>退出</span>
                </div>

            </header>
        );
    }
}

export default index;
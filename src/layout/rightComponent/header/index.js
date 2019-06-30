import React, { Component } from 'react';
import {Popover, Button, message} from 'antd'
import ChangePassWord from './ChangePassWord'
import { getAction } from '@/axios'

class index extends Component {
    constructor(props){
        super(props);
        this.state={
            userName: "娜娜",
            visible:false
        }
    }

    logout = () => {
        getAction("/user/logout").then(
            (res) => {
                if (res.success) {
                    localStorage.clear();
                    window.location.href = `http://${window.location.host}`;
                } else {
                    message.warn(res.obj)
                }
            }
        )
        
    }

    showModal = () => {
        this.setState({
            visible: true
        })
    }

    hideModal = () => {
        this.setState({
            visible: false
        })
    }

    componentDidMount () {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        this.setState({
            userName:userInfo.name
        })
    }

    render() {
        return (
            <header style={{background: "#fff",padding: "0",flex: "0 0 80px",boxShadow: "0 2px 4px 0 rgba(35, 36, 37, 0.3)"}}>
                <div style={{float:"right",lineHeight: "80px",padding: "0px 30px",fontsize: "16px"}}>
                    <i className="iconfont icon-user" style={{fontSize:"20px", fontWeight: "bold"}}></i>
                    <span>{this.state.userName}</span>
                    <Popover
                        placement="bottomRight"
                        content={
                            (
                                <div>
                                    <Button style={{marginBottom: "10px"}} block onClick={this.showModal}>修改密码</Button>
                                    <Button block onClick={this.logout}>退出登录</Button>
                                </div>
                            )
                        }
                    >
                        <i className="iconfont icon-set" style={{fontSize:"18px", fontWeight: "bold", marginLeft: "20px", cursor: "pointer"}}></i>
                        <span style={{cursor: "pointer"}}>设置</span>
                    </Popover>
                </div>

                {
                    this.state.visible
                    ?
                    <ChangePassWord visible={this.state.visible} hideModal = {this.hideModal} />
                    :
                    null
                }

            </header>
        );
    }
}

export default index;
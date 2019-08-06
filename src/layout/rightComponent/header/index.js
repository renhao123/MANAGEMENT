import React, { Component } from 'react';
import {Popover, Button, message} from 'antd'
import ChangePassWord from './ChangePassWord'
import { getAction } from '@/axios'
import './index.css'

class index extends Component {
    constructor(props){
        super(props);
        this.state={
            userName: "娜娜",
            visible:false
        }
    }

    logout = () => {
        getAction("/manage/user/logout").then(
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
        if (!userInfo) {
            localStorage.clear();
            window.location.reload();
        } else {
            this.setState({
                userName:userInfo.name
            })
        }
    }

    render() {
        return (
            <header className="headerStyle">
                <div className="content">
                    <i className="iconfont icon-user"></i>
                    <span>{this.state.userName}</span>
                    <Popover
                        trigger="click"
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
                        <i className="iconfont icon-set"></i>
                        <span>设置</span>
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
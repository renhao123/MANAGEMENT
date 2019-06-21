import React, { Component } from 'react';
import {Icon, Popover, message } from 'antd';
import { getAction } from '@/axios'
import styles from './index.module.less'

class index extends Component {
    constructor(props){
        super(props);
        this.state={
            userName: "管理员"
        }
    }
    

    passCodeChange = () => {
        message.warning("功能开发中！！！")
    }

    logout = () => {
        localStorage.clear();
        getAction("/bigdata/auth/logout");
        // message.warning("登录功能尚未对接，查看此功能需要在项目入口文件去掉默认登录设置");
        // window.location.href = `http://${window.location.host}`;
    }

    render() {
        return (
            <header className={styles.header}>

                {/* <Icon
                    className={styles.trigger}
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                /> */}

                <div className={styles.handle}>
                    <span>欢迎, {this.state.userName}</span>
                    <Popover 
                        content={
                            (
                                <div className={styles.exit}>
                                    <p onClick={this.passCodeChange}><Icon type="key" style={{marginRight:"8px"}} />修改密码</p>
                                    <p onClick={this.logout}><Icon type="poweroff" style={{marginRight:"8px"}} />退出登录</p>
                                </div>
                            )
                        }
                        trigger="hover" placement="bottomLeft"
                    >
                        <Icon type="setting" style={{cursor:"pointer", margin: "0px 20px", fontSize:"20px"}} />
                    </Popover>
                </div>

            </header>
        );
    }
}

export default index;
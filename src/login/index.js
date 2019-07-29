import React from 'react';
import { postAction } from '@/axios';
import { withRouter } from 'react-router-dom';
import { message, Input, Button } from 'antd';
// import Bg from './bg.png'
import Logo from './logo.jpg'
import './index.css'

class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:""
        }
    }

    loginIn = () => {
        const { username, password } = this.state;
        if(username === ""){
            message.warning("用户名不能为空");
            return false;
        }
        if(password === ""){
            message.warning("密码不能为空");
            return false;
        }

        postAction("/manage/user/login",{
            username,
            password
        }).then(
            (res) => {
                if(res.success){
                    window.localStorage.setItem("loginStatus","true");
                    window.localStorage.setItem("userInfo", JSON.stringify(res.obj))
                    window.location.reload();
                } else {
                    message.error(res.obj)
                }
            }
        )
    }

    nameChange = (e) => {
        this.setState({
            username:e.target.value
        })
    }

	passwordChange = (e) => {
        this.setState({
            password:e.target.value
        })
    }
	
    render(){
        return (
			<div className="loginPage">
				<div className="content">
					<img src={Logo} alt="" />
					<p>襄阳第一人民医院预约体检管理平台</p>
					<Input value={this.state.username} onChange={this.nameChange} placeholder="请输入用户名..."/>
					<Input value={this.state.password} onChange={this.passwordChange} placeholder="请输入密码..."/>
					<Button type="primary" block onClick={this.loginIn}>登录</Button>
				</div>
			</div>
        )
    }
		
}

export default withRouter(LoginPage)

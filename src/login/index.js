import React from 'react';
import { postAction } from '@/axios';
import { withRouter } from 'react-router-dom';
import { message, Input, Button } from 'antd';
import Bg from './bg.png'
import Logo from './logo.jpg'

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
            <div style={{
                position: "fixed",
                left: "0px",
                top: "0px",
                width: "100%", 
                height:"100%",
                overflow:"hidden",
                background: `url(${Bg}) no-repeat left center`,
                backgroundSize:"cover",
                border:"1px solid #ccc", 
            }}>
                <div style={{
                    width:"26%", 
                    border:"1px solid #ccc",
                    position:"absolute",
                    right: "20%",
                    top:"32%",
                    borderRadius:"15px",
                    padding:"1.5% 2%",
                    textAlign:"center"
                }}>
                    <img src={Logo} alt="" style={{width:"30%", marginBottom:"10px"}} />
                    <p style={{fontSize:"18px", marginBottom:"2rem"}}>襄阳第一人民医院预约体检管理平台</p>
                    <Input value={this.state.username} size="large" onChange={this.nameChange} style={{marginBottom:"1rem"}} placeholder="请输入用户名..."/>
                    <Input value={this.state.password} size="large" onChange={this.passwordChange} style={{marginBottom:"2rem"}} placeholder="请输入密码..."/>
                    <Button type="primary" size="large" block style={{marginBottom:"1rem"}} onClick={this.loginIn}>登录</Button>
                </div>
            </div>            
        )
    }
		
}

export default withRouter(LoginPage)

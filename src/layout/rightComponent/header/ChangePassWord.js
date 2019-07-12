import React from 'react'
import {Modal, Input, message} from 'antd'
import {postAction} from '@/axios'

class ChangePassWord extends React.Component{

    state={
        old: "",
        new:"",
        again:""
    }

    oldChange = (e) => {
        this.setState({
            old: e.target.value
        })
    }

    newChange = (e) => {
        this.setState({
            new: e.target.value
        })
    }

    newChangeAgain = (e) => {
        this.setState({
            again: e.target.value
        })
    }

    okHandle = () => {
        if (!this.state.old) {
            message.warn("请输入旧密码！！！", 5)
            return false
        } else if (!this.state.new) {
            message.warn("请输入新密码！！！", 5)
            return false
        } else if (!this.state.again) {
            message.warn("请再次输入新密码！！！", 5)
            return false
        }

        if(this.state.new !== this.state.again){
            message.warn("两次设置密码不同！！！", 5)
            return false
        }

        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        postAction("/manage/system/user/update/password",{
            userId:userInfo.id,
            originalPassword:this.state.old,
            currentPassword:this.state.new
        }).then(
            (res) => {
                if(res.success){
                    message.success("密码设置成功，请重新登录！！！")
                    localStorage.clear();
                    window.location.href = `http://${window.location.host}`;
                } else {
                    message.warn(res.obj)
                }
            }
        )
    }


    render(){
        return(
            <Modal 
                title="修改密码"
                visible = {this.props.visible}
                onOk = {this.okHandle}
                onCancel={this.props.hideModal}
                width={400}
            >
                <p>
                    <Input value={this.state.old} onChange={this.oldChange} placeholder="请输入您的旧密码" />
                </p>

                <p>
                    <Input value={this.state.new} onChange={this.newChange} placeholder="请输入您的新密码" />
                </p>

                <p>
                    <Input value={this.state.again} onChange={this.newChangeAgain} placeholder="请再次输入您的新密码" type="password" />
                </p>

            </Modal>
        )
    }
}

export default ChangePassWord
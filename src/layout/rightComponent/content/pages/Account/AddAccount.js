import React from 'react'
import {Modal, Input, Select, message} from 'antd'
const Option = Select.Option;

class AddAccount extends React.Component{

    state={
        accountName: "",
        name: "",
        sex:"1"
    }
    
    okHandle = () => {
        message.warning("功能开发中!!!")
        if (!this.state.accountName) {
            message.warning("请填写账户名称！！！", 10)
            return false
        } else if (!this.state.name) {
            message.warning("请填写您的真实姓名！！！", 10)
            return false
        }
        // 调取接口添加账户
        message.success("账户添加成功")
        // 更新props，重新拉取table数据
        this.props.setAddNum()
        this.props.hideModal()
    }

    accountChange = (e) => {
        this.setState({
            accountName:e.target.value
        })
    }

    nameChange = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    sexChange = (value) => {
        this.setState({
            sex:value
        })
    }

    render () {
        return (
            <Modal 
                title="新增账户"
                visible = {this.props.visible}
                onOk = {this.okHandle}
                onCancel={this.props.hideModal}
                width={400}
            >
                <p>
                    <Input value={this.state.accountName} onChange={this.accountChange} placeholder="请输入您的账户名称" />
                </p>
                <p>
                    <Input value={this.state.name} onChange={this.nameChange} placeholder="请输入您的真实姓名" />
                </p>
                <Select value={this.state.sex} onChange={this.sexChange} style={{width: "100%"}}>
                    <Option value="1">男</Option>
                    <Option value="2">女</Option>
                </Select>
            </Modal>
        )
    }
}

export default AddAccount
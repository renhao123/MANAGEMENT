import React from 'react' 
import {Input, Select, DatePicker,Button } from 'antd'
const { Option } = Select;

class Filter extends React.Component{
    state={
        name:"",
        sex:"3",
        marrige:"2",
        dateTime:"",
        checkTime:"",
        orderState:"0"
    }

    nameChange = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    sexChange = (value) =>{
        this.setState({
            sex:value
        })
    }

    marrigeChange = (value) =>{
        this.setState({
            marrige:value
        })
    }

    dateTimeChange = (date, dateString) =>{
        this.setState({
            dateTime:dateString
        })
    }

    checkTimeChange = (date, dateString) =>{
        this.setState({
            checkTime:dateString
        })
    }

    orderStateChange = (value) =>{
        this.setState({
            orderState:value
        })
    }

    search= () =>{
        this.props.setFilters(this.state)
    }

    render(){
        return (
            <div style={{marginBottom:"20px", background:"white", padding:"15px 10px", border:"1px solid #e8e8e8"}}>

                <span style={{textAlign:"center", lineHeight:"32px", margin:"0px 10px"}}>姓名：</span>
                <Input value={this.state.name} placeholder="请输入预约者姓名" style={{width:"150px"}} onChange={this.nameChange} />

                <span style={{textAlign:"center", lineHeight:"32px", margin:"0px 10px"}}>性别：</span>
                <Select value={this.state.sex} style={{ width: "150px" }} onChange={this.sexChange}>
                    <Option value="3">全部</Option>
                    <Option value="1">男</Option>
                    <Option value="2">女</Option>
                </Select>

                <span style={{textAlign:"center", lineHeight:"32px", margin:"0px 10px"}}>婚姻：</span>
                <Select value={this.state.marrige} style={{ width: "150px" }} onChange={this.marrigeChange}>
                    <Option value="2">全部</Option>
                    <Option value="0">未婚</Option>
                    <Option value="1">已婚</Option>
                </Select>

                <span style={{textAlign:"center", lineHeight:"32px", margin:"0px 10px"}}>预约日期：</span>
                <DatePicker onChange={this.dateTimeChange} />

                <span style={{textAlign:"center", lineHeight:"32px", margin:"0px 10px"}}>体检日期：</span>
                <DatePicker onChange={this.checkTimeChange} />

                <span style={{textAlign:"center", lineHeight:"32px", margin:"0px 10px"}}>状态：</span>
                <Select value={this.state.orderState} style={{ width: "150px" }} onChange={this.orderStateChange}>
                    <Option value="0">全部</Option>
                    <Option value="1">未体检</Option>
                    <Option value="4">已体检</Option>
                </Select>

                <Button type="primary" icon="search" style={{marginLeft: "20px"}} onClick={this.search}>搜索</Button>
            </div>
        )
    }
}

export default Filter
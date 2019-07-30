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
			<div>
				{(window.document.body.clientWidth > 900 )? null : (<p><span style={{color: "red"}}>请在横屏模式下查看此页面!!!</span><br /><span>点击此处查看单位预约列表>>></span></p>)}
			
				<div style={{marginBottom:"20px", background:"white", overflow:"hidden", padding:"15px 10px", border:"1px solid #e8e8e8"}}>
					
					<p style={{width:"150px",margin:"0px 10px",textAlign:"center", lineHeight:"32px", float:"left"}}>
						<span style={{float:"left"}}>姓名：</span>
						<Input value={this.state.name} placeholder="请输入预约者姓名" style={{width:"100%"}} onChange={this.nameChange} />
					</p>
					
					<p style={{width:"150px",margin:"0px 10px",textAlign:"center", lineHeight:"32px", float:"left"}}>
						<span style={{float:"left"}}>性别：</span>
						<Select value={this.state.sex} style={{ width: "100%" }} onChange={this.sexChange}>
							<Option value="3">全部</Option>
							<Option value="1">男</Option>
							<Option value="2">女</Option>
						</Select>
					</p>
					
					<p style={{width:"150px",margin:"0px 10px",textAlign:"center", lineHeight:"32px", float:"left"}}>
						<span style={{float:"left"}}>婚姻：</span>
						<Select value={this.state.marrige} style={{ width: "100%" }} onChange={this.marrigeChange}>
							<Option value="2">全部</Option>
							<Option value="0">未婚</Option>
							<Option value="1">已婚</Option>
						</Select>
					</p>

					<p style={{width:"150px",margin:"0px 10px",textAlign:"center", lineHeight:"32px", float:"left"}}>
						<span style={{float:"left"}}>预约日期：</span>
						<DatePicker onChange={this.dateTimeChange} />
					</p>

					<p style={{width:"150px",margin:"0px 10px",textAlign:"center", lineHeight:"32px", float:"left"}}>
						<span style={{float:"left"}}>体检日期：</span>
						<DatePicker onChange={this.checkTimeChange} />
					</p>

					<p style={{width:"150px",margin:"0px 10px",textAlign:"center", lineHeight:"32px", float:"left"}}>
						<span style={{float:"left"}}>状态：</span>
						<Select value={this.state.orderState} style={{ width: "150px" }} onChange={this.orderStateChange}>
							<Option value="0">全部</Option>
							<Option value="1">未体检</Option>
							<Option value="4">已体检</Option>
						</Select>
					</p>
					
					<p style={{width:"100px",margin:"0px 10px",textAlign:"center", lineHeight:"32px", float:"left"}}>
						<Button type="primary" icon="search" style={{marginTop:"2rem", float:"left"}} onClick={this.search}>搜索</Button>
					</p>
				</div>
			</div>
        )
    }
}

export default Filter
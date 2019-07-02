import React from 'react' 
import {Input, DatePicker,Button } from 'antd'

class Filter extends React.Component{
    state={
        name:"",
        company:"",
        dateTime:"",
        checkTime:""
    }

    nameChange = (e) => {
        this.setState({
            name:e.target.value
        })
    }

	companyChange = (e) => {
		this.setState({
            company:e.target.value
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

    search= () =>{
        this.props.setFilters(this.state)
    }

    render(){
        return (
            <div style={{marginBottom:"20px", background:"white", padding:"15px 10px", border:"1px solid #e8e8e8"}}>

                <span style={{textAlign:"center", lineHeight:"32px", margin:"0px 10px"}}>联系人：</span>
                <Input value={this.state.name} placeholder="请输入联系人姓名" style={{width:"150px"}} onChange={this.nameChange} />
                
                <span style={{textAlign:"center", lineHeight:"32px", margin:"0px 10px"}}>单位名称：</span>
                <Input value={this.state.company} placeholder="请输入单位名称" style={{width:"250px"}} onChange={this.companyChange} />
                
                <span style={{textAlign:"center", lineHeight:"32px", margin:"0px 10px"}}>预约日期：</span>
                <DatePicker onChange={this.dateTimeChange} />

                <span style={{textAlign:"center", lineHeight:"32px", margin:"0px 10px"}}>体检日期：</span>
                <DatePicker onChange={this.checkTimeChange} />

                <Button type="primary" icon="search" style={{marginLeft: "20px"}} onClick={this.search}>搜索</Button>
            </div>
        )
    }
}

export default Filter
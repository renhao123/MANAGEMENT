import React from 'react' 
import {Input, DatePicker,Button } from 'antd'

class Filter extends React.Component{
    state={
        contacts:"", // 联系人
        company:"", // 单位名称
		contactPhone:"", // 联系电话
        createDate:"" // 创建日期
    }

    contactsChange = (e) => {
        this.setState({
            contacts:e.target.value
        })
    }

	companyChange = (e) => {
		this.setState({
            company:e.target.value
        })
	}
	
	contactPhoneChange = (e) => {
		this.setState({
		    contactPhone:e.target.value
		})
	}

    dateTimeChange = (date, dateString) =>{
        this.setState({
            createDate:dateString
        })
    }

    search= () =>{
        this.props.setFilters(this.state)
    }

    render(){
        return (
            <div style={{marginBottom:"20px", background:"white", padding:"15px 10px", border:"1px solid #e8e8e8"}}>

                <span style={{textAlign:"center", lineHeight:"32px", margin:"0px 10px"}}>联系人：</span>
                <Input value={this.state.contacts} placeholder="请输入联系人姓名" style={{width:"150px"}} onChange={this.contactsChange} />,
				
				<span style={{textAlign:"center", lineHeight:"32px", margin:"0px 10px"}}>联系电话：</span>
				<Input value={this.state.contactPhone} placeholder="请输入联系人姓名" style={{width:"150px"}} onChange={this.contactPhoneChange} />
                
                <span style={{textAlign:"center", lineHeight:"32px", margin:"0px 10px"}}>单位名称：</span>
                <Input value={this.state.company} placeholder="请输入单位名称" style={{width:"250px"}} onChange={this.companyChange} />
                
                <span style={{textAlign:"center", lineHeight:"32px", margin:"0px 10px"}}>创建日期：</span>
                <DatePicker onChange={this.dateTimeChange} />

                <Button type="primary" icon="search" style={{marginLeft: "20px"}} onClick={this.search}>搜索</Button>
            </div>
        )
    }
}

export default Filter
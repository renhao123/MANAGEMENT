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
			<div>
				{(window.document.body.clientWidth > 900 )? null : (<p style={{color: "red"}}>请在横屏模式下查看此页面!!!</p>)}
				<div style={{marginBottom:"20px", background:"white", padding:"15px 10px", border:"1px solid #e8e8e8",overflow:"hidden"}}>
				
					<p style={{width:"150px",margin:"0px 10px",textAlign:"center", lineHeight:"32px", float:"left"}}>
						<span style={{float:"left"}}>联系人：</span>
						<Input value={this.state.contacts} placeholder="请输入联系人姓名" style={{width:"100%"}} onChange={this.contactsChange} />
					</p>
					
					<p style={{width:"150px",margin:"0px 10px",textAlign:"center", lineHeight:"32px", float:"left"}}>
						<span style={{float:"left"}}>联系电话：</span>
						<Input value={this.state.contactPhone} placeholder="请输入联系人姓名" style={{width:"100%"}} onChange={this.contactPhoneChange} />
					</p>
					
					<p style={{width:"150px",margin:"0px 10px",textAlign:"center", lineHeight:"32px", float:"left"}}>
						<span style={{float:"left"}}>单位名称：</span>
						<Input value={this.state.company} placeholder="请输入单位名称" style={{width:"100%"}} onChange={this.companyChange} />
					</p>
					
					<p style={{width:"150px",margin:"0px 10px",textAlign:"center", lineHeight:"32px", float:"left"}}>
						<span style={{float:"left"}}>创建日期：</span>
						<DatePicker onChange={this.dateTimeChange} />
					</p>
					
					<p style={{width:"120px",margin:"0px 10px",textAlign:"center", lineHeight:"32px", float:"left"}}>
						<Button type="primary" icon="search" style={{marginTop:"2rem", float:"left"}} onClick={this.search}>搜索</Button>
					</p>
				</div>
			</div>
        )
    }
}

export default Filter
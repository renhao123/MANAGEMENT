import React from 'react'
import {Modal, DatePicker} from 'antd'


class FillTime extends React.Component{
	state={
		timeStr:""
	}
	
	dateTimeChange = (date, dateString) =>{
        this.setState({
            timeStr:dateString
        })
    }
	
	handleOk = () =>{
    	
    	// 判断是修改预约时间还是修改体检时间，修改成功后在回调中重新加载table并关闭弹窗
    	if (this.state.title === "1") { // 修改预约时间
    		this.props.getData()
    		this.props.hideModal();
    	} else { // 修改体检时间
    		this.props.getData()
    		this.props.hideModal();
    	}
    }
	
	render () {
		let title = (this.props.title === "1")? "请选择单位预约日期":"请选择单位体检日期";
		return (
			<Modal
                title={title}
                visible={this.props.visible}
                onOk={this.handleOk}
                onCancel={this.props.hideModal}
            >
                <DatePicker onChange={this.dateTimeChange} style={{width:"100%"}} />
            </Modal>
		)
	}
}

export default FillTime
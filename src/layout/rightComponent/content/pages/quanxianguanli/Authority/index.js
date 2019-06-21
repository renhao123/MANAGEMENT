/**
 * Created by hutao on 2018/8/31.
 * 权限配置
 */
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import RoleLists from './RoleLists'
import Permission from './permission'
import './style.less'

class Authority extends Component {
	state = {
		activeRole: {}, //当前选中的角色
	}
	changeRole = (activeRole)=>{
		this.setState({activeRole}); //设置当前选中的角色
	}
	componentWillUnmount() {
		// 卸载异步操作设置状态
		this.setState = (state, callback) => {
			return
		}
	}
	render () {
		return (
			<React.Fragment>
				<Row type={'flex'} gutter={20}>
					<Col sm={8} xl={7} xxl={6} style={{minHeight:'100%'}}>
						<RoleLists changeRole={this.changeRole} />
					</Col>
					<Col sm={16} xl={17} xxl={18} style={{minHeight:'100%'}}>
						<Permission activeRole={this.state.activeRole}/>
					</Col>
				</Row>
			</React.Fragment>
		)
	}
}

export default Authority;
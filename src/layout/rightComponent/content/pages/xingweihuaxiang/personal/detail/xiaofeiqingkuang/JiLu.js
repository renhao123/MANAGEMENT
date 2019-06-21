import React from 'react'
import {Card, Table, message, DatePicker, Select, Button } from 'antd'

const { RangePicker } = DatePicker;
const { Option } = Select;

const columns = [
	{
		title:"编号",
		dataIndex: "seq"
	},
  	{
   		title: '消费地点',
   	 	dataIndex: 'palce'
  	},
  	{
    	title: '消费类型',
    	dataIndex: 'type'
  	},
  	{
    	title: '刷卡金额',
    	dataIndex: 'money'
  	},
  	{
    	title: '刷卡时间',
    	dataIndex: 'time'
  	}
];

class JiLu extends React.Component{
	constructor(props){
		super(props)
		this.state={
			dateString: [],
			currentCostType: "0",
			costType: [
				{
					lable: "全部",
					value: "0"
				},
				{
					lable: "食堂",
					value: "1"
				},
				{
					lable: "网络",
					value: "2"
				},
				{
					lable: "超市",
					value: "3"
				},
				{
					lable: "浴室",
					value: "4"
				},
			],
			data: [
		    	{
		    		key: "1",	
		    		seq: "1",
		    		palce: "中南财经政法大学",
		    		type: "食堂",
		    		money:"14",
		    		time: "2019/6/6 18:00:00"
		    	}
		    ],
		    pagination: {
				current: 1,
				pageSize: 10,
				total: 100,
				showQuickJumper: true,
				showTotal: (total) => `共${total}页面`
		    }
		}
	}
	
  	handleTableChange = (pagination) => {
	    message.warn("功能开发中")
	  };
	  
	rangeChange = (date, dateString) => {
		this.setState({
			dateString
		})
	}
	
	typeChange = (currentCostType) =>{
		this.setState({
			currentCostType
		})
	}
  
	render () {
		return (
			<Card title="刷卡记录"
				style={{ boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius: 4 }}
				bordered={false}
				headStyle={{ border:'none'}}
				bodyStyle={{paddingTop: 0}}
			>
				<div style={{marginBottom: 20}}>
					<RangePicker onChange={this.rangeChange} style={{float:"left", marginRight: "15px"}} />
					<Select value={this.state.currentCostType} style={{ width: 180, marginRight: "15px" }} onChange={this.typeChange}>
				      {
				      	this.state.costType.map(
				      		(item, index) => {
				      			return (
				      				<Option value={item.value} key={index}>{item.lable}</Option>
				      			)
				      		}
				      	)
				      }
				    </Select>
				    <Button type="primary">搜索</Button>
				</div>
				<Table
					columns={columns}
					bordered={true}
			        dataSource={this.state.data}
			        pagination={this.state.pagination}
			        onChange={this.handleTableChange}
			      />
			</Card>
		)
	}
}

export default JiLu

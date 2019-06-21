import React, { Component } from 'react'
import { Select, Button } from 'antd';

const { Option } = Select;

export default class Filter extends Component {
	
	constructor (props) {
		super(props);
		this.state={
			start: null,
			end: null,
			startYears: [],
			endYears: []
		}
	}
	
	startYear = (value) => {
		this.setState({
			start: value
		})
	}
	
	endYear = (value) => {
		this.setState({
			end: value
		})
	}
	
	componentDidMount(){
		// 请求数据
		let startYears = [
				{
					lable: "2018-2019学年",
					value: "start1"
				},
				{
					lable: "2017-2018学年",
					value: "start2"
				},
				{
					lable: "2016-2017学年",
					value: "start3"
				}
			]
		
		
		let endYears = [
				{
					lable: "2018-2019学年",
					value: "end1"
				},
				{
					lable: "2017-2018学年",
					value: "end2"
				},
				{
					lable: "2016-2017学年",
					value: "end3"
				}
			]
		
		this.setState({
			startYears,
			endYears,
			start: startYears[0].value,
			end: endYears[0].value
		})
	}
	
    render() {
        return (
            <div style={{
            	padding: "11px 44px",
    			background:"rgba(238,238,238,0.6)"
            }}>
        		筛选条件：
	                <Select value={this.state.start} style={{ width: 180, marginRight: 10 }} onChange={this.startYear}>
				      	{
				      		this.state.startYears && this.state.startYears.map(
				      			(item,index) => {
				      				return (
				      					<Option value={item.value} key={index}>{item.lable}</Option>
				      				)
				      			}
				      		)
				      	}
				    </Select>
            	至
	                <Select value={this.state.end} style={{ width: 180, margin: '0 10px' }} onChange={this.endYear}>
				      	{
				      		this.state.endYears && this.state.endYears.map(
				      			(item,index) => {
				      				return (
				      					<Option value={item.value} key={index}>{item.lable}</Option>
				      				)
				      			}
				      		)
				      	}
				    </Select>
	                <Button icon="search" type="primary">搜索</Button>
            </div>
        )
    }
}

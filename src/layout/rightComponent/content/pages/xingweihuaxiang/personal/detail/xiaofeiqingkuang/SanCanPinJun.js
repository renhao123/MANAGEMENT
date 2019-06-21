import React from 'react'
import {Card} from 'antd'
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from "bizcharts";
import DataSet from "@antv/data-set";
import NoData from './nodata'

class SanCanPinJun extends React.Component{
	
	constructor (props){
		super(props)
		this.state={
			data : []
		}
	}
	
	componentDidMount () {
		let data = [
		      {
		        month: "1月",
	        	早餐: 7,
			        中餐: 15,
			        晚餐: 20,
			        夜餐: 14,
			        合计: 8.0
		      },
		      {
		        month: "2月",
	        	早餐: 8,
			        中餐: 3.9,
			        晚餐: 18.0,
			        夜餐: 6.0,
			        合计: 20.0
		      },
		      {
		        month: "3月",
	        	早餐: 4,
			        中餐: 12,
			        晚餐: 22,
			        夜餐: 10,
			        合计: 30
		      },
		      {
		        month: "4月",
	        	早餐: 4,
			        中餐: 13,
			        晚餐: 16,
			        夜餐: 8,
			        合计: 41
		      },
		      {
		        month: "5月",
	        	早餐: 6,
			        中餐: 8,
			        晚餐: 0,
			        夜餐: 12,
			        合计: 26
		      },
		      {
		        month: "6月",
	        	早餐: 7,
			        中餐: 13,
			        晚餐: 15,
			        夜餐: 0,
			        合计: 35
		      },
		      {
		        month: "7月",
	        	早餐: 4,
			        中餐: 14,
			        晚餐: 14,
			        夜餐: 4,
			        合计: 36
		      },
		      {
		        month: "8月",
	        	早餐: 6,
			        中餐: 15,
			        晚餐: 12,
			        夜餐: 0,
			        合计: 33
		      },
		      {
		        month: "9月",
		       	早餐: 6.0,
			        中餐: 12,
			        晚餐: 12,
			        夜餐: 7,
			        合计: 37
		      },
		      {
		        month: "10月",
	        	早餐: 7,
			        中餐: 12,
			        晚餐: 14,
			        夜餐: 8,
			        合计: 41
		      },
		      {
		        month: "11月",
	         	早餐: 5,
			        中餐: 14,
			        晚餐: 12,
			        夜餐: 10,
			        合计: 41
		      },
		      {
		        month: "12月",
			        早餐: 7,
			        中餐: 12,
			        晚餐: 14,
			        夜餐: 0,
			        合计: 33
		      }
		    ];
		this.setState({
			data
		})
	}
	
	render () {
		const ds = new DataSet();
	    const dv = ds.createView().source(this.state.data);
	    dv.transform({
	      type: "fold",
	      fields: ["早餐", "中餐","晚餐", "夜餐","合计"],
	      // 展开字段集
	      key: "city",
	      // key字段
	      value: "temperature" // value字段
	    });
	    const cols = {
	      month: {
	        range: [0, 1]
	      }
	    };
		return (
			<Card title={
				<React.Fragment>
						<span style={{fontWeight:"bold"}}>三餐平均消费情况</span>
						<small style={{marginLeft:10, fontWeight:400}}>单位：元</small>
				</React.Fragment>
			}
			style={{ boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius: 4 }}
			bordered={false}
			headStyle={{ border:'none'}}
			>
				{
					this.state.data&&this.state.data[0]
					?
					<Chart height={400} data={dv} scale={cols}  padding={[10, 20, 30, 30]} forceFit>
			          <Legend />
			          <Axis name="month" />
			          <Axis
			            name="temperature"
			          />
			          <Tooltip
			            crosshairs={{
			              type: "y"
			            }}
			          />
			          <Geom
			            type="line"
			            position="month*temperature"
			            size={2}
			            color={"city"}
			          />
			          <Geom
			            type="point"
			            position="month*temperature"
			            size={4}
			            shape={"circle"}
			            color={"city"}
			            style={{
			              stroke: "#fff",
			              lineWidth: 1
			            }}
			          />
			        </Chart>
					:
					<NoData height={400} />
				}
			</Card>
		)
	}
}

export default SanCanPinJun



import React from 'react'
import {Card} from 'antd'
import NoData from './nodata'
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from "bizcharts";
import DataSet from "@antv/data-set";

class JinQiTian extends React.Component{
	constructor(props){
		super(props)
		this.state={
			fields: [],
			data: []
		}
	}
	
	componentDidMount () {
		// 请求数据
		let fields = ["6月7日", "6月6日", "6月5日", "6月4日", "6月3日", "6月2日", "6月1日"];
		let data = [
	      {
	        name: "早餐",
	        "6月7日": 18.9,
	        "6月6日": 28.8,
	        "6月5日": 39.3,
	        "6月4日": 81.4,
	        "6月3日": 47,
	        "6月2日": 20.3,
	        "6月1日": 24
	      },
	      {
	        name: "中餐",
	        "6月7日": 12.4,
	        "6月6日": 23.2,
	        "6月5日": 34.5,
	        "6月4日": 99.7,
	        "6月3日": 52.6,
	        "6月2日": 35.5,
	        "6月1日": 37.4
	      },
	      {
	        name: "晚餐",
	        "6月7日": 12.4,
	        "6月6日": 23.2,
	        "6月5日": 34.5,
	        "6月4日": 99.7,
	        "6月3日": 52.6,
	        "6月2日": 35.5,
	        "6月1日": 37.4
	      },
	      {
	        name: "夜餐",
	        "6月7日": 12.4,
	        "6月6日": 23.2,
	        "6月5日": 34.5,
	        "6月4日": 99.7,
	        "6月3日": 52.6,
	        "6月2日": 35.5,
	        "6月1日": 37.4
	      },
	      {
	        name: "合计",
	        "6月7日": 12.4,
	        "6月6日": 23.2,
	        "6月5日": 34.5,
	        "6月4日": 99.7,
	        "6月3日": 52.6,
	        "6月2日": 35.5,
	        "6月1日": 37.4
	      }
		];
		this.setState({
			data,
			fields
		})
	}
	
	render () {
		
		const ds = new DataSet();
	    const dv = ds.createView().source(this.state.data);
	    dv.transform({
	      type: "fold",
	      fields: this.state.fields,
	      // 展开字段集
	      key: "月份",
	      // key字段
	      value: "月均降雨量" // value字段
	    });
    
    
		return (
			<Card title={
				<React.Fragment>
						<span style={{fontWeight:"bold"}}>近七天三餐就餐情况</span>
						<small style={{marginLeft:15, fontWeight: 400}}>单位：元</small>
				</React.Fragment>
			}
			style={{ boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius: 4 }}
			bordered={false}
			headStyle={{ border:'none'}}
			>
			
			{
				this.state.data&&this.state.data[0]
				?
				<Chart height={400} data={dv} padding={[10, 0, 30, 30]} forceFit>
		          <Axis name="月份" />
		          <Axis name="月均降雨量" />
		          <Legend />
		          <Tooltip
		            crosshairs={{
		              type: "y"
		            }}
		          />
		          <Geom
		            type="interval"
		            position="月份*月均降雨量"
		            color={"name"}
		            adjust={[
		              {
		                type: "dodge",
		                marginRatio: 1 / 32
		              }
		            ]}
		          />
		        </Chart>
				:
				<NoData height="400px" />
			}
			
			</Card>
		)
	}
}

export default JinQiTian


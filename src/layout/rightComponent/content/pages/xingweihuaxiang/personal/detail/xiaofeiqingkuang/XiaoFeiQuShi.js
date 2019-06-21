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

class XiaoFeiQuShi extends React.Component{
	
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
	        	本人: 7,
			        全校平均: 15,
			        全校男生平均: 20,
			        全校女生平均: 14
		      },
		      {
		        month: "2月",
	        	本人: 8,
			        全校平均: 3.9,
			        全校男生平均: 18.0,
			        全校女生平均: 6.0,
		      },
		      {
		        month: "3月",
	        	本人: 4,
			        全校平均: 12,
			        全校男生平均: 22,
			        全校女生平均: 10
		      },
		      {
		        month: "4月",
	        	本人: 4,
			        全校平均: 13,
			        全校男生平均: 16,
			        全校女生平均: 8
		      },
		      {
		        month: "5月",
	        	本人: 6,
			        全校平均: 8,
			        全校男生平均: 0,
			        全校女生平均: 12
		      },
		      {
		        month: "6月",
	        	本人: 7,
			        全校平均: 13,
			        全校男生平均: 15,
			        全校女生平均: 0
		      },
		      {
		        month: "7月",
	        	本人: 4,
			        全校平均: 14,
			        全校男生平均: 14,
			        全校女生平均: 4
		      },
		      {
		        month: "8月",
	        	本人: 6,
			        全校平均: 15,
			        全校男生平均: 12,
			        全校女生平均: 0
		      },
		      {
		        month: "9月",
		       	本人: 6.0,
			        全校平均: 12,
			        全校男生平均: 12,
			        全校女生平均: 7
		      },
		      {
		        month: "10月",
	        	本人: 7,
			        全校平均: 12,
			        全校男生平均: 14,
			        全校女生平均: 8
		      },
		      {
		        month: "11月",
	         	本人: 5,
			        全校平均: 14,
			        全校男生平均: 12,
			        全校女生平均: 10
		      },
		      {
		        month: "12月",
			        本人: 7,
			        全校平均: 12,
			        全校男生平均: 14,
			        全校女生平均: 0
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
	      fields: ["本人", "全校平均","全校男生平均", "全校女生平均"],
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
			<Card title="消费趋势"
				style={{ boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius: 4 }}
				bordered={false}
				headStyle={{ border:'none'}}
			>
				{
					this.state.data&&this.state.data[0]
					?
					<Chart height={400} data={dv} padding={[10, 20, 30, 30]} scale={cols} forceFit>
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

export default XiaoFeiQuShi




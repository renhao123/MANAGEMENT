import React from 'react'
import {Card} from 'antd'
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
} from "bizcharts";
import DataSet from "@antv/data-set";
import NoData from './nodata'

class XiaoFeiJieGou extends React.Component{
	
	constructor(props){
		super(props)
		this.state={
			data: []
		}
	}
	
	componentDidMount(){
		// 请求数据
		let data = [
			{
		        item: "浴室",
		        count: 40
		      },
		      {
		        item: "洗衣机",
		        count: 21
		      },
		      {
		        item: "校医院",
		        count: 17
		      },
		      {
		        item: "就餐",
		        count: 100
		      },
		      {
		        item: "网络中心网费",
		        count: 50
		      },
		      {
		        item: "超市",
		        count: 80
		      }
	    ]
		this.setState({
			data
		})
	}
	
	render () {
		const { DataView } = DataSet;
	    const dv = new DataView();
	    dv.source(this.state.data).transform({
	      type: "percent",
	      field: "count",
	      dimension: "item",
	      as: "percent"
	    });
	    const cols = {
	      percent: {
	        formatter: val => {
	          val = parseInt(val * 100) + "%";
	          return val;
	        }
	      }
	    };
		return (
			<Card title={
				<React.Fragment>
						<span style={{fontWeight:"bold"}}>消费结构</span>
						<small style={{marginLeft:15}}>单位：元</small>
				</React.Fragment>
			}
			extra={<span style={{fontSize: 16, color:'#22cc91'}}>近三个月的恩格尔系数为: 66.97%</span>}
			style={{ boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius: 4 }}
			bordered={false}
			headStyle={{ border:'none'}}
			>
			
				{
					this.state.data && this.state.data[0]
					?
					<Chart
			          height={400}
			          data={dv}
			          scale={cols}
			          padding={[0, 0, 35, 0]}
			          forceFit
			        >
			          <Coord type="theta" radius={0.75} />
			          <Axis name="percent" />
			          <Legend/>
			          <Tooltip
			            showTitle={false}
			            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
			          />
			          <Geom
			            type="intervalStack"
			            position="percent"
			            color="item"
			            tooltip={[
			              "item*percent",
			              (item, percent) => {
			                percent = parseInt(percent * 100) + "%";
			                return {
			                  name: item,
			                  value: percent
			                };
			              }
			            ]}
			            style={{
			              lineWidth: 1,
			              stroke: "#fff"
			            }}
			          >
			            <Label
			              content="percent"
			              formatter={(val, item) => {
			                return item.point.item + ": " + val;
			              }}
			            />
			          </Geom>
			        </Chart>
			        :
			        <NoData height="400px" />
				}
			
			</Card>
		)
	}
}

export default XiaoFeiJieGou

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

class ShuKaFenBu extends React.Component{
	
	constructor(props){
		super(props)
		this.state={
			data:[]
		}
	}
	
	componentDidMount(){
		// 请求数据
		let data = [
		{
	        item: "食堂",
	        count: 40
	      },
	      {
	        item: "校医院",
	        count: 21
	      },
	      {
	        item: "网络中心",
	        count: 17
	      },
	      {
	        item: "超市",
	        count: 13
	      },
	      {
	        item: "浴室",
	        count: 9
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
			<Card title="刷卡分布TOP5"
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
			          <Coord type="theta" radius={0.6} />
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

export default ShuKaFenBu

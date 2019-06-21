
import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import {Chart, Geom, Axis, Tooltip, Coord, Label, Legend } from "bizcharts";
import DataSet from '@antv/data-set';
import NoData from './noData';

export default function Classification(props){

	const [ pieData, setPieData ] = useState([]);
	useEffect(()=>{
		let res = {
			obj:{
				data:[
					{ item: "艺术类", count: 40 },
					{ item: "统计类", count: 21 },
					{ item: "管理学类", count: 17 },
					{ item: "历史学类", count: 13 },
					{ item: "经济学类", count: 9 }
				]
			},
			success:true
		};
		if(res.success){
			setPieData(res.obj.data)
		}
	},[props.startYear,props.endYear]);

	const [dv,setDv] = useState([]);
	useEffect(()=>{
		const { DataView } = DataSet;
		let data = new DataView().source(pieData).transform({
			type: "percent",
			field: "count",
			dimension: "item",
			as: "percent"
		});
		setDv(data);
	},[pieData])

    const cols = {
        percent: {
          formatter: val => {
            val = val * 100 + "%";
            return val;
          }
        }
	};

  	return (
        <Card
			title={
			<React.Fragment>
				<span>学年图书借阅类别TOP5</span><span style={{fontSize:12,marginLeft:10,fontWeight: 400}}>单位：本</span>
			</React.Fragment>
			}
			style={{ boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius: 4 }}
			bordered={false}
			headStyle={{ border:'none'}}
			bodyStyle={{height: 330, paddingTop:0}}
		>	
			{
				pieData.length>0?
				<Chart height={300} data={dv} scale={cols} padding={[0, 0, 35, 0]} forceFit animate={false}>
					<Coord type="theta" radius={0.75} />
					<Axis name="percent" />
					<Legend />
					<Tooltip
						showTitle={false}
						itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
					/>
					<Geom
						type="intervalStack"
						position="percent"
						color="item"
						tooltip={[ "item*percent", (item, percent) => {
								percent = percent * 100 + "%";
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
							}
						}
						/>
					</Geom>
				</Chart>:
				<NoData height={330}/>
			}
        </Card>
  	)
}
import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import {Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";
import DataSet from '@antv/data-set';
import NoData from './noData';

export default function Trend(props){

	const [ lineData, setLineData ] = useState([]);
	useEffect(()=>{
		let res = {
		  obj:{
			data:[
				{ month: "1月", "本人": 7.0, "平均": 3.9 },
				{ month: "2月", "本人": 6.0, "平均": 2.9 },
				{ month: "3月", "本人": 7.0, "平均": 3.9 },
				{ month: "4月", "本人": 3.0, "平均": 3.9 },
				{ month: "5月", "本人": 7.0, "平均": 6.9 },
				{ month: "6月", "本人": 9.0, "平均": 3.9 },
				{ month: "7月", "本人": 7.0, "平均": 7.9 },
				{ month: "8月", "本人": 6.0, "平均": 3.9 },
				{ month: "9月", "本人": 7.0, "平均": 3.9 },
				{ month: "10月", "本人": 7.0, "平均": 3.9 },
				{ month: "11月", "本人": 5.0, "平均": 1.9 },
				{ month: "12月", "本人": 7.0, "平均": 3.9 },
			]
		  },
		  success:true
		};
		if(res.success){
			setLineData(res.obj.data)
		}
	},[props.startYear,props.endYear]);

	const [dv,setDv] = useState([]);
	useEffect(()=>{
		const { DataView } = DataSet;
		const data = new DataView().source(lineData).transform({
			  type:'fold',
			  fields: [ '本人', '平均' ], // 展开字段集
			  key: 'type',                   // key字段
			  value: 'value',               // value字段
			  retains: [ 'month' ]        // 保留字段集，默认为除 fields 以外的所有字段
		});
		setDv(data);
	},[lineData])

	const cols = {
        value: {
          min:0
        }
	};
	
	return (
		<Card
			title={
                <React.Fragment>
                  	<span>学年图书借阅趋势</span><span style={{fontSize:12,color:"#666",marginLeft:8}}>单位：本</span>
                </React.Fragment>
             }
			 style={{ boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius: 4 }}
			 bordered={false}
			 headStyle={{ border:'none'}}
			bodyStyle={{paddingTop:0}}
		>
			{
				lineData.length>0?
				<Chart height={400} data={dv} scale={cols} forceFit padding={[10,0,30,30]}>
					<Axis name="month" />
					<Axis name="value" />
					<Legend name="type" />
					<Tooltip
						crosshairs={{
							type: "y"
						}}
					/>
					<Geom
						type="line"
						position="month*value"
						size={2}
						color="type"
						shape={"smooth"}
					/>
				</Chart>:
				<NoData height={450}/>
			}
		</Card>
	)
}
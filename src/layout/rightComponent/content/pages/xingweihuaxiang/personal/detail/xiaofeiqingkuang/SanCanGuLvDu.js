import React from 'react'
import {Card} from 'antd'
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
} from "bizcharts";
import DataSet from "@antv/data-set";

class SanCanGuLvDu extends React.Component{
	
	constructor(props){
		super(props)
		this.state={
			data: [
		      {
		        country: "专业平均",
		        population: 75
		      },
		      {
		        country: "个人",
		        population: 15
		      }
		    ]
		}
	}
	
	render () {
		
		const ds = new DataSet();
	    const dv = ds.createView().source(this.state.data);
	    dv.source(this.state.data).transform({
	      type: "sort",
	      callback(a, b) {
	        // 排序依据，和原生js的排序callback一致
	        return a.population - b.population > 0;
	      }
	    });
	    
	    
	    const label = {
	    	formatter(text, item, index){
			    if ((text - 0) === 0) {
			    	return ""
			    } else if ((text - 0) <= 20 && (text - 0) > 0 ){
			    	return "不规律"
			    } else if ((text - 0) <= 40 && (text - 0) > 20){
			    	return "较不规律"
			    } else if ((text - 0) <= 60 && (text - 0) > 40){
			    	return "一般"
			    } else if ((text - 0) <= 80 && (text - 0) > 60){
			    	return "较规律"
			    } else if ((text - 0) <= 100 && (text - 0) > 80){
			    	return "规律"
			    }
			}
	    }
	    
	    const scale = {
		  population:{
		    min: 0, // 定义数值范围的最小值
		    max: 100, // 定义数值范围的最大值
		    ticks: [20, 40, 60, 80, 100] // 用于指定坐标轴上刻度点的文本信息，当用户设置了 ticks 就会按照 ticks 的个数和文本来显示。
		  }
		}
	    
		return (
			<Card title="三餐规律度"
				style={{ boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius: 4 }}
				bordered={false}
				headStyle={{ border:'none'}}
			>
				<Chart height={400} data={dv} forceFit scale={scale}>
		          <Coord transpose />
		          <Axis
		            name="country"
		            label={{
		              offset: 12
		            }}
		          />
		          <Axis name="population" label={label} />
		          <Tooltip />
		          <Geom
		          	type="interval"
		          	position="country*population" 
		          	tooltip={['country*population', (country, population) => {
				      return {
				        name: country,
				        value: population
				      }
				    }]}
		          	color={['population', (population)=>{
				      if(population <= 20){
				      	return 'red'
				      }else if(population <= 40 && population > 20){
				      	return '#e90'
				      } else{
				      	return "#1890ff"
				      }
			      	}]}
		          />
		        </Chart>
			</Card>
		)
	}
}

export default SanCanGuLvDu


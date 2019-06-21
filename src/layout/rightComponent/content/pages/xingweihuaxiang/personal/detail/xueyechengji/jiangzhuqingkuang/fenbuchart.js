import React, { Component } from 'react'
import { Chart,  Geom, Axis, Tooltip } from "bizcharts";
import NoData from "./noData";

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:[]
        }
    }
    componentDidMount(){
        this.getData()
    }

    getData = () => {
        // const { startYear,endYear } = this.props;
        let res = {
            success:true,
            obj:{
                data:[
                    {type:"国家奖学金",value:4000},
                    {type:"国家助学金",value:5000},
                    {type:"学校奖学金",value:3000},
                    {type:"学校助学金",value:3000},
                    {type:"社会奖学金",value:1000},
                ]
            }
        };
        if(res.success){
            this.setState({chartData:res.obj.data})
        }
    }
    render() {
        if( this.state.chartData.length > 0){
            return (
                <Chart
                    height={310}
                    data={this.state.chartData}
                    padding={[20,20,40,40]}
                >
                    <Axis name="type"/>
                    <Axis name="value"/>
                    <Tooltip/>
                    <Geom 
                        position="type*value" 
                        type="interval"
                        tooltip={[ "type*value", (type, value) => {
                            return {
                                name: "金额",
                                value:`${value}(元)`
                            };
                            }
                        ]}
                    />
                </Chart>
            )
        }else{
            return <NoData height={310}/>
        }
    }
}

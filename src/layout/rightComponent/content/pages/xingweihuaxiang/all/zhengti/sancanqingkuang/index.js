import React, { Component } from 'react'
import { Card } from 'antd';
import { Chart, Geom, Axis, Tooltip, Coord, Label } from "bizcharts"
import DataSet from "@antv/data-set";
import NoData from '../nodata';

export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        this.setState({
            data:[
                {label:"不规律",value:77},
                {label:"较不规律",value:50},
                {label:"规律一般",value:65},
                {label:"较规律",value:36},
                {label:"很规律",value:20},
            ]
        })
    }
    render() {
        const dv = new DataSet().createView();
        dv.source(this.state.data).transform({
            type: "percent",
            field: "value",
            dimension: "label",
            as: "percent"
        });
        return (
            <Card 
                style={{height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{fontSize: 16, fontWeight: 700}}>三餐情况</div>
                </div>}
                bodyStyle={{height:this.props.height - 10}}
                >
                {
                    this.state.data.length>0?
                    <Chart height={this.props.height - 60} data={dv} padding={[0, 40, 20, 20]} forceFit >
                        <Coord type="theta" radius={0.75} startAngle={-Math.PI/2} endAngle={0} />
                        <Axis name="percent" />
                        <Tooltip
                            showTitle={false}
                            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                        />
                        <Geom
                            type="intervalStack"
                            position="percent"
                            color="label"
                            tooltip={[
                            "label*percent",
                            (label, percent) => {
                                percent = percent.toFixed(4) * 100 + "%";
                                return {
                                name: label,
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
                                content={["label*percent",(label,precent)=>{
                                    return `${label}:${precent.toFixed(4)*100}%`
                                }]}
                            />
                        </Geom>
                    </Chart>:
                    <NoData/>
                }
            </Card>
        )
    }
}

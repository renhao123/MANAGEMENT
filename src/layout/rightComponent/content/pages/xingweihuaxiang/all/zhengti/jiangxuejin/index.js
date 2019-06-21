import React, { Component } from 'react'
import { Card } from 'antd';
import { Chart, Geom, Tooltip, Coord, Label, View } from "bizcharts"
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
            data : [
                {"name":"校级","type":"个人","value":1294,"child":"东南大学三好学生"},
                {"name":"校级","type":"个人","value":40,"child":"东南大学三好学生标兵"},
                {"name":"校级","type":"个人","value":139,"child":"东南大学优秀学生干部"},
                {"name":"省级","type":"个人","value":27,"child":"江苏省三好学生"},
                {"name":"省级","type":"个人","value":18,"child":"江苏省优秀学生干部"},
                {"name":"校级","type":"集体","value":22,"child":"东南大学先进班集体"},
                {"name":"省级","type":"集体","value":13,"child":"江苏省先进班集体"}
            ]
        })
    }
    render() {
        const { DataView } = DataSet;
        const dv = new DataView();
        dv.source(this.state.data).transform({
            type: 'percent',
            field: 'value',
            dimension: 'type',
            as: 'percent'
        });
        const cols = {
            percent: {
                formatter: val => {
                    val = `${(val * 100).toFixed(2)}%`;
                    return val;
                }
            }
        };
        const dv1 = new DataView();
        dv1.source(this.state.data).transform({
            type: 'percent',
            field: 'value',
            dimension: 'name',
            as: 'percent'
        });

        const dv2 = new DataView();
        dv2.source(this.state.data).transform({
            type: 'percent',
            field: 'value',
            dimension: 'child',
            as: 'percent'
        });
        return (
            <Card 
                style={{height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{fontSize: 16, fontWeight: 700}}>奖学金</div>
                </div>}
                bodyStyle={{height:this.props.height - 10}}
                >
                {
                    this.state.data.length>0?
                    <Chart height={this.props.height-60} data={dv} scale={cols} padding={[30, 60, 30, 80]} forceFit>
                            <Coord type="theta" radius={0.4}/>
                            <Tooltip showTitle={false}
                                     itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"/>
                            <Geom type="intervalStack" position="percent" 
                                  color={['child', ['#1890FF', '#13C2C2', '#2FC25B']]}
                                  tooltip={['type*percent*value', (item, percent, value) => {
                                      percent = `${(percent * 100).toFixed(2)}%`;
                                      return {
                                          name: item,
                                          value: value + "(" + percent + ")"
                                      };
                                  }]} style={{
                                lineWidth: 1,
                                stroke: '#fff'
                            }} select={false}>
                                <Label content="type" offset={-10}/>
                            </Geom>


                            <View data={dv1} scale={cols}>
                                <Coord type="theta" radius={0.75} innerRadius={0.4 / 0.75}/>
                                <Tooltip showTitle={false}
                                         itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"/>
                                <Geom type="intervalStack" position="percent"
                                      color={['name', ['#13C2C2', '#F5A623', '#F04864', '#8543E0', '#3436C7', '#223273']]}
                                      tooltip={['name*percent*value', (item, percent, value) => {
                                          percent = `${(percent * 100).toFixed(2)}%`;
                                          return {
                                              name: item,
                                              value: value + "(" + percent + ")"
                                          };
                                      }]} style={{
                                    lineWidth: 1,
                                    stroke: '#fff'
                                }} select={false}>
                                    <Label content="name" offset={-20}/>
                                </Geom>
                            </View>


                            <View data={dv2} scale={cols}>
                                <Coord type="theta" radius={1} innerRadius={0.5 / 0.75 / 1}/>
                                <Geom type="intervalStack" position="percent"
                                      color={['child', ['#13C2C2', '#F5A623', '#F04864', '#8543E0', '#3436C7', '#223273']]}
                                      tooltip={['child*percent*value', (child, percent, value) => {
                                          percent = `${(percent * 100).toFixed(2)}%`;
                                          return {
                                              name: child,
                                              value: value + "(" + percent + ")"
                                          };
                                      }]} style={{
                                    lineWidth: 1,
                                    stroke: '#fff'
                                }} select={false}>
                                    <Label content="child"/>
                                </Geom>
                            </View>
                        </Chart>:
                    <NoData/>
                }
            </Card>
        )
    }
}

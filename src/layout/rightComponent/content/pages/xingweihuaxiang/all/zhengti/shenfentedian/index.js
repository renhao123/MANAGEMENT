import React, { Component } from 'react'
import { Card } from 'antd';
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from "bizcharts"
import DataSet from "@antv/data-set";
import NoData from '../nodata';

export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
            from:[//来源
                // {name:"香港",count:10,type:"from",type:"来源"},
                // {name:"澳门",count:20,type:"from",type:"来源"},
                // {name:"台湾",count:40,type:"from",type:"来源"},
                // {name:"华侨",count:20,type:"from",type:"来源"},
            ],
            recruit: [//招生
                // {name:"国家专项",count:15,type:"招生"},
                // {name:"高校专项",count:15,type:"招生"},
                // {name:"预科入学",count:10,type:"招生"},
                // {name:"内地新疆班",count:10,type:"招生"},
                // {name:"自主招生",count:10,type:"招生"},
                // {name:"少年生",count:10,type:"招生"},
                // {name:"高水平运动队",count:5,type:"招生"},
                // {name:"高水平艺术团",count:5,type:"招生"},
                // {name:"外语保送生",count:5,type:"招生"},
                // {name:"综合评价",count:5,type:"招生"},
            ],
            others: [//其他
                // {name:"家庭经济困难学生",count:100,type:"其他"}
            ],
        }
    }

    componentDidMount(){
        this.getChartData(this.props.filterValue);
    }

    componentWillReceiveProps(nextprops){
        this.getChartData(nextprops.filterValue);
    }

    getChartData = (filterValue) => {
        // console.log(filterValue);
        let res = {
            success:true,
            obj:{
                from:[
                    {name:"香港",count:10,type:"来源"},
                    {name:"澳门",count:20,type:"来源"},
                    {name:"台湾",count:40,type:"来源"},
                    {name:"华侨",count:20,type:"来源"},
                ],
                recruit: [
                    {name:"国家专项",count:10,type:"招生"},
                    {name:"高校专项",count:10,type:"招生"},
                    {name:"预科入学",count:10,type:"招生"},
                    {name:"内地新疆班",count:10,type:"招生"},
                    {name:"自主招生",count:10,type:"招生"},
                    {name:"少年生",count:10,type:"招生"},
                    {name:"高水平运动队",count:10,type:"招生"},
                    {name:"高水平艺术团",count:10,type:"招生"},
                    {name:"外语保送生",count:10,type:"招生"},
                    {name:"综合评价",count:10,type:"招生"},
                ],
                others: [
                    {name:"家庭经济困难学生",count:90,type:"其他"}
                ],
            }
        }
        if(res.success){
            this.setState({
                from:res.obj.from,
                recruit:res.obj.recruit,
                others:res.obj.others
            })
        }
    }

    transformToChart = (data) => {
        const ds = new DataSet();
        const dv = ds.createView().source(data).transform({
            type: "percent",
            field: "count",
            // 统计销量
            dimension: "name",
            // 每年的占比
            as: "percent"
        });
        return dv;
    }

    render() {
        const cols = {
            percent: {
              min: 0,
              formatter(val) {
                return (val * 100).toFixed(0);
              }
            }
        };
        const formData = this.transformToChart(this.state.from);
        const recruitData = this.transformToChart(this.state.recruit);
        const othersData = this.transformToChart(this.state.others);
        return (
            <Card 
                style={{height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{fontSize: 16, fontWeight: 700}}>身份特点</div>
                </div>}
                bodyStyle={{height:this.props.height - 10}}
                >
                {
                    this.state.from.length>0 && this.state.recruit.length>0 && this.state.others.length>0?
                    <React.Fragment>
                        <Chart height={100} data={formData} scale={cols} padding="auto" forceFit>
                            <Coord transpose />
                            <Axis name="type" />
                            <Axis name="percent" />
                            <Legend marker={'circle'}/>
                            <Tooltip crosshairs={{ type: "y" }} />
                            <Geom
                                type='intervalStack'
                                position="type*percent"
                                size={40}
                                color={'name'}
                            />
                        </Chart>
                        <Chart height={155} data={recruitData} scale={cols} padding="auto" forceFit>
                            <Coord transpose />
                            <Axis name="type" />
                            <Axis name="percent" />
                            <Legend marker={'circle'}/>
                            <Tooltip crosshairs={{ type: "y" }} />
                            <Geom
                                type='intervalStack'
                                position="type*percent"
                                size={40}
                                color={'name'}
                            />
                        </Chart>
                        <Chart height={105} data={othersData} scale={cols} padding="auto" forceFit>
                            <Coord transpose />
                            <Axis name="type" />
                            <Axis name="percent" />
                            <Legend marker={'circle'} />
                            <Tooltip crosshairs={{ type: "y" }} />
                            <Geom
                                type='intervalStack'
                                position="type*percent"
                                size={40}
                                color={'name'}
                            />
                        </Chart>
                    </React.Fragment>:
                    <NoData/>
                }
            </Card>
        )
    }
}

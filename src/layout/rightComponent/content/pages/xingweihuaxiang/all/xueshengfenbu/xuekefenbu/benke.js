import React, { Component } from 'react';
import { Card } from 'antd';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend } from "bizcharts";
import DataSet from "@antv/data-set";
import NoData from './nodata';
// import {postAction} from '@/axios';

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[
                {
                    item:'经济与管理类',
                    count: 40
                },{
                    item:'金融学类',
                    count:50
                }
            ]
        }
    }

    componentDidMount(){
        this.getData(this.props);
    }

    componentWillReceiveProps(nextProps){
        if(JSON.stringify(this.props) !== JSON.stringify(nextProps)){
            this.getData(nextProps);
        }
    }

    //获取本科学科分布数据
    getData(props){
        // let { filterValue } = props;
        // postAction('/bigdata/portrait/group/minority/top5/statistics', {
        //     academicYear: filterValue.curYear,
        //     classCode: filterValue.curClass,
        //     collegeCode: filterValue.curCollege,
        //     grade: filterValue.curGrade,
        //     majorCode: filterValue.curMajor,
        //     studentType: filterValue.curStudentType
        // }).then(res => {
        //     if(res.success){
        //         this.setState({
        //             data:res.obj.map(item => ({item:item.born_source,count:item.studentNum}))
        //         })
        //     }
        // })
    }

    render() {
        const { DataView } = DataSet;
        const dv = new DataView();
        dv.source(this.state.data).transform({
            type: "percent",
            field: "count",
            dimension: "item",
            as: "percent"
        });
        return (
            <Card 
                style={{height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                            <div style={{fontSize: 16, fontWeight: 700}}>本科学科分布<span style={{display: 'inline-block', fontSize: 12, fontWeight: 400, color: '#4A4A4A', marginLeft: 10}}>单位：人</span></div>
                        </div>}
                bodyStyle={{height:340}}
                >
                {
                    this.state.data.length>0?
                    <Chart
                        data={dv}
                        height={290}
                        padding={[-10, 0, 35, 0]}
                        forceFit
                    >
                        <Coord type={"theta"} radius={0.8}/>
                        <Axis name="percent" />
                        <Tooltip
                            showTitle={false}
                            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {count}({value})</li>"
                        />
                        <Legend/>
                        <Geom
                            type="intervalStack"
                            position="percent"
                            color="item"
                            tooltip={[ 
                                "item*percent*count",
                                (item, percent,count) => ({
                                    name:item,
                                    value:(percent * 100).toFixed(2) + "%",
                                    count:count
                                })
                            ]}
                            style={{
                                lineWidth: 1,
                                stroke: "#fff"
                            }}
                        >
                            <Label
                            content="percent"
                            formatter={(val, item) => (item.point.item + ": " + (val * 100).toFixed(2) + "%")}
                            />
                        </Geom>
                    </Chart>:
                    <NoData/>
                }
            </Card>
        );
    }
}

export default Index;
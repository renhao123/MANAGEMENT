import React, { Component } from 'react';
import { Card } from 'antd';
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts"
import {postAction} from '@/axios';
import NoData from './nodata';

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[
                {
                    "code": "100025",
                    "name": "哲学院",
                    "sourceName": "香港",
                    "studentNum": 1
                },
                {
                    "code": "100026",
                    "name": "经济学院",
                    "sourceName": "台湾",
                    "studentNum": 4
                },
                {
                    "code": "100026",
                    "name": "经济学院",
                    "sourceName": "香港",
                    "studentNum": 11
                },
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

    //获取学生港澳台侨来源人数统计
    getData = (props) => {
        let { filterValue } = props;
        postAction('/bigdata/portrait/group/student/origin/gatq/statistics', {
            academicYear: filterValue.curYear,
            classCode: filterValue.curClass,
            collegeCode: filterValue.curCollege,
            grade: filterValue.curGrade,
            majorCode: filterValue.curMajor,
            studentType: filterValue.curStudentType
        }).then(res => {
            if(res.success){
                this.setState({
                    data:res.obj || []
                })
            }
        })
    }
    render() {
        
        return (
            <Card 
                style={{height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{fontSize: 16, fontWeight: 700}}>港澳台学生分布<span style={{display: 'inline-block', fontSize: 12, fontWeight: 400, color: '#4A4A4A', marginLeft: 10}}>单位：人</span></div>
                </div>}
                bodyStyle={{height:320}}
            >
                {
                    this.state.data.length>0
                    ?
                    <Chart data={this.state.data}   padding={[10,10,85,30]} height={270} forceFit>
                        <Axis name="name" />
                        <Axis name="studentNum" />
                        <Legend/>
                        <Tooltip/>
                        <Geom
                            type="interval"
                            position="name*studentNum"
                            color={"sourceName"}
                            adjust={[
                                {
                                    type: "dodge",
                                    marginRatio: 1 / 32
                                }
                            ]}
                        />
                    </Chart>
                    :
                    <NoData/>
                }
            </Card>
        );
    }
}

export default Index;
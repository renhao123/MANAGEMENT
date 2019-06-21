import React, { Component } from 'react';
import { Card } from 'antd';
import NoData from './nodata';
import {postAction} from '@/axios';
import { Chart, Geom, Axis, Tooltip } from "bizcharts"

class Index extends Component {
    state = {
        data: [
            {
                name: "1951 年",
                value: 38
            },
            {
                name: "1952 年",
                value: 52
            }
        ]
    }

    componentDidMount(){
        this.getData(this.props);
    }

    componentWillReceiveProps(nextProps){
        if(JSON.stringify(this.props) !== JSON.stringify(nextProps)){
            this.getData(nextProps);
        }
    }

    //查询学生整体人数统计
    getData(props){
        let { filterValue } = props;
        postAction('/bigdata/portrait/group/student/whole/statistics', {
            academicYear: filterValue.curYear,
            classCode: filterValue.curClass,
            collegeCode: filterValue.curCollege,
            grade: filterValue.curGrade,
            majorCode: filterValue.curMajor,
            studentType: filterValue.curStudentType
        }).then(res => {
            if(res.success){
                this.setState({data:res.obj.map(item => ({name:item.name,value:item.studentNum }))})
            }
        })
    }

    render() {
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>学生整体分析<span style={{ display: 'inline-block', fontSize: 12, fontWeight: 400, color: '#4A4A4A', marginLeft: 10 }}>单位：人</span></div>
                </div>}
                bodyStyle={{height: 510}}
            >
                {
                    this.state.data.length>0?
                    <Chart data={this.state.data} padding={[10, 10, 30, 30]} height={460} forceFit>
                        <Axis name="name" />
                        <Axis name="value" />
                        <Tooltip 
                            showTitle={false}
                            itemTpl="<li>{name}: {value}</li>"
                        />
                        <Geom type="interval" position="name*value" 
                            tooltip={[ 
                                "name*value",
                                (name, value) => ({ name, value })
                            ]}
                        />
                    </Chart>:
                    <NoData/>
                }
            </Card>
        );
    }
}

export default Index;
import React, {Component} from 'react';
import {Card} from 'antd';
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";
import { postAction } from '@/axios.js';
// import ShowChart from './showchart';
import NoData from './nodata';


export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "examResultType": "1",
                    "code": "2015080101",
                    "name": "会计1501",
                    "studentNum": 60
                },
                {
                    "examResultType": "2",
                    "code": "2015080101",
                    "name": "会计1501",
                    "studentNum": 8
                }
            ]
        }
    }

    componentDidMount(){
        this.getData();
    }
    componentWillReceiveProps(nextProps){
        if(JSON.stringify(this.props) !== JSON.stringify(nextProps)){
            this.getData(nextProps);
        }
    }
    //获取考生考试结果统计
    getData(props){
        let { filterValue } = this.props;
        postAction('/bigdata/portrait/group/studies/examResult/statistics', {
            academicYear: filterValue.curYear,
            classCode: filterValue.curClass,
            collegeCode: filterValue.curCollege,
            grade: filterValue.curGrade,
            majorCode: filterValue.curMajor,
            studentType: filterValue.curStudentType
        }).then(res => {
            if(res.success){
                this.setState({
                    data:res.obj
                })
            }
        })
    }
    render () {
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>考试通过人数对比<span style={{ display: 'inline-block', fontSize: 12, fontWeight: 400, color: '#4A4A4A', marginLeft: 10 }}>单位：人</span></div>
                </div>}
                bodyStyle={{height: this.props.height - 10}}
            >
                {
                    this.state.data.length>0?
                        <Chart height={this.props.height - 60} data={this.state.data} padding={[10, 30, 60, 30]} forceFit>
                            <Axis name="name" />
                            <Axis name="studentNum" />
                            <Legend />
                            <Tooltip/>
                            <Geom
                                type="interval"
                                position="name*studentNum"
                                color={"examResultType"}
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
        )
    }
}
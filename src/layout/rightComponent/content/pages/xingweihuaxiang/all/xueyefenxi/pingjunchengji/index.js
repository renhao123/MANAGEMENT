import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Geom, Axis, Tooltip, Coord} from "bizcharts";
import DataSet from "@antv/data-set";
// import ShowChart from './showchart';
import { postAction } from '@/axios.js'
import NoData from './nodata';


export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: "经济学1801班",
                    avgScore: 13
                },
                {
                    name: "经济学1802班",
                    avgScore: 10
                },
                {
                    name: "经济学1803班",
                    avgScore: 29
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

    //查询学生平均成绩统计
    getData = (props) => {
        let { filterValue } = props;
        postAction('/bigdata/portrait/group/studies/avgScore/statistics', {
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

    render () {
        const ds = new DataSet();
        const dv = ds.createView().source(this.state.data);
        dv.transform({
            type: "sort",
            callback(a, b) {
                // 排序依据，和原生js的排序callback一致
                return a.avgScore - b.avgScore > 0;
            }
        });
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>平均成绩<span style={{ display: 'inline-block', fontSize: 12, fontWeight: 400, color: '#4A4A4A', marginLeft: 10 }}>单位：分</span></div>
                </div>}
                bodyStyle={{height: this.props.height - 10}}
            >
                {
                    this.state.data.length>0?
                    <Chart
                        height={this.props.height - 60}
                        data={dv}
                        padding={[10, 40, 20, 100]}
                        forceFit
                    >
                        <Coord transpose />
                        <Axis
                            name="name"
                            label={{
                                offset: 12
                            }}
                        />
                        <Axis name="avgScore" />
                        <Tooltip 
                            showTitle={false}
                            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                        />
                        <Geom 
                            type="interval" 
                            position="name*avgScore" 
                            tooltip={['name*avgScore', (name, avgScore) => {
                                return { name, value:avgScore };
                              }]}
                        />
                    </Chart>:
                    <NoData/>
                }
            </Card>
        )
    }
}
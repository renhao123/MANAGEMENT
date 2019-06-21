import React, { Component } from 'react'
import { Card, Table } from 'antd';

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentYear:"2018",
            totalScore:23,
            lostScore:1,
            classRange:[12,35],
            majorRange:[26,98],
            pageInfo:{
                pageSize:10,
                current:1,
                total:100,
                showTotal:(total)=>`共${parseInt(total/10)}页`,
                showQuickJumper:true
            },
            datasource:[
                // {courseTitle:"高等数学",teacher:"宋静",courseCategory:"类别1",courseType:"类型1",score:"77",point:4,majorRange:5,classRange:4},
            ],
            cloumns:[
                {
                    title:"序号",
                    dataIndex:"sortIndex",
                    width:50,
                    align:"cneter"
                },
                {
                    title:"课程名称",
                    dataIndex:"courseTitle",
                    align:"cneter"
                },
                {
                    title:"任课老师",
                    dataIndex:"teacher",
                    align:"cneter"
                },
                {
                    title:"课程类别",
                    dataIndex:"courseCategory",
                    align:"cneter"
                },
                {
                    title:"课程类型",
                    dataIndex:"courseType",
                    align:"cneter"
                },
                {
                    title:"本学期成绩",
                    dataIndex:"score",
                    align:"cneter"
                },
                {
                    title:"课程学分",
                    dataIndex:"point",
                    align:"cneter"
                },
                {
                    title:"专业内排名",
                    dataIndex:"majorRange",
                    align:"cneter"
                },
                {
                    title:"班级内排名",
                    dataIndex:"classRange",
                    align:"cneter"
                },
            ]
        }
    }

    componentDidMount(){
        let res = {
            obj:{
                data:[
                    {courseTitle:"高等数学",teacher:"宋静",courseCategory:"类别1",courseType:"类型1",score:"77",point:4,majorRange:5,classRange:4,sortIndex:1},
                    {courseTitle:"高等数学",teacher:"宋静",courseCategory:"类别1",courseType:"类型1",score:"77",point:4,majorRange:5,classRange:4,sortIndex:2},
                    {courseTitle:"高等数学",teacher:"宋静",courseCategory:"类别1",courseType:"类型1",score:"77",point:4,majorRange:5,classRange:4,sortIndex:3},
                    {courseTitle:"高等数学",teacher:"宋静",courseCategory:"类别1",courseType:"类型1",score:"77",point:4,majorRange:5,classRange:4,sortIndex:4},
                    {courseTitle:"高等数学",teacher:"宋静",courseCategory:"类别1",courseType:"类型1",score:"77",point:4,majorRange:5,classRange:4,sortIndex:5},
                    {courseTitle:"高等数学",teacher:"宋静",courseCategory:"类别1",courseType:"类型1",score:"77",point:4,majorRange:5,classRange:4,sortIndex:6},
                    {courseTitle:"高等数学",teacher:"宋静",courseCategory:"类别1",courseType:"类型1",score:"77",point:4,majorRange:5,classRange:4,sortIndex:7},
                    {courseTitle:"高等数学",teacher:"宋静",courseCategory:"类别1",courseType:"类型1",score:"77",point:4,majorRange:5,classRange:4,sortIndex:8},
                    {courseTitle:"高等数学",teacher:"宋静",courseCategory:"类别1",courseType:"类型1",score:"77",point:4,majorRange:5,classRange:4,sortIndex:9},
                    {courseTitle:"高等数学",teacher:"宋静",courseCategory:"类别1",courseType:"类型1",score:"77",point:4,majorRange:5,classRange:4,sortIndex:10},
                ],
                pageSize:10,
                current:1,
                total:100,
            }
        }
        this.setState({
            datasource:res.obj.data || [],
            pageInfo: {
                current: res.obj.current, // 当前页数，
                pageSize: res.obj.pageSize, // 每页条数
                total: res.obj.total, // 数据总条数
                showTotal: (total) => `共${parseInt(total/10)}页`, //显示数据总条数
                showQuickJumper: true // 显示页码快速跳转
            },
        })
    }

    //切换分页
    changePaginnation = (pagination) => {
        this.setState({
            pageInfo: {
                current: pagination.current, // 当前页数，
                pageSize: pagination.pageSize, // 每页条数
                total: pagination.total, // 数据总条数
                showTotal: (total) => `共${parseInt(total/10)}页`,
                showQuickJumper: true // 显示页码快速跳转
            }
        },() => {    
            this.getTableData();
        })  
    }
    render() {
        const {currentYear,totalScore,lostScore,classRange,majorRange} = this.state;
        return (
            <Card 
                title={
                    <React.Fragment>
                        <span style={{fontWeight:"bold"}}>个人成绩排名</span>
                        <p style={{marginBottom:0,color:"#4A4A4A"}}>{currentYear}学年，
                            总学分：<span style={{color:"#22CC91"}}>{totalScore}</span>分，
                            已挂科学分：<span style={{color:"#F36464"}}>{lostScore}</span>分，
                            班级内排名：<span style={{color:"#22CC91"}}>{classRange[0]}</span>/{classRange[1]}，
                            专业内排名：<span style={{color:"#22CC91"}}>{majorRange[0]}</span>/{majorRange[1]}
                        </p>
                    </React.Fragment>
                }
                style={{boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius:4}}
                bordered={false}
                headStyle={{ border: "none"}}
                bodyStyle={{ paddingTop: 0 }}
            >
                <Table
                    rowKey="sortIndex"
                    dataSource={this.state.datasource}
                    columns={this.state.cloumns}
                    pagination={this.state.pageInfo}
                    bordered={false}
                    size="middle"
                    onChange={this.changePaginnation}
                />
            </Card>
        )
    }
}

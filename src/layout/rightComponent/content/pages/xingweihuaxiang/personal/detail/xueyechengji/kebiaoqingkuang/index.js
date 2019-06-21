import React, { Component } from 'react'
import { Card, Row, Col, Table } from 'antd';
import styles from './index.module.less'

export default class index extends Component {
    constructor(props){
        super(props);

        this.state={
            pageInfo:{
                current: 1,
                pageSize: 10,
                total:12,
                showTotal: (total) => `共${parseInt(total/10)}页`, //显示数据总条数
                showQuickJumper: true,// 显示页码快速跳转
                simple:true,
            },
            majorData:[
                // {course:"投资经济学",teacher:"于洁",point:"9",time:"1-16"}
            ],
            majorColumns:[
                {
                    title:"序号",
                    dataIndex:"sortIndex",
                    width:60
                },
                {
                    title:"课程名称",
                    dataIndex:"course"
                },
                {
                    title:"教师",
                    dataIndex:"teacher"
                },
                {
                    title:"学分",
                    dataIndex:"point"
                },
                {
                    title:"上课周次",
                    dataIndex:"time"
                }
            ],
            scheduleData:[
                // {time:"上午",scheduleTime:"1-2节",Mon:"投资经济学 1-8周 九龙湖教二301",Tue:"投资经济学 1-8周 九龙湖教二301",Wed:"投资经济学 1-8周 九龙湖教二301",Tur:"投资经济学 1-8周 九龙湖教二301",Fri:"投资经济学 1-8周 九龙湖教二301",Sat:"投资经济学 1-8周 九龙湖教二301",Sun:"投资经济学 1-8周 九龙湖教二301"},
            ],
            scheduleColumns:[
                {
                    title:"上午/下午",
                    dataIndex:"time",
                    render:(text,record,index)=>{
                        if(index%2===0){
                            return {
                                children:text,
                                props:{rowSpan:2}
                            }
                        }else{
                            return {
                                children:text,
                                props: {rowSpan:0},
                            }
                        }
                    }
                },
                {
                    title:"节数",
                    dataIndex:"scheduleTime"
                },
                {
                    title:"星期一",
                    dataIndex:"Mon"
                },
                {
                    title:"星期二",
                    dataIndex:"Tue"
                },
                {
                    title:"星期三",
                    dataIndex:"Wed"
                },
                {
                    title:"星期四",
                    dataIndex:"Tur"
                },
                {
                    title:"星期五",
                    dataIndex:"Fri"
                },
                {
                    title:"星期六",
                    dataIndex:"Sat"
                },
                {
                    title:"星期日",
                    dataIndex:"Sun"
                },
            ]
        }
    }

    componentDidMount(){
        let scheduleData = [
            {time:"上午",scheduleTime:"1-2节",Mon:"投资经济学 1-8周 九龙湖教二301",Tue:"投资经济学 1-8周 九龙湖教二301",Wed:"投资经济学 1-8周 九龙湖教二301",Tur:"投资经济学 1-8周 九龙湖教二301",Fri:"投资经济学 1-8周 九龙湖教二301",Sat:"投资经济学 1-8周 九龙湖教二301",Sun:"投资经济学 1-8周 九龙湖教二301"},
            {time:"上午",scheduleTime:"3-4节",Mon:"投资经济学 1-8周 九龙湖教二301",Tue:"投资经济学 1-8周 九龙湖教二301",Wed:"投资经济学 1-8周 九龙湖教二301",Tur:"投资经济学 1-8周 九龙湖教二301",Fri:"投资经济学 1-8周 九龙湖教二301",Sat:"投资经济学 1-8周 九龙湖教二301",Sun:"投资经济学 1-8周 九龙湖教二301"},
            {time:"下午",scheduleTime:"4-5节",Mon:"投资经济学 1-8周 九龙湖教二301",Tue:"投资经济学 1-8周 九龙湖教二301",Wed:"投资经济学 1-8周 九龙湖教二301",Tur:"投资经济学 1-8周 九龙湖教二301",Fri:"投资经济学 1-8周 九龙湖教二301",Sat:"投资经济学 1-8周 九龙湖教二301",Sun:"投资经济学 1-8周 九龙湖教二301"},
            {time:"下午",scheduleTime:"5-6节",Mon:"投资经济学 1-8周 九龙湖教二301",Tue:"投资经济学 1-8周 九龙湖教二301",Wed:"投资经济学 1-8周 九龙湖教二301",Tur:"投资经济学 1-8周 九龙湖教二301",Fri:"投资经济学 1-8周 九龙湖教二301",Sat:"投资经济学 1-8周 九龙湖教二301",Sun:"投资经济学 1-8周 九龙湖教二301"},
            {time:"晚上",scheduleTime:"6-7节",Mon:"投资经济学 1-8周 九龙湖教二301",Tue:"投资经济学 1-8周 九龙湖教二301",Wed:"投资经济学 1-8周 九龙湖教二301",Tur:"投资经济学 1-8周 九龙湖教二301",Fri:"投资经济学 1-8周 九龙湖教二301",Sat:"投资经济学 1-8周 九龙湖教二301",Sun:"投资经济学 1-8周 九龙湖教二301"},
            {time:"晚上",scheduleTime:"7-8节",Mon:"投资经济学 1-8周 九龙湖教二301",Tue:"投资经济学 1-8周 九龙湖教二301",Wed:"投资经济学 1-8周 九龙湖教二301",Tur:"投资经济学 1-8周 九龙湖教二301",Fri:"投资经济学 1-8周 九龙湖教二301",Sat:"投资经济学 1-8周 九龙湖教二301",Sun:"投资经济学 1-8周 九龙湖教二301"},
        ];
        this.setState({scheduleData});
        let res = {
            obj:{
                data:[
                    {course:"投资经济学",teacher:"于洁",point:"9",time:"1-16",sortIndex:"1"},
                    {course:"投资经济学",teacher:"于洁",point:"9",time:"1-16",sortIndex:"2"},
                    {course:"投资经济学",teacher:"于洁",point:"9",time:"1-16",sortIndex:"3"},
                    {course:"投资经济学",teacher:"于洁",point:"9",time:"1-16",sortIndex:"4"},
                    {course:"投资经济学",teacher:"于洁",point:"9",time:"1-16",sortIndex:"5"},
                    {course:"投资经济学",teacher:"于洁",point:"9",time:"1-16",sortIndex:"6"},
                    {course:"投资经济学",teacher:"于洁",point:"9",time:"1-16",sortIndex:"7"},
                    {course:"投资经济学",teacher:"于洁",point:"9",time:"1-16",sortIndex:"8"},
                    {course:"投资经济学",teacher:"于洁",point:"9",time:"1-16",sortIndex:"9"},
                    {course:"投资经济学",teacher:"于洁",point:"9",time:"1-16",sortIndex:"10"},
                ],
                total:12,
                current:2,
                pageSize:10
            }
        }
        this.setState({
            majorData: res.obj.data || [],
            pageInfo: {
                current: res.obj.current, // 当前页数，
                pageSize: res.obj.pageSize, // 每页条数
                total: res.obj.total, // 数据总条数
                showTotal: (total) => `共${parseInt(total/10)}页`, //显示数据总条数
                showQuickJumper: true, // 显示页码快速跳转
                simple:true,
            }
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
                showQuickJumper: true, // 显示页码快速跳转
                simple:true,
            }
        }) 
    }

    render() {
        return (
            <Card 
                title={<span style={{fontWeight:"bold"}}>个人课表情况</span>}
                style={{boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius:4}}
                bordered={false}
                headStyle={{ border: "none"}}
                bodyStyle={{ paddingTop: 0 }}
            >
                <Row gutter={16}>
                    <Col span={8}>
                        <Table
                            rowKey="sortIndex"
                            dataSource={this.state.majorData}
                            columns={this.state.majorColumns}
                            pagination={this.state.pageInfo}
                            onChange={this.changePaginnation}
                            bordered={false}
                        />
                    </Col>
                    <Col span={16}>
                        <Table
                            rowKey="scheduleTime"
                            className={styles.scheduleTable}
                            dataSource={this.state.scheduleData}
                            columns={this.state.scheduleColumns}
                            pagination={false}
                            size="default"
                            bordered={false}
                        />
                    </Col>
                </Row>
            </Card>
        )
    }
}

import React, { Component } from 'react';
import { Table, Card } from 'antd';
import { withRouter } from 'react-router-dom'
import Filter from './filter'


class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource:[
                // {studentNo:999,studentName:"张三",gender:"男",cardNo:"12345",college:"动力工程学院",major:"动力学",grade:"2016级",className:"1102班",systemNo:"001"},
            ],
            columns:[
                {
                    title:"序号",
                    render:(text,record,index)=>`${index+1}`,
                    key:"sortIndex"
                },
                {
                    title:"学号",
                    dataIndex:"studentNo",
                    key:"studentNo"
                },
                {
                    title:"姓名",
                    dataIndex:"studentName",
                    key:"studentName"
                },
                {
                    title:"性别",
                    dataIndex:"gender",
                    key:"gender",
                },
                {
                    title:"一卡通",
                    dataIndex:"cardNo",
                    key:"cardNo",
                },
                {
                    title:"学院",
                    dataIndex:"college",
                    key:"college",
                },
                {
                    title:"专业",
                    dataIndex:"major",
                    key:"major",
                },
                {
                    title:"年级",
                    dataIndex:"grade",
                    key:"grade",
                },
                {
                    title:"班级",
                    dataIndex:"className",
                    key:"className"
                },
                {
                    title:"操作",
                    key:"operation",
                    render:(text,record)=>{
                        return <span style={{cursor:"pointer",color:'#22cc91'}} onClick={()=>{this.viewDetails(record)}}>查看</span>
                    }
                },
            ],
            pageInfo:{
                pageNum: 1,
                pageSize: 10,
                total:100,
                showTotal: (total) => `共${total}条数据`, //显示数据总条数
                showQuickJumper: true // 显示页码快速跳转
            },
            filterCondition:{
                currentCollege:[],
                currentDepartment:[],
                currentMajor:[],
                currentClass:[],
                currentGender:[],
                studentNo:""
            }
        }
    }

    componentDidMount(){
        //发起请求获取列表数据
        this.getTableData();
    }

    //更新来自于filter组件的筛选条件
    refreData = (data) => {
        console.log(data)
        this.setState({filterCondition:data},()=>{this.getTableData()})
    }

    //获取table数据
    getTableData = () => {
        // let { college, major, grade, className, genderm, student} = this.state.filterCondition;
        // let { pageNum, pageSize } = this.state.pageInfo
        //发起请求获取数据
        //如果后端数据不是该格式，则将数据转化为如下格式
        let res = {
            obj:{
                dataList:[
                    {studentNo:999,studentName:"张三",gender:"男",cardNo:"12345",college:"动力工程学院",major:"动力学",grade:"2016级",className:"1102班",systemNo:"001"},
                    {studentNo:999,studentName:"张三",gender:"男",cardNo:"12345",college:"动力工程学院",major:"动力学",grade:"2016级",className:"1102班",systemNo:"002"},
                    {studentNo:999,studentName:"张三",gender:"男",cardNo:"12345",college:"动力工程学院",major:"动力学",grade:"2016级",className:"1102班",systemNo:"003"},
                    {studentNo:999,studentName:"张三",gender:"男",cardNo:"12345",college:"动力工程学院",major:"动力学",grade:"2016级",className:"1102班",systemNo:"004"},
                    {studentNo:999,studentName:"张三",gender:"男",cardNo:"12345",college:"动力工程学院",major:"动力学",grade:"2016级",className:"1102班",systemNo:"005"},
                    {studentNo:999,studentName:"张三",gender:"男",cardNo:"12345",college:"动力工程学院",major:"动力学",grade:"2016级",className:"1102班",systemNo:"006"},
                    {studentNo:999,studentName:"张三",gender:"男",cardNo:"12345",college:"动力工程学院",major:"动力学",grade:"2016级",className:"1102班",systemNo:"007"},
                    {studentNo:999,studentName:"张三",gender:"男",cardNo:"12345",college:"动力工程学院",major:"动力学",grade:"2016级",className:"1102班",systemNo:"008"},
                    {studentNo:999,studentName:"张三",gender:"男",cardNo:"12345",college:"动力工程学院",major:"动力学",grade:"2016级",className:"1102班",systemNo:"009"},
                    {studentNo:999,studentName:"张三",gender:"男",cardNo:"12345",college:"动力工程学院",major:"动力学",grade:"2016级",className:"1102班",systemNo:"010"},
                ],
                total:100,
                pageNum:2,
                pageSize:10
            },
            success:true 
        };
        if(res.success){
            this.setState({
                dataSource: res.obj.dataList || [],
                pageInfo: {
                    current: res.obj.pageNum, // 当前页数，
                    pageSize: res.obj.pageSize, // 每页条数
                    total: res.obj.total, // 数据总条数
                    showTotal: (total) => `共${total}条数据`, //显示数据总条数
                    showQuickJumper: true // 显示页码快速跳转
                },
            })
        }
    }

    //查看详情
    viewDetails = (record) => {
        console.log(record);
        window.localStorage.setItem("personalDetail",JSON.stringify(record));
        this.props.history.push("/main/xingweihuaxiang/personal/detail");
    }

    //切换分页
    changePaginnation = (pagination) => {
        this.setState({
            pageInfo: {
                current: pagination.current, // 当前页数，
                pageSize: pagination.pageSize, // 每页条数
                total: pagination.total, // 数据总条数
                showTotal: (total) => `共${total}条数据`,
                showQuickJumper: true // 显示页码快速跳转
            }
        },() => {    
            this.getTableData();
        })  
    }

    render() {
        return (
            <React.Fragment>
                <Filter refershFilter={(data) => this.refreData(data)}></Filter>
                <Card
                    title={"选择学生"}
                    headStyle={{ border: "none"}}
                    bodyStyle={{ paddingTop: 0 }}
                    bordered={false}
                    style={{margin:20,boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius: 4}}
                >
                    <Table
                        rowKey="systemNo"
                        bordered={true}
                        dataSource={this.state.dataSource}
                        pagination={this.state.pageInfo}
                        columns={this.state.columns}
                        size="middle"
                        onChange={this.changePaginnation}
                    />
                </Card>
                
            </React.Fragment>
        );
    }
}

export default withRouter(Index);
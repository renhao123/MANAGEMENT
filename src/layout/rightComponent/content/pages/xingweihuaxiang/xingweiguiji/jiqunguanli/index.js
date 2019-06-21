import React, { Component } from 'react';
import { Card, Button, Input, Modal, Table, Row, Col } from 'antd';
import StudentDetail from './studentdetail';
import StudentList from './studentlist';

export default class Jiqunguanli extends Component{
    constructor(props){
        super(props);
        this.state={
            columns:[
                {
                    title:"序号",
                    dataIndex:"sortIndex",
                    render:(text,record,index)=>`${index+1}`
                },
                {
                    title:"重点集群",
                    dataIndex:"colony"
                },
                {
                    title:"集群人数",
                    dataIndex:"count"
                },
                {
                    title:"创建时间",
                    dataIndex:"createTime"
                },
                {
                    title:"备注",
                    dataIndex:"marker"
                },
                {
                    title:"操作",
                    key:"action",
                    render:(text,record)=>{
                        return (
                            <React.Fragment>
                                <span style={{color:"#22cc91",padding:"0 5px",cursor:"pointer"}} onClick={(e)=>{this.checkDetail(record)}}>查看</span>
                                <span style={{color:"#22cc91",padding:"0 5px",cursor:"pointer"}} onClick={(e)=>{this.addStudent(record)}}>增加学生</span>
                                <span style={{color:"red",padding:"0 5px",cursor:"pointer"}} onClick={(e)=>{this.deleteColony(record)}}>删除</span>
                            </React.Fragment>
                        )
                    }
                }
            ],
            dataSource:[],
            showModal:false,
            pagination: {
                current: 1, // 当前页数，
                pageSize: 10, // 每页条数
                total: 100, // 数据总条数
                showTotal: (total) => `共${total}条数据`, //显示数据总条数
                showQuickJumper: true // 显示页码快速跳转
            },
            searchValue:"",//搜索项
            addName:"",//添加集群名字
            addMark:"",//添加集群备注
            colonyName:"",
            showStudentDetail:false,
            currentStudentRecord:{},
            showStudentListModal:false,//添加学生模态框
        }
    }

    getData = () => {
        let res = {
            success:true,
            obj:{
                dataList:[
                    {colony:"经常逃课",count:"20",createTime:"2018-4-21 12:45:34",marker:"即将毕业的学生",key:"1"},
                    {colony:"经常逃课",count:"20",createTime:"2018-4-21 12:45:34",marker:"即将毕业的学生",key:"2"},
                    {colony:"经常逃课",count:"20",createTime:"2018-4-21 12:45:34",marker:"即将毕业的学生",key:"3"},
                    {colony:"经常逃课",count:"20",createTime:"2018-4-21 12:45:34",marker:"即将毕业的学生",key:"4"},
                    {colony:"经常逃课",count:"20",createTime:"2018-4-21 12:45:34",marker:"即将毕业的学生",key:"5"},
                    {colony:"经常逃课",count:"20",createTime:"2018-4-21 12:45:34",marker:"即将毕业的学生",key:"6"},
                    {colony:"经常逃课",count:"20",createTime:"2018-4-21 12:45:34",marker:"即将毕业的学生",key:"7"},
                    {colony:"经常逃课",count:"20",createTime:"2018-4-21 12:45:34",marker:"即将毕业的学生",key:"8"},
                    {colony:"经常逃课",count:"20",createTime:"2018-4-21 12:45:34",marker:"即将毕业的学生",key:"9"},
                    {colony:"经常逃课",count:"20",createTime:"2018-4-21 12:45:34",marker:"即将毕业的学生",key:"10"},
                ],
                pageNum:2,
                pageSize:5,
                total:15
            }
        };
        this.setState({
            dataSource:res.obj.dataList,
            pagination: {
                current: res.obj.pageNum, // 当前页数，
                pageSize: res.obj.pageSize, // 每页条数
                total: res.obj.total, // 数据总条数
                showTotal: (total) => `共${total}条数据`, //显示数据总条数
                showQuickJumper: true // 显示页码快速跳转
            }
        })
    }

    handleTableChange = (pagination) => {
        this.setState(
            () => {
                return {
                    pagination: {
                        current: pagination.current, // 当前页数，
                        pageSize: pagination.pageSize, // 每页条数
                        total: pagination.total, // 数据总条数
                        showTotal: (total) => `共${total}条数据`,
                        showQuickJumper: true // 显示页码快速跳转
                    }
                }
            },
            () => {
                this.getData();
            }
        )
    }

    componentDidMount() {
        this.getData();
    }

    //输入框内容改变
    changeInputValue = (e) => {
        this.setState({searchValue:e.target.value})
    }

    //搜索
    search = () => {
        console.log(this.state.searchValue);
    }

    //添加集群
    addColony = () => {
        console.log(this.state.colonyName);
        console.log(this.state.addMark);
        this.setState({showModal:false})
    }

    //添加重点集群-改变集群名称输入框
    changeColonyName = (e) => {
        this.setState({colonyName:e.target.value})
    }

    //添加重点集群-改变集群备注输入框
    changeMark = (e) => {
        this.setState({addMark:e.target.value})
    }

    //查看学生列表按钮
    checkDetail = (record) => {
        console.log(record)
        this.setState({currentStudentRecord:record,showStudentDetail:true})
    }

    //添加学生按钮
    addStudent = (record) => {
        console.log(record)
        this.setState({currentStudentRecord:record || this.state.currentStudentRecord,showStudentListModal:true})
    }

    //删除集群按钮
    deleteColony = (record) => {
        console.log(record);
        Modal.confirm({
            title: '确定删除该集群吗？',
            okText:"确定",
            cancelText:"取消",
            onOk:() => {
                console.log('OK');
                //发送删除集群请求，重新请求数据
                this.getData();
            },
            onCancel() {
                console.log('Cancel');
            },
        })
    }

    //关闭学生详情列表，打开增加学生列表
    addStudentAction = () => {
        this.setState({showStudentDetail:false},this.addStudent());
    }

    render(){
        return(
            <Card
                title={null}
            >
                <div>
                    <Button onClick={()=>{this.setState({showModal:true})}} type="primary">添加重点级群</Button>
                    <p style={{float:"right"}}>
                        <Input placeholder="输入集群名称" style={{width:"240px",marginRight:10}} onChange={this.changeInputValue}/>
                        <Button type="primary" icon="search" onClick={this.search}>搜索</Button>
                    </p>
                </div>
                <Table
                    columns={this.state.columns}
                    dataSource={this.state.dataSource}
                    size='middle'
                    bordered={true}
                    pagination={this.state.pagination}
                    onChange={this.handleTableChange}
                />
                <Modal
                    visible={this.state.showModal}
                    title="添加重点集群"
                    onCancel={()=>{this.setState({showModal:false})}}
                    onOk={this.addColony}
                >
                    <Row style={{marginBottom:20}}>
                        <Col span={6}>集群名称：</Col>
                        <Col span={18}><Input placeholder="请输入集群名称" onChange={this.changeColonyName} value={this.state.colonyName}/></Col>
                    </Row>
                    <Row>
                        <Col span={6}>备注：</Col>
                        <Col span={18}><Input.TextArea onChange={this.changeMark} value={this.state.addMark} rows={4}/></Col>
                    </Row>
                </Modal>
                <Modal
                    visible={this.state.showStudentDetail}
                    title={`${this.state.currentStudentRecord.colony}-学生列表`}
                    onCancel={()=>{this.setState({showStudentDetail:false})}}
                    width={800}
                    footer={<Button type="primary" onClick={()=>{this.setState({showStudentDetail:false})}}>关闭</Button>}
                >
                    <StudentDetail record={this.state.currentStudentRecord} addStudentAction={this.addStudentAction}/>
                </Modal>
                <Modal
                    visible={this.state.showStudentListModal}
                    title={`${this.state.currentStudentRecord.colony}-增加学生`}
                    onCancel={()=>{this.setState({showStudentListModal:false})}}
                    width={800}
                    footer={null}
                >
                    <StudentList record={this.state.currentStudentRecord} onCloseModal={()=>{this.setState({showStudentListModal:false})}}/>
                </Modal>
            </Card>
        )
    }
}

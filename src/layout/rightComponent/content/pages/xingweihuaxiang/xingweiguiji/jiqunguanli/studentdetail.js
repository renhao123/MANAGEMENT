import React, { Component } from 'react';
import { Row, Col, Select, Input, Button, Table, Modal } from 'antd';

export default class studentdetail extends Component {
    constructor(props){
        super(props);
        this.state= {
            selectedRows:[],//当前checkbox选择的学生
            currentCollege:"",
            currentMajor:"",
            currentClass:"",
            collegeList:[{label:"全部学院",value:""}],
            majorList:[{label:"全部专业",value:""}],
            classList:[{label:"全部班级",value:""}],
            searchValue:"",
            columns:[
                {
                    title:"序号",
                    key:"sortIndex",
                    width:60,
                    render:(text,record,index)=>`${index}`
                },
                {
                    title:"学号",
                    key:"studentNo",
                    dataIndex:"studentNo"
                },
                {
                    title:"姓名",
                    key:"studentName",
                    dataIndex:"studentName"
                },
                {
                    title:"学院",
                    key:"college",
                    dataIndex:"college"
                },
                {
                    title:"专业",
                    key:"major",
                    dataIndex:"major"
                },
                {
                    title:"班级",
                    key:"class",
                    dataIndex:"class"
                },
                {
                    title:"操作",
                    key:"action",
                    width:60,
                    render:(text,record)=>{
                        return <span style={{color:"red",cursor:"pointer"}} onClick={(e)=>{this.deleteStudent(record)}}>删除</span>
                    }
                }
            ],
            dataSource:[],
            pagination:{
                current:1,
                pageSize:10,
                taotal:100
            }
        }
    }

    componentDidMount(){
        this.getStudentList();
        this.getCollegeList();
    }

    //获取学院列表
    getCollegeList = () => {
        let res = {
            success:true,
            obj:{
                dataList:[
                    {label:"全部学院",value:""},
                    {label:"动力工程学院",value:"1"},
                    {label:"机械工程学院",value:"2"}
                ]
            }
        }
        if(res.success){
            this.setState({ collegeList:res.obj.dataList })
        }
    }

    //获取专业列表
    getMajorList = () => {
        // let currentCollege = this.state.currentCollege
        let res = {
            success:true,
            obj:{
                dataList:[
                    {label:"全部专业",value:""},
                    {label:"动力工程",value:"1"},
                    {label:"机械传动",value:"2"},
                ]
            }
        }
        if(res.success){
            this.setState({
                majorList:res.obj.dataList
            })
        }
    }

    //获取班级列表
    getClassList = () => {
        // let currentMajor = this.state.currentMajor
        let res = {
            success:true,
            obj:{
                dataList:[
                    {label:"全部班级",value:""},
                    {label:"0812班",value:"1"},
                    {label:"0065班",value:"2"},
                ]
            }
        }
        if(res.success){
            this.setState({
                classList:res.obj.dataList
            })
        }
    }

    //获取列表
    getStudentList = () => {
        //根据筛选条件获取学生列表
        // let record = this.props.record, //当前选择的集群信息
        let res = {
            success:true,
            obj:{
                dataSource:[
                    {key:"1",studentNo:"12345",studentName:"张晓刚",college:"动力工程学院",major:"动力工程系",class:"0991班"},
                    {key:"2",studentNo:"12345",studentName:"张晓刚",college:"动力工程学院",major:"动力工程系",class:"0991班"},
                    {key:"3",studentNo:"12345",studentName:"张晓刚",college:"动力工程学院",major:"动力工程系",class:"0991班"},
                    {key:"4",studentNo:"12345",studentName:"张晓刚",college:"动力工程学院",major:"动力工程系",class:"0991班"},
                    {key:"5",studentNo:"12345",studentName:"张晓刚",college:"动力工程学院",major:"动力工程系",class:"0991班"},
                    {key:"6",studentNo:"12345",studentName:"张晓刚",college:"动力工程学院",major:"动力工程系",class:"0991班"},
                    {key:"7",studentNo:"12345",studentName:"张晓刚",college:"动力工程学院",major:"动力工程系",class:"0991班"},
                    {key:"8",studentNo:"12345",studentName:"张晓刚",college:"动力工程学院",major:"动力工程系",class:"0991班"},
                    {key:"9",studentNo:"12345",studentName:"张晓刚",college:"动力工程学院",major:"动力工程系",class:"0991班"},
                    {key:"10",studentNo:"12345",studentName:"张晓刚",college:"动力工程学院",major:"动力工程系",class:"0991班"},
                ],
                total:100,
                current:1,
                pageSize:10
            }
        }
        if(res.success){
            this.setState({
                dataSource:res.obj.dataSource,
                pagination: {
                    current: res.obj.current, // 当前页数，
                    pageSize: res.obj.pageSize, // 每页条数
                    total: res.obj.total, // 数据总条数
                }
            })
        }
    }

    //下拉框改变
    changeSelect = (value,type) => {
        console.log(value,type);
        switch(type){
            case "college":
                this.setState({currentCollege:value},this.getMajorList());
                break;
            case "major":
                this.setState({currentMajor:value},this.getClassList());
                break;
            default:
                this.setState({currentClass:value})
        }
    }

    //搜索
    handleSearch = () => {
        //重置到第一页，带搜索条件搜索
        this.setState({
            pagination: {
                current: 1, // 当前页数，
                pageSize: this.state.pagination.pageSize, // 每页条数
            }
        },this.getStudentList())
    }

    //删除单个学生
    deleteStudent = (record) => {
        console.log(record);
        Modal.confirm({
            title: '确定删除该学生吗？',
            okText:"确定",
            cancelText:"取消",
            onOk:() => {
                console.log('OK');
                //发送删除单个学生请求,,重新获取列表
                this.getStudentList();
            },
            onCancel() {
                console.log('Cancel');
            },
        })
    }

    //批量删除
    deleteLot = () => {
        console.log(this.state.selectedRows);
        Modal.confirm({
            title: '确定删除该学生吗？',
            okText:"确定",
            cancelText:"取消",
            onOk:() => {
                console.log('OK');
                //执行批量删除请求,重新获取列表
                this.getStudentList();
            },
            onCancel() {
                console.log('Cancel');
            },
        })
    }

    //增加学生
    handleAddStudent = () => {
        this.props.addStudentAction();
    }

    //翻页
    handleTableChange = (pagination) => {
        this.setState(
            () => {
                return {
                    pagination: {
                        current: pagination.current, // 当前页数，
                        pageSize: pagination.pageSize, // 每页条数
                        total: pagination.total, // 数据总条数
                    }
                }
            },
            () => {
                this.getStudentList();
            }
        )
    }

    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                this.setState({selectedRows})
            }
        };
        return (
            <React.Fragment>
                <Row gutter={16} style={{marginBottom:10}}>
                    <Col span ={5}>
                        <Select style={{width:"100%"}} value={this.state.currentCollege} onChange={(value)=>{this.changeSelect(value,"college")}}>
                            {
                                this.state.collegeList.map((item) => <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>)
                            }  
                        </Select>
                    </Col>
                    <Col span ={5}>
                        <Select style={{width:"100%"}} value={this.state.currentMajor} onChange={(value)=>{this.changeSelect(value,"major")}}>
                            {
                                this.state.majorList.map((item) => <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>)
                            }  
                        </Select>
                    </Col>
                    <Col span ={5}>
                        <Select style={{width:"100%"}} value={this.state.currentClass} onChange={(value)=>{this.changeSelect(value,"class")}}>
                            {
                                this.state.classList.map((item) => <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>)
                            }  
                        </Select>
                    </Col>
                    <Col span ={7}>
                        <Input placeholder="请输入学生姓名或学号" onChange={(e)=>{this.setState({searchValue:e.target.value})}}/>
                    </Col>
                    <Col span ={2}>
                        <Button type="primary" onClick={this.handleSearch}>搜索</Button>
                    </Col>
                </Row>
                <Row style={{marginBottom:10}}>
                    <Col span = {24}>
                        <Button type="primary" onClick={this.deleteLot} style={{marginRight:10}}>批量删除</Button>
                        <Button type="primary" onClick={this.handleAddStudent}>增加学生</Button>
                    </Col>
                </Row>
                <Table
                    columns={this.state.columns}
                    dataSource={this.state.dataSource}
                    size='middle'
                    bordered={true}
                    pagination={this.state.pagination}
                    onChange={this.handleTableChange.bind(this)}
                    rowSelection={rowSelection}
                />
            </React.Fragment>
        )
    }
}

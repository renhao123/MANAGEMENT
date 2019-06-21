import React, { Component } from 'react';
import { Table } from 'antd';

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource:[
                // {rewardName:"包含奖贷勤助免信息",company:"机械科学与工程学院",type:"国家级",level:2,time:"2018/02/05"}
            ],
            pageInfo:{
                pageSize:5,
                current:1,
                total:15,
                showQuickJumper: false // 不显示页码快速跳转
            },
            filterCondition:{
                startYear:"",
                endYear:""
            },
            columns:[
                {
                    title:"序号",
                    dataIndex:"sortIndex",
                    width:50,
                    align:"center"
                },
                {
                    title:"荣誉名称",
                    dataIndex:"rewardName",
                    align:"center"
                },
                {
                    title:"类型",
                    dataIndex:"type",
                    align:"center"
                },
                {
                    title:"级别",
                    dataIndex:"level",
                    width:50,
                    align:"center"
                },
                {
                    title:"单位",
                    dataIndex:"company",
                    align:"center"
                },
                {
                    title:"时间",
                    dataIndex:"time",
                    align:"center"
                }
            ]
        }
    }

    componentDidMount(){
        //发起请求获取列表数据
        this.getTableData();
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
                    {rewardName:"包含奖贷勤助免信息",company:"机械科学与工程学院",type:"国家级",level:2,time:"2018/02/05",sortIndex:"1"},
                    {rewardName:"包含奖贷勤助免信息",company:"机械科学与工程学院",type:"国家级",level:2,time:"2018/02/05",sortIndex:"2"},
                    {rewardName:"包含奖贷勤助免信息",company:"机械科学与工程学院",type:"国家级",level:2,time:"2018/02/05",sortIndex:"3"},
                    {rewardName:"包含奖贷勤助免信息",company:"机械科学与工程学院",type:"国家级",level:2,time:"2018/02/05",sortIndex:"4"},
                    {rewardName:"包含奖贷勤助免信息",company:"机械科学与工程学院",type:"国家级",level:2,time:"2018/02/05",sortIndex:"5"},
                ],
                total:15,
                pageNum:1,
                pageSize:5,
                showQuickJumper: false // 不显示页码快速跳转
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
                    showQuickJumper: false // 显示页码快速跳转
                },
            })
        }
    }

    //切换分页
    changePaginnation = (pagination) => {
        this.setState({
            pageInfo: {
                current: pagination.current, // 当前页数，
                pageSize: pagination.pageSize, // 每页条数
                total: pagination.total, // 数据总条数
                showQuickJumper: false // 显示页码快速跳转
            }
        },() => {    
            this.getTableData();
        })  
    }
    render() {
        return (
            <Table
                rowKey="sortIndex"
                dataSource={this.state.dataSource}
                columns={this.state.columns}
                onChange={this.changePage}
                pagination={this.state.pageInfo}
                size="small"
            >
            </Table>
        )
    }
}

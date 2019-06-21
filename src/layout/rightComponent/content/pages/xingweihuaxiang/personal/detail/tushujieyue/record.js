import React, { Component } from 'react'
import { Card, Table, DatePicker, Select, Button} from 'antd'

export default class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns:[
                {
                    title: '序号',
                    dataIndex: 'sortIndex',
                    width: 70,
                },{
                    title: '书籍名称',
                    dataIndex: 'bookName',
                    render:text => (<span title={text}>{text}</span>)
                },{
                    title: '书籍类型',
                    dataIndex: 'bookType',
                    render:text => (<span title={text}>{text}</span>)
                },{
                    title: '索书号',
                    dataIndex: 'bookIndex',
                    render:text => (<span title={text}>{text}</span>)
                },{
                    title: '借阅地点',
                    dataIndex: 'place',
                    render:text => (<span title={text}>{text}</span>)
                },{
                    title:"借阅时间",
                    dataIndex:"borrowTime",
                    render:text => (<span title={text}>{text}</span>)
                }, {
                    title: '还书时间',
                    dataIndex: 'returnTime',
                    render:text => (<span title={text}>{text}</span>)
                }, {
                    title: '状态',
                    dataIndex: 'status',
                    render:text=>{
                        if(text === 0){
                            return <span style={{color:"green"}}>已还</span>
                        }else if(text === 1){
                            return <span style={{color:"red"}}>逾期未还</span>
                        }else{
                            return <span style={{color:"red"}}>未还</span>
                        }
                    }
                }
            ],
            dataSource:[
                // {sortIndex:"1",bookName:"区块链技术",bookType:"计算机类",bookIndex:"xq001",place:"校图书馆",borrowTime:"2018-09-12",returnTime:"2018-12-12",status:0},
            ],
            pagination: {
                current: 1, // 当前页数，
                pageSize: 10, // 每页条数
                total: 123, // 数据总条数
                showTotal: (total) => `共${total}条数据`, //显示数据总条数
                showQuickJumper: true // 显示页码快速跳转
            },
            rangeTime:["2019-06-06", "2019-07-12"],
            currentType:0,
            bookTypes:[
                {label:"全部书籍类型",value:0},
                {label:"计算机类",value:1},
                {label:"心理学类",value:2}
            ],
            currentStatus:5,
            statusList:[
                {label:"全部状态",value:5},
                {label:"逾期未还",value:1},
                {label:"未还",value:2},
                {label:"已还",value:0}
            ]
        }
    }

    //在借图书列表
    getBookRecord() {
        let res = {
            success:true,
            obj:{
                data:[
                    {sortIndex:"1",bookName:"区块链技术",bookType:"计算机类",bookIndex:"xq001",place:"校图书馆",borrowTime:"2018-09-12",returnTime:"2018-12-12",status:0},
                    {sortIndex:"2",bookName:"区块链技术",bookType:"计算机类",bookIndex:"xq001",place:"校图书馆",borrowTime:"2018-09-12",returnTime:"2018-12-12",status:1},
                    {sortIndex:"3",bookName:"区块链技术",bookType:"计算机类",bookIndex:"xq001",place:"校图书馆",borrowTime:"2018-09-12",returnTime:"2018-12-12",status:2},
                    {sortIndex:"4",bookName:"区块链技术",bookType:"计算机类",bookIndex:"xq001",place:"校图书馆",borrowTime:"2018-09-12",returnTime:"2018-12-12",status:1},
                    {sortIndex:"5",bookName:"区块链技术",bookType:"计算机类",bookIndex:"xq001",place:"校图书馆",borrowTime:"2018-09-12",returnTime:"2018-12-12",status:0},
                    {sortIndex:"6",bookName:"区块链技术",bookType:"计算机类",bookIndex:"xq001",place:"校图书馆",borrowTime:"2018-09-12",returnTime:"2018-12-12",status:2},
                    {sortIndex:"7",bookName:"区块链技术",bookType:"计算机类",bookIndex:"xq001",place:"校图书馆",borrowTime:"2018-09-12",returnTime:"2018-12-12",status:0},
                    {sortIndex:"8",bookName:"区块链技术",bookType:"计算机类",bookIndex:"xq001",place:"校图书馆",borrowTime:"2018-09-12",returnTime:"2018-12-12",status:1},
                    {sortIndex:"9",bookName:"区块链技术",bookType:"计算机类",bookIndex:"xq001",place:"校图书馆",borrowTime:"2018-09-12",returnTime:"2018-12-12",status:2},
                    {sortIndex:"10",bookName:"区块链技术",bookType:"计算机类",bookIndex:"xq001",place:"校图书馆",borrowTime:"2018-09-12",returnTime:"2018-12-12",status:0},
                ],
                pageNum:2,
                pageSize:10,
                total:152
            }
        }
        this.setState({
            dataSource:res.obj.data,
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
                this.getBookRecord();
            }
        )
    }

    componentDidMount() {
        this.getBookRecord();
    }

    changeRangeTime = (date, dateString) => {
        this.setState({rangeTime:dateString})
    }

    changeSelect = (value,type) => {
        if(type === 1){
            this.setState({currentType:value})
        }else if(type === 2){
            this.setState({currentStatus:value})
        }
    }

    submit = () => {
        console.log(this.state)
        this.getBookRecord();
    }

    render() {
        return (
            <Card
                title={<div className="common-title">在借图书列表</div>}
                style={{ boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius: 4 }}
                bordered={false}
                headStyle={{ border:'none'}}
                bodyStyle={{paddingTop:0}}
            >
                <div style={{marginBottom:15}}>
                    时间：<DatePicker.RangePicker  onChange={this.changeRangeTime} style={{marginRight:10}}/>
                    <Select value={this.state.currentType} onChange={(value)=>{this.changeSelect(value,1)}} style={{marginRight:10,width:160}}>
                        {this.state.bookTypes.map(item=><Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>)}
                    </Select>
                    <Select value={this.state.currentStatus} onChange={(value)=>{this.changeSelect(value,2)}} style={{marginRight:10,width:160}}>
                        {this.state.statusList.map(item=><Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>)}
                    </Select>
                    <Button onClick={this.submit} icon="search" type="primary">搜索</Button>
                </div>
                 <Table
                    rowKey="sortIndex"
                    columns={this.state.columns}
                    dataSource={this.state.dataSource}
                    size='middle'
                    bordered={true}
                    pagination={this.state.pagination}
                    onChange={this.handleTableChange.bind(this)}
                />
            </Card>
        )
    }
}
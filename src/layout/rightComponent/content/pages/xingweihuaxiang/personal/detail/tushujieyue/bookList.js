import React, { Component } from 'react'
import { Card, Table} from 'antd'

export default class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns:[
                {
                    title: '序号',
                    dataIndex: 'sortIndex',
                    width: '10%',
                },{
                    title: '书籍名称',
                    dataIndex: 'bookName',
                    render:text => (<span title={text}>{text}</span>)
                },{
                    title:"作者",
                    dataIndex:"author",
                    render:text => (<span title={text}>{text}</span>)
                }, {
                    title: '出版社',
                    dataIndex: 'publishing',
                    render:text => (<span title={text}>{text}</span>)
                }, {
                    title: '借书时间',
                    dataIndex: 'time',
                }
            ],
            dataSource:[
                // {sortIndex: '1', bookName: '大宋帝国', writer: '张三', publishing: '华中科技大学出版社', time: '2018-09-12'},
            ],
            pagination: {
                current: 1, // 当前页数，
                pageSize: 5, // 每页条数
                total: 0, // 数据总条数
                showTotal: (total) => `共${total}条数据`, //显示数据总条数
                showQuickJumper: true // 显示页码快速跳转
            }
        }
    }

    //在借图书列表
    getBookOnlineBorrow() {
        let res = {
            success:true,
            obj:{
                data:[
                    {sortIndex: '1', bookName: '大宋帝国', writer: '张三', publishing: '华中科技大学出版社', time: '2018-09-12'},
                    {sortIndex: '2', bookName: '大宋帝国', writer: '张三', publishing: '华中科技大学出版社', time: '2018-09-12'},
                    {sortIndex: '3', bookName: '大宋帝国', writer: '张三', publishing: '华中科技大学出版社', time: '2018-09-12'},
                    {sortIndex: '4', bookName: '大宋帝国', writer: '张三', publishing: '华中科技大学出版社', time: '2018-09-12'},
                    {sortIndex: '5', bookName: '大宋帝国', writer: '张三', publishing: '华中科技大学出版社', time: '2018-09-12'},
                ],
                pageNum:2,
                pageSize:5,
                total:15
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
                this.getBookOnlineBorrow();
            }
        )
    }

    componentDidMount() {
        this.getBookOnlineBorrow();
    }

    render() {
        return (
            <Card
                height={440}
                title={<div className="common-title">在借图书列表</div>}
                style={{ boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius: 4 }}
                bordered={false}
                headStyle={{ border:'none'}}
                bodyStyle={{height:330,paddingTop:0}}
            >
                <div>
                    <Table
                        rowKey="sortIndex"
                        height={280}
                        columns={this.state.columns}
                        dataSource={this.state.dataSource}
                        size='middle'
                        bordered={true}
                        pagination={this.state.pagination}
                        onChange={this.handleTableChange.bind(this)}
                    />
                </div>
            </Card>
        )
    }
}
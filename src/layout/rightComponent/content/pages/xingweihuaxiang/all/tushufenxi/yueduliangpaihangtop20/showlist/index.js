import React from 'react'
import { Table, Progress } from 'antd';

export default class Index extends React.Component {
    state = {
        columns: [
            {
                title: '排名',
                dataIndex: 'sortIndex',
                width: '8%'
            },
            {
                title: '借书证号',
                dataIndex: 'cardId',
                width: '15%',
            },
            {
                title: '姓名',
                dataIndex: 'borrower',
                width: '10%'
            },
            {
                title: '单位',
                dataIndex: 'department',
                width: '25%',
                render: (text) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '外借数量（本）',
                dataIndex: 'borrowTimes',
                width: '42%',
                render: (text, record, index) => {
                    return (
                        <div key={index}>
                            <Progress percent={Math.round((record.borrowTimes / 120) * 100)} showInfo={false} style={{width: "70%", float: "left"}}/>
                            <span style={{float: "right",marginRight:"5%",lineHeight:"30px"}} >
                                {record.borrowTimes}
                            </span>
                        </div>
                    )
                }
            }
        ],
        pagination: {
            current: 1, // 当前页数，
            pageSize: 10, // 每页条数
            total: 0, // 数据总条数
            showTotal: (total) => `共${total}条数据`, //显示数据总条数
            showQuickJumper: true // 显示页码快速跳转
        },
        averageReading: 80,
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
                
            }
        )
    };

    render() {
        return (
            <React.Fragment>
                <Table
                    ref='table'
                    columns={this.state.columns}
                    dataSource={this.props.data}
                    pagination={this.state.pagination}
                    onChange={this.handleTableChange}
                    bordered={true}
                    size="middle"
                    footer={
                        (currentPageData) => {
                            return (
                                <div>
                                    <span>平均阅读量</span>
                                    <div style={{width: "42%", float: "right", paddingLeft: "15px"}}>
                                        <Progress
                                            percent={Math.round(((this.state.averageReading - 0) / 120) * 100)}
                                            showInfo={false} style={{width: "70%", float: "left"}}/>
                                        <span style={{float: "right"}}>{this.state.averageReading}</span>
                                    </div>
                                </div>
                            )
                        }
                    }
                />
            </React.Fragment>
        )
    }
}
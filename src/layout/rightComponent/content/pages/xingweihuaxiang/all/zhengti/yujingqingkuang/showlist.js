import React from 'react'
import {Table} from 'antd';

export default class Index extends React.Component {
    state = {
        columns: [
            {
                title: '排名',
                dataIndex: 'sortIndex',
                width: '8%',
            },
            {
                title: '图书名称',
                dataIndex: 'bookName',
                render: (text) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '索书号',
                dataIndex: 'bookIndex',
                width: "20%",
                render: (text) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '出版社',
                dataIndex: 'public',
                width: "20%",
                render: (text) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '借阅次数',
                dataIndex: 'borrowTimes',
                width: "10%",
                render: (text,record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            }
        ]
    }
    render() {
                
        return (
            <React.Fragment>
                <Table
                    ref='table'
                    columns={this.state.columns}
                    dataSource={this.props.data}
                    pagination={false}
                    bordered={true}
                    size="middle"
                    style={{height: this.props.height}}
                />
            </React.Fragment>
        )
    }
}
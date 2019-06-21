import React, {Component} from 'react';
import {Table, DatePicker, Button} from 'antd'
const { RangePicker } = DatePicker;

export default class ShowList extends Component {
    state={
        columns: [{
            title: '序号',
            dataIndex: 'sortIndex',
            width: '10%',
            align: 'center'
        }, {
            title: '上网时间',
            dataIndex: 'time',
            align: 'center'
        }, {
            title: '在线时长',
            dataIndex: 'onLine',
            align: 'center'
        }, {
            title: '终端设备类型',
            dataIndex: 'type',
            align: 'center'
        }],
        pagination: {
            current: 1, // 当前页数，
            pageSize: 10, // 每页条数
            total: 0, // 数据总条数
            showTotal: (total) => `共${total}条数据`, //显示数据总条数
            showQuickJumper: true // 显示页码快速跳转
        },
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
                // this.getByOneself()
            }
        )
    }

    onChange = (date, dateString) => {
        console.log(date, dateString);
    }

    render(){
        return (
            <React.Fragment>
                <div style={{margin: '20px 0'}}>
                    时间：
                    <RangePicker onChange={this.onChange} style={{marginRight:10}}/>
                    <Button icon="search" type="primary">搜索</Button>
                </div>
                <Table
                    dataSource={this.props.data}
                    columns={this.state.columns}
                    size='middle'
                    pagination={this.state.pagination}
                    bordered={true}
                    onChange={this.handleTableChange}
                />
            </React.Fragment>
        )
    }
}
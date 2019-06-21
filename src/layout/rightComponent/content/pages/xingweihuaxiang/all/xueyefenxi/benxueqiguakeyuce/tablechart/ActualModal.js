import React, {Component} from 'react';
import { Modal, Table } from 'antd';


export default class ActualModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataDetail : [
                {
                    key: '1',
                    sortIndex: '1',
                    name: '计算机',
                    study: 48
                }
            ],
            visible: false,
            pagination: {
                current: 1, // 当前页数，
                pageSize: 5, // 每页条数
                total: 0, // 数据总条数
                showTotal: (total) => `共${total}条数据`, //显示数据总条数
                showQuickJumper: true // 显示页码快速跳转
            },
        }
    }


    // handleOk () {
    //
    // }

    render () {

        const columnsDetail = [{
            title: '序号',
            dataIndex: 'sortIndex',
            width: "12%"
        }, {
            title: '课程名称',
            dataIndex: 'name',
        },{
            title: '学习成绩',
            dataIndex: 'study',
        }]

        return (
            <Modal
                title="上学期实际挂科科目"
                visible={this.props.visible}
                onOk={this.handleOk}
                onCancel={this.props.onCancel}
                footer={null}
            >
                <Table
                    dataSource={this.props.dataDetail}
                    columns={columnsDetail}
                    bordered={true}
                    size="middle"
                    pagination={this.props.pagination}
                />
            </Modal>
        )
    }

}
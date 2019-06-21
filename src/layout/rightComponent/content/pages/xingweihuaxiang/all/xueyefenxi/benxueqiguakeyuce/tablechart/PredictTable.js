import React, {Component} from 'react';
import {Table, Card} from 'antd';
import ActualModal from './ActualModal';
import PredictModal from "./PredictModal";


export default class PredictTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            dataSource : [
                {
                    key: '1',
                    sortIndex: '1',
                    name: '张三',
                    actual: 0,
                    predict: 0
                }
            ],
            pagination: {
                current: 1, // 当前页数，
                pageSize: 10, // 每页条数
                total: 0, // 数据总条数
                showTotal: (total) => `共${total}条数据`, //显示数据总条数
                showQuickJumper: true // 显示页码快速跳转
            },
            actualVisible: false,
            predictVisible: false,
            studentNo:null,
            // 上学期
            dataDetail:[],
            pagination2:{},
            // 本学期
            dataDetail2:[],
            pagination3:{},
        }
    }

    handleTableChange = (pagination) => {
        this.setState(
            () => {
                return {
                    pagination: {
                        current: pagination.current, // 当前页数，
                        pageSize:pagination.pageSize, // 每页条数
                        total: pagination.total, // 数据总条数
                        showTotal: (total) => `共${total}条数据`,
                        showQuickJumper: true // 显示页码快速跳转
                    }
                }
            }
        )
    }

    // 上学期实际挂科数
    goToActual = (record) => {
        this.setState({
            predictVisible: true,
        })
    }

    // 上学期实际挂科数
    handleOkActual = (e) => {
        // console.log(e);
        this.setState({
            actualVisible: false,
        });
    }

    // 上学期实际挂科数
    handleCancelActual = (e) => {
        // console.log(e);
        this.setState({
            actualVisible: false,
        });
    }

    // 本学期预测挂科数
    goToPredict = (record) => {
        this.setState({
            actualVisible:true,
        })
    }

    // 本学期预测挂科数
    handleOkPredict = (e) => {
        // console.log(e);
        this.setState({
            predictVisible: false,
        });
    }

    // 本学期预测挂科数
    handleCancelPredict = (e) => {
        // console.log(e);
        this.setState({
            predictVisible: false,
        });
    }

    render () {

        const columns = [{
            title: '序号',
            dataIndex: 'sortIndex',
            width: "12%"
        }, {
            title: '姓名',
            dataIndex: 'name',
        }, {
            title: '上学期实际挂科数',
            dataIndex: 'actual',
            render: (text, record) => {
                return (
                    <span style={{ cursor: "pointer", color: "#22CC91", textDecoration: "underline"}} onClick={() => { this.goToActual(record) }}>{text}</span>
                )
            }
        }, {
            title: '本学期预测挂科数',
            dataIndex: 'predict',
            render: (text, record) => {
                return (
                    <span style={{ cursor: "pointer", color: "#22CC91", textDecoration: "underline"}} onClick={() => { this.goToPredict(record) }}>{text}</span>
                )
            }
        }];

        return (
            <Card
                title={<div style={{ fontSize: 16, fontWeight: 700 }}>{this.props.item}</div>}
                bodyStyle={{paddingTop:0}}
                headStyle={{paddingBottom:0, border: 'none'}}
                style={{boxShadow:"none"}}
                bordered={false}
            >
                <React.Fragment>
                    <Table
                        dataSource={this.state.dataSource}
                        columns={columns}
                        bordered={true}
                        size="middle"
                        pagination={this.state.pagination}
                        onChange={this.handleTableChange}
                    />

                    <Table ref='table' columns={columns} dataSource={this.state.dataSource}  pagination={false} style={{display:'none'}} />
                </React.Fragment>

                {/*上学期实际挂科数*/}
                <ActualModal
                    dataDetail={this.state.dataDetail}
                    pagination={this.state.pagination2}
                    visible={this.state.actualVisible}
                    onOk={this.handleOkActual}
                    onCancel={this.handleCancelActual}
                />

                {/*本学期预测挂科数*/}
                <PredictModal
                    dataDetail={this.state.dataDetail2}
                    pagination={this.state.pagination3}
                    visible={this.state.predictVisible}
                    onOk={this.handleOkPredict}
                    onCancel={this.handleCancelPredict}
                />
            </Card>
        )
    }

}
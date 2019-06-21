import React, { Component } from 'react'
import {Card, Table} from 'antd';
import {withRouter} from 'react-router-dom';
import Filter from './filter';
import CareModal from './careModal';
import CancelCareModal from './cancelCareModal';

class Index extends Component {
    state = {
        dataSource: [
            {
                key: "1",
                sortIndex: "1",
                studentName: "龙祥",
                studentId:"2122731",
                studentNo: "U20136789",
                collegeName: "机电工程学院",
                majorName: "模具设计与制造",
                className: "模具1301",
                poorLevel:"一级困难",
                zizhuzonge:'3000',
                abnormityIndex:'一级助学金',
                fundingTime:"2018-07-01",
                hasCare:0,
                reason:'确认家庭经济困难学生'
            }
        ],
        columns: [
            {title: '序号', dataIndex: 'sortIndex', width: "4%"},
            {
                title: '姓名', dataIndex: 'studentName', width:"6%", render: (text, record) => {
                    return (
                        <span onClick={() => {
                            this.gotoDetail(record)
                        }} style={{
                            display: 'block',
                            width: '100%',
                            height: '100%',
                            cursor: 'pointer',
                            color: '#1890ff'
                        }}>{text}</span>
                    )
                }
            },
            {
                title: '学号', dataIndex: 'studentId', width:"7%", render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '一卡通号', dataIndex: 'studentNo', width:"7%", render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '学院', dataIndex: 'collegeName', render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '专业', dataIndex: 'majorName', render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '班级', dataIndex: 'className', width:"6%", render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '认定等级', dataIndex: 'poorLevel', width:"6%", render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '学年资助总额', dataIndex: 'zizhuzonge', width:"5%", render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '经济困难指数', dataIndex: 'abnormityIndex', width:"5%", render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '最近发放时间', dataIndex: 'fundingTime', width:"8%", render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '处理状态', dataIndex: 'hasCare', width: '6%', align: 'center',
                render: (text, record) => {
                    return (
                        text === 0 ?
                            <span onClick={() => {
                                this.handleCareMocalOpen(record)
                            }} style={{cursor: "pointer", color: "#1890ff"}}>
						待处理
					</span> : <span onClick={() => {
                                this.handlecancelcareModalOpen(record)
                            }}
                                    style={{cursor: "pointer", color: "#f04864"}}>
						已处理
					</span>

                    )
                }
            },
            {
                title: '处理结果', dataIndex: 'reason', width:"8%", render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
        ],
        pagination: {
            current: 1, // 当前页数，
            pageSize: 10, // 每页条数
            total: 0, // 数据总条数
            showTotal: (total) => `共${total}条数据`, //显示数据总条数
            showQuickJumper: true // 显示页码快速跳转
        },
        careModalVisible: false,
        cancelCareModalVisible: false,
    }

    gotoDetail = (record) => {
        this.props.history.push('/main/jingzhunzizhu/kunnanxuesheng/detail');
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
            }
        )
    }

    getFilterValueAndName = (obj) => {
        this.setState(
            {
                filterValue: obj
            },
            () => {
                // this.getData()
            }
        )
    }

    handleCareMocalOpen = (obj) => {
        this.setState({
            careModalVisible: true,
        })
    };

    handlecancelcareModalOpen = (obj) => {
        this.setState({
            cancelCareModalVisible: true,
        })
    };

    hidecareModal = (obj) => {
        this.setState({
            careModalVisible: false,
        })

    };
    hidecancelcareModal = () => {
        this.setState({
            cancelCareModalVisible: false,
        })
    };

    render() {
        let {dataSource, pagination, columns} = this.state;
        return (
            <React.Fragment>
                <Filter getFilterValueAndName={this.getFilterValueAndName}/>
                <div style={{padding: 20}}>
                    <Card
                        style={{boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                        headStyle={{ border: "none" }}
                        bordered={false}
                        title='家庭经济困难学生查询'
                        bodyStyle={{paddingTop:0}}
                    >
                        <Table
                            dataSource={dataSource}
                            pagination={pagination}
                            columns={columns}
                            bordered={true}
                            size="middle"
                            onChange={this.handleTableChange.bind(this)}
                        />
                    </Card>
                    <CareModal
                        visible={this.state.careModalVisible}
                        handleOk={(obj) => {
                            this.hidecareModal(obj)
                        }}
                        handleCancel={this.hidecareModal}
                    >

                    </CareModal>
                    <CancelCareModal
                        visible={this.state.cancelCareModalVisible}
                        handleOk={(obj) => {
                            this.hidecancelcareModal(obj)
                        }}
                        handleCancel={this.hidecancelcareModal}
                        data={this.state}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Index);

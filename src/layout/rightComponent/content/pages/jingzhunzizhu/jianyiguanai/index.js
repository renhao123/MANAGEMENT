import React from 'react';
import {Card, Table} from 'antd';
import {withRouter} from 'react-router-dom';
import Filter from './Filter';
import CareModal from './careModal';
import CancelCareModal from './cancelCareModal';
// import {setLocal} from '../../../utils';
// import {postAction} from "../../../axios";
// import {hostUrl} from '../../../env'
class Pinkunshengchaxun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [
                // {
                //     key: "1",
                //     "sortIndex": "1",
                //     "studentNo": "U20136789",
                //     "studentName": "龙祥",
                //     "collegeName": "机电工程学院",
                //     "majorName": "模具设计与制造",
                //     "className": "模具1301",
                //     "yearName":"2018级",
                //     "poorLevel":"一级困难",
                //     "funding":3000,
                //     "hasCare":0,
                //     "zhishu": 0,
                //     "result": '',
                //     "comsume": 0
                // }
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
            filterValue: {},
            studentInfo: {},
            hasHandlerData: {}
        }
        this.getData = this.getData.bind(this);
        this.getFilterValueAndName = this.getFilterValueAndName.bind(this);
    }

    getData() {
        // const {filterValue: {curPinkun,curGrade, curCollege, curMajor, curClass, studentNo, curZhuangtai}, pagination: {current, pageSize}} = this.state;

        // postAction(
        //     "/bigdata/studentSupport/studentSupportInfoList",
        //     {
        //         grade: curGrade,
        //         collegeCode: curCollege,
        //         majorCode: curMajor,
        //         classCode: curClass,
        //         difficultyLevel: curPinkun,
        //         dispose: curZhuangtai,
        //         studentNo: studentNo,
        //         pageInfo: {
        //             pageNum: current,
        //             pageSize: pageSize
        //         }
        //     }
        // ).then((res) => {
        //     if (res.obj.list && res.obj.list.length > 0) {
        //         let newData = [];
        //         const pageInfo = res.obj;
        //         pageInfo.list.forEach(
        //             (item, index) => {
        //                 newData.push({
        //                     key: index + 1,
        //                     sortIndex: index + 1,
        //                     studentId: item.studentId,
        //                     studentNo: item.studentNo,
        //                     studentName: item.studentName,
        //                     collegeName: item.collegeName,
        //                     majorName: item.majorName,
        //                     className: item.className,
        //                     yearName: item.grade,
        //                     poorLevel: item.difficultyLevel,
        //                     funding: item.suggestMonthlySubsidize,
        //                     hasCare: Number(item.dispose),
        //                     zhishu: item.povertyIndex,
        //                     result: item.disposeResult,
        //                     comsume: item.monthlyConsume,
        //                     schoolYearSubsidize:item.schoolYearSubsidize
        //                 })
        //             }
        //         )
        //         this.setState({
        //             dataSource: newData,
        //             pagination: {
        //                 current: pageInfo.pageNum, // 当前页数，
        //                 pageSize: pageInfo.pageSize, // 每页条数
        //                 total: pageInfo.total, // 数据总条数
        //                 showTotal: (total) => `共${total}条数据`, //显示数据总条数
        //                 showQuickJumper: true // 显示页码快速跳转
        //             }
        //         })
        //     } else {
        //         this.setState({
        //             dataSource: [],
        //             pagination: {
        //                 current: 1, // 当前页数，
        //                 pageSize: 10, // 每页条数
        //                 total: 0, // 数据总条数
        //                 showTotal: (total) => `共${total}条数据`, //显示数据总条数
        //                 showQuickJumper: true // 显示页码快速跳转
        //             }
        //         })
        //     }
        // })
        let res={
            "success": true,
            "msg": "成功",
            "obj": {
                "pageNum": 1,
                "pageSize": 10,
                "size": 10,
                "startRow": 1,
                "endRow": 10,
                "total": 3279,
                "pages": 328,
                "list": [{
                    "studentId": "21817109",
                    "studentNo": "213173802",
                    "studentName": "马雯娥",
                    "grade": "2017",
                    "collegeName": "交通学院",
                    "majorName": "城市地下空间工程",
                    "className": "218171",
                    "monthlyConsume": "508.70",
                    "povertyIndex": "0.91",
                    "dispose": "1",
                    "disposeStatus": "已处理",
                    "disposeResult": "确定经济困难",
                    "schoolYearSubsidize": ""
                }, {
                    "studentId": "14515118",
                    "studentNo": "213153939",
                    "studentName": "李慧楠",
                    "grade": "2015",
                    "collegeName": "经济管理学院",
                    "majorName": "金融学",
                    "className": "145151",
                    "monthlyConsume": "718.76",
                    "povertyIndex": "0.89",
                    "dispose": "1",
                    "disposeStatus": "已处理",
                    "disposeResult": "确定经济困难",
                    "schoolYearSubsidize": "100.00"
                }, {
                    "studentId": "02016131",
                    "studentNo": "213161824",
                    "studentName": "宋浩艺",
                    "grade": "2016",
                    "collegeName": "机械工程学院",
                    "majorName": "机械工程",
                    "className": "020161",
                    "monthlyConsume": "647.68",
                    "povertyIndex": "0.88",
                    "dispose": "1",
                    "disposeStatus": "已处理",
                    "disposeResult": "非经济困难",
                    "schoolYearSubsidize": ""
                }, {
                    "studentId": "02015327",
                    "studentNo": "213153843",
                    "studentName": "吴重光",
                    "grade": "2015",
                    "collegeName": "机械工程学院",
                    "majorName": "机械工程",
                    "className": "020153",
                    "monthlyConsume": "705.49",
                    "povertyIndex": "0.87",
                    "dispose": "1",
                    "disposeStatus": "已处理",
                    "disposeResult": "确定经济困难",
                    "schoolYearSubsidize": ""
                }, {
                    "studentId": "05116124",
                    "studentNo": "213162873",
                    "studentName": "常浩然",
                    "grade": "2016",
                    "collegeName": "土木工程学院",
                    "majorName": "土木工程",
                    "className": "051161",
                    "monthlyConsume": "580.63",
                    "povertyIndex": "0.87",
                    "dispose": "1",
                    "disposeStatus": "已处理",
                    "disposeResult": "非经济困难",
                    "schoolYearSubsidize": "1632.00"
                }, {
                    "studentId": "21315111",
                    "studentNo": "213153652",
                    "studentName": "杨国渊",
                    "grade": "2015",
                    "collegeName": "交通学院",
                    "majorName": "测绘工程",
                    "className": "213151",
                    "monthlyConsume": "669.57",
                    "povertyIndex": "0.85",
                    "dispose": "1",
                    "disposeStatus": "已处理",
                    "disposeResult": "非经济困难",
                    "schoolYearSubsidize": ""
                }, {
                    "studentId": "21015209",
                    "studentNo": "213150658",
                    "studentName": "肖诗舟",
                    "grade": "2015",
                    "collegeName": "交通学院",
                    "majorName": "道路桥梁与渡河工程(茅以升)",
                    "className": "210152",
                    "monthlyConsume": "470.52",
                    "povertyIndex": "0.84",
                    "dispose": "1",
                    "disposeStatus": "已处理",
                    "disposeResult": "非经济困难",
                    "schoolYearSubsidize": ""
                }, {
                    "studentId": "12015209",
                    "studentNo": "213150660",
                    "studentName": "赵翎亦",
                    "grade": "2015",
                    "collegeName": "材料科学与工程学院",
                    "majorName": "材料科学与工程",
                    "className": "120152",
                    "monthlyConsume": "548.37",
                    "povertyIndex": "0.84",
                    "dispose": "1",
                    "disposeStatus": "已处理",
                    "disposeResult": "确定经济困难",
                    "schoolYearSubsidize": "0.00"
                }, {
                    "studentId": "19115110",
                    "studentNo": "213153036",
                    "studentName": "李凯",
                    "grade": "2015",
                    "collegeName": "化学化工学院",
                    "majorName": "化学工程与工艺",
                    "className": "191151",
                    "monthlyConsume": "671.22",
                    "povertyIndex": "0.84",
                    "dispose": "1",
                    "disposeStatus": "已处理",
                    "disposeResult": "确定经济困难",
                    "schoolYearSubsidize": "100.00"
                }, {
                    "studentId": "42116208",
                    "studentNo": "213163906",
                    "studentName": "索朗央吉",
                    "grade": "2016",
                    "collegeName": "公共卫生学院",
                    "majorName": "预防医学",
                    "className": "421162",
                    "monthlyConsume": "418.08",
                    "povertyIndex": "0.84",
                    "dispose": "1",
                    "disposeStatus": "已处理",
                    "disposeResult": "非经济困难",
                    "schoolYearSubsidize": "176.00"
                }],
                "prePage": 0,
                "nextPage": 2,
                "isFirstPage": true,
                "isLastPage": false,
                "hasPreviousPage": false,
                "hasNextPage": true,
                "navigatePages": 8,
                "navigatepageNums": [1, 2, 3, 4, 5, 6, 7, 8],
                "navigateFirstPage": 1,
                "navigateLastPage": 8,
                "lastPage": 8,
                "firstPage": 1
            },
            "errorCode": null
        }
        let newData = [];
        const pageInfo = res.obj;
        pageInfo.list.forEach(
            (item, index) => {
                newData.push({
                    key: index + 1,
                    sortIndex: index + 1,
                    studentId: item.studentId,
                    studentNo: item.studentNo,
                    studentName: item.studentName,
                    collegeName: item.collegeName,
                    majorName: item.majorName,
                    className: item.className,
                    yearName: item.grade,
                    poorLevel: item.difficultyLevel,
                    funding: item.suggestMonthlySubsidize,
                    hasCare: Number(item.dispose),
                    zhishu: item.povertyIndex,
                    result: item.disposeResult,
                    comsume: item.monthlyConsume,
                    schoolYearSubsidize:item.schoolYearSubsidize
                })
            }
        )
        this.setState({
            dataSource: newData,
            pagination: {
                current: pageInfo.pageNum, // 当前页数，
                pageSize: pageInfo.pageSize, // 每页条数
                total: pageInfo.total, // 数据总条数
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
                this.getData();
            }
        )
    }
    // handleExport=()=>{
    //     let data=this.state.filterValue        
    //     window.location.href=`${hostUrl}/bigdata/studentSupport/exportStudentSupportInfoList?collegeCode=${data.curCollege || ''}&majorCode=${data.curMajor || ''}&grade=${data.curGrade || ''}&classCode=${data.curClass || ''}&dispose=${data.curZhuangtai || ''}&studentNo=${data.studentNo || ''}`
    // }
    getFilterValueAndName(obj) {
        this.setState(
            {
                filterValue: obj
            },
            () => {
                this.getData()
            }
        )
    }

    componentDidMount() {
        this.getData()
    }

    handleCareMocalOpen = (obj) => {
        this.setState({
            careModalVisible: true,
            studentInfo: obj
        })
    };

    //打开已处理的弹窗
    handlecancelcareModalOpen = (value) => {
        // postAction("/bigdata/studentSupport/getSupportDisposeInfo",{
        //     "studentNo": value.studentNo
        // }).then((res) => {
        //     if (res.success){
        //         this.setState({
        //             cancelCareModalVisible: true,
        //             studentInfo: value,
        //             hasHandlerData: res.obj
        //         })
        //     }
        // })
        let res={
            "success": true,
            "msg": "成功",
            "obj": {
                "disposeResult": "1",
                "disposeRemark": ""
            },
            "errorCode": null
        }
        if (res.success){
            this.setState({
                cancelCareModalVisible: true,
                studentInfo: value,
                hasHandlerData: res.obj
            })
        }
    }

    //关闭未处理的弹窗
    hidecareModal = (obj) => {
        // if (obj === undefined) {
        //     this.setState({
        //         careModalVisible: false
        //     })
        //     return;
        // }
        // let {disposeResult, disposeRemark} = obj;
        // let params = {
        //     "studentNo": this.state.studentInfo.studentNo,
        //     "disposeResult": disposeResult,
        //     "disposeRemark": disposeRemark
        // };
        // postAction(
        //     "/bigdata/studentSupport/disposeStudentSupport",
        //     params
        // ).then((res) => {
        //     if (res.success) {
        //         this.setState({
        //             careModalVisible: false
        //         });
        //         this.getData();
        //     }
        // })
        this.setState({
            careModalVisible: false
        });
        this.getData();
    }

    //关闭已处理的弹窗
    hidecancelcareModal = () => {
        this.setState({
            cancelCareModalVisible: false
        })
    };

    handleSubmit = (obj) => {
        console.log(obj)
    }

    gotoDetail = (obj) => { //跳转详情页面
        let data = {
            ...obj,
            backUrl: '/main/jingzhunzizhu/guanaixuesheng'
        }
        // 存储点击的列表信息到localstorage
        localStorage.setItem('jzzz', JSON.stringify(data))
        this.props.history.push('/main/jingzhunzizhu/guanaixuesheng/detail')
    }

    render() {
        const columns = [
            {title: '序号', dataIndex: 'sortIndex', width: '4%'},
            {
                title: '姓名', dataIndex: 'studentName', width: '8%', render: (text, record) => {
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
                title: '学号', dataIndex: 'studentId', width: '8%', render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '一卡通号', dataIndex: 'studentNo', width:"8%", render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '年级', dataIndex: 'yearName', width: '5%', render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '院系', dataIndex: 'collegeName', render: (text, record) => {
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
                title: '班级', dataIndex: 'className', width: '6%', render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '月均消费金额（元）', dataIndex: 'comsume', width: '7%', render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            //2018.12.08，东南大学验收汇报调整
            // {
            //     title: '认定等级', dataIndex: 'poorLevel', width: '7%', render: (text, record) => {
            //         return (
            //             <span title={text}>{text}</span>
            //         )
            //     }
            // },
            {
                title: '经济困难指数', dataIndex: 'zhishu', width: '7%', render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            // {
            //     title: '建议月资助金额（元）', dataIndex: 'funding', width: '7%', render: (text, record) => {
            //         return (
            //             <span title={text}>{text}</span>
            //         )
            //     }
            // },
            {
                title: '学年资助金额（元）', dataIndex: 'schoolYearSubsidize', width: '7%', render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
            {
                title: '处理状态', dataIndex: 'hasCare', width: '6%', align: 'center',
                render: (text, record) => {
                    return (
                        text === 0 ? <span onClick={() => {
                            this.handleCareMocalOpen(record)
                        }} style={{cursor: "pointer", color: "#f04864"}}>
						待处理
					</span> : <span onClick={() => {
                            this.handlecancelcareModalOpen(record)
                        }} style={{color: "rgba(0,0,0,0.65)", cursor: "pointer"}}>
						已处理
					</span>

                    )
                }
            },
            {
                title: '处理结果', dataIndex: 'result', width: '6%', render: (text, record) => {
                    return (
                        <span title={text}>{text}</span>
                    )
                }
            },
        ];
        return (
            <React.Fragment>
                <Filter getFilterValueAndName={this.getFilterValueAndName}/>
                <div style={{padding: 20}}>
                    <Card
                        style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                        title='建议关爱学生查询'
                        headStyle={{border: 'none'}}
                        bodyStyle={{paddingTop:0}}
                        bordered={false}
                    >

                        <Table
                            dataSource={this.state.dataSource}
                            pagination={this.state.pagination}
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
                    />

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

export default withRouter(Pinkunshengchaxun)

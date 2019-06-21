import React, { Component } from 'react';
import { Select, Button, Input, Row, Col } from 'antd';
import {getAction, postAction} from "@/axios";

const curYear = new Date().getFullYear();
const Option = Select.Option;
let yearLists = [];
for (let i = 0; i < 6; i++) {
    yearLists.push({
        name: curYear - i + "年",
        value: curYear - i + ""
    })
}
export default class Filter extends Component {

    state = {
        //学院
        college: '',
        collegeLists: [],

        //专业
        profession: '',
        professionList: [],

        //年级
        curGrade: '',
        yearLists:[],
        curYear: curYear + '',

        //班级
        curClass: '',
        classLists: [],

        //贫困级别
        // curPinkun:'',
        // curPinkunName:'全部贫困级别',
        // pinkunLists:[],

        //处理状态
        curZhuangtai:'',
        zhuangtaiLists:[],

        //学号和姓名
        studentNo: '',
    }

    //获取处理状态list
    getZhuangtaiLists () {
        getAction(
            "/bigdata/subsidizeUtil/getDisposeStatus"
        ).then((res) => {
            if (res.success) {
                this.setState({
                    curZhuangtai:'',
                    zhuangtaiLists: res.obj
                })
            }
        })
    }

    //获取资助类型list
    getZizhiLists () {
        getAction(
            "/bigdata/subsidizeUtil/getSubsidizeType"
        ).then((res) => {
            if (res.success){
                this.setState({
                    curZizhu:'',
                    zizhuLists: res.obj
                })
            }
        })
    }

    //获取贫困级别list
    getPinkunLists() {
        getAction(
            "/bigdata/subsidizeUtil/getPovertyLevel"
        ).then((res) => {
                if (res.success) {
                    this.setState({
                        curPinkun:'',
                        pinkunLists: res.obj
                    })
                }
            }
        )
    }

    // 获取学院list
    getColledgeLists() {
        postAction("/bigdata/school/listCollege").then((res) => {
            if (res.success) {
                this.setState({
                    college: '',
                    collegeLists: res.obj
                })
            }
        })
    }

    // 获取专业list
    getMajorLists() {
        postAction(
            "/bigdata/school/listMajorByCollege",
            {
                collegeCode: this.state.college
            }
        ).then(
            (res) => {
                if (res.success) {
                    this.setState({
                        profession: "",
                        professionList: res.obj
                    })
                }
            }
        )
    }

    // 获取年级list
    getGradeLists() {
        postAction(
            "/bigdata/school/getGradeList",
            {
                year: this.state.curYear,
                collegeCode: this.state.college,
                majorCode: this.state.profession
            }
        ).then(
            (res) => {
                if (res.success) {
                    this.setState({
                        curGrade: "",
                        yearLists: res.obj
                    })
                }
            }
        )
    }

    // 获取班级list
    getClassLists() {
        postAction(
            "/bigdata/school/listClassByMajor",
            {
                year: this.state.curGrade,
                majorCode: this.state.profession
            }
        ).then(
            (res) => {
                if (res.success) {
                    this.setState({
                        curClass: "",
                        classLists: res.obj
                    })
                }
            }
        )
    }

    //筛选条件
    changeFilter = (num, value, option) => {
        if (num === 0) { // 变更自然年
            this.setState(
                {
                    curYear: value,
                    curYearName: option.props.children,
                },
                () => {
                    this.getGradeLists()
                    this.getClassLists()
                }
            )

        } else if (num === 1) { //学院
            this.setState(
                {
                    college: value,
                    curCollegeName: option.props.children,
                },
                () => {
                    this.getMajorLists()
                    this.getGradeLists()
                    this.getClassLists()
                }
            )
        } else if (num === 2) { //专业
            this.setState(
                {
                    profession: value,
                    professionName: option.props.children,
                },
                () => {
                    this.getGradeLists()
                    this.getClassLists()
                }
            )
        } else if (num === 3) { //年级
            this.setState(
                {
                    curGrade: value,
                    curYear: value,
                    curGradeName: option.props.children,
                },
                () => {
                    this.getClassLists()
                }
            )
        } else if (num === 4) { //班级
            this.setState({
                curClass: value,
                curClassName: option.props.children,
            })
        } else if (num === 5) {  //贫困级别
            this.setState({
                curPinkun:value,
                curPinkunName: option.props.children,
            })
        } else if (num === 6) {  //资助
            this.setState({
                curZizhu:value,
                curZizhuName: option.props.children,
            })
        } else if (num === 7) {  //处理
            this.setState({
                curZhuangtai:value,
                curZhuangtaiName: option.props.children,
            })
        }
    }

    studyNum(event) {
        this.setState({ studentNo: event.target.value });
    }

    //点击搜索
    searchMore() {
        const { college, profession, curGrade, curClass, studentNo, curZhuangtai, curZizhu, } = this.state
        let obj = {
            curCollege: college,
            curMajor: profession,
            curGrade: curGrade,
            curClass: curClass,
            // curPinkun: curPinkun,
            curZizhu: curZizhu,
            curZhuangtai: curZhuangtai,
            studentNo: studentNo,
        };
        this.props.getFilterValueAndName(obj);
    }

    //选择性别
    handleChange(value) {
        this.setState({ gender: value })
    }

    componentDidMount() {
        // this.getColledgeLists()
        // this.getMajorLists()
        // this.getGradeLists()
        // this.getClassLists()
        // // this.getPinkunLists()     // 贫困
        // this.getZizhiLists()      // 资助
        // this.getZhuangtaiLists()  // 处理
    }

    render() {
        const {college, collegeLists, profession, professionList, curGrade, yearLists, curClass, classLists, curZhuangtai, zhuangtaiLists, studentNo } = this.state;
        return (
            <div style={{padding: '10px 0', lineHeight: '40px', background: '#EEEEEE'}}>
                <Row>
                    <Col span={2}>
                        <span style={{ marginLeft: "25px" }}>选择条件：</span>
                    </Col>
                    <Col span={22}>

                        <Select
                            value={college}
                            placeholder="请选择学院"
                            style={{ width: 180, marginRight:10 }}
                            onChange={this.changeFilter.bind(this, 1)}
                        >
                            {
                                collegeLists.map((item, index) => (
                                    <Option
                                        key={index}
                                        title={item.collegeName}
                                        value={item.collegeCode}
                                    >
                                        {item.collegeName}
                                    </Option>
                                ))
                            }
                        </Select>

                        <Select
                            value={profession}
                            placeholder="请选择专业"
                            style={{ width: 150, marginRight:10 }}
                            onChange={this.changeFilter.bind(this, 2)}
                        >
                            {
                                professionList.map((item, index) => (
                                    <Option
                                        key={index}
                                        title={item.majorName}
                                        value={item.majorCode}
                                    >
                                        {item.majorName}
                                    </Option>
                                ))
                            }
                        </Select>
                        <Select
                            value={curGrade}
                            onChange={this.changeFilter.bind(this, 3)}
                            style={{width: 150, marginRight:10}}
                        >
                            {
                                yearLists.map((item, index) =>
                                    (
                                        <Option key={index} value={item.name}>{item.value}</Option>
                                    ))
                            }
                        </Select>
                        <Select
                            value={curClass}
                            placeholder="请选择班级"
                            style={{ width: 120, marginRight:10 }}
                            onChange={this.changeFilter.bind(this, 4)}
                        >
                            {
                                classLists.map((item, index) => (
                                    <Option key={index} title={item.className} value={item.classCode}>{item.className}</Option>
                                ))
                            }
                        </Select>
                        
                        {/* <Select
                            value={curPinkun}
                            placeholder="全部贫困级别"
                            style={{ width: 150 }}
                            onChange={this.changeFilter.bind(this, 5)}
                        >
                        {
                        pinkunLists.map((item, index) => (
                        <Option key={index} title={item.name} value={item.code}>{item.name}</Option>
                        ))
                        }
                        </Select> */}

                        <Select
                            value={curZhuangtai}
                            placeholder="处理状态"
                            style={{ width: 150, marginRight:10 }}
                            onChange={this.changeFilter.bind(this, 7)}
                        >
                            {
                                zhuangtaiLists.map((item, index) => (
                                    <Option key={index} title={item.name} value={item.code}>{item.name}</Option>
                                ))
                            }
                        </Select>

                        <Input placeholder="请输入学生姓名/学号" value={studentNo} onChange={this.studyNum.bind(this)} style={{ width: 250 }} />
                        <Button type="primary" icon="search" onClick={() => this.searchMore()}>搜  索 </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
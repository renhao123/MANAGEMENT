import React, { Component, Fragment } from 'react';
import { Select, Button, Input, Row, Col } from 'antd';

const curYear = new Date().getFullYear();
const curMonth = new Date().getMonth()+1;
const Option = Select.Option;
let yearList = [];
for (let i = 0; i < 6; i++) {
    yearList.push({
        name: curYear - i + "年",
        value: curYear - i + ""
    })
}

export default class Filter extends Component {

    state = {
        curYear1: curMonth < 9 ? (curYear-1) + "" : curYear + "",
        curYearName1: curYear + "年",
        yearList:yearList,
        //学院
        college: '全部院系',
        collegeLists: [],

        //专业
        profession: '全部专业',
        professionList: [],

        //年级
        curGrade: '全部年级',
        yearLists:[],
        curYear: curYear + '',

        //班级
        curClass: '全部班级',
        classLists: [],

        //贫困级别
        curPinkun:'全部认定等级',
        curPinkunName:'全部认定等级',
        pinkunLists:[],

        //关注
        curGuanzhu:'全部关注状态',
        guanzhuLists:[],

        //学号和姓名
        studentNo: '',
    }

    //筛选条件
    changeFilter = (num, value, option) => {
        if (num === 0) { // 变更自然年
            this.setState(
                {
                    curYear1: value,
                    curYearName: option.props.children,
                }
            )

        } else if (num === 1) { //学院
            this.setState(
                {
                    college: value,
                    curCollegeName: option.props.children,
                }
            )
        } else if (num === 2) { //专业
            this.setState(
                {
                    profession: value,
                    professionName: option.props.children,
                }
            )
        } else if (num === 3) { //年级
            this.setState(
                {
                    curGrade: value,
                    curYear: value,
                    curGradeName: option.props.children,
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
        } else if (num === 6) {  //关注
            this.setState({
                curGuanzhu:value,
                curGuanzhuName: option.props.children,
            })
        }
    }

    studyNum(event) {
        this.setState({ studentNo: event.target.value });
    }

    //点击搜索
    searchMore() {
        const { college, profession, curGrade, curClass, curPinkun, curGuanzhu, studentNo, } = this.state
        let obj = {
            curYear : this.state.curYear1,
            curCollege: college,
            curMajor: profession,
            curGrade: curGrade,
            curClass: curClass,
            curPinkun: curPinkun,
            curGuanzhu: curGuanzhu,
            studentNo: studentNo,
        };
        this.props.getFilterValueAndName(obj);
    }

    render() {
        const { college, collegeLists, profession, professionList, curGrade, yearLists, curClass, classLists, curPinkun, pinkunLists, curGuanzhu, guanzhuLists, studentNo } = this.state;
        return (
            <Fragment>
                <div style={{padding: '10px 0', lineHeight: '40px', background: '#EEEEEE'}}>

                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={2}>
                                    <span style={{marginLeft: "25px"}}>选择条件：</span>
                                </Col>
                                <Col span={22}>
                                    <div>
                                        <Select
                                            style={{marginRight: "10px"}}
                                            value={this.state.curYear1}
                                            onChange={this.changeFilter.bind(this, 0)}
                                        >
                                            {
                                                this.state.yearList.map((item, index) => <Option key={index} value={item.value}>{item.name}</Option>)
                                            }
                                        </Select>
                                        <Select
                                            value={college}
                                            placeholder="请选择学院"
                                            style={{ width: 150, marginRight: "10px" }}
                                            onChange={this.changeFilter.bind(this, 1)}
                                        >
                                            {
                                                collegeLists.map((item, index) => (
                                                    <Option
                                                        key={index}
                                                        title={item.name}
                                                        value={item.value}
                                                    >
                                                        {item.value}
                                                    </Option>
                                                ))
                                            }
                                        </Select>

                                        <Select
                                            value={profession}
                                            placeholder="请选择专业"
                                            style={{ width: 150, marginRight: "10px" }}
                                            onChange={this.changeFilter.bind(this, 2)}
                                        >
                                            {
                                                professionList.map((item, index) => (
                                                    <Option
                                                        key={index}
                                                        title={item.name}
                                                        value={item.value}
                                                    >
                                                        {item.name}
                                                    </Option>
                                                ))
                                            }
                                        </Select>

                                        <Select
                                            value={curClass}
                                            placeholder="请选择班级"
                                            style={{ width: 120, marginRight: "10px" }}
                                            onChange={this.changeFilter.bind(this, 4)}
                                        >
                                            {
                                                classLists.map((item, index) => (
                                                    <Option key={index} title={item.name} value={item.value}>{item.name}</Option>
                                                ))
                                            }
                                        </Select>

                                        <Select
                                            value={curGrade}
                                            placeholder="请选择年级"
                                            style={{ width: 120, marginRight: "10px" }}
                                            onChange={this.changeFilter.bind(this, 3)}
                                        >
                                            {
                                                yearLists.map((item, index) =>
                                                    (
                                                        <Option key={index} title={item.name} value={item.value}>{item.name}</Option>
                                                    ))
                                            }
                                        </Select>

                                        <Select
                                            value={curPinkun}
                                            placeholder="全部认定等级"
                                            style={{ width: 150, marginRight: "10px" }}
                                            onChange={this.changeFilter.bind(this, 5)}
                                        >
                                            {
                                                pinkunLists.map((item, index) => (
                                                    <Option key={index} title={item.name} value={item.value}>{item.name}</Option>
                                                ))
                                            }
                                        </Select>

                                        <Select
                                            value={curGuanzhu}
                                            placeholder="全部关注状态"
                                            style={{ width: 150, marginRight: "10px" }}
                                            onChange={this.changeFilter.bind(this, 6)}
                                        >
                                            {
                                                guanzhuLists.map((item, index) => (
                                                    <Option key={index} title={item.name} value={item.value}>{item.name}</Option>
                                                ))
                                            }
                                        </Select>

                                        <Input placeholder="请输入学生姓名/学号" value={studentNo} onChange={this.studyNum.bind(this)} style={{ width:200, marginRight: 10 }} />

                                        <Button type="primary" icon="search" onClick={() => this.searchMore()}>搜  索 </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

            </Fragment>
        )
    }
}
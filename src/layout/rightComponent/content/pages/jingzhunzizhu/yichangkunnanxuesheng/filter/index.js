import React, { Component } from 'react';
import { Select, Button, Input, Row, Col } from 'antd';

const curYear = new Date().getFullYear();
const curMonth = new Date().getMonth() + 1;
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
        curYear1: curMonth < 9 ? (curYear - 1) + "" : curYear + "",
        curYearName1: curYear + "年",
        yearList: yearList,
        //学院
        college: '',
        curCollegeName: '',
        collegeLists: [
            { name: "全部院系", value: '' }
        ],

        //专业
        profession: '',
        professionName: '',
        professionList: [
            { name: "全部专业", value: '' }
        ],


        //班级
        curClass: '',
        curClassName: '',
        classLists: [
            { name: "全部班级", value: '' }
        ],

        //贫困级别
        curPinkun: '',
        curPinkunName: '',
        pinkunLists: [
            { name: "全部认定等级", value: '' }
        ],

        //处理
        curChuli: '',
        curChuliName: '',
        chuliLists: [
            { name: "全部关注状态", value: '' }
        ],

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
        } else if (num === 3) { //班级
            this.setState({
                curClass: value,
                curClassName: option.props.children,
            })
        } else if (num === 4) {  //贫困级别
            this.setState({
                curPinkun: value,
                curPinkunName: option.props.children,
            })
        } else if (num === 5) {  //处理
            this.setState({
                curChuli: value,
                curChuliName: option.props.children,
            })
        }
    }

    studyNum(event) {
        this.setState({ studentNo: event.target.value });
    }

    //点击搜索
    searchMore() {
        const { college, profession, curClass, curPinkun, curChuli, studentNo, } = this.state
        let obj = {
            curYear: this.state.curYear1,
            curCollege: college,
            curMajor: profession,
            curClass: curClass,
            curPinkun: curPinkun,
            curChuli: curChuli,
            studentNo: studentNo,
        };
        this.props.getFilterValueAndName(obj);
    }

    render() {
        const { curYear1, yearList, college, collegeLists, profession, professionList, curClass, classLists, curPinkun, pinkunLists, curChuli, chuliLists, studentNo } = this.state;
        return (
            <div style={{padding: '10px 0', lineHeight: '40px', background: '#EEEEEE'}}>
                <Row>
                    <Col span={24}>
                        <Row>
                            <Col span={2}>
                                <span style={{ marginLeft: "25px" }}>选择条件：</span>
                            </Col>
                            <Col span={22}>
                                <Select
                                    style={{marginRight: 10}}
                                    value={curYear1}
                                    onChange={this.changeFilter.bind(this, 0)}
                                >
                                    {
                                        yearList.map((item, index) => <Option key={index} value={item.value}>{item.name}</Option>)
                                    }
                                </Select>
                                <Select
                                    value={college}
                                    placeholder="请选择学院"
                                    style={{ width: 180, marginRight: 10 }}
                                    onChange={this.changeFilter.bind(this, 1)}
                                >
                                    {
                                        collegeLists.map((item, index) => (
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
                                    value={profession}
                                    placeholder="请选择专业"
                                    style={{ width: 150, marginRight: 10 }}
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
                                    style={{ width: 120, marginRight: 10 }}
                                    onChange={this.changeFilter.bind(this, 3)}
                                >
                                    {
                                        classLists.map((item, index) => (
                                            <Option key={index} title={item.name} value={item.value}>{item.name}</Option>
                                        ))
                                    }
                                </Select>

                                <Select
                                    value={curPinkun}
                                    placeholder="全部认定等级"
                                    style={{ width: 200, marginRight: 10 }}
                                    onChange={this.changeFilter.bind(this, 4)}
                                >
                                    {
                                        pinkunLists.map((item, index) => (
                                            <Option key={index} title={item.name} value={item.value}>{item.name}</Option>
                                        ))
                                    }
                                </Select>

                                <Select
                                    value={curChuli}
                                    placeholder="全部处理状态"
                                    style={{ width: 200, marginRight: 10 }}
                                    onChange={this.changeFilter.bind(this, 5)}
                                >
                                    {
                                        chuliLists.map((item, index) => (
                                            <Option key={index} title={item.name} value={item.value}>{item.name}</Option>
                                        ))
                                    }
                                </Select>

                                <Input placeholder="请输入学生姓名/学号" value={studentNo} onChange={this.studyNum.bind(this)} style={{ width: 250, marginRight: 10 }} />

                                <Button type="primary" icon="search" onClick={() => this.searchMore()}>搜  索 </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Button, TreeSelect } from 'antd';
import { getAction, postAction } from '@/axios';
import styles from './index.module.less';

const SHOW_PARENT = TreeSelect.SHOW_PARENT;

class Index extends Component {
    state={
        curYear: [],//学年
        yearList:[{
                title:"全部学年",
                value:"all",
                key:0,
                children:[
                    // {title:"2019-2020学年",value:"2019-2020",key:1}
            ]}
        ],
        curEducation:["all"],//学生教育程度
        educationList:[{
            title:"全部学生",
            value:"all",
            key:1,
            children:[
                 // {title:"本科生",value:"1"}
            ]
        }],
        curCollege: ["all"],// 学院
        collegeList: [{
                title:"全部学院",
                value:"all",
                key:2,
                children:[]
            }],
        curMajor: ["all"],// 专业
        majorList: [{
                title:"全部专业",
                value:"all",
                key:3,
                children:[]
            }],
        curGrade: ["all"],// 年级
        gradeList: [{
                title:"全部年级",
                value:"all",
                key:4,
                children:[]
            }],
        curClass: ["all"],// 班级
        classList: [{
                title:"全部班级",
                value:"all",
                key:5,
                children:[]
            }],
        curStudentType: ["all"],// 学生类型
        studentTypeList: [{
                title:"全部学生类型",
                value:"all",
                key:6,
                children:[]
            }],

    }

    componentDidMount(){
        this.getYearList();
        this.getEducationList();
        this.getCollegeList();
        // this.getStudentTypeList();
    }

    changeFilter(value, type){
        switch (type){
            case "0"://变更学年
                this.setState({curYear: value});
                break;
            case "1"://变更学历
                this.setState({curEducation: value});
                break;
            case "2"://变更学院
                this.setState({curCollege:value,curMajor:["all"]},()=>{this.getMajorList()});
                break;
            case "3"://变更专业
                this.setState({curMajor:value,curGrade:["all"]},()=>{this.getGradeList()});
                break;
            case "4"://变更年级
                this.setState({curGrade:value,curClass:["all"]},()=>{this.getClassList()});
                break;
            case "5"://变更班级
                this.setState({curClass:value});
                break;
            default ://变更学生类型
                this.setState({curStudentType:value});
                break;
        }
    }

    search = () => {
        let { curYear, curEducation, curCollege, curMajor, curGrade, curClass, curStudentType } = this.state;
        this.props.getFilterValue({curYear, curEducation, curCollege, curMajor, curGrade, curClass, curStudentType})
    }
    
    //获取学年
    getYearList = () => {
        getAction('/bigdata/common/academicYear/list').then(res => {
            if(res.success){
                this.setState({
                    curYear:[res.obj[1].academicYear],
                    yearList:[{
                        title:"全部学年",
                        value:"all",
                        key:0,
                        children:Array.isArray(res.obj)?res.obj.map(item => ({title:item.academicYearName,value:item.academicYear,key:item.academicYear})):[]
                    }]
                },()=>{this.search()})
            }
        })
    }
    

    //获取学生学历列表
    getEducationList = () => {
        getAction('/bigdata/common/educationType/list').then(res => {
            if(res.success){
                this.setState({
                    curEducation:["all"],
                    educationList:[{
                        title:"全部学生",
                        value:"all",
                        key:1,
                        children:Array.isArray(res.obj)?res.obj.map((item,index) => ({title:item.name,value:item.code,key:`education${index}`})):[],
                    }]
                })
            }
        })
    }

    //获取学院
    getCollegeList = () => {
        postAction('/bigdata/common/condition/list').then(res => {
            if(res.success){
                this.setState({
                    curCollege:["all"],
                    collegeList:[{
                        title:"全部学院",
                        value:"all",
                        key:2,
                        children:Array.isArray(res.obj.colleges)?res.obj.colleges.map(item => ({title:item.collegeName,value:item.collegeCode,key:item.collegeCode})):[]
                    }]
                })
            }
        })
    }

    //获取专业列表
    getMajorList = () => {
        let params = {
            collegeCodes:this.state.curCollege.filter(item => item!=="all")
        }
        postAction('/bigdata/common/condition/list',params).then(res => {
            if(res.success){
                this.setState({
                    curMajor:["all"],
                    majorList:[{
                        title:"全部专业",
                        value:"all",
                        key:3,
                        children:Array.isArray(res.obj.majors)?res.obj.majors.map(item => ({title:item.majorName,value:item.majorCode,key:item.majorCode})):[]
                    }]
                })
            }
        })
    }

    //获取年级列表
    getGradeList = () => {
        let params = {
            collegeCodes:this.state.curCollege.filter(item => item!=="all"),
            majorCodes:this.state.curMajor.filter(item => item!=="all")
        }
        postAction('/bigdata/common/condition/list',params).then(res => {
            if(res.success){
                this.setState({
                    curGrade:["all"],
                    gradeList:[{
                        title:"全部专业",
                        value:"all",
                        key:4,
                        children:Array.isArray(res.obj.grades)?res.obj.grades.map(item => ({title:item.gradeName,value:item.grade,key:item.grade})):[]
                    }]
                })
            }
        })
    }

    //获取班级列表
    getClassList = () => {
        let params = {
            collegeCodes:this.state.curCollege.filter(item => item!=="all"),
            majorCodes:this.state.curMajor.filter(item => item!=="all"),
            grades:this.state.curGrade.filter(item => item!=="all")
        }
        postAction('/bigdata/common/condition/list',params).then(res => {
            if(res.success){
                this.setState({
                    curClass:["all"],
                    classList:[{
                        title:"全部专业",
                        value:"all",
                        key:5,
                        children:Array.isArray(res.obj.classes)?res.obj.classes.map(item => ({title:item.className,value:item.classCode,key:item.classCode})):[]
                    }]
                })
            }
        })
    }

    // 获取学生类型
    getStudentTypeList(){
        getAction('/bigdata/common/studentType/list').then(res => {
            if(res.success){
                this.setState({
                    curStudentType:["all"],
                    studentTypeList:[{
                        title:"全部学生类型",
                        value:"all",
                        key:6,
                        children:Array.isArray([res.obj])?res.obj.map(item => ({title:item.name,value:item.code,key:item.code})):[]
                    }]
                })
            }
        })
    }

    render() {
        const dropdownStyle = {maxHeight:300};
        return (
            <div className={styles.filterWapper}>
                <p className={styles.text}>选择条件: </p> 
                <TreeSelect 
                    value={this.state.curYear}
                    style={{ width: 150, marginRight: 10}} 
                    treeData={this.state.yearList} 
                    onChange={(value)=>{this.changeFilter(value,"0")}}
                    dropdownStyle={dropdownStyle}
                    treeDefaultExpandAll
                    treeCheckable={true} 
                    showCheckedStrategy={SHOW_PARENT} 
                    searchPlaceholder="选择学年"
                />
                <TreeSelect 
                    value={this.state.curEducation}
                    style={{ width: 150, marginRight: 10}} 
                    treeData={this.state.educationList} 
                    onChange={(value)=>{this.changeFilter(value,"1")}}
                    dropdownStyle={dropdownStyle}
                    treeDefaultExpandAll
                    treeCheckable={true} 
                    showCheckedStrategy={SHOW_PARENT} 
                    searchPlaceholder="选择学生学历"
                />
                <TreeSelect 
                    value={this.state.curCollege}
                    style={{ width: 178, marginRight: 10}} 
                    treeData={this.state.collegeList} 
                    onChange={(value)=>{this.changeFilter(value,"2")}}
                    dropdownStyle={dropdownStyle}
                    treeDefaultExpandAll
                    treeCheckable={true} 
                    showCheckedStrategy={SHOW_PARENT} 
                    searchPlaceholder="选择学院"
                />
                <TreeSelect 
                    value={this.state.curMajor}
                    style={{ width: 178, marginRight: 10}} 
                    treeData={this.state.majorList} 
                    onChange={(value)=>{this.changeFilter(value,"3")}}
                    dropdownStyle={dropdownStyle}
                    treeDefaultExpandAll
                    treeCheckable={true} 
                    showCheckedStrategy={SHOW_PARENT} 
                    searchPlaceholder="选择专业"
                />
                <TreeSelect 
                    style={{ width: 150, marginRight: 10}} 
                    value={this.state.curGrade}
                    treeData={this.state.gradeList} 
                    onChange={(value)=>{this.changeFilter(value,"4")}}
                    dropdownStyle={dropdownStyle}
                    treeDefaultExpandAll
                    treeCheckable={true} 
                    showCheckedStrategy={SHOW_PARENT} 
                    searchPlaceholder="选择年级"
                />
                <TreeSelect 
                    style={{ width: 150, marginRight: 10}} 
                    value={this.state.curClass}
                    treeData={this.state.classList} 
                    onChange={(value)=>{this.changeFilter(value,"5")}}
                    dropdownStyle={dropdownStyle}
                    treeDefaultExpandAll
                    treeCheckable={true} 
                    showCheckedStrategy={SHOW_PARENT} 
                    searchPlaceholder="选择班级"
                />
                <TreeSelect 
                    style={{ width: 150, marginRight: 10}} 
                    value={this.state.curStudentType}
                    treeData={this.state.studentTypeList} 
                    onChange={(value)=>{this.changeFilter(value,"6")}}
                    dropdownStyle={dropdownStyle}
                    treeDefaultExpandAll
                    treeCheckable={true} 
                    showCheckedStrategy={SHOW_PARENT} 
                    searchPlaceholder="选择学生类型"
                />
                <Button type="primary" icon="search" onClick={this.search}>搜索</Button>
            </div>
        );
    }
}

export default Index;
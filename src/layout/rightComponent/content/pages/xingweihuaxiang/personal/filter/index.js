import React, { Component } from 'react'
import { Input, Button, TreeSelect } from 'antd';
import { postAction } from '@/axios';
import styles from './index.module.less';

const SHOW_PARENT = TreeSelect.SHOW_PARENT;

class Filter extends Component {
    constructor(props){
        super(props);
        this.state = {
            curCollege:["all"],
            collegeList:[
                {
                    title:"全部学院",
                    value:"all",
                    key:0,
                    children:[]
                }
            ],
            curMajor:["all"],
            majorList:[
                {
                    title:"全部专业",
                    value:"all",
                    key:1,
                    children:[]
                }
            ],
            curGrade:["all"],
            gradeList:[
                {
                    title:"全部年级",
                    value:"all",
                    key:2,
                    children:[]
                }
            ],
            curClass:["all"],
            classList:[
                {
                    title:"全部班级",
                    value:"all",
                    key:3,
                    children:[]
                }
            ],
            curGender:["all"],
            genderList:[
                {
                    title:"全部性别",
                    value:"all",
                    key:4,
                    children:[
                        {title:"男",value:"1",key:"gender1"},
                        {title:"女",value:"2",key:"gender2"},                        
                    ]
                }
            ],
            studentNo:""
        }
    }

    componentDidMount(){
        this.getCollegeList();
    }

    //获取学院
    getCollegeList = () => {
        postAction('/bigdata/common/condition/list').then(res => {
            console.log(res)
            if(res.success){
                this.setState({
                    curCollege:["all"],
                    collegeList:[{
                        title:"全部学院",
                        value:"all",
                        key:0,
                        children:Array.isArray(res.obj.colleges)?res.obj.colleges.map(item => ({title:item.collegeName,value:item.collegeCode,key:item.collegeCode})):[]
                    }]
                })
            }
        })
    } 

    //获取专业
    getMajorList = () => {
        let params = {
            collegeCodes:this.state.curCollege.filter(item => item!=="")
        }
        postAction('/bigdata/common/condition/list',params).then(res => {
            if(res.success){
                this.setState({
                    curMajor:["all"],
                    majorList:[{
                        title:"全部专业",
                        value:"all",
                        key:1,
                        children:Array.isArray(res.obj.majors)?res.obj.majors.map(item => ({title:item.majorName,value:item.majorCode,key:item.majorCode})):[]
                    }]
                })
            }
        })
    }

    //获取年级
    getGradeList = () => {
        let params = {
            collegeCodes:this.state.curCollege.filter(item => item!==""),
            majorCodes:this.state.curMajor.filter(item => item!=="")
        }
        postAction('/bigdata/common/condition/list',params).then(res => {
            if(res.success){
                this.setState({
                    curGrade:["all"],
                    gradeList:[{
                        title:"全部年级",
                        value:"all",
                        key:2,
                        children:Array.isArray(res.obj.grades)?res.obj.grades.map(item => ({title:item.gradeName,value:item.grade,key:item.grade})):[]
                    }]
                })
            }
        })
    }

    //获取班级
    getClassList = () => {
        let params = {
            collegeCodes:this.state.curCollege.filter(item => item!==""),
            majorCodes:this.state.curMajor.filter(item => item!==""),
            grades:this.state.curGrade.filter(item => item!=="")
        }
        postAction('/bigdata/common/condition/list',params).then(res => {
            if(res.success){
                this.setState({
                    curClass:["all"],
                    classList:[{
                        title:"全部班级",
                        value:"all",
                        key:3,
                        children:Array.isArray(res.obj.classes)?res.obj.classes.map(item => ({title:item.className,value:item.classCode,key:item.classCode})):[]
                    }]
                })
            }
        })
    }

    changeSelect = (value,type) => {
        switch(type){
            case "1"://变更学院
                this.setState({curCollege:value,curMajor:["all"]},()=>{this.getMajorList()});
                break;
            case "2"://变更专业
                this.setState({curDepartment:value,curGender:["all"]},()=>{this.getGradeList()});
                break;
            case "3"://变更年级
                this.setState({curMajor:value,curClass:["all"]},()=>{this.getClassList()});
                break;
            case "4"://变更班级
                this.setState({curClass:value});
                break;
            default://变更性别
                this.setState({curGender:value});
                break;
        }
    }

    changeInput = (e) => {
        this.setState({studentNo:e.target.value})
    }

    submit = () => {
        const {curCollege,curDepartment,curMajor,curClass,curGender,studentNo} = this.state;
        let data = {
            curCollege,
            curDepartment,
            curMajor,
            curClass,
            curGender,
            studentNo
        }
        this.props.refershFilter(data)
    }

    render() {
        const dropdownStyle = {maxHeight:300};
        return (
            <div className={styles.filter}>
                筛选条件:
                <TreeSelect 
                    style={{ width: 220, marginRight: 10, marginLeft:10 }} 
                    treeData={this.state.collegeList} 
                    onChange={(value)=>{this.changeSelect(value,"1")}}
                    dropdownStyle={dropdownStyle}
                    treeDefaultExpandAll
                    treeCheckable={true} 
                    showCheckedStrategy={SHOW_PARENT} 
                    searchPlaceholder="请选择学院"
                />
                <TreeSelect 
                    style={{width: 124, marginRight: 10}} 
                    treeData={this.state.majorList} 
                    onChange={(value)=>{this.changeSelect(value,"2")}}
                    dropdownStyle={dropdownStyle}
                    treeDefaultExpandAll
                    treeCheckable={true} 
                    showCheckedStrategy={SHOW_PARENT} 
                    searchPlaceholder="请选择专业"
                />
                <TreeSelect 
                    style={{ width: 124, marginRight: 10 }} 
                    treeData={this.state.gradeList} 
                    onChange={(value)=>{this.changeSelect(value,"3")}} 
                    dropdownStyle={dropdownStyle}
                    treeDefaultExpandAll
                    treeCheckable={true} 
                    showCheckedStrategy={SHOW_PARENT} 
                    searchPlaceholder="请选择年级"
                />
                <TreeSelect 
                    style={{ width: 124, marginRight: 10 }} 
                    treeData={this.state.classList} 
                    onChange={(value)=>{this.changeSelect(value,"4")}} 
                    dropdownStyle={dropdownStyle}
                    treeDefaultExpandAll
                    treeCheckable={true} 
                    showCheckedStrategy={SHOW_PARENT} 
                    searchPlaceholder="请选择班级"
                />
                <TreeSelect 
                    style={{ width: 124, marginRight: 10 }} 
                    treeData={this.state.genderList} 
                    onChange={(value)=>{this.changeSelect(value,"5")}} 
                    dropdownStyle={dropdownStyle}
                    treeDefaultExpandAll
                    treeCheckable={true} 
                    showCheckedStrategy={SHOW_PARENT} 
                    searchPlaceholder="请选择性别"
                />
                <Input placeholder="请输入学生姓名或学号" style={{width:256,  marginRight: 10}} value={this.state.studentNo} onChange={this.changeInput}></Input>
                <Button icon="search" type="primary" onClick={this.submit}>搜 索</Button>
            </div>
        )
    }
}

export default Filter

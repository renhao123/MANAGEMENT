import React, { Component } from 'react';
import { Card } from 'antd';
import PeopleRelation from "./peoplerelation";
// import { postAction } from "../../../../../axios"

export default class GerenGuanxi extends Component {

    state = {
        relationInfo: {
            "nodes": [
                // {
                //     "image": "",
                //     "role": "girl",
                //     "name": "吴智蕾",
                //     ""
                // }
            ],
            "edges": [
                // {
                //     "source": 0,
                //     "target": 1,
                //     "relation": "同学"
                // }
            ]
        },
        totalCount: 0,
        classmateCount: 0,
        teacherCount: 0,
    }

    getRelationInfo() {
        // let _studentNo = JSON.parse(localStorage.getItem("studentItem")).studentNo
        let res = {
            success:true,
            obj:{
                edges:[
                    {relation: "朋友(76)",source: 0,target: 1},
                    {relation: "朋友(11)",source: 0,target: 2},
                    {relation: "朋友(15)",source: 0,target: 3},
                    {relation: "朋友(11)",source: 0,target: 4},
                    {relation: "朋友(40)",source: 0,target: 5},
                    {relation: "朋友(17)",source: 0,target: 6},
                ],
                nodes:[
                    {image: "",name: "王箬雨(建筑学院213171172)",role: "girl"},
                    {image: "",name: "鲍雯(交通学院213170820)",role: ""},
                    {image: "",name: "周嘉(交通学院213170828)",role: ""},
                    {image: "",name: "谢雯(交通学院213171365)",role: ""},
                    {image: "",name: "王祎庭(信息科学与工程学院213172137)",role: ""},
                    {image: "",name: "朱明会(交通学院213173199)",role: ""},
                    {image: "",name: "李樊一(建筑学院213182754)",role: ""},
                ],
                classmateCount:5,
                teacherCount:3
            }
        }
        if (res.success) {
            if (res.obj !== '' && res.obj !== '') {
                let relationInfo = res.obj;
                this.setState({
                    relationInfo: {
                        "nodes": relationInfo.nodes,
                        "edges": relationInfo.edges
                    },
                    totalCount: relationInfo.classmateCount + relationInfo.teacherCount,
                    classmateCount: relationInfo.classmateCount,
                    teacherCount: relationInfo.teacherCount,
                })
            } else {
                this.setState({
                    relationInfo: {
                        "nodes": [],
                        "edges": []
                    },
                    totalCount: 0,
                    classmateCount: 0,
                    teacherCount: 0
                })
            }
        }
    }

    componentDidMount() {
        this.getRelationInfo()
    }

    render() {
        return (
            <Card
                title={<div>个人群体关系</div>}
                bordered={false}
                headStyle={{ border: 'none' }}
                style={{marginBottom:40,boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
            >
                <div className="relation" style={{background:"#ddd",borderRadius:4}}>
                    <PeopleRelation data={this.state.relationInfo} />
                </div>
                <div style={{marginTop:15}}>
                    迄今为止，该生于本校{this.state.totalCount}人有或远或近的联系：同学关系<span style={{color: '#de6954'}}> {this.state.classmateCount} </span>人、师生关系<span style={{color: '#de6954'}}> {this.state.teacherCount} </span>人。
                </div>
            </Card>
        )
    }
}
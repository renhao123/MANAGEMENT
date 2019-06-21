import React, { Component } from 'react';
import { Card } from 'antd';
import ShowChart from './showchart';
import NoData from './nodata';
import {postAction} from '@/axios';

class Index extends Component {
    state = {
        data: [
            {
                item:'男',
                count: 40
            },
            {
                item:'女',
                count: 21
            }
        ]
    }

    componentDidMount(){
        this.getData(this.props);
    }

    componentWillReceiveProps(nextProps){
        if(JSON.stringify(this.props) !== JSON.stringify(nextProps)){
            this.getData(nextProps);
        }
    }

    getData(props){
        let { filterValue } = props;
        postAction('/bigdata/portrait/group/student/sex/statistics', {
            academicYear: filterValue.curYear,
            classCode: filterValue.curClass,
            collegeCode: filterValue.curCollege,
            grade: filterValue.curGrade,
            majorCode: filterValue.curMajor,
            studentType: filterValue.curStudentType
        }).then(res => {
            console.log(res);
            if(res.success){
                this.setState({
                    data:Array.isArray(res.obj)?res.obj.map(item =>({item:item.sex,count:item.studentNum})):[]
                })
            }
        })
    }

    render() {
        return (
            <Card 
                style={{height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                            <div style={{fontSize: 16, fontWeight: 700}}>学生性别分布<span style={{display: 'inline-block', fontSize: 12, fontWeight: 400, color: '#4A4A4A', marginLeft: 10}}>单位：人</span></div>
                        </div>}
                bodyStyle={{height: 230}}
                >
                {
                    this.state.data.length>0
                    ?
                    <ShowChart
                        data={this.state.data}
                        height={170}
                        padding={[0, 0, 0, 0]}
                    />
                    :
                    <NoData/>
                }
            </Card>
        );
    }
}

export default Index;
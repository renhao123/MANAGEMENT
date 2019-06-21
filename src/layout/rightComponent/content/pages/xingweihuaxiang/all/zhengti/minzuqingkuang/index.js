import React, { Component } from 'react'
import { Card } from 'antd';
import ShowChart from './showchart'
import NoData from '../nodata';
import { postAction } from '@/axios.js'

export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        this.getData(this.props);
    }

    componentWillReceiveProps(nextProps){
        if(JSON.stringify(this.props) !== JSON.stringify(nextProps)){
            this.getData(nextProps);
        }
    }

    //获取民族情况Top10
    getData(props){
        let { filterValue } = props;
        postAction('/bigdata/portrait/group/minority/top10/statistics', {
            academicYear: filterValue.curYear,
            classCode: filterValue.curClass,
            collegeCode: filterValue.curCollege,
            grade: filterValue.curGrade,
            majorCode: filterValue.curMajor,
            studentType: filterValue.curStudentType
        }).then(res => {
            if(res.success){
                this.setState({
                    data:res.obj.map(item => ({name:item.nation,value:item.studentNum}))
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
                    <div style={{fontSize: 16, fontWeight: 700}}>民族情况Top10</div>
                </div>}
                bodyStyle={{height:this.props.height - 30, padding: 15}}
                >
                {
                    this.state.data[0]?
                    <ShowChart
                        data={this.state.data}
                        padding={[10, 20, 10, 20]}
                        height={this.props.height - 60}
                    />
                    :
                    <NoData/>
                }
            </Card>
        )
    }
}

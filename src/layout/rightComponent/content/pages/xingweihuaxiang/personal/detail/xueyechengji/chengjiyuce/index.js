import React, { Component } from 'react'
import { Card } from 'antd';
import NoData from './noData';
import Chengjiyuce from './chart';

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        let data = [
            {major:"专业一",及格:62,不及格:"",平均成绩:60},
            {major:"专业二",及格:"",不及格:53,平均成绩:59},
            {major:"专业三",及格:66,不及格:"",平均成绩:70},
            {major:"专业四",及格:"",不及格:60,平均成绩:68},
            {major:"专业五",及格:62,不及格:"",平均成绩:60},
        ];
        this.setState({data:data})
    }
    render() {
        return (
            <Card
                title={
                    <React.Fragment>
                        <span style={{fontSize:16,fontWeight:"bold"}}>本学期成绩预测</span>
                        <span style={{fontSize:12,marginLeft:10, fontWeight: 400}}>单位：人</span>
                    </React.Fragment>
                }
                style={{boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius:4}}
                bordered={false}
                headStyle={{ border: "none",height:56}}
                bodyStyle={{ paddingTop: 0 ,height:360}}
            >
                {
                    this.state.data&&this.state.data.length>0?
                    <Chengjiyuce data={this.state.data}/>:
                    <NoData height={360}/>
                }
            </Card>
        )
    }
}

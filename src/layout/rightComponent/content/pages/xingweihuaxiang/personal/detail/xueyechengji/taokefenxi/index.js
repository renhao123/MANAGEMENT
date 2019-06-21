import React, { Component } from 'react'
import { Card } from 'antd';
import NoData from './noData';
import PieChart from './piechart';

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        let data = [
            {name:"大学英语",value:99},
            {name:"高等数学",value:11},
            {name:"大学语文",value:77},
            {name:"数据结构",value:66},
            {name:"操作系统",value:44},   
        ];
        this.setState({data:data})
    }

    render() {
        return (
            <Card 
                title={
                    <React.Fragment>
                        <span style={{fontSize:16,fontWeight:"bold"}}>本学期疑似逃课分析</span>
                        <span style={{fontSize:12,marginLeft:10, fontWeight: 400}}>单位：人</span>
                    </React.Fragment>
                }
                style={{boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius:4}}
                bordered={false}
                headStyle={{ border: "none"}}
                bodyStyle={{ paddingTop: 0 }}
            >
                
                {
                    this.state.data&&this.state.data.length>0?
                    <PieChart data={this.state.data}/>:
                    <NoData height={360}/>
                }
            </Card>
        )
    }
}

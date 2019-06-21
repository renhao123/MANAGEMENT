import React, { Component } from 'react'
import { Card } from 'antd';
import ShowList from './showlist';
import NoData from '../nodata';

export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }

    componentDidMount(){
        this.setState({
            data:{
                left: {
                    name: '上学期',
                    value: [
                        {name: '经常逃课', value: 120, percent: '18%'},
                        {name: '偶尔逃课', value: 360, percent: '54%'},
                        {name: '不逃课', value: 120, percent: '18%'},
                    ]
                },
                right: {
                    name: '下学期',
                    value: [
                        {name: '经常逃课', value: 87, percent: '15%'},
                        {name: '偶尔逃课', value: 372, percent: '55%'},
                        {name: '不逃课', value: 133, percent: '20%'},
                    ]
                }
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
                    <div style={{fontSize: 16, fontWeight: 700}}>上课情况</div>
                </div>}
                bodyStyle={{height:this.props.height - 10, padding: '10px 0'}}
                >
                {
                    JSON.stringify(this.state.data) !== '{}'?
                    <ShowList data={this.state.data}/>
                    :
                    <NoData/>
                }
            </Card>
        )
    }
}

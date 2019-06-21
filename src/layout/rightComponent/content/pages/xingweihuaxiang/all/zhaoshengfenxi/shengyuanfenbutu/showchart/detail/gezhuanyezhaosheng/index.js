import React, {Component} from 'react';
import {Card} from 'antd';
import ShowChart from './showchart';
import NoData from './nodata';


export default class Index extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:[
                {
                    item: "事例一",
                    count: 40
                },
                {
                    item: "事例二",
                    count: 21
                },
                {
                    item: "事例三",
                    count: 17
                },
                {
                    item: "事例四",
                    count: 13
                },
                {
                    item: "事例五",
                    count: 9
                }
            ]
        }
    }

    render () {
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>各专业招生比例<span style={{ display: 'inline-block', fontSize: 12, fontWeight: 400, color: '#4A4A4A', marginLeft: 10 }}>单位：人</span></div>
                </div>}
                bodyStyle={{height: this.props.height - 10}}
            >
                {
                    this.state.data.length>0
                        ?
                        <ShowChart
                            data={this.state.data}
                            padding={[0,20,50,20]}
                            height={this.props.height - 90}
                        />
                        :
                        <NoData/>
                }
            </Card>
        )
    }
}
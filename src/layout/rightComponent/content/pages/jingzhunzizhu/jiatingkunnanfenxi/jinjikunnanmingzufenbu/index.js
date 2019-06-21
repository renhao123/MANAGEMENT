import React, {Component} from 'react';
import {Card} from 'antd';
import ShowChart from './showChart';
import NoData from './nodata';


export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    item: "其他",
                    count: 9
                },
                {
                    item: "蒙古族",
                    count: 13
                },
                {
                    item: "土家族",
                    count: 17
                },
                {
                    item: "回族",
                    count: 21
                },
                {
                    item: "汉族",
                    count: 40
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
                    <div style={{ fontSize: 16, fontWeight: 700 }}>经济困难学生民族分布TOP5<span style={{ display: 'inline-block', fontSize: 12, fontWeight: 400, color: '#4A4A4A', marginLeft: 10 }}>单位：人</span></div>
                </div>}
                bodyStyle={{height: this.props.height - 10}}
            >
                {
                    this.state.data.length>0
                        ?
                        <ShowChart
                            data={this.state.data}
                            padding={[10, 30, 30, 30]}
                            height={this.props.height - 60}
                        />
                        :
                        <NoData/>
                }
            </Card>
        )
    }
}
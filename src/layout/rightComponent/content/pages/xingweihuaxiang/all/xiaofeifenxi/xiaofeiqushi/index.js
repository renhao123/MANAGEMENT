import React, {Component} from 'react';
import {Card} from 'antd';
import ShowChart from './showchart';
import NoData from './nodata';


export default class Index extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    month: "Jan",
                    city: "Tokyo",
                    temperature: 7
                },
                {
                    month: "Jan",
                    city: "London",
                    temperature: 3.9
                },
                {
                    month: "Feb",
                    city: "Tokyo",
                    temperature: 6.9
                },
                {
                    month: "Feb",
                    city: "London",
                    temperature: 4.2
                },
                {
                    month: "Mar",
                    city: "Tokyo",
                    temperature: 9.5
                },
                {
                    month: "Mar",
                    city: "London",
                    temperature: 5.7
                },
                {
                    month: "Apr",
                    city: "Tokyo",
                    temperature: 14.5
                },
                {
                    month: "Apr",
                    city: "London",
                    temperature: 8.5
                },
                {
                    month: "May",
                    city: "Tokyo",
                    temperature: 18.4
                },
                {
                    month: "May",
                    city: "London",
                    temperature: 11.9
                },
                {
                    month: "Jun",
                    city: "Tokyo",
                    temperature: 21.5
                },
                {
                    month: "Jun",
                    city: "London",
                    temperature: 15.2
                },
                {
                    month: "Jul",
                    city: "Tokyo",
                    temperature: 25.2
                },
                {
                    month: "Jul",
                    city: "London",
                    temperature: 17
                },
                {
                    month: "Aug",
                    city: "Tokyo",
                    temperature: 26.5
                },
                {
                    month: "Aug",
                    city: "London",
                    temperature: 16.6
                },
                {
                    month: "Sep",
                    city: "Tokyo",
                    temperature: 23.3
                },
                {
                    month: "Sep",
                    city: "London",
                    temperature: 14.2
                },
                {
                    month: "Oct",
                    city: "Tokyo",
                    temperature: 18.3
                },
                {
                    month: "Oct",
                    city: "London",
                    temperature: 10.3
                },
                {
                    month: "Nov",
                    city: "Tokyo",
                    temperature: 13.9
                },
                {
                    month: "Nov",
                    city: "London",
                    temperature: 6.6
                },
                {
                    month: "Dec",
                    city: "Tokyo",
                    temperature: 9.6
                },
                {
                    month: "Dec",
                    city: "London",
                    temperature: 4.8
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
                    <div style={{ fontSize: 16, fontWeight: 700 }}>消费趋势<span style={{ display: 'inline-block', fontSize: 12, fontWeight: 400, color: '#4A4A4A', marginLeft: 10 }}>单位：人</span></div>
                </div>}
                bodyStyle={{height: this.props.height - 10}}
            >
                {
                    this.state.data.length>0
                        ?
                        <ShowChart
                            data={this.state.data}
                            padding={[10, 40, 60, 50]}
                            height={this.props.height - 60}
                        />
                        :
                        <NoData/>
                }
            </Card>
        )
    }
}
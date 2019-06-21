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
                    year: "1991",
                    value: 3
                },
                {
                    year: "1992",
                    value: 4
                },
                {
                    year: "1993",
                    value: 3.5
                },
                {
                    year: "1994",
                    value: 5
                },
                {
                    year: "1995",
                    value: 4.9
                },
                {
                    year: "1996",
                    value: 6
                },
                {
                    year: "1997",
                    value: 7
                },
                {
                    year: "1998",
                    value: 9
                },
                {
                    year: "1999",
                    value: 13
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
                    <div style={{ fontSize: 16, fontWeight: 700 }}>招生人数趋势<span style={{ display: 'inline-block', fontSize: 12, fontWeight: 400, color: '#4A4A4A', marginLeft: 10 }}>单位：人</span></div>
                </div>}
                bodyStyle={{height: this.props.height - 10}}
            >
                {
                    this.state.data.length>0
                        ?
                        <ShowChart
                            data={this.state.data}
                            padding={[10,30,30,40]}
                            height={this.props.height - 90}
                        />
                        :
                        <NoData/>
                }
            </Card>
        )
    }
}
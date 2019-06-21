import React, { Component } from 'react';
import { Card } from 'antd';
import ShowChart from './showchart';
import NoData from './nodata';

class Index extends Component {
    state = {
        data: [
            {
                month: "Jan",
                Tokyo: 7.0,
                London: 3.9
            },
            {
                month: "Feb",
                Tokyo: 6.9,
                London: 4.2
            },
            {
                month: "Mar",
                Tokyo: 9.5,
                London: 5.7
            },
            {
                month: "Apr",
                Tokyo: 14.5,
                London: 8.5
            },
            {
                month: "May",
                Tokyo: 18.4,
                London: 11.9
            },
            {
                month: "Jun",
                Tokyo: 21.5,
                London: 15.2
            },
            {
                month: "Jul",
                Tokyo: 25.2,
                London: 17.0
            },
            {
                month: "Aug",
                Tokyo: 26.5,
                London: 16.6
            },
            {
                month: "Sep",
                Tokyo: 23.3,
                London: 14.2
            },
            {
                month: "Oct",
                Tokyo: 18.3,
                London: 10.3
            },
            {
                month: "Nov",
                Tokyo: 13.9,
                London: 6.6
            },
            {
                month: "Dec",
                Tokyo: 9.6,
                London: 4.8
            }
        ]
    }
    render() {
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>各专业第一志愿率和调剂率</div>
                </div>}
                bodyStyle={{ height: this.props.height - 10 }}
            >
                {
                    this.state.data.length > 0
                        ?
                        <ShowChart
                            data={this.state.data}
                            padding={[10, 10, 60, 30]}
                            height={this.props.height - 60}
                        />
                        :
                        <NoData />
                }
            </Card>
        );
    }
}

export default Index;
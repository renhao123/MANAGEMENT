import React, { Component } from 'react';
import { Card } from 'antd';
import ShowChart from './showchart';
import NoData from './nodata';

class Index extends Component {
    state = {
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
    render() {
        return (
            <Card 
                style={{height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{fontSize: 16, fontWeight: 700}}>各省（市、自治区）报考热度比</div>
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
        );
    }
}

export default Index;
import React, { Component } from 'react';
import { Card } from 'antd';
import ShowChart from './showchart';
import NoData from './nodata';

class Index extends Component {
    state = {
        data: [
            {
                year: "1951 年",
                sales: 38
            },
            {
                year: "1952 年",
                sales: 52
            },
            {
                year: "1956 年",
                sales: 61
            },
            {
                year: "1957 年",
                sales: 145
            },
            {
                year: "1958 年",
                sales: 48
            },
            {
                year: "1959 年",
                sales: 38
            },
            {
                year: "1960 年",
                sales: 38
            },
            {
                year: "1962 年",
                sales: 38
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
                            <div style={{fontSize: 16, fontWeight: 700}}>少数民族专项学生分布<span style={{display: 'inline-block', fontSize: 12, fontWeight: 400, color: '#4A4A4A', marginLeft: 10}}>单位：人</span></div>
                        </div>}
                bodyStyle={{height:320}}
                >
                {
                    this.state.data.length>0
                    ?
                    <ShowChart
                        data={this.state.data}
                        padding={[10, 10, 20, 30]}
                        height={270}
                    />
                    :
                    <NoData/>
                }
            </Card>
        );
    }
}

export default Index;
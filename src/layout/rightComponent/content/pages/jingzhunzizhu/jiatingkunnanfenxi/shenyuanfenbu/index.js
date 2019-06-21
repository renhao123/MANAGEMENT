import React, { Component } from 'react';
import { Card } from 'antd';
import ShowChart from './showChart';
import NoData from './nodata';

class Index extends Component {
    state = {
        data: [
            {
              name: "一般困难",
              "湖北": 18.9,
              "河北": 28.8,
              "河南": 39.3,
              "北京": 81.4,
            },
            {
              name: "特别困难",
              "湖北": 12.4,
              "河北": 23.2,
              "河南": 34.5,
              "北京": 99.7,
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
                            <div style={{fontSize: 16, fontWeight: 700}}>经济困难学生生源地分布<span style={{display: 'inline-block', fontSize: 12, fontWeight: 400, color: '#4A4A4A', marginLeft: 10}}>单位：人</span></div>
                        </div>}
                bodyStyle={{height: this.props.height - 10}}
                >
                {
                    this.state.data.length>0
                    ?
                    <ShowChart
                        data={this.state.data}
                        padding={[10, 30, 60, 30]}
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
import React, { Component } from 'react';
import { Card } from 'antd';
import ShowChart from './showChart';
import NoData from './nodata';

class Index extends Component {
    state = {
        data: [
            {
                item:'其他',
                count: 40
            },
            {
                item:'私企',
                count: 21
            },
            {
                item:'国企',
                count: 50
            },{
                item:'升学',
                count: 50
            },{
                item:'事业单位',
                count: 50
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
                            <div style={{fontSize: 16, fontWeight: 700}}>经济困难学生就业去向TOP5<span style={{display: 'inline-block', fontSize: 12, fontWeight: 400, color: '#4A4A4A', marginLeft: 10}}>单位：人</span></div>
                        </div>}
                bodyStyle={{height: this.props.height-10}}
                >
                {
                    this.state.data.length>0
                    ?
                    <ShowChart
                        data={this.state.data}
                        height={this.props.height - 60}
                        padding={[0, 0, 35, 0]}
                    />
                    :
                    <NoData/>
                }
            </Card>
        );
    }
}

export default Index;
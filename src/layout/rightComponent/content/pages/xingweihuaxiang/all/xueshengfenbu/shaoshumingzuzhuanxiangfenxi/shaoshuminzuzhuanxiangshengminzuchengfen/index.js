import React, { Component } from 'react';
import { Card } from 'antd';
import ShowChart from './showchart';
import NoData from './nodata';

class Index extends Component {
    state = {
        data: [
            {
              name: "London",
              "Jan.": 18.9,
              "Feb.": 28.8,
              "Mar.": 39.3,
              "Apr.": 81.4,
              May: 47,
              "Jun.": 20.3,
              "Jul.": 24,
              "Aug.": 35.6
            },
            {
              name: "Berlin",
              "Jan.": 12.4,
              "Feb.": 23.2,
              "Mar.": 34.5,
              "Apr.": 99.7,
              May: 52.6,
              "Jun.": 35.5,
              "Jul.": 37.4,
              "Aug.": 42.4
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
                            <div style={{fontSize: 16, fontWeight: 700}}>少数民族专项生民族成分<span style={{display: 'inline-block', fontSize: 12, fontWeight: 400, color: '#4A4A4A', marginLeft: 10}}>单位：人</span></div>
                        </div>}
                bodyStyle={{height:350}}
                >
                {
                    this.state.data.length>0
                    ?
                    <ShowChart
                        data={this.state.data}
                        height={300}
                        padding={[10, 10, 60, 30]}
                    />
                    :
                    <NoData/>
                }
            </Card>
        );
    }
}

export default Index;
import React, { Component } from 'react';
import { Card } from 'antd';
import ShowChart from './showchart';
import NoData from '../nodata';

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
                    <div style={{fontSize: 16, fontWeight: 700}}>学习成绩</div>
                </div>}
                bodyStyle={{height:this.props.height - 10}}
                >
                {
                    this.state.data.length>0
                    ?
                    <ShowChart
                        data={this.state.data}
                        padding={[10, 10, 60, 30]}
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
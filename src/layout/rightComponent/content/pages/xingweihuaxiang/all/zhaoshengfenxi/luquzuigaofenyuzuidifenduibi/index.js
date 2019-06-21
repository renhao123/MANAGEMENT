import React, { Component } from 'react';
import { Card } from 'antd';
import ShowChart from './showchart';
import NoData from './nodata';


export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:"2017年",city:"北京市",start:2,end:9,max:11,min:1},
                {name:"2017年",city:"上海市",start:7,end:2,max:8,min:2},
                {name:"2017年",city:"重庆市",start:2,end:6,max:7,min:1},
                {name:"2018年",city:"北京市",start:2,end:9,max:11,min:2},
                {name:"2018年",city:"上海市",start:2,end:7,max:8,min:2},
                {name:"2018年",city:"重庆市",start:2,end:6,max:7,min:2},
                {name:"2019年",city:"北京市",start:9,end:3,max:11,min:1},
                {name:"2019年",city:"上海市",start:7,end:2,max:8,min:2},
                {name:"2019年",city:"重庆市",start:2,end:6,max:7,min:1},
            ]
        }
    }
    render() {
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>各省（市、自治区）录取最高分与最低分的近三年对比</div>
                </div>}
                bodyStyle={{ height: this.props.height - 10 }}
            >
                {
                    this.state.data.length > 0
                        ?
                        <ShowChart
                            data={this.state.data}
                            padding={[10, 40, 30, 40]}
                            height={this.props.height - 60}
                        />
                        :
                        <NoData />
                }
            </Card>
        )
    }
}
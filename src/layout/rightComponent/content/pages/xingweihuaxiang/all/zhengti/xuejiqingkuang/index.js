import React, { Component } from 'react'
import { Card } from 'antd';
import ShowChart from './showchart';
import NoData from '../nodata';

export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
            data1:[],
            data2:[]
        }
    }

    componentDidMount(){
        this.setState({
            data1:[
                {
                    item: "在籍在校",
                    count: 333
                },
                {
                    item: "在籍不在校",
                    count: 143
                }
            ],
            data2: [
                {
                    item: "结业",
                    count: 1234
                },
                {
                    item: "休学延长学制",
                    count: 234
                },
                {
                    item: "延长学制",
                    count: 345
                },
                {
                    item: "试读",
                    count: 245
                },
                {
                    item: "退学警告",
                    count: 245
                },
                {
                    item: "保留入学资格",
                    count: 245
                }
            ]
        })
    }
    render() {
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>学籍情况</div>
                </div>}
                bodyStyle={{height: this.props.height - 10, position: 'relative'}}
            >
                {
                    this.state.data1[0] && this.state.data2[0]
                        ?
                        <ShowChart
                            data1={this.state.data1}
                            data2={this.state.data2}
                            padding={{left: '-30%'}}
                            height={this.props.height - 60}
                        />
                        :
                        <NoData/>
                }
            </Card>
        )
    }
}

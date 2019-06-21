import React, {Component} from 'react';
import {Card} from 'antd';
import ShowChart from './showchart';
import NoData from '../nodata';


export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                {
                    item:'学士',
                    count: 40
                },
                {
                    item:'硕士',
                    count: 31
                },
                {
                    item:'博士',
                    count: 21
                },
                {
                    item:'名誉博士',
                    count: 51
                },
                {
                    item:'双学士',
                    count: 29
                }
            ],
        }
    }

    render () {
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>消费结构分析<span style={{display: 'inline-block', fontSize: 12, fontWeight: 400, color: '#4A4A4A', marginLeft: 10}}>单位：元</span></div>
                </div>}
                bodyStyle={{height: this.props.height - 10}}
            >
                {
                    this.state.data.length>0
                        ?
                        <ShowChart
                            data={this.state.data}
                            padding={[-10, 0, 35, 0]}
                            height={this.props.height - 60}
                        />
                        :
                        <NoData/>
                }
            </Card>
        )
    }
}
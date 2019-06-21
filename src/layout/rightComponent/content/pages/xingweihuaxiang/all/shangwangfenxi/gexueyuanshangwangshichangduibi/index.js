import React, {Component} from 'react';
import {Card} from 'antd';
import ShowChart from './showchart';
import NoData from './nodata';


export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
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
    }
    render () {
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>各学院上网时长对比</div>
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
        )
    }
}
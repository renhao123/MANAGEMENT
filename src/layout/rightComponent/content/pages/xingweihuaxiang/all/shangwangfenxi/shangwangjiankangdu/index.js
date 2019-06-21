import React, {Component} from 'react';
import {Card} from 'antd';
import ShowChart from './showchart';
import NoData from './nodata';


export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [{
                internetHealth: 3.5
            }],
        }
    }

    render () {
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>上网健康度</div>
                </div>}
                bodyStyle={{height: this.props.height - 10}}
            >
                {
                    this.state.data.length>0
                        ?
                        <ShowChart
                            data={this.state.data}
                            padding={[0,0,0,0]}
                            height={this.props.height - 90}
                        />
                        :
                        <NoData/>
                }
            </Card>
        )
    }
}
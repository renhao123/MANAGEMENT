import React, {Component, Fragment} from 'react';
import {Card, Row, Col} from 'antd';
import ShowChart from './showchart';
import NoData from './nodata';
import PredictTable from "./tablechart/PredictTable";


export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    item: "预测挂科1门",
                    count: 25
                },
                {
                    item: "预测挂科2门",
                    count: 25
                },
                {
                    item: "预测挂科3门及以上",
                    count: 25
                },
                {
                    item: "预测无挂科",
                    count: 25
                }
            ],
            id:"",
            item:"预测无挂科学生",
        }
    }
    render () {
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>本学期挂科预测<span style={{ display: 'inline-block', fontSize: 12, fontWeight: 400, color: '#4A4A4A', marginLeft: 10 }}>单位：人次</span></div>
                </div>}
                bodyStyle={{height: this.props.height - 10}}
            >
                {
                    this.state.data.length>0
                        ?
                        <Fragment>
                            <Row>
                                <Col span={12}>
                                    <ShowChart
                                        data={this.state.data}
                                        padding={[10, 30, 60, 30]}
                                        height={this.props.height - 60}
                                        onClickAction={(ev)=>{
                                            if (ev.data) {
                                                // 点击获取当前行item的id
                                                this.setState({
                                                    id: ev.data._origin.id,
                                                    item: ev.data._origin.item
                                                })
                                            }
                                        }}
                                    />
                                </Col>

                                <Col span={12}>
                                    <PredictTable id={this.state.id} item={this.state.item} />
                                </Col>
                            </Row>
                        </Fragment>
                        :
                        <NoData/>
                }
            </Card>
        )
    }
}
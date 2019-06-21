import React, { Component } from 'react'
import { Card, Row, Col } from 'antd';
import FenbuChart from './fenbuchart';
import DetailTable from './detailtable'

export default class index extends Component {

    render() {
        return (
            <Card
                title="奖助情况" 
                style={{ width: "100%", boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius: 4 }}
                bordered={false}
                headStyle={{ border: "none",height:56}}
                bodyStyle={{ paddingTop: 0,height:360 }}
            >
               
                <Row>
                    <Col span={12}>
                        <p>学助分布</p>
                        <FenbuChart startYear={this.props.startYear} endYear={this.props.endYear}/>
                    </Col>
                    <Col span={12}>
                        <p>奖助详情</p>
                        <DetailTable startYear={this.props.startYear} endYear={this.props.endYear}/>
                    </Col>
                </Row>
                
            </Card>
        )
    }
}

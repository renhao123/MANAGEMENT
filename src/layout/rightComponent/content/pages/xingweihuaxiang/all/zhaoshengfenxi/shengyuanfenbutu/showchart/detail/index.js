import React, { Component } from 'react';
import {Row, Col} from 'antd';
import Zhaoshengnannv from './zhaoshengnannv';
import Gezhuanyezhaosheng from './gezhuanyezhaosheng';
import Shengyuanminzu from './shengyuanminzu';
import Zhaoshengrenshuqushi from './zhaoshengrenshuqushi';


class Index extends Component {
    render() {
        return (
            <Row>
                <Col span={8} style={{padding:"20px 10px 20px 20px"}}>
                    <Zhaoshengnannv height={400} />
                </Col>

                <Col span={8} style={{padding:"20px 10px 20px 0px"}}>
                    <Gezhuanyezhaosheng height={400} />
                </Col>

                <Col span={8} style={{padding:"20px 20px 20px 0px"}}>
                    <Shengyuanminzu height={400} />
                </Col>

                <Col span={24} style={{padding:"0px 20px 20px 20px"}}>
                    <Zhaoshengrenshuqushi height={400} />
                </Col>
            </Row>
        );
    }
}

export default Index;
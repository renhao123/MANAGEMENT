import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Rementushupaihangtop10 from './rementushupaihangtop10'
import Yueduliangpaihangtop20 from './yueduliangpaihangtop20'
import Jieyuetushufenlei from './jieyuetushufenlei'
import Butongshijianjieyuequshi from './butongshijianjieyuequshi'


class Index extends Component {
    render() {
        return (
            <Row gutter={16} style={{padding: 20}}>
                <Col span={24} style={{marginBottom: 20}}>
                    <Rementushupaihangtop10 height={400}/>
                </Col>
                <Col span={24} style={{marginBottom: 20}}>
                    <Yueduliangpaihangtop20 height={400}/>
                </Col>
                <Col span={12}>
                    <Jieyuetushufenlei height={400}/>
                </Col>
                <Col span={12}>
                    <Butongshijianjieyuequshi height={400}/>
                </Col>
            </Row>
        );
    }
}

export default Index;
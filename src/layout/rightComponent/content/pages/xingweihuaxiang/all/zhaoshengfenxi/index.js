import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Shengyuanfenbutu from './shengyuanfenbutu'
import Shengyuanleixing from './shengyuanleixing'
import Minzhufenbu from './minzhufenbu'
import Zhaoshengrenshufenbu from './zhaoshengrenshufenbu'
import Zhaoshengshuliangqushi from './zhaoshengshuliangqushi'
import Luquzuigaofenyuzuidifenduibi from './luquzuigaofenyuzuidifenduibi'
import Ziyuanlvhetiaojilvfenxi from './ziyuanlvhetiaojilvfenxi'
import Baokaoredufenxi from './baokaoredufenxi'


class Index extends Component {
    render() {
        return (
            <Row gutter={16} style={{padding: 20}}>
                <Col span={24} style={{marginBottom: 20}}>
                    <Shengyuanfenbutu height={500}/>
                </Col>
                <Col span={12} style={{marginBottom: 20}}>
                    <Shengyuanleixing height={400}/>
                </Col>
                <Col span={12} style={{marginBottom: 20}}>
                    <Minzhufenbu height={400}/>
                </Col>
                <Col span={24} style={{marginBottom: 20}}>
                    <Zhaoshengrenshufenbu height={400}/>
                </Col>
                <Col span={24} style={{ marginBottom: 20}}>
                    <Zhaoshengshuliangqushi height={400}/>
                </Col>
                <Col span={24} style={{marginBottom: 20}}>
                    <Luquzuigaofenyuzuidifenduibi height={400}/>
                </Col>
                <Col span={24} style={{marginBottom: 20}}>
                    <Ziyuanlvhetiaojilvfenxi/>
                </Col>
                <Col span={24}>
                    <Baokaoredufenxi/>
                </Col>
            </Row>
        );
    }
}

export default Index;
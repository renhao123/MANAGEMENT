import React, {Component} from 'react';
import {Row, Col} from 'antd';
import Xueshengxiangqing from './xueshengxiangqing';
import Xiaofeihezizhujine from './xiaofeihezizhujine';
import Gexuenianzizhujine from './gexuenianzizhujine';
import Gerenlishichengji from './gerenlishichengji';
import Xiaofeijiegoufenxi from './xiaofeijiegoufenxi';


export default class Index extends Component {
    render () {
        return (
            <Row gutter={16} style={{padding: 20}}>
                <Col span={24} style={{marginBottom: 20}}>
                    <Xueshengxiangqing />
                </Col>

                <Col span={12} style={{marginBottom: 20}}>
                    <Xiaofeihezizhujine height={400} />
                </Col>

                <Col span={12} style={{marginBottom: 20}}>
                    <Gexuenianzizhujine height={400} />
                </Col>

                <Col span={12}>
                    <Gerenlishichengji height={400} />
                </Col>

                <Col span={12}>
                    <Xiaofeijiegoufenxi height={400} />
                </Col>
            </Row>
        )
    }
}
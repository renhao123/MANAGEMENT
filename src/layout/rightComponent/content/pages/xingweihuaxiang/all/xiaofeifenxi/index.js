import React, {Component} from 'react';
import {Row, Col} from 'antd';
import Xiaofeiqushi from './xiaofeiqushi';
import Xiaofeididianfenbu from './xiaofeididianfenbu';
import Shangpuliushuipaiming from './shangpuliushuipaiming';
import Xiaofeileixing from './xiaofeileixing';


export default class Index extends Component {
    render () {
        return (
            <Row gutter={16} style={{padding: 20}}>
                <Col span={24} style={{marginBottom: 20}}>
                    <Xiaofeiqushi height={400} />
                </Col>

                <Col span={8}>
                    <Xiaofeididianfenbu height={400} />
                </Col>

                <Col span={8}>
                    <Shangpuliushuipaiming height={400} />
                </Col>

                <Col span={8}>
                    <Xiaofeileixing height={400} />
                </Col>
            </Row>
        )
    }
}
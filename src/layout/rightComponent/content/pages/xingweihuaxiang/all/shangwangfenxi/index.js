import React, {Component} from 'react';
import {Row, Col} from 'antd';
import Shangwangjiankangdu from './shangwangjiankangdu';
import Shangwangshijianduanfenbu from './shangwangshijianduanfenbu';
import Gexueyuanshangwangshichangduibi from './gexueyuanshangwangshichangduibi';
import Shangwangshichangqushi from './shangwangshichangqushi';


export default class Index extends Component {
    render () {
        return (
            <Row gutter={16} style={{padding: 20}}>
                <Col span={12} style={{marginBottom: 20}}>
                    <Shangwangjiankangdu height={400} />
                </Col>

                <Col span={12} style={{marginBottom: 20}}>
                    <Shangwangshijianduanfenbu height={400} />
                </Col>

                <Col span={24} style={{marginBottom: 20}}>
                    <Gexueyuanshangwangshichangduibi height={400} />
                </Col>

                <Col span={24}>
                    <Shangwangshichangqushi height={450} />
                </Col>
            </Row>
        )
    }
}
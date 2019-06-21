import React, {Component} from 'react';
import {Row, Col} from 'antd';
import Biyequxiang from './biyequxiang';
import Biyequxiangqianshidechengshi from './biyequxiangqianshidechengshi';
import Jiuyelvfenxi from './jiuyelvfenxi';


export default class Index extends Component {
    render () {
        return (
            <Row gutter={16} style={{padding: 20}}>
                <Col span={15} style={{marginBottom: 20}}>
                    <Biyequxiang height={400} />
                </Col>

                <Col span={9} style={{marginBottom: 20}}>
                    <Biyequxiangqianshidechengshi height={400} />
                </Col>

                <Col span={24}>
                    <Jiuyelvfenxi height={400} />
                </Col>
            </Row>
        )
    }
}
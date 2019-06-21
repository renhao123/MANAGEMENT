import React, {Component} from 'react';
import {Row, Col} from 'antd';
import Xiangqing from './xiangqing';
import Xiaofeiqushi from './xiaofeiqushi';
import Gexuenianzizhujine from './gexuenianzizhujine';
import Gerenlishichengji from './gerenlishichengji';
import Xiaofeijiegou from './xiaofeijiegou';


export default class Index extends Component {
    render () {
        return (
            <Row gutter={16} style={{padding: 20}}>
                <Col span={24} style={{marginBottom: 20}}>
                    <Xiangqing/>
                </Col>
                <Col span={12} style={{ marginBottom:20}}>
                    <Xiaofeiqushi height={400}/>
                </Col>
                <Col span={12} style={{marginBottom:20}}>
                    <Gexuenianzizhujine height={400}/>
                </Col>
                <Col span={12}>
                    <Gerenlishichengji height={400}/>
                </Col>
                <Col span={12}>
                    <Xiaofeijiegou height={400}/>
                </Col>
            </Row>
        )
    }
}
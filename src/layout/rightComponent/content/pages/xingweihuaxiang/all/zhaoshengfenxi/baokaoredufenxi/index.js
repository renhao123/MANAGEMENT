import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import Gezhuanyebaokaoredubi from './gezhuanyebaokaoredubi'
import Geshengbaokaoredubi from './geshengbaokaoredubi'
import styles from './index.module.less'

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Card
                    className={styles.cardMain}
                    style={{height: 64, marginBottom: 10, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
                    title={<div className="common-title">报考热度分析</div>}
                    headStyle={{ border: "none" }}
                    bordered={false}
                />
                <Row>
                    <Col span={24} style={{marginBottom: 10}}>
                        <Gezhuanyebaokaoredubi height={400}/>
                    </Col>
                    <Col span={24}>
                        <Geshengbaokaoredubi height={400}/>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Index;
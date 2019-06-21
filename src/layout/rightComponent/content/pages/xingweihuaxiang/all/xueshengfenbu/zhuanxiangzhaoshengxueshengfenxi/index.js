import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import Zhuanxiangzhaoshengxueshengyuanxifenbu from './zhuanxiangzhaoshengxueshengyuanxifenbu'
import styles from './index.module.less'

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Card
                    className={styles.cardMain}
                    style={{height: 64, marginBottom: 10, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
                    title={<div className="common-title">专项招生学生分析（高校专项/国家专项）</div>}
                    extra={<span className="title-font">
                        全部
                        <span className="title-number">2534</span>
                        高校专项
                        <span className="title-number">332</span>
                        国家专项
                        <span className="title-number" style={{marginRight: 0}}>286</span>
                    </span>}
                    headStyle={{ border: "none" }}
                    bordered={false}
                />
                <Row>
                    <Col span={24} style={{height: 380}}>
                        <Zhuanxiangzhaoshengxueshengyuanxifenbu/>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Index;
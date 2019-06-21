import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import Diqulaiyuantop5 from './diqulaiyuantop5'
import Shaoshuminzuzhuanxiangshengminzuchengfen from './shaoshuminzuzhuanxiangshengminzuchengfen'
import Shaoshuminzuzhuanxiangshengyuanxifenbu from './shaoshuminzuzhuanxiangshengyuanxifenbu'
import styles from './index.module.less'

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Card
                    className={styles.cardMain}
                    style={{height: 64, marginBottom: 10, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
                    title={<div className="common-title">少数民族专项生分析</div>}
                    extra={<span className="title-font">
                        全部
                        <span className="title-number">2534</span>
                        男生
                        <span className="title-number">332</span>
                        女生
                        <span className="title-number" style={{marginRight: 0}}>286</span>
                    </span>}
                    headStyle={{ border: "none" }}
                    bordered={false}
                />
                <Row gutter={16}>
                    <Col span={12} style={{height: 410, marginBottom: 10}}>
                        <Diqulaiyuantop5/>
                    </Col>
                    <Col span={12} style={{height: 410, marginBottom: 10}}>
                        <Shaoshuminzuzhuanxiangshengminzuchengfen/>
                    </Col>
                    <Col span={24} style={{height: 380}}>
                        <Shaoshuminzuzhuanxiangshengyuanxifenbu/>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Index;
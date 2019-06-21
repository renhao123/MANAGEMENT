import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import Gezhuanyediyizhiyuanlvhetiaojilv from './gezhuanyediyizhiyuanlvhetiaojilv'
import Geshengdiyizhiyuanlvhetiaojilv from './geshengdiyizhiyuanlvhetiaojilv'
import styles from './index.module.less'

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Card
                    className={styles.cardMain}
                    style={{height: 64, marginBottom: 10, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
                    title={<div className="common-title">志愿率和调剂率分析</div>}
                    extra={<span className="title-font">
                        第一志愿率   
                        <span className="title-number">75.65%</span>
                        调剂率
                        <span className="title-number" style={{marginRight: 0}}>23.54%</span>
                    </span>}
                    headStyle={{ border: "none" }}
                    bordered={false}
                />
                <Row>
                    <Col span={24} style={{marginBottom: 10}}>
                        <Gezhuanyediyizhiyuanlvhetiaojilv height={400}/>
                    </Col>
                    <Col span={24}>
                        <Geshengdiyizhiyuanlvhetiaojilv height={400}/>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Index;
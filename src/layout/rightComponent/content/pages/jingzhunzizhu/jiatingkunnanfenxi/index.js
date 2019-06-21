import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import Filter from './filter';
import Jingjikunnanxueshengfenxi from './jingjikunnanxueshengfenxi';
import Butongjibierenshufenxi from './butongjibierenshufenxi';
import Butongjibierenjunzhi from './butongjibierenjunzhi';
import Jinjikunnanxueshengxuexi from './jinjikunnanxueshengxuexi';
import Jinjikunnanjiuyequxiang from './jinjikunnanjiuyequxiang';
import Gexueyuanxueshengfenbu from './gexueyuanxueshengfenbu';
import Jinjikunnanmingzufenbu from './jinjikunnanmingzufenbu';
import Shenyuanfenbu from './shenyuanfenbu';
import Renjunxiaofeiduibi from './renjunxiaofeiduibi';

export default class Index extends Component {
    render() {
        return (
            <Fragment>
                <Filter></Filter>
                <Row gutter={16} style={{padding: 20}}>
                    {/* 经济困难学生分析 */}
                    <Col span={12}style={{ marginBottom: 20}}>
                        <Jingjikunnanxueshengfenxi height={400}/>
                    </Col>

                    {/* 不同级别人数分析 */}
                    <Col span={12} style={{marginBottom: 20}}>
                        <Butongjibierenshufenxi height={400}/>
                    </Col>

                    {/* 不同级别人均值 */}
                    <Col span={12} style={{ marginBottom: 20}}>
                        <Butongjibierenjunzhi height={400}/>
                    </Col>

                    {/* 经济困难学生学习情况 */}
                    <Col span={12} style={{ marginBottom: 20}}>
                        <Jinjikunnanxueshengxuexi height={400}/>
                    </Col>

                    {/* 经济困难学生就业去向TOP5 */}
                    <Col span={12} style={{marginBottom: 20}}>
                        <Jinjikunnanjiuyequxiang height={400}/>
                    </Col>

                    {/* 经济困难学生民族分布TOP5 */}
                    <Col span={12} style={{ marginBottom: 20}}>
                        <Jinjikunnanmingzufenbu height={400}/>
                    </Col>

                    {/* 各学院经济困难学生分布 */}
                    <Col span={24} style={{marginBottom: 20}}>
                        <Gexueyuanxueshengfenbu height={400}/>
                    </Col>

                    {/* 经济困难学生生源地分布 */}
                    <Col span={24} style={{marginBottom: 20}}>
                        <Shenyuanfenbu height={400}/>
                    </Col>

                    {/* 人均月消费金额对比 */}
                    <Col span={24}>
                        <Renjunxiaofeiduibi height={400}/>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
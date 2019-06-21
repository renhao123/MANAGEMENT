import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Xueshengzhengtifenxi from './xueshengzhengtifenxi'
import Xueshengxingbiefenbu from './xueshengxingbiefenbu'
import Gexiaoqufenbu from './gexiaoqufenbu'
import Zaidugecengcifenbu from './zaidugecengcifenbu'
import Genianjifenbu from './genianjifenbu'
import Xuekefenbu from './xuekefenbu'
import Shaoshumingzuxueshengfenxi from './shaoshumingzuxueshengfenxi'
import Shaoshumingzuzhuanxiangfenxi from './shaoshumingzuzhuanxiangfenxi'
import Gangaotaiqiaoxueshengfenxi from './gangaotaiqiaoxueshengfenxi'
import Zhuanxiangzhaoshengxueshengfenxi from './zhuanxiangzhaoshengxueshengfenxi'


class Index extends Component {
    render() {
        let { filterValue } = this.props;
        return (
            <Row gutter={16} style={{padding: 20}}>
                <Col span={16} style={{height: 570, marginBottom: 20}}>
                    <Xueshengzhengtifenxi filterValue={filterValue} />
                </Col>
                <Col span={8} style={{height: 280, marginBottom: 10}}>
                    <Xueshengxingbiefenbu filterValue={filterValue} />
                </Col>
                <Col span={8} style={{height: 280, marginBottom: 20}}>
                    <Gexiaoqufenbu filterValue={filterValue} />
                </Col>
                <Col span={12} style={{height: 400, marginBottom: 20}}>
                    <Zaidugecengcifenbu filterValue={filterValue} />
                </Col>
                <Col span={12} style={{height: 400, marginBottom: 20}}>
                    <Genianjifenbu filterValue={filterValue} />
                </Col>
                <Col span={24} style={{marginBottom: 20}}>
                    <Xuekefenbu filterValue={filterValue} />
                </Col>
                <Col span={24} style={{marginBottom: 20}}>
                    <Shaoshumingzuxueshengfenxi filterValue={filterValue} />
                </Col>
                <Col span={24} style={{marginBottom: 20}}>
                    <Shaoshumingzuzhuanxiangfenxi filterValue={filterValue} />
                </Col>
                <Col span={24} style={{marginBottom: 20}}>
                    <Gangaotaiqiaoxueshengfenxi filterValue={filterValue} />
                </Col>
                <Col span={24}>
                    <Zhuanxiangzhaoshengxueshengfenxi filterValue={filterValue} />
                </Col>
            </Row>
        );
    }
}

export default Index;
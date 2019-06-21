import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import TopFilter from './topfilter';
import Shangwangjiankangdu from './shangwangjiankangdu'
import Shangwangshichangqushi from './shangwangshichangqushi'
import Xuenianshangwangshijiandianfenbu from './xuenianshangwangshijiandianfenbu'
import Jin7tianshangwangshijiandianfenbu from './jin7tianshangwangshijiandianfenbu'
import Shangwangjilu from './shangwangjilu'


export default class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
           years:"",
        }
    }

    refershFilter = (years) => {
        this.setState({years})
    }

    render() {
        return (
            <Fragment>
                <TopFilter refershFilter={(years)=>{this.refershFilter(years)}}/>
                <Row gutter={16} style={{padding: 20}}>
                    <Col span={8} style={{ marginBottom: 20}}>
                        <Shangwangjiankangdu height={400}/>
                    </Col>
                    <Col span={16} style={{marginBottom: 20}}>
                        <Shangwangshichangqushi height={400}/>
                    </Col>
                    <Col span={24} style={{marginBottom: 20}}>
                        <Xuenianshangwangshijiandianfenbu height={400}/>
                    </Col>
                    <Col span={24} style={{marginBottom: 20}}>
                        <Jin7tianshangwangshijiandianfenbu height={400}/>
                    </Col>
                    <Col span={24}>
                        <Shangwangjilu height={400}/>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
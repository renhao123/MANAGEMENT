import React, {Component} from 'react';
import {Row, Col} from 'antd';
import Shenfentedian from './shenfentedian';
import Xuejiqingkuang from './xuejiqingkuang';
import Jiangxuejin from './jiangxuejin';
import Rongyuchufen from './rongyuchufen';
import Shangkeqingkuang from './shangkeqingkuang';
import Minzuqingkuang from './minzuqingkuang'
import Xuexichengji from './xuexichengji'
import Biyeqingkuang from './biyeqingkuang'
import Xiaofeiqingkuang from './xiaofeiqingkuang';
import Yujingqingkuang from './yujingqingkuang'
import Xinlijiankang from './xinlijiankang';
import Shangwangqingkuang from './shangwangqingkuang';
import Sancanqingkuang from './sancanqingkuang';

export default class Index extends Component {
    render () {
        let { filterValue } = this.props;
        return (
            <Row gutter={16} style={{padding: 20}}>
                <Col span={12} style={{marginBottom: 20}}>
                    <Shenfentedian height={400} filterValue = {filterValue}/>
                </Col>
                <Col span={12} style={{marginBottom: 20}}>
                    <Xuejiqingkuang height={400}  filterValue={filterValue}/>
                </Col>
                <Col span={16} style={{marginBottom: 20}}>
                    <Jiangxuejin height={500} filterValue={filterValue} />
                </Col>
                <Col span={8} style={{marginBottom: 20}}>
                    <Rongyuchufen height={500} filterValue={filterValue} />
                </Col>
                <Col span={6} style={{marginBottom: 20}}>
                    <div style={{marginBottom: 20}}>
                        <Shangkeqingkuang height={300} filterValue={filterValue}/>
                    </div>
                    <Minzuqingkuang height={200} filterValue={filterValue} />
                </Col>
                <Col span={18} style={{marginBottom: 20}}>
                    <div style={{marginBottom: 20}}>
                        <Xuexichengji height={250} filterValue={filterValue}/>
                    </div>
                    <Biyeqingkuang height={250} />
                </Col>
                <Col span={8} style={{marginBottom: 20}}>
                    <Xiaofeiqingkuang height={400} filterValue={filterValue} />
                </Col>
                <Col span={16} style={{marginBottom: 20}}>
                    <Yujingqingkuang height={400} filterValue={filterValue} />
                </Col>
                <Col span={8}>
                    <Xinlijiankang height={300} filterValue={filterValue} />
                </Col>
                <Col span={8}>
                    <Shangwangqingkuang height={300} filterValue={filterValue} />
                </Col>
                <Col span={8}>
                    <Sancanqingkuang height={300} filterValue={filterValue} />
                </Col>
            </Row>
        )
    }
}
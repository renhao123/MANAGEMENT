import React, {Component} from 'react';
import {Row, Col} from 'antd';
import Chengjifenbu from './chengjifenbu';
import Pingjunchengji from './pingjunchengji';
import Guakekecheng from './guakekecheng';
import Kaoshitongguorenshuduibi from './kaoshitongguorenshuduibi';
import Benxueqiguakeyuce from './benxueqiguakeyuce';


export default class Index extends Component {
    render () {
        let { filterValue } = this.props;
        return (
            <Row gutter={16} style={{padding: '0 20px 20px 20px'}}>
                <div style={{fontSize: "16px", color:"rgba(0,0,0,0.45)", fontWeight: 400, lineHeight: "62px", marginLeft: "44px"}}>仅作为学生管理者判断学生学业状况的一个参考数据，不作为任何评奖评优或其他工作的评价指标！</div>

                <Col span={8} style={{marginBottom: 20}}>
                    <Chengjifenbu height={400} filterValue={filterValue}/>
                </Col>

                <Col span={8} style={{marginBottom: 20}}>
                    <Pingjunchengji height={400} filterValue={filterValue}/>
                </Col>

                <Col span={8} style={{marginBottom: 20}}>
                    <Guakekecheng height={400} filterValue={filterValue}/>
                </Col>

                <Col span={24} style={{marginBottom: 20}}>
                    <Kaoshitongguorenshuduibi height={400} filterValue={filterValue}/>
                </Col>

                <Col span={24}>
                    <Benxueqiguakeyuce height={600} filterValue={filterValue}/>
                </Col>
            </Row>
        )
    }
}
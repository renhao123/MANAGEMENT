import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Filter from './filter'
import Jiangzhuqingkuang from './jiangzhuqingkuang';
import Xueyeqingkuang from './xueyueqingkuang';
import Gerenrongyu from './gerenrongyu';
import Chengjiyuce from './chengjiyuce';
import Taokefenxi from './taokefenxi';
import Chengjipaiming from './chengjipaiming';
import Kebiaoqingkuang from './kebiaoqingkuang';
import styles from './index.module.less';

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            startYear:"",
            endYear:""
        }
    }

    //更新来自filter的数据
    refershFilter = (data) => {
        this.setState({
            startYear:data.startYear,
            endYear:data.endYear
        },()=>{
            console.log(this.state);
            //触发搜索
        })
    }
    render() {
        return (
            <React.Fragment>
                <Filter refershFilter={(data)=>{this.refershFilter(data)}}></Filter>
                <p className={styles.pageTips}>仅作为学生管理者判断学生学业状况的一个参考数据，不作为任何评奖评优或其他工作的评价指标！</p>
                <Row className={styles.row}>
                    <Col span={24}>
                        <Jiangzhuqingkuang startYear={this.state.startYear} endYear={this.state.endYear}/>
                    </Col>
                </Row>
                <Row gutter={16} className={styles.row}>
                    <Col span={12}>
                        <Xueyeqingkuang startYear={this.state.startYear} endYear={this.state.endYear}/>
                    </Col>
                    <Col span={12}>
                        <Gerenrongyu startYear={this.state.startYear} endYear={this.state.endYear}/>
                    </Col>
                </Row>
                <Row gutter={16} className={styles.row}>
                    <Col span={12}>
                        <Chengjiyuce startYear={this.state.startYear} endYear={this.state.endYear}/>
                    </Col>
                    <Col span={12}>
                        <Taokefenxi startYear={this.state.startYear} endYear={this.state.endYear}/>
                    </Col>
                </Row>
                <Row className={styles.row}>
                    <Col span={24}>
                        <Chengjipaiming startYear={this.state.startYear} endYear={this.state.endYear}/>
                    </Col>
                </Row>
                <Row className={styles.row}>
                    <Col span={24} style={{minHeight:700}}>
                        <Kebiaoqingkuang startYear={this.state.startYear} endYear={this.state.endYear}/>
                    </Col>
                </Row>
                {/* <p className={styles.copyRight}>版权所有 Copyright &#169 2019 中南财经政法大学</p> */}
            </React.Fragment>
        )
    }
}

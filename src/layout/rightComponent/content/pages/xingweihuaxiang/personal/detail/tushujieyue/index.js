import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import LibrtryCard from "./librtryCard";
import TopFilter from './topfilter';
import Classification from "./classification";
import BookList from "./bookList";
import Trend from "./Trend";
import Record from "./record";
import styles from './index.module.less';


export default class Librtry extends Component {
    constructor(props){
        super(props);
        this.state = {
            startYear:"",
            endYear:"",
        }
    }

    refershFilter = (data) => {
        console.log(data);
        this.setState({
            startYear:data.startYear,
            endYear:data.endYear
        })
    }

    render() {
        const {startYear,endYear} = this.state;
        return (
            <Fragment>
                <TopFilter refershFilter={(data)=>{this.refershFilter(data)}}/>
                <Row className={styles.rowContainer}>
                    <Col span={24}>
                        <LibrtryCard filterCondition={{startYear,endYear}}/>
                    </Col>
                </Row>
                <Row className={styles.rowContainer} gutter={24}>
                    <Col span={12}>
                        <Classification startYear={startYear} endYear={endYear}/>
                    </Col>

                    <Col span={12}>
                        <BookList startYear={startYear} endYear={endYear}/>
                    </Col>
                </Row>
                <Row className={styles.rowContainer}>
                    <Col span={24}>
                        <Trend startYear={startYear} endYear={endYear}/>
                    </Col>
                </Row>
                <Row className={styles.rowContainer}>
                    <Col span={24}>
                        <Record startYear={startYear} endYear={endYear}/>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
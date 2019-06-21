import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import Gangaotaiyuanxifenbu from './gangaotaiyuanxifenbu'
import styles from './index.module.less'
import {postAction} from '@/axios';

class Index extends Component {
    
    componentDidMount(){
        this.getData(this.props);
    }

    componentWillReceiveProps(nextProps){
        if(JSON.stringify(this.props) !== JSON.stringify(nextProps)){
            this.getData(nextProps);
        }
    }

    getData(props){
        let { filterValue } = props;
        postAction('/bigdata/portrait/group/student/origin/gatq/statistics', {
            academicYear: filterValue.curYear,
            classCode: filterValue.curClass,
            collegeCode: filterValue.curCollege,
            grade: filterValue.curGrade,
            majorCode: filterValue.curMajor,
            studentType: filterValue.curStudentType
        }).then(res => {
            if(res.success){
                
            }
        })
    }

    render() {
        let {filterValue} = this.props;
        return (
            <React.Fragment>
                <Card
                    className={styles.cardMain}
                    style={{height: 64, marginBottom: 10, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
                    title={<div className="common-title">港澳台侨学生分析</div>}
                    extra={<span className="title-font">
                        全部
                        <span className="title-number">2534</span>
                        香港
                        <span className="title-number">332</span>
                        澳门
                        <span className="title-number">332</span>
                        台湾
                        <span className="title-number">332</span>
                        华侨
                        <span className="title-number" style={{marginRight: 0}}>286</span>
                    </span>}
                    headStyle={{ border: "none" }}
                    bordered={false}
                />
                <Row>
                    <Col span={24} style={{height: 380}}>
                        <Gangaotaiyuanxifenbu filterValue={filterValue}/>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Index;
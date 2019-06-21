import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
// import {postAction} from '@/axios';
import Benke from './benke'
import styles from './index.module.less'

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){
        this.getData(this.props);
    }

    componentWillReceiveProps(nextProps){
        if(JSON.stringify(this.props) !== JSON.stringify(nextProps)){
            this.getData(nextProps);
        }
    }

    getData(props){
        // let { filterValue } = props;
        // postAction('/bigdata/portrait/group/minority/sex/statistics', {
        //     academicYear: filterValue.curYear,
        //     classCode: filterValue.curClass,
        //     collegeCode: filterValue.curCollege,
        //     grade: filterValue.curGrade,
        //     majorCode: filterValue.curMajor,
        //     studentType: filterValue.curStudentType
        // }).then(res => {
            
        // })
    }

    render() {
        let {filterValue} = this.props;
        return (
            <React.Fragment>
                <Card
                    className={styles.cardMain}
                    style={{height: 64, marginBottom: 10, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
                    title={<div className="common-title">学科分布</div>}
                    headStyle={{ border: "none" }}
                    bordered={false}
                />
                <Row gutter={16}>
                    <Col span={8} style={{height: 410}}>
                        <Benke filterValue={filterValue}/>
                    </Col>
                    <Col span={8} style={{height: 410}}>
                        <Benke filterValue={filterValue}/>
                    </Col>
                    <Col span={8} style={{height: 410}}>
                        <Benke filterValue={filterValue}/>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Index;
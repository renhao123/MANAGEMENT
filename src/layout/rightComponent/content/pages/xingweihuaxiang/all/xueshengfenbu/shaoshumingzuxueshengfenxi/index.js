import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import {postAction} from '@/axios';
import Diqulaiyuantop5 from './diqulaiyuantop5'
import Shaoshuminzuxueshengminzuchengfen from './shaoshuminzuxueshengminzuchengfen'
import styles from './index.module.less'

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            boy:0,
            girl:0
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
        let { filterValue } = props;
        postAction('/bigdata/portrait/group/minority/sex/statistics', {
            academicYear: filterValue.curYear,
            classCode: filterValue.curClass,
            collegeCode: filterValue.curCollege,
            grade: filterValue.curGrade,
            majorCode: filterValue.curMajor,
            studentType: filterValue.curStudentType
        }).then(res => {
            if(res.success){
                let boy = 0;
                let girl = 0;
                res.obj.forEach(item => {
                    if(item.sex === "男"){
                        boy = item.studentNum;
                    }else if(item.sex === "女"){
                        girl = item.studentNum;
                    }
                });
                this.setState({boy,girl})
            }
        })
    }

    render() {
        let {filterValue} = this.props;
        const total = this.state.boy + this.state.girl;
        return (
            <React.Fragment>
                <Card
                    className={styles.cardMain}
                    style={{height: 64, marginBottom: 10, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
                    title={<div className="common-title">少数民族学生分析</div>}
                    extra={<span className="title-font">
                        全部
                        <span className="title-number">{total}</span>
                        男生
                        <span className="title-number">{this.state.boy}</span>
                        女生
                        <span className="title-number" style={{marginRight: 0}}>{this.state.girl}</span>
                    </span>}
                    headStyle={{ border: "none" }}
                    bordered={false}
                />
                <Row gutter={16}>
                    <Col span={12} style={{height: 410}}>
                        <Diqulaiyuantop5 filterValue={filterValue}/>
                    </Col>
                    <Col span={12} style={{height: 410}}>
                        <Shaoshuminzuxueshengminzuchengfen filterValue={filterValue}/>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Index;
import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import Jiangxiejin from './jiangxuejin';
import Chufen from './chufen';
import NoData from '../nodata';
// import {postAction} from '@/axios';

class Index extends Component {
    state = {
        data1: [
            {
                item: "学中",
                count: 13
            },
            {
                item: "学良",
                count: 17
            },
            {
                item: "学优",
                count: 21
            },
            {
                item: "学霸",
                count: 40
            }
        ],
        data2: [
            {
                item: "学中",
                count: 13
            },
            {
                item: "学良",
                count: 17
            },
            {
                item: "学优",
                count: 21
            },
            {
                item: "学霸",
                count: 40
            }
        ]
    }

    // componentDidMount(){
    //     this.getData(this.props);
    // }

    // componentWillReceiveProps(nextProps){
    //     if(JSON.stringify(this.props) !== JSON.stringify(nextProps)){
    //         this.getData(nextProps);
    //     }
    // }

    // getData(props){
    //     let { filterValue } = props;
    //     postAction('/bigdata/portrait/group/college/statistics', {
    //         academicYear: filterValue.curYear,
    //         classCode: filterValue.curClass,
    //         collegeCode: filterValue.curCollege,
    //         grade: filterValue.curGrade,
    //         majorCode: filterValue.curMajor,
    //         studentType: filterValue.curStudentType
    //     }).then(res => {
    //         if(res.success){
                
    //         }
    //     })
    // }

    render() {
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>荣誉处分</div>
                </div>}
                bodyStyle={{height: this.props.height - 10}}
            >
                <Row style={{height: this.props.height - 60}}>
                    <Col span={24} style={{height: (this.props.height - 130) / 2, marginBottom: 40}}>
                        <h6 style={{fontSize: 16, fontWeight: 500, color: 'rgba(0,0,0,0.45)', textAlign: 'center'}}>奖学金</h6>
                        {
                            this.state.data1.length>0
                            ?
                            <Jiangxiejin
                                data={this.state.data1}
                                padding={[0, 0, 0, 0]}
                                height={(this.props.height - 130) / 2 - 40}
                            />
                            :
                            <NoData/>
                        }
                    </Col>
                    <Col span={24} style={{height: (this.props.height - 130) / 2}}>
                        <h6 style={{fontSize: 16, fontWeight: 500, color: 'rgba(0,0,0,0.45)', textAlign: 'center'}}>处分</h6>
                         {
                            this.state.data2.length>0
                            ?
                            <Chufen
                                data={this.state.data2}
                                padding={[0, 0, 0, 0]}
                                height={(this.props.height - 130) / 2 - 40}
                            />
                            :
                            <NoData/>
                        }
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default Index;
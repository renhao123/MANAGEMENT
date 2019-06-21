import React, {Component} from 'react';
import {Card, Row, Col, Button} from 'antd';
import {withRouter} from 'react-router-dom';


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detail:[
                {label: '姓名:',value: "龙祥"},
                {label: '学号:',value: "2122731"},
                {label: '性别:',value: "男"},
                {label: '学院:',value: "机电工程学院"},
                {label: '专业:',value: "模具设计与制造"},
                {label: '经济困难原因:',value: "家庭成员有重大疾病"},
                {label: '认定等级:',value: "一级"},
                {label: '最近一次资助金额:',value: "200元"},
                {label: '发放时间:',value: "2018-10-02"},
                {label: "2018学年资助金额：",value: "2000元"},
                {label: "累计到2018学年历史资助总金额:",value: "2000元"}
            ]
        }
    }

    backtolist=()=>{
        // 返回之前点击的列表页面
        const jzzz=JSON.parse(localStorage.getItem('jzzz'))
        this.props.history.push(jzzz.backUrl)
    }

    render () {
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>经济困难学生详情</div>
                </div>}
                bodyStyle={{height: this.props.height - 10}}
                extra={
                    <Button type='primary' onClick={this.backtolist}>返回</Button>
                }
            >
                <Row style={{backgroundColor: '#fff',padding: '10px 20px'}}>

                    {
                        this.state.detail.map(
                            item => <Col span={6} key={item.label} style={{marginBottom:5, paddingRight:20}}>
                                <span className="label">{item.label}</span>
                                <span className="value">{item.value}</span>
                            </Col>
                        )
                    }
                </Row>
            </Card>
        )
    }
}

export default withRouter(Index)
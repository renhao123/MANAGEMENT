import React, {Component} from 'react';
import {Row, Col, Card, Button} from 'antd';
import {withRouter} from 'react-router-dom';

class Index extends Component {
    state={
        detail: [
            {label: '姓名:',value: '周可'},
            {label: '学号:',value: 123},
            {label: '性别:',value: '女'},
            {label: '学院:',value: 'xxx'},
            {label: '专业:',value: 'xxx'},
            {label: '困难原因:', value: 'xxx'},
            {label: '认定等级:', value: 'xxx'},
            {label: '最近一次资助金额:', value: 'xxx'},
            {label: '发放时间:', value: 'xxx'},
            {label: '经济困难指数:', value: 'xxx'},
            {label: '2018学年资助金额:', value: 'xxx'},
            {label: `累计到2019学年历史资助总金额:`, value: 'xxx'},
        ]
    }
    goBack = () => {
        this.props.history.goBack();
    }
    render () {
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bodyStyle={{paddingTop:0}}
                bordered={false}
                title={<div className="common-title">异常家庭经济困难学生详情</div>}
                extra={<Button type='primary' onClick={this.goBack}>返回</Button>}
            >
                <Row style={{backgroundColor: '#fff',padding: '10px 20px'}}>
                    {
                        this.state.detail.map(
                            item =>
                            <Col span={6} key={item.label} style={{marginBottom:5}}>
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

export default withRouter(Index);
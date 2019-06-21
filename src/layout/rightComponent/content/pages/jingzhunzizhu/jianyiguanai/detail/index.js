import React, { Component} from 'react';
import { Row,Col,Button,Card } from 'antd'
import {withRouter} from 'react-router-dom'

import Xiaofei from './xiaofei'
import Zizhujine from './zizhujine'
import Lishichengji from './lishichengji'
import Xiaofeijiegou from './xiaofeijiegou'
class Detail extends Component {

    constructor(props){
        super(props);
        this.state = {
            year: '',
            yearList: ['2016', '2017', '2018'],
            detail: [],
            newLineData: [
                // { month: "Jan", Tokyo: 7.0, London: 3.9 }
            ],
        }
        this.getDetailData = this.getDetailData.bind(this);
    }

    getDetailData() {
        // let _studentNo = JSON.parse(localStorage.getItem('jzzz')).studentNo;
        // let params = {
        //     studentNo:_studentNo
        // }
        // postAction(
        //     "/bigdata/povertyAnalyze/studentSupportInfo",
        //     params
        // ).then((res) => {
        //     if (res.success){                
        //         this.setState({
        //             detail: [
        //                 {label: '姓名:',value: res.obj.studentName},
        //                 {label: '学号:',value: res.obj.studentId},
        //                 {label: '性别:',value: res.obj.gender},
        //                 {label: '学院:',value: res.obj.collegeName},
        //                 {label: '专业:',value: res.obj.majorName},
        //                 {label: '月均消费金额:',value: res.obj.monthlyConsume+'元'},
        //                 {label: `${res.obj.schoolYear}学年资助金额:`,value: res.obj.schoolYearSubsidize+'元'},
        //                 {label: `累计到${res.obj.schoolYear}学年历史资助总金额:`,value: res.obj.totalSubsidize+'元'}
                        
        //             ]
        //         })
        //     } else {
        //         this.setState({
        //             detail:[]
        //         })
        //     }
        // })
        let res={
            "success": true,
            "msg": "成功",
            "obj": {
                "schoolYear": "2018",
                "studentId": "03217713",
                "studentNo": "213170178",
                "studentName": "梁秋慧",
                "gender": "女",
                "collegeName": "能源与环境学院",
                "majorName": "环境工程",
                "monthlyConsume": "657.20",
                "schoolYearSubsidize": "",
                "totalSubsidize": ""
            },
            "errorCode": null
        }
        if (res.success){                
            this.setState({
                detail: [
                    {label: '姓名:',value: res.obj.studentName},
                    {label: '学号:',value: res.obj.studentId},
                    {label: '性别:',value: res.obj.gender},
                    {label: '学院:',value: res.obj.collegeName},
                    {label: '专业:',value: res.obj.majorName},
                    {label: '月均消费金额:',value: res.obj.monthlyConsume+'元'},
                    {label: `${res.obj.schoolYear}学年资助金额:`,value: res.obj.schoolYearSubsidize+'元'},
                    {label: `累计到${res.obj.schoolYear}学年历史资助总金额:`,value: res.obj.totalSubsidize+'元'}
                    
                ]
            })
        } else {
            this.setState({
                detail:[]
            })
        }
    }

	componentDidMount() {
        this.getDetailData()
    }

    backtolist=()=>{
        // 返回之前点击的列表页面
        const jzzz=JSON.parse(localStorage.getItem('jzzz'))
        this.props.history.push(jzzz.backUrl)
    }

    render() {
        return (
            <div className="pkdetail" style={{padding:20}}>
                <Card
                    style={{boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                    headStyle={{border:"none"}}
                    bordered={false}
                    title={<div style={{ fontSize: 16, fontWeight: 700 }}>建议关爱学生详情</div>}
                    extra={<Button type='primary' onClick={this.backtolist}>返回</Button>}
                >
                    <Row style={{backgroundColor: '#fff',padding: '10px 20px'}}>
                        {
                            this.state.detail.map( item =>
                                <Col span={6} key={item.label} style={{marginBottom:5}}>
                                    <span className="label">{item.label}</span>
                                    <span className="value">{item.value}</span>
                                </Col>)
                        }
                    </Row>
                </Card>
				<Row gutter={16}>
                    <Col span={12} style={{marginTop:20}}>
                        <Xiaofei height={400}/>
                    </Col>
                    <Col span={12} style={{marginTop:20}}>
                        <Zizhujine height={400}/>
                    </Col>
                    <Col span={12} style={{marginTop:20}}>
                        <Lishichengji height={400}/>
                    </Col>
                    <Col span={12} style={{marginTop:20}}>
                        <Xiaofeijiegou height={400}/>
                    </Col>
                </Row>
			</div>
        );
    }
}

export default withRouter(Detail);
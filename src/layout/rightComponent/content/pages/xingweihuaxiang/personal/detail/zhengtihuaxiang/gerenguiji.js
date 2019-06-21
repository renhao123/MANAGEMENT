import React, { Component } from 'react';
import { Card, Row, Col, DatePicker, Timeline } from 'antd';
import PathMap from "./pathmap";


// const { RangePicker } = DatePicker;
export default class Guiji extends Component {
    state = {
        data: [//学生坐标数据
            //     {
            //         "id": " 1",
            //         "studentNo": "131594206",
            //         "address": "南京工程大学食堂",
            //         "startTime": "2018-08-29 00:10:00",
            //         "endTime": "2018-08-29 00:11:00",
            //         "stayTime": "1",
            //         "longitude": 118.88795,
            //         "latitude": 31.935234
            //     }
        ],
        trajectory: [],
        date:[],//可选日期
    }
    //获取当日学生轨迹数据
    getData = () => {
        let res = {
            success:true,
            obj:[{
                    address: "文波楼",
                    // collegeCode: "100172",
                    coor: "114.4002280497,30.4814502681",
                    // dataType: 1,
                    remark: "上课打卡",
                    startDate: 1561939365000,
                    // studentNo: "213171172",
                },{
                    address: "随缘餐厅",
                    // collegeCode: "100172",
                    coor: "114.3865211734,30.4797285616",
                    // dataType: 1,
                    remark: "一卡通消费",
                    startDate: 1561944212000,
                    // studentNo: "213171172",
                }
            ],
        }
        if (res.success && res.obj.length > 0) {
            let pageInfo = res.obj;
            let newData = [];
            let trajectoryData = []
            pageInfo.forEach((item) => {
                if (item.coor ) {
                    newData.push(
                        {
                            lng: item.coor ? item.coor.split(",")[0] : null,    //经度
                            lat: item.coor ? item.coor.split(",")[1] : null,     //纬度
                            // stay: item.startDate ? item.startDate : "",
                            address: item.address
                        }
                    )
                } else {
                    newData.push(
                        {
                            lng: 118.8264800000,    //经度
                            lat: 31.8939740000,     //纬度
                            // stay: item.startDate ? item.startDate : "",
                            address: item.address
                        }
                    )
                }

                trajectoryData.push({
                    startDate: item.startDate ? this.formatDateTime(item.startDate) : "暂无",
                    address: item.address,
                    remark: item.remark,
                    id: item.id
                })
            })
            this.setState({ data: newData, trajectory: trajectoryData });
        }
    }

    onChange(date, dateString) {
        this.getData(dateString);
    }

    disabledDate(a,time){
        if(!time){
			return false
		}else{
            if(a.length>0){
                return a.indexOf(time.format("YYYY-MM-DD")) < 0
            }else{
                return true
            }
		}
    }

    //转换时间
    formatDateTime(timeStamp) {
        let date = new Date(timeStamp);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let h = date.getHours();
        let i = date.getMinutes();
        let s = date.getSeconds();
        m = m < 10 ? ('0' + m) : m;
        d = d < 10 ? ('0' + d) : d;
        h = h < 10 ? ('0' + h) : h;
        i = i < 10 ? ('0' + i) : i;
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + m + '-' + d+' '+ h + ':' + i + ':' + s;
    }

    //获取可选日期
    getDate () {
        let res = {
            success:true,
            obj:[ "2019-05-20","2019-05-21", "2019-05-22","2019-05-23", "2019-05-24","2019-05-25","2019-06-25","2019-07-25"]
        }
        if (res.success) {
            this.setState({
                date: res.obj
            })
        } else {
            this.setState({
                date: []
            })
        }
    }

    render() {
        // let student = JSON.parse(localStorage.getItem("studentItem")).studentName;
        let studentName = "张三";
        const { data, trajectory } = this.state;
        return (
            <Card
                title={<div className="common-title">个人轨迹分析</div>}
                headStyle={{ border: 'none' }}
                bordered={false}
                bodyStyle={{ paddingTop: 0 }}
                style={{ height: 600,marginBottom:20,boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
            >
                <Row>
                    <Col span={18}>
                        <PathMap data={data} name={studentName} initMap={(map) => {
                            map.enableScrollWheelZoom(true);
                            map.centerAndZoom(new window.BMap.Point(114.3928022151,30.4790188108), 18);
                            map.setCurrentCity("武汉");
                        }}
                            height={480}
                        />
                    </Col>
                    <Col span={6}>
                        <DatePicker
                        onChange={this.onChange.bind(this)} 
                        format={"YYYY-MM-DD"}
                        disabledDate={this.disabledDate.bind(this,this.state.date)}

                        style={{ marginLeft: '20px', width:'90%' }} />
                        <Timeline style={{ marginTop: 20, marginLeft: 30, height: 450, overflowY: 'scroll' }}>
                            {
                                trajectory && trajectory.length > 0
                                    ?
                                    trajectory.map(({ startDate, address, remark },index) => (
                                        <Timeline.Item key={index}>
                                            <p>{startDate}</p>
                                            <p>{address}</p>
                                            <p>轨迹分析：{remark}</p>
                                        </Timeline.Item>
                                    ))
                                    :
                                    <div style={{ position: 'relative', top: 200, left: 0 }}>暂无轨迹</div>
                            }
                        </Timeline>
                    </Col>
                </Row>
            </Card>
        )
    }

    componentDidMount () {
        this.getDate()
    }
}
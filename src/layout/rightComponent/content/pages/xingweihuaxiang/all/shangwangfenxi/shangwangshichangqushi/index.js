import React, {Component} from 'react';
import {Card, Select} from 'antd';
import ShowChart from './showchart';
import NoData from './nodata';

const Option=Select.Option;

let defaultColumns=[
    {
        title:'序号',
        dataIndex: 'key',
    },{
        title: '月份',
        dataIndex: 'surfMonth',
    }
]

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fields:["经济学院", "教育科学学院（教师教育学院）", "体育学院", "人文学院", "外国语学院", "艺术学院", "数学与物理科学学院", "化学化工学院", "信电工程学院", "机电工程学院", "土木工程学院", "环境工程学院", "食品（生物）工程学院", "管理学院", "马克思主义学院", "全校平均上网时长"],
            selectKeys:["全校平均上网时长"],
            data: [
                {
                    surfMonth: "1月",
                    "经济学院": "0.00",
                    "教育科学学院（教师教育学院）": "0.00",
                }, {
                    surfMonth: "2月",
                    "经济学院": "0.00",
                    "教育科学学院（教师教育学院）": "0.00",
                }, {
                    surfMonth: "3月",
                    "经济学院": "0.00",
                    "教育科学学院（教师教育学院）": "0.00",

                }, {
                    surfMonth: "4月",
                    "经济学院": "0.00",
                    "教育科学学院（教师教育学院）": "0.00",

                }, {
                    surfMonth: "5月",
                    "经济学院": "0.00",
                    "教育科学学院（教师教育学院）": "0.00",

                }, {
                    surfMonth: "6月",
                    "经济学院": "0.00",
                    "教育科学学院（教师教育学院）": "0.00",

                }, {
                    surfMonth: "7月",
                    "经济学院": "0.00",
                    "教育科学学院（教师教育学院）": "0.00",

                }, {
                    surfMonth: "8月",
                    "经济学院": "0.00",
                    "教育科学学院（教师教育学院）": "3.07",

                }, {
                    surfMonth: "9月",
                    "经济学院": "12.37",
                    "教育科学学院（教师教育学院）": "120.99",

                }, {
                    surfMonth: "10月",
                    "经济学院": "40.96",
                    "教育科学学院（教师教育学院）": "145.42",

                }, {
                    surfMonth: "11月",
                    "经济学院": "93.98",
                    "教育科学学院（教师教育学院）": "197.86",

                }, {
                    surfMonth: "12月",
                    "经济学院": "84.49",
                    "教育科学学院（教师教育学院）": "229.23",

                }
            ]
        }
    }

    handleSelectChange=(value)=>{
        console.log(value,"value")
        this.setState({
            selectKeys:value
        },()=>{
            this.filterData()
        })
    }

    filterData=()=>{
        // 根据当前选择的项过滤数据
        let origin=JSON.parse(JSON.stringify(this.state.data))
        let keys=this.state.selectKeys
        if(keys.length === 0){
            this.setState({
                data:[],
                columns:[]
            })
        }else{
            let newData=origin.map(item=>{
                for(let i in item){
                    if(keys.indexOf(i) <0 && i !=='surfMonth'){
                        delete item[i]
                    }
                }
                return item
            })

            //将折线图的值转换为Number类型
            newData = newData.map((item,index) => {
                for(let i in item){
                    if (i !== 'surfMonth') {
                        item[i] = Number(item[i])
                    }
                }
                return item
            })

            // 拼接表头
            let _columns=[]
            keys.forEach(item=>{
                _columns.push({
                    title:item,
                    dataIndex:item,
                })
            })
            let tmp=[...defaultColumns,..._columns]
            this.setState({
                data:newData,
                columns:tmp
            })
        }

    }

    render () {
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>上网时长趋势<span style={{ display: 'inline-block', fontSize: 12, fontWeight: 400, color: '#4A4A4A', marginLeft: 10 }}>单位：小时</span></div>
                </div>}
                bodyStyle={{height: this.props.height - 10}}
            >
                {
                    this.state.data.length>0
                        ?
                        <React.Fragment>
                            <Select
                                mode="multiple"
                                style={{width:500}}
                                onChange={this.handleSelectChange}
                                value={this.state.selectKeys}
                            >
                                {
                                    this.state.fields.map((item,index)=><Option key={index} value={item}>{item}</Option>)
                                }
                            </Select>
                            <ShowChart
                                data={this.state.data}
                                padding={[10, 30, 80, 80]}
                                height={this.props.height - 60}
                            />
                        </React.Fragment>
                        :
                        <NoData/>
                }
            </Card>
        )
    }
}
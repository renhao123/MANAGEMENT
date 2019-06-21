import React, {Component} from 'react';
import {Card} from 'antd';
import ShowChart from './showchart';
import DataSet from '@antv/data-set';
import NoData from '../nodata';


export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataList:[
                {hour:"00:00","星期一":9,"星期二":3,"星期三":4,"星期四":8,"星期五":7,"星期六":4,"星期日":5},
                {hour:"01:56","星期一":7,"星期二":2,"星期三":5,"星期四":9,"星期五":6,"星期六":3,"星期日":6},
                {hour:"02:34","星期一":6,"星期二":1,"星期三":5,"星期四":10,"星期五":5,"星期六":2,"星期日":7},
                {hour:"03:10","星期一":5,"星期二":2,"星期三":6,"星期四":9,"星期五":4,"星期六":1,"星期日":8},
                {hour:"04:50","星期一":4,"星期二":3,"星期三":7,"星期四":8,"星期五":3,"星期六":2,"星期日":9},
            ],
        }
    }

    render () {
        let data = [];
        if(this.state.dataList.length>0){
            const fields = Object.keys(this.state.dataList[0]).slice(1);
            const { DataView } = DataSet;
            data = new DataView().source(this.state.dataList).transform({
                  type:'fold',
                  fields: fields, // 展开字段集
                  key: 'weekday', // key字段
                  value: 'value', // value字段
            });
        }
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>近7天上网时间点分布</div>
                </div>}
                bodyStyle={{height: this.props.height - 10}}
            >
                {
                    this.state.dataList.length>0
                        ?
                        <ShowChart
                            data={data}
                            padding={[0,30,30,45]}
                            height={this.props.height - 60}
                        />
                        :
                        <NoData/>
                }
            </Card>
        )
    }
}
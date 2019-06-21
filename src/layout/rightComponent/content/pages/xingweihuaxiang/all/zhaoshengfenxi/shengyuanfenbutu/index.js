import React, {Component} from 'react';
import {Card} from 'antd';
import ShowChart from './showchart';
import NoData from './nodata';


export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:'湖南',value:3138},
                {name:'安徽',value:30},
                {name:'北京',value:28},
                {name:'福建',value:64},
                {name:'甘肃',value:2},
                {name:'广东',value:649},
                {name:'广西',value:6},
                {name:'贵州',value:2},
                {name:'海南',value:9},
                {name:'黑龙江',value:3},
                {name:'湖北',value:31},
                {name:'吉林',value:1},
                {name:'江苏',value:48},
                {name:'江西',value:9},
                {name:'辽宁',value:5},
                {name:'内蒙古',value:6},
                {name:'山东',value:3},
                {name:'山西',value:6},
                {name:'陕西',value:4},
                {name:'上海',value:39},
                {name:'四川',value:11},
                {name:'天津',value:1},
                {name:'新疆',value:11},
                {name:'云南',value:14},
                {name:'浙江',value:161},
                {name:'重庆',value:29},
                {name:'青海',value:0},
                {name:'西藏',value:0}
            ]
        }
    }
    render () {
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>生源分布图<span style={{float: 'right',color: '#22cc91'}}>总人数：2398</span></div>
                </div>}
                bodyStyle={{height: this.props.height - 10}}
            >
                {
                    this.state.data.length>0
                        ?
                        <ShowChart
                            data={this.state.data}
                            height={this.props.height - 60}
                        />
                        :
                        <NoData/>
                }
            </Card>
        )
    }
}
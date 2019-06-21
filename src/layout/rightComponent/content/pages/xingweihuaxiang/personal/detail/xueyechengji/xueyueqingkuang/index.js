import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import NoData from './noData';
import Chart from './chart';

export default function Index(props){

    const [data,setData] = useState([
        // {year:"2018-2019学年",专业平均分数:50,个人分数:60,专业平均绩点:40,个人绩点:20},
        // {year:"2019-2020学年",专业平均分数:70,个人分数:33,专业平均绩点:57,个人绩点:82}
    ]);

    //根据新的筛选条件更新data
    useEffect(()=> {
        // let filterCondition = props.filterCondition;
        function getData(){
            //获取数据
            setData([
                {year:"2018-2019学年",专业平均分数:50,个人分数:60,专业平均绩点:40,个人绩点:20},
                {year:"2019-2020学年",专业平均分数:70,个人分数:33,专业平均绩点:57,个人绩点:82}
            ])
        };
        getData();
    },[props.filterCondition])
    
    return(
            <Card 
                title={
                    <React.Fragment>
                        <span style={{fontSize:16,fontWeight:"bold"}}>个人历史学业情况</span>
                        <span style={{fontSize:12,marginLeft:10, fontWeight: 400}}>单位：分</span>
                    </React.Fragment>
                }
                style={{ boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius:4}}
                headStyle={{ border: "none"}}
                bordered={false}
                bodyStyle={{ paddingTop: 0,height:310}}
            >
                {
                    data.length>=0?
                    <Chart data={data}/>:
                    <NoData height={310}/>
                }
            </Card>
    )
}

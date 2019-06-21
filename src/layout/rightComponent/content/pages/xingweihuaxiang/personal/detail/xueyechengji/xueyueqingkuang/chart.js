import React from 'react'
import { Chart,  Geom, Axis, Tooltip, Legend } from "bizcharts";
import DataSet from "@antv/data-set";
// import { Divider } from 'antd';

export default class Index extends React.Component {
	render () {
        const scale = {
            专业平均绩点: {
              type: 'linear',
              min: 0,
              max: 100,
            },
            专业平均分数: {
                type: 'linear',
                min: 0,
                max: 100,
            },
            个人分数: {
                type: 'linear',
                min: 0,
                max: 100,
            },
            个人绩点: {
                type: 'linear',
                min: 0,
                max: 100,
            },
        };
        const { data } = this.props;
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.transform({
        type: 'fold',
        fields: ['专业平均分数','个人分数'], // 展开字段集
        key: 'type', // key字段
        value: 'value', // value字段
        });
        return (
            <Chart height={280} forceFit data={dv} scale={scale} padding="auto" >
                <Legend
                    custom
                    allowAllCanceled
                    items={[
                    { value: '专业平均分数', marker: { symbol: 'circle', fill: '#3182bd', radius: 5 } },
                    { value: '个人分数', marker: { symbol: 'circle', fill: '#41a2fc', radius: 5 } },
                    { value: '专业平均绩点', marker: { symbol: 'circle', fill: '#54ca76', radius: 5 } },
                    { value: '个人绩点', marker: { symbol: 'circle', fill: '#fad248', radius: 5, lineWidth: 3 } },
                    ]}
                />
                <Axis name="year" />
                <Axis name="value" position={'left'} />
                <Axis name="专业平均绩点"  visible={false}/>
                    <Axis name="个人绩点"  visible={false}/>
                <Tooltip />
                <Geom
                    type="interval"
                    position="year*value"
                    color={['type', (value) => {
                    if (value === '专业平均分数') {
                        return '#2b6cbb';
                    }
                    if (value === '个人分数') {
                        return '#41a2fc';
                    }
                    }]}
                    adjust={[{
                    type: 'dodge',
                    marginRatio: 1 / 32,
                    }]}
                />
                <Geom type="line" position="year*专业平均绩点" color="#fad248" size={3} />
                    <Geom type="line" position="year*个人绩点" color="#54ca76" size={3} />
                </Chart>
        )
	}
}
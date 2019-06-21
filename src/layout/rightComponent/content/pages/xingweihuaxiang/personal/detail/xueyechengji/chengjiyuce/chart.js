import React, { Component } from 'react'
import { Chart, Axis, Tooltip, Geom, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';

export default class Chengjiyuce extends Component {
    render() {
        const {data} = this.props;
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.transform({
            type: 'fold',
            fields: ['及格', '不及格'], // 展开字段集
            key: 'type', // key字段
            value: 'value', // value字段
        });
        return (
            <Chart height={330} forceFit data={dv} padding={[20,20,40,40]}>
                <Legend
                    custom
                    allowAllCanceled
                    items={[
                        { value: '及格', marker: { symbol: 'circle', fill: '#3182bd', radius: 5 } },
                        { value: '不及格', marker: { symbol: 'circle', fill: '#41a2fc', radius: 5 } },
                        { value: '平均成绩', marker: { symbol: 'circle', fill: '#fad248', radius: 5, lineWidth: 3} }
                    ]}
                />
                <Axis name="major" />
                <Axis name="value" position={'left'} />
                <Axis name="平均成绩" visible={false}/>
                <Tooltip />
                <Geom
                    type="intervalStack"
                    position="major*value"
                    color={['type', (value) => {
                        if (value === '及格') {
                            return '#22CC91';
                        }
                        if (value === '不及格') {
                            return '#F36464';
                        }
                    }]}
                    adjust={[{
                        type: 'dodge',
                        marginRatio: 1 / 32,
                    }]}
                />
                <Geom type="line" position="major*平均成绩" color="#F5A623" size={3} />
            </Chart>
        )
    }
}

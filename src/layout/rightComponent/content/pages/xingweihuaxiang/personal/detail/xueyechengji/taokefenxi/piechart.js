import React, { Component } from 'react'
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend } from 'bizcharts';
import { DataSet } from '@antv/data-set';

export default class Piechart extends Component {
    render() {
        const {data} = this.props;
        const { DataView } = DataSet; // 数据视图
        const dv = new DataView();
        // 初始化参数
        dv.source(data).transform({
            type: 'percent',
            field: "value",
            dimension: "name",
            as: 'percent'
        });

        const cols = {
            percent: {
                formatter: val => {
                    val = Math.round(val * 100) + '%';
                    return val;
                }
            }
        }

        return (
            <Chart height={330} data={dv} scale={cols} padding={[40,40,40,40]} forceFit >
                <Coord type='theta' radius={0.75} innerRadius={0.6}/>
                <Axis name="percent" />
                <Legend 
                    position="right-center"
                    offsetX={-70}
                />
                <Tooltip
                    showTitle={false}
                    itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
                />
                <Geom
                    type="intervalStack"
                    position="percent"
                    color="name"
                    tooltip={['name*percent*value', (item, percent,val) => {
                        percent = Math.round(percent * 100) + '%';
                        return {
                            name: item,
                            value: val + ' (' + percent +')'
                        };
                    }]}
                    style={{ lineWidth: 1, stroke: '#fff' }}
                >
                    <Label content='percent' formatter={(val, item) => {
                        return item.point.name + ': ' + val;
                    }} />
                </Geom>
            </Chart>
        )
    }
}

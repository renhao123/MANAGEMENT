import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts"
import { DataSet } from '@antv/data-set';

// 折线图
class Index extends Component {

    render() {

        const height = this.props.height || 350; // 高度设置，默认值
        const data = this.props.data; // 数据
        const ds = new DataSet(); // dateset数据集方法
        const dv = ds.createView().source(data); // 数据转换
        let fields=[], nameKey; // 获取关键字

        if (data && data[0]) {
            nameKey = Object.keys(data[0])[0]; // 获取json第一个对象的第一个键名称
            // 获取json对象子节点除去第一个键的其他键字段集合
            Object.keys(data[0]).forEach((item, index) => {
                if (index !== 0) {
                    fields.push(item);
                }
            })
        }

        // 初始化参数
        dv.source(data).transform({
            type: 'fold',
            fields: fields.length>0?fields:['null'],
            key: 'type',
            value: 'value'
        });
        let scales = this.props.scales || {value:{min:0}};
        return (
            <Chart height={height} data={dv} scale={scales} padding={this.props.padding || [30, 20, 60, 50]} forceFit>
                {this.props.noLegend?null:<Legend marker={'circle'}/>}
                <Axis name={nameKey} />
                <Axis name="value" />
                <Tooltip crosshairs={{type : "y"}}/>
                <Geom
                    type="line"
                    position={nameKey+"*value"}
                    color={['type',this.props.colors]}  tooltip={this.props.geomTooltip}/>
                <Geom
                    type={this.props.geomType||'point'}
                    position={nameKey+"*value"}
                    shape={'circle'}
                    color={['type',this.props.colors]} />
                {this.props.children}
            </Chart>
        )
    }
}

export default Index;
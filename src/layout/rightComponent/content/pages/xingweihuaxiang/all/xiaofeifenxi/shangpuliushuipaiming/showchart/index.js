import React, {Component} from 'react';
import {Chart, Geom, Axis, Tooltip, Coord} from "bizcharts";
import DataSet from "@antv/data-set";


export default class Index extends Component {
    render () {
        let { data, height, padding } = this.props;

        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.source(data).transform({
            type: "sort",

            callback(a, b) {
                // 排序依据，和原生js的排序callback一致
                return a.grade - b.grade > 0;
            }
        });

        return (
            <Chart
                height={height}
                data={dv}
                padding={padding}
                forceFit
            >
                <Coord transpose />
                <Axis
                    name="shop"
                    label={{
                        offset: 12
                    }}
                />
                <Axis name="grade" />
                <Tooltip />
                <Geom type="interval" position="shop*grade" />
            </Chart>
        )
    }
}
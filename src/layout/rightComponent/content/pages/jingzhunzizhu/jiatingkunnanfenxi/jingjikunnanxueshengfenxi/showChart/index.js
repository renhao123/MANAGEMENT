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
                return a.人数 - b.人数 > 0;
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
                    name="country"
                    label={{
                        offset: 12
                    }}
                />
                <Axis name="人数" />
                <Tooltip />
                <Geom type="interval" position="country*人数" />
            </Chart>
        )
    }
}
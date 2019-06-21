import React, {Component} from 'react';
import { Chart, Geom, Axis, Tooltip } from "bizcharts";


export default class Index extends Component {
    render () {

        const {data, height, padding} = this.props;

        const cols = {
            平均值: {
                tickInterval: 20
            }
        };

        return (
            <Chart height={height} data={data} scale={cols} padding={padding} forceFit>
                <Axis name="year" />
                <Axis name="平均值" />
                <Tooltip
                    crosshairs={{
                        type: "y"
                    }}
                />
                <Geom type="interval" position="year*平均值" />
            </Chart>
        )
    }
}
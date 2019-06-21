import React, {Component} from 'react';
import { Chart, Geom, Axis, Tooltip } from "bizcharts";


export default class Index extends Component {
    render () {

        const {data, height, padding} = this.props;

        const cols = {
            sales: {
                tickInterval: 20
            }
        };

        return (
            <Chart height={height} data={data} scale={cols} padding={padding} forceFit>
                <Axis name="year" />
                <Axis name="sales" />
                <Tooltip
                    crosshairs={{
                        type: "y"
                    }}
                />
                <Geom type="interval" position="year*sales" />
            </Chart>
        )
    }
}
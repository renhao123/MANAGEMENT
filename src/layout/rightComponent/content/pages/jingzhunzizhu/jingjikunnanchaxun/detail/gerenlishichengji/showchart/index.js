import React, {Component} from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";


export default class Index extends Component {
    render () {

        const {data, height, padding} = this.props;
        const cols = {
            month: {
                range: [0, 1]
            }
        };

        return (
            <Chart height={height} data={data} scale={cols} padding={padding} forceFit>
                <Legend />
                <Axis name="month" />
                <Axis
                    name="temperature"
                    label={{
                        formatter: val => `${val}°C`
                    }}
                />
                <Tooltip
                    crosshairs={{
                        type: "y"
                    }}
                />
                <Geom
                    type="line"
                    position="month*temperature"
                    size={2}
                    color={"city"}
                    shape={"smooth"}
                />
                <Geom
                    type="point"
                    position="month*temperature"
                    size={4}
                    shape={"circle"}
                    color={"city"}
                    style={{
                        stroke: "#fff",
                        lineWidth: 1
                    }}
                />
            </Chart>
        )
    }
}
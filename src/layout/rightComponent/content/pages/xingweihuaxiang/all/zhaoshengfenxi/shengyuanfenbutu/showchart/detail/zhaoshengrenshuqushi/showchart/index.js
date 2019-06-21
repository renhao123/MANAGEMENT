import React, {Component} from 'react';
import { Chart, Geom, Axis, Tooltip } from "bizcharts";


export default class Index extends Component {
    render () {

        const {data, height, padding} = this.props;

        const cols = {
            value: {
                min: 0
            },
            year: {
                range: [0, 1]
            }
        };

        return (
            <Chart height={height} data={data} padding={padding} scale={cols} forceFit>
                <Axis name="year" />
                <Axis name="value" />
                <Tooltip
                    crosshairs={{
                        type: "y"
                    }}
                />
                <Geom type="line" position="year*value" size={2} />
                <Geom
                    type="point"
                    position="year*value"
                    size={4}
                    shape={"circle"}
                    style={{
                        stroke: "#fff",
                        lineWidth: 1
                    }}
                />
            </Chart>
        )
    }
}
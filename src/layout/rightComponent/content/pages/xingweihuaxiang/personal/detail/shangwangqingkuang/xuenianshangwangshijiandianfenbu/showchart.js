import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';

export default class ShowChart extends Component {

    render() {
        const { data, height, padding } = this.props;
        const cols = {
            hour: {
                tickCount: 4
            }
        };
        return (
            <Chart height={height} padding={padding} data={data} scale={cols} forceFit>
                <Axis
                    name="weekday"
                    line={null}
                    tickLine={null}
                    grid={null}
                />
                <Axis
                    name="hour"
                />
                <Tooltip/>
                <Geom
                    type="point"
                    position="hour*weekday"
                    color="weekday"
                    shape="circle"
                    size={["value", [2, (window.innerWidth - 120) / 100]]}
                    tooltip="weekday*hour*value"
                    opacity={0.5}
                />
            </Chart>
        )
    }
}
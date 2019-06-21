import React from 'react'
import { Chart, Geom, Axis, Tooltip } from "bizcharts"

export default class Index extends React.Component {
	render () {
        let { data, height, padding } = this.props;
        return (
            <React.Fragment>
                <Chart data={data} padding={padding} height={height} forceFit>
                    <Axis name="year" />
                    <Axis name="sales" />
                    <Tooltip/>
                    <Geom type="interval" position="year*sales" />
                </Chart>
            </React.Fragment>
        )
	}
}
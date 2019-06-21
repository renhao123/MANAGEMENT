import React from 'react'
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";

export default class Index extends React.Component {

    render() {
        let { data, height, padding } = this.props;
        return (
            <React.Fragment>
                <Chart data={data} height={height} padding={padding} forceFit>
                <Legend />
                <Axis name="nation" />
                <Axis name="studentNum" />
                <Tooltip />
                <Geom
                    type="intervalStack"
                    position="nation*studentNum"
                    color={"sex"}
                    style={{
                        stroke: "#fff",
                        lineWidth: 1
                    }}
                />
                </Chart>
            </React.Fragment>
        )
    }
}
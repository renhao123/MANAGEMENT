import React from "react";
import {
    Chart,
    Geom,
    Axis,
    Tooltip
} from "bizcharts";

export default class Index extends React.Component {
    render() {
        let {data, height, padding} = this.props;
        return (
            <div>
                <Chart data={data} height={height} padding={padding} forceFit>
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
            </div>
        );
    }
}

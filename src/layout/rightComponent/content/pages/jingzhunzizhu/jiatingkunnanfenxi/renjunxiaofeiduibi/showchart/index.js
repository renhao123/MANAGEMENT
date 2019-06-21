import React from "react";
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Legend,
} from "bizcharts";
import DataSet from "@antv/data-set";

export default class Index extends React.Component {
    render() {
        let {data, height, padding} = this.props;
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.transform({
            type: "fold",
            fields: ["Tokyo", "London","Hubei"],
            // 展开字段集
            key: "city",
            // key字段
            value: "temperature" // value字段
        });

        return (
            <div>
                <Chart height={height} data={dv} padding={padding} forceFit>
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
            </div>
        );
    }
}
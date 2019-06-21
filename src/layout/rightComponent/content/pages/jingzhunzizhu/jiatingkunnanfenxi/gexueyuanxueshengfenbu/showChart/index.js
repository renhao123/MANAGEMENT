import React from 'react'
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";
import DataSet from "@antv/data-set";

export default class Index extends React.Component {

    render() {
        let { data, height, padding } = this.props;
        
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        const fields = Object.keys(data[0]).slice(1);
        dv.transform({
            type: "fold",
            fields: fields,
            // 展开字段集
            key: "学院",
            // key字段
            value: "人数" // value字段
        });

        return (
            <React.Fragment>
                <Chart data={dv} height={height} padding={padding}x forceFit>
                <Legend />
                <Axis name="学院" />
                <Axis name="人数" />
                <Tooltip />
                <Geom
                    type="intervalStack"
                    position="学院*人数"
                    color={"name"}
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
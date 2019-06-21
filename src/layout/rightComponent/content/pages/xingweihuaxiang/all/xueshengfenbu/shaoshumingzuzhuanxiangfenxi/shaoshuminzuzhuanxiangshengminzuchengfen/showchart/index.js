import React from 'react'
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";
import DataSet from "@antv/data-set";

export default class Index extends React.Component {

    render() {
        let { data, height, padding } = this.props;
        
        const ds = new DataSet();
        const dv = ds.createView().source(data);

        dv.transform({
            type: "fold",
            fields: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug."],
            // 展开字段集
            key: "月份",
            // key字段
            value: "月均降雨量" // value字段
        });

        return (
            <React.Fragment>
                <Chart data={dv} height={height} padding={padding}x forceFit>
                <Legend />
                <Axis name="月份" />
                <Axis name="月均降雨量" />
                <Tooltip />
                <Geom
                    type="intervalStack"
                    position="月份*月均降雨量"
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
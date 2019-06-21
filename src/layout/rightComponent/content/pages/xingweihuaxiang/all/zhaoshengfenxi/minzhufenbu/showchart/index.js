import React, {Component} from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend } from "bizcharts";
import DataSet from "@antv/data-set";


export default class Index extends Component {
    render () {

        let { data, height, padding } = this.props;

        const { DataView } = DataSet;
        const dv = new DataView();
        dv.source(data).transform({
            type: "percent",
            field: "count",
            dimension: "item",
            as: "percent"
        });

        return (
            <Chart
                height={height}
                data={dv}
                padding={padding}
                forceFit
            >
                <Coord type={"theta"} radius={0.8} />
                <Axis name="percent" />
                <Legend/>
                <Tooltip
                    showTitle={false}
                />
                <Geom
                    type="intervalStack"
                    position="percent"
                    color="item"
                    tooltip={[
                        "item*percent",
                        (item, percent) => {
                            percent = ( percent * 100 ).toFixed(2) + "%";
                            return {
                                name: item,
                                value: percent
                            };
                        }
                    ]}
                    style={{
                        lineWidth: 1,
                        stroke: "#fff"
                    }}
                >
                    <Label
                        content="percent"
                        formatter={(val, item) => {
                            val = ( val * 100 ).toFixed(2) + "%";
                            return item.point.item + ": " + val;
                        }}
                    />
                </Geom>
            </Chart>
        )
    }
}
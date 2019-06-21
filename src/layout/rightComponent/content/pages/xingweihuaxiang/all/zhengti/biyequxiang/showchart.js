import React, {Component} from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend } from "bizcharts";
import DataSet from "@antv/data-set";


export default class ShowChart extends Component {
    render () {

        const {data, padding, height} = this.props;

        const { DataView } = DataSet;
        const dv = new DataView();
        dv.source(data).transform({
            type: "percent",
            field: "count",
            dimension: "item",
            as: "percent"
        });
        const cols = {
            percent: {
                formatter: val => {
                    val = val * 100 + "%";
                    return val;
                }
            }
        };

        return (
            <Chart
                height={height}
                data={dv}
                scale={cols}
                padding={padding}
                forceFit
            >
                <Coord type="theta" radius={0.8} />
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
                            percent = percent * 100 + "%";
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
                            return item.point.item + ": " + val;
                        }}
                    />
                </Geom>
            </Chart>
        )
    }
}
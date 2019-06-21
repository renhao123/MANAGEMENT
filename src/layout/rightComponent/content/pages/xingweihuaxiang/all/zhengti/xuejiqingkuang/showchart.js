import React, {Component} from 'react';
import { Chart, Geom, Axis, Coord, Legend } from "bizcharts";
import DataSet from "@antv/data-set";


export default class ShowChart extends Component {
    render () {

        const {data1, data2, padding, height} = this.props;

        const { DataView } = DataSet;
        const dv1 = new DataView();
        dv1.source(data1).transform({
            type: "percent",
            field: "count",
            dimension: "item",
            as: "percent"
        });
        const dv2 = new DataView();
        dv2.source(data2).transform({
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
            <React.Fragment>
                <Chart
                    height={height}
                    data={dv1}
                    scale={cols}
                    padding={padding}
                    forceFit
                >
                    <Coord type="theta" radius={0.8} innerRadius={0.78} />
                    <Axis name="percent" />
                    <Legend
                        position="right-top"
                        offsetY={60}
                        offsetX={-180}
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
                    </Geom>
                </Chart>
                <div style={{position: 'absolute', top: 24, left: 24, right: 24,}}> 
                    <Chart
                        height={height}
                        data={dv2}
                        scale={cols}
                        padding={padding}
                        forceFit
                    >
                        <Coord type="theta" radius={0.53}/>
                        <Axis name="percent" />
                        <Legend
                            position="right-bottom"
                            offsetY={-60}
                            offsetX={-180}
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
                        </Geom>
                    </Chart>
                </div>
            </React.Fragment>
        )
    }
}
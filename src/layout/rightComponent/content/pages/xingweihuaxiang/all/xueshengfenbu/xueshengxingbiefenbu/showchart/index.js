import React from 'react'
import { Chart, Geom, Axis, Tooltip, Coord, Label } from "bizcharts";
import DataSet from "@antv/data-set";

export default class Index extends React.Component {

    render() {
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
            <React.Fragment>
                <Chart
                    data={dv}
                    height={height}
                    padding={padding}
                    forceFit
                    >
                    <Coord type={"theta"} radius={0.9}/>
                    <Axis name="percent" />
                    <Tooltip
                        showTitle={false}
                        itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                    />
                    <Geom
                        type="intervalStack"
                        position="percent"
                        color="item"
                        tooltip={[
                        "item*percent",
                        (item, percent) => {
                            percent = (percent * 100).toFixed(2) + "%";
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
                                val = (val * 100).toFixed(2) + "%";
                                return item.point.item + ": " + val;
                            }}
                        />
                    </Geom>
                    </Chart>
            </React.Fragment>
        )
    }
}
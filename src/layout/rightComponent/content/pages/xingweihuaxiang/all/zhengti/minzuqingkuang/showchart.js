import React from "react";
import {
  Chart,
  Geom,
  Tooltip,
  Shape,
} from "bizcharts";
import DataSet from "@antv/data-set";

export default class ShowChart extends React.Component {
  render() {
    function getTextAttrs(cfg) {
      return Object.assign(
        {},
        {
          fillOpacity: cfg.opacity,
          fontSize: cfg.origin._origin.size,
          rotate: cfg.origin._origin.rotate,
          text: cfg.origin._origin.text,
          textAlign: "center",
          fontFamily: cfg.origin._origin.font,
          fill: cfg.color,
          textBaseline: "Alphabetic"
        },
        cfg.style
      );
    } // 给point注册一个词云的shape

    Shape.registerShape("point", "cloud", {
      drawShape(cfg, container) {
        const attrs = getTextAttrs(cfg);
        return container.addShape("text", {
          attrs: Object.assign(attrs, {
            x: cfg.x,
            y: cfg.y
          })
        });
      }
    });
    let {data, padding, height} = this.props;
    const dv = new DataSet.View().source(data);
    let fields = ["name","value"]; // 获取关键字
    const range = dv.range("value");
    const min = range[0];
    const max = range[1];
    dv.transform({
      type: "tag-cloud",
      fields: fields,
      font: "Verdana",
      padding: 0,
      timeInterval: 5000,
      // max execute time
      rotate() { return 0 },
      fontSize(d) {
        if (d.value) {
          return 12+((d.value - min) / (max - min)) * 20;
        }
        return 0;
      }
    }).transform({
      type:"filter",
      callback(row){
        return row.value
      }
    })
    return (
        <Chart
          height={height}
          data={dv}
          padding={padding}
          forceFit
        >
          <Tooltip 
            showTitle={false} 
            itemTpl= {'<li data-index={index}>' 
            + '<span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>'
            + '{name}: {value}'
            + '</li>'}
          />
          <Geom
            type="point"
            position="x*y"
            shape="cloud"
            color='name'
            tooltip={[
              "text*value",
              (text,value)=>{
                return {
                  name:text,
                  value
                }
              }
            ]}
          />
        </Chart>
    );
  }
}


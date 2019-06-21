import React from 'react'
import { Card } from 'antd';
import { Chart, Geom, Tooltip, Coord, Label, G2 } from "bizcharts"
import NoData from '../nodata';

function getPoint(p0, p1, ratio) {
    return {
      x: (1 - ratio) * p0.x + ratio * p1.x,
      y: (1 - ratio) * p0.y + ratio * p1.y
    };
}

const pointRatio = 0.7;// 设置开始变成三角形的位置 0.7

// 自定义 other 的图形，增加两条线
G2.Shape.registerShape("interval", "triangleShape", {
    draw(cfg, container) {
      let centerPoint = {
        x: cfg.points[3].x,
        y: (cfg.points[2].y + cfg.points[3].y) / 2
      };
      centerPoint = this.parsePoint(centerPoint);
      const points = this.parsePoints(cfg.points);
      const tmpPoint1 = getPoint(points[0], points[3], pointRatio);
      const tmpPoint2 = getPoint(points[1], points[2], pointRatio);
      let path = [];
      path.push(["M", points[0].x, points[0].y]);
      path.push(["L", points[1].x, points[1].y]);
      path.push(["L", tmpPoint2.x, tmpPoint2.y]);
      path.push(["L", centerPoint.x, centerPoint.y]);
      path.push(["L", tmpPoint1.x, tmpPoint1.y]);
      path.push("Z");
      return container.addShape("path", {
        attrs: {
          fill: cfg.color,
          path: path,
          lineWidth: 1,
          stroke: "white"
        }
      });
    }
});

export default class Pietriangle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
            data:[
                {
                  type: "分类一",
                  value: 20
                },
                {
                  type: "分类二",
                  value: 18
                },
                {
                  type: "分类三",
                  value: 32
                },
                {
                  type: "分类四",
                  value: 15
                },
                {
                  type: "Other",
                  value: 15
                }
            ]
        }
    }

    componentDidMount(){}
    render() {
        return (
            <Card 
                style={{height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{fontSize: 16, fontWeight: 700}}>上网情况</div>
                </div>}
                bodyStyle={{height:this.props.height - 10}}
            >
            {
                this.state.data.length>0?
                <Chart height={this.props.height - 60} data={this.state.data} padding={[0, 0, 0, 0]} forceFit>
                    <Coord type="theta" radius={0.8} />
                    <Tooltip showTitle={false} />
                    <Geom
                        type="intervalStack"
                        position="value"
                        color="type"
                        shape="triangleShape"
                    >
                    <Label content="type" />
                    </Geom>
                </Chart>:
                <NoData/>
            }
          </Card>
        );
    }
}


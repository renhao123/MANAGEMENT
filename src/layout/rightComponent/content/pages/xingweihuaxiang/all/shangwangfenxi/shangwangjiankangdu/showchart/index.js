import React, {Component} from 'react';
import {Chart, Geom, Axis, Coord, Guide, Shape} from 'bizcharts';



export default class Index extends Component {

    render () {

        const {data, height, padding} = this.props;

        const { Html, Arc } = Guide;
        Shape.registerShape('point', 'pointer', {
            drawShape(cfg, group) {
                let point = cfg.points[0]; // 获取第一个标记点

                point = this.parsePoint(point);
                const center = this.parsePoint({
                    // 获取极坐标系下画布中心点
                    x: 0,
                    y: 0
                }); // 绘制指针

                group.addShape('line', {
                    attrs: {
                        x1: center.x,
                        y1: center.y,
                        x2: point.x,
                        y2: point.y - 20,
                        stroke: cfg.color,
                        lineWidth: 5,
                        lineCap: 'round'
                    }
                });
                return group.addShape('circle', {
                    attrs: {
                        x: center.x,
                        y: center.y,
                        r: 12,
                        stroke: cfg.color,
                        lineWidth: 4.5,
                        fill: '#fff'
                    }
                });
            }

        });
        const cols = {  //调整仪表盘刻度
            internetHealth: {
                min: 0,
                max: 9,
                tickInterval: 1,
                nice: false
            }
        };

        return (
            <Chart
                height={height}
                data={data}
                scale={cols}
                padding={padding}
                forceFit>
                <Coord type="polar" startAngle={-9 / 8 * Math.PI} endAngle={1 / 8 * Math.PI} radius={0.75} />
                <Axis name="internetHealth" zIndex={2} line={null} label={{
                    offset: -16,
                    textStyle: {
                        fontSize: 18,
                        textAlign: 'center',
                        textBaseline: 'middle'
                    }
                }} subTickCount={4} subTickLine={{
                    length: -8,
                    stroke: '#fff',
                    strokeOpacity: 1
                }} tickLine={{
                    length: -18,
                    stroke: '#fff',
                    strokeOpacity: 1
                }} />
                <Axis name="1" visible={false} />
                <Guide>
                    <Arc zIndex={0} start={[0, 0.965]} end={[9, 0.965]} style={{
                        // 渐变底色
                        stroke: 'l(0) 0:#FF5430 0.3:#887EDF 0.6:#53A0FD 1:#B4EC51',
                        lineWidth: 22
                    }} />
                    <Arc zIndex={1} start={[0, 0.965]} end={[data[0].internetHealth, 0.965]} style={{
                        // 指针指过之后的颜色
                        stroke: 'transparent',
                        lineWidth: 22
                    }} />
                    <Html position={['50%', '95%']} html={() => `<div style="width: 300px;text-align: center;font-size: 12px!important;"><p style="font-size: 3em;color: rgba(0,0,0,0.85);margin: 0px;">${(data[0].internetHealth * 10).toFixed(2)}%</p></div>`} />
                </Guide>
                <Geom type="point" position="internetHealth*1" shape="pointer" color="#1890FF" active={false} style={{
                    stroke: '#fff',
                    lineWidth: 11
                }} />
            </Chart>
        )
    }
}
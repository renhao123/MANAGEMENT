import React, { Component } from 'react';
import echarts from 'echarts';
import 'echarts/map/js/china';
import {withRouter} from 'react-router-dom'


class Index extends Component {
    state = {
        myChart: null,
    };

    componentDidMount() {
        let chart = echarts.init(document.getElementById('ShengyuanMap'));
        this.setState({
            myChart: chart
        }, () => {
            this.setChart(this.props.data);
        })

    }

    setChart = (data) => {
        const mapName = 'china';
        let geoCoordMap = {};
        /*获取地图数据*/
        let mapFeatures = echarts.getMap(mapName).geoJson.features;
        mapFeatures.forEach(function (v) {

            // 地区名称
            let name = v.properties.name;
            // 地区经纬度
            geoCoordMap[name] = v.properties.cp;

        });

        let max = 480,
            min = 9; // todo
        let maxSize4Pin = 100,
            minSize4Pin = 20;

        let convertData = function (data) {

            let res = [];
            for (let i = 0; i < data.length; i++) {
                let geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        var option = {
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    if (params.seriesType === 'scatter') {
                        return params.name + ': ' + params.value[2]
                    } else {
                        return params.name + ': ' + params.value
                    }
                }
            },
            visualMap: {
                show: true,
                min: 0,
                max: 200,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                seriesIndex: [1],
                inRange: {
                    color: ['#00467F', '#A5CC82'] // 蓝绿
                }
            },
            geo: {
                show: true,
                map: mapName,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                roam: false,     // 是否开启鼠标缩放和平移漫游
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077'
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                }
            },
            series: [{
                name: '散点',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function (val) {
                    return (val[2] / 100) > 30 ? 30 : val[2] / 100;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#05C3F9'
                    }
                }
            },
            {
                type: 'map',
                map: mapName,
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                roam: false,     // 是否开启鼠标缩放和平移漫游
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077'
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                animation: false,
                data: data
            },
            {
                name: '点',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin', //气泡
                symbolSize: function (val) {
                    var a = (maxSize4Pin - minSize4Pin) / (max - min);
                    var b = minSize4Pin - a * min;
                    b = maxSize4Pin - a * max;
                    return (a * val[2] + b) > 80 ? 80 : a * val[2] + b;
                },
                label: {
                    normal: {
                        show: true,
                        formatter: '{@[2]}',
                        textStyle: {
                            color: '#fff',
                            fontSize: 9
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F62157' //标志颜色
                    }
                },
                zlevel: 6,
                data: convertData(data)
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 5)),
                symbolSize: function (val) {
                    if ((val[2] / 1000) > 30) {
                        return 30;
                    }
                    return val[2] / 1000;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'yellow',
                        shadowBlur: 10,
                        shadowColor: 'yellow'
                    }
                },
                zlevel: 1
            }

            ]
        }

        this.state.myChart.setOption(option);
        this.state.myChart.on('click',  (params) => {
        	this.props.history.push('/main/xingweihuaxiang/all/zhaoshengfenxi/shengyuanfenbutu/detail')
		});
    };

    render() {
        return (
            <div id={'ShengyuanMap'} style={{ height: this.props.height }}></div>
        );
    }
}

export default withRouter(Index);


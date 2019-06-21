import React from "react";
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    View,
} from "bizcharts";
import DataSet from "@antv/data-set";
import Slider from "bizcharts-plugin-slider";
    
export default class Index extends React.Component {
    state={
        startText:0,
        endText:0,
    }
    componentDidMount(){
        let {data} = this.props;
        this.setState({data,startText:data[0].city,endText:data[data.length/3-1].city})
    }
    onChange = (obj) => {
        const { startText, endText } = obj;
        this.setState({startText,endText})
    }

    render() {
        let {data, height, padding} = this.props;
        const { DataView } = DataSet;
		const enddatadv = new DataView().source(data);
		enddatadv.transform({
			type: "map",
			callback: obj => {
			  obj.range = [obj.start, obj.end, obj.max, obj.min];
			  obj.trend = obj.start <= obj.end ? "上涨" : "下跌";
			  return obj;
			}
		}).transform({
			type:"filter",
			callback:(obj,index)=>{
				let startIndex = data.findIndex((item) => item.city === this.state.startText);
                let endIndex = data.findIndex((item) => item.city === this.state.endText);
                //当前数据有3年，所以一整年数据为除以3，
                let onYearLength = data.length/3;
                //然后用当前index对一整年应该有的数据取余就可以获取当前数据相对于第一条数据的间隔
                let a = index % onYearLength;
                //把一年数据分为onYearLength等分，则每一个市对应的区间 为1除以onYearLength乘以 当前数据相对下标 例如：1/4则每一个市对应范围为0.25的长，则区间为0-0.25，0.25-0.5，0.5-0.75，0.75-1；
                //如果slide的最小值 大于当前区间的最大值 则表示已经不在slide范围内
                //如果slide的最大值 小于当前区间的最小值 则标识也不在slide区间内
                
                return (a >= startIndex) && (a <= endIndex)
			}
		});
        return (
            <React.Fragment>
                <Chart
                    height={height-30}
                    padding={padding}
                    data={enddatadv}
                    forceFit
                >
                    <Tooltip
                        showTitle={false}
                        itemTpl="<li data-index={index}><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}{value}</li>"
                    />
                    <View
                        data={enddatadv}
                    >
                        <Axis name="city" />
                        <Axis name="range" />
                        <Geom
                            type="schemaDodge"
                            position="city*range"
                            color={[
                                "trend*name",
                                val => {
                                    if (val === "上涨") {
                                        return "#f04864";
                                    }

                                    if (val === "下跌") {
                                        return "#22cc91";
                                    }
                                }
                            ]}
                            tooltip={[
                                "city*max*min*name",
                                (city, max, min, name) => {
                                    return {
                                        name: city+'('+name+')',
                                        value:
                                            '<br><span style="padding-left: 16px">最高：' +
                                            max +
                                            "</span><br/>" +
                                            '<span style="padding-left: 16px">最低：' +
                                            min +
                                            "</span>"
                                    };
                                }
                            ]}
                            shape="candle"
                        />
                    </View>
                </Chart>
                <Slider
                    padding={[0, 50, 0, 50]}
                    width="auto"
                    height={35}
                    xAxis="city"
                    yAxis="value"
                    data={data}
                    scales={{
                        city: {
                            type: "cat",
                        }
                    }}
                    onChange={this.onChange}
                />
            </React.Fragment>
        );
    }
}
import React, { Component } from 'react'
import { Select, Button } from 'antd';

export default class Filter extends Component {
    constructor(props){
        super(props);
        this.state={
            years:[
                {label:"2018-2019学年",value:1},
                {label:"2019-2020学年",value:2},
                {label:"2020-2021学年",value:3},
            ],
            currentYear:1,
        }
    }

    //修改日期
    changeYears = (value) => {
        this.setState({
            currentYear:value
        })
    }

    //搜索
    submit = () => {
        this.props.refershFilter(this.state.years)
    }

    render() {
        return (
            <div style={{padding: '11px 44px', background: 'rgba(238, 238, 238, 0.6)'}}>
                筛选条件：
                <Select style={{width:178, margin:"0px 10px"}} value={this.state.currentYear} onChange={this.changeYears}>
                    {this.state.years.map(item => <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>)}
                </Select>
                <Button icon="search" type="primary" onClick={this.submit}>搜索</Button>
            </div>
        )
    }
}

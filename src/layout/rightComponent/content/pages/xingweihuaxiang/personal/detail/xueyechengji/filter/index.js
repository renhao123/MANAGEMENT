import React, { Component } from 'react'
import { Select, Button } from 'antd';
import styles from './index.module.less';

export default class Filter extends Component {
    constructor(props){
        super(props);
        this.state={
            startYears:[
                {label:"2018-2019学年",value:1},
                {label:"2019-2020学年",value:2},
                {label:"2020-2021学年",value:3},
            ],
            startYear:1,
            endYears:[
                {label:"2018-2019学年",value:1},
                {label:"2019-2020学年",value:2},
                {label:"2020-2021学年",value:3},
            ],
            endYear:1
        }
    }

    //修改开始日期
    changeStartYear = (value) => {
        this.setState({
            startYear:value
        })
    }

    //修改结束日期
    changeEndYear = (value) => {
        this.setState({
            endYear:value
        })
    }

    //搜索
    submit = () => {
        let filterData = {
            startYear:this.state.startYear,
            endYear:this.state.endYear,
        }
        this.props.refershFilter(filterData)
    }

    render() {
        return (
            <div className={styles.filter}>
                筛选条件：
                <Select style={{width:178, margin:"0px 10px"}} value={this.state.startYear} onChange={this.changeStartYear}>
                    {this.state.startYears.map(item => <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>)}
                </Select>
                至
                <Select style={{width:178, margin:"0px 10px"}} value={this.state.endYear}  onChange={this.changeEndYear}>
                    {this.state.endYears.map(item => <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>)}
                </Select>
                <Button icon="search" type="primary" onClick={this.submit}>搜索</Button>
            </div>
        )
    }
}

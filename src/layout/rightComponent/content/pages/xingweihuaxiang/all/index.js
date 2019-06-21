import React, { Component, Fragment } from 'react';
import { Tabs } from 'antd';
import styles from './index.module.less'
import Filter from './filter';
import Zhengti from './zhengti'
import Xueshengfenbu from './xueshengfenbu';
import Xueyefenxi from './xueyefenxi';
import Zhaoshengfenxi from './zhaoshengfenxi'
import Biyefenxi from './biyefenxi';
import Xiaofeifenxi from './xiaofeifenxi';
import Shangwangfenxi from './shangwangfenxi';
import Tushufenxi from './tushufenxi'

const { TabPane } = Tabs;

class Index extends Component {
    state = {
        filterValue: {
            curYear:[],
            curEducation:[],
            curCollege:[],
            curMajor:[],
            curGrade:[],
            curClass:[],
            curStudentType:[]
        },
    }
    getFilterValue = (filterValue) => {
        // console.log(filterValue);
        this.setState({filterValue});
    }
    render() {
        let { filterValue } = this.state;
        return (
            <Fragment>
                <Filter getFilterValue={this.getFilterValue}></Filter>
                <Tabs defaultActiveKey="1" className={styles.mainTabs}>
                    <TabPane tab="整体画像" key="1">
                        <Zhengti filterValue = {filterValue}/>
                    </TabPane>
                    <TabPane tab="学生分布" key="2">
                        <Xueshengfenbu filterValue = {filterValue}/>
                    </TabPane>
                    <TabPane tab="学业分析" key="3">
                        <Xueyefenxi filterValue = {filterValue}/>
                    </TabPane>
                    <TabPane tab="招生分析" key="4">
                        <Zhaoshengfenxi filterValue = {filterValue}/>
                    </TabPane>
                    <TabPane tab="毕业分析" key="5">
                        <Biyefenxi filterValue = {filterValue}/>
                    </TabPane>
                    <TabPane tab="消费分析" key="6">
                        <Xiaofeifenxi filterValue = {filterValue}/>
                    </TabPane>
                    <TabPane tab="上网分析" key="7">
                        <Shangwangfenxi filterValue = {filterValue}/>
                    </TabPane>
                    <TabPane tab="图书分析" key="8">
                        <Tushufenxi filterValue = {filterValue}/>
                    </TabPane>
                </Tabs>
            </Fragment>
        );
    }
}

export default Index;
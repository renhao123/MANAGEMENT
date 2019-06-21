import React, { Component } from 'react';
import { Select, Button } from 'antd';
import styles from './index.module.less';

const { Option } = Select;

class Index extends Component {
    render() {
        return (
            <div className={styles.filterWapper}>
                <p className={styles.text}>选择条件: </p>
                <Select defaultValue="1" style={{ width: 124, marginRight: 10 }}>
                    <Option value="1">18-19年</Option>
                    <Option value="2">17-18年</Option>
                </Select>
                <Select defaultValue="1" style={{ width: 178, marginRight: 10}}>
                    <Option value="1">机械科学与工程学院</Option>
                </Select>
                <Select defaultValue="1" style={{ width: 124, marginRight: 10 }}>
                    <Option value="1">工业设计系</Option>
                </Select>
                <Select defaultValue="1" style={{ width: 124, marginRight: 10 }}>
                    <Option value="1">2016级</Option>
                </Select>
                <Select defaultValue="1" style={{ width: 124, marginRight: 10 }}>
                    <Option value="1">班级</Option>
                </Select>
                <Select defaultValue="1" style={{ width: 124, marginRight: 10 }}>
                    <Option value="1">学生类型</Option>
                </Select>
                <Button type="primary" icon="search">搜索</Button>
            </div>
        );
    }
}

export default Index;
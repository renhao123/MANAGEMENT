import React, { Component } from 'react'
import { Card } from 'antd';
import Table from './table';

export default class index extends Component {
    render() {
        return (
            <Card 
                title="个人荣誉" 
                style={{ boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.05)", borderRadius: 4 }}
                headStyle={{ border: "none"}}
                bodyStyle={{ paddingTop: 0 }}
                bordered={false}
            >
                <Table/>
            </Card>
        )
    }
}

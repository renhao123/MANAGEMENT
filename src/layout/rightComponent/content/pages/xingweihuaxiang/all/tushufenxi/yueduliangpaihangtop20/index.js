import React, { Component } from 'react';
import { Card } from 'antd';
import ShowList from './showlist';

class Index extends Component {
    state = {
        data: [
            {
                key: '1',
                sortIndex: 1,
                cardId: 'U20173847',
                borrower: "张三1",
                department: "理学院计算机专业",
                borrowTimes: "80"
            },
            {
                key: '2',
                sortIndex: 2,
                cardId: 'U20173847',
                borrower: "张三2",
                department: "理学院计算机专业",
                borrowTimes: "80"
            },
            {
                key: '3',
                sortIndex: 3,
                cardId: 'U20173847',
                borrower: "张三3",
                department: "理学院计算机专业",
                borrowTimes: "80"
            },
            {
                key: '4',
                sortIndex: 4,
                cardId: 'U20173847',
                borrower: "张三4",
                department: "理学院计算机专业",
                borrowTimes: "80"
            },
            {
                key: '5',
                sortIndex: 5,
                cardId: 'U20173847',
                borrower: "张三5",
                department: "理学院计算机专业",
                borrowTimes: "80"
            }
        ],
    }
    render() {
        return (
            <Card 
                style={{height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4}}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{fontSize: 16, fontWeight: 700}}>阅读量排行TOP20</div>
                </div>}
                bodyStyle={{paddingTop: 0}}
            >
                <ShowList
                    data={this.state.data}
                />
            </Card>
        );
    }
}

export default Index;
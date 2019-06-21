import React, { Component } from 'react';
import { Card } from 'antd';
import ShowList from './showlist';

class Index extends Component {
    state = {
        data: [
            {
                key: '1',
                sortIndex: 1,
                bookName: '计算机理论1',
                bookIndex: "B27689",
                writer: "张三",
                public: '华中科技大学出版社',
                borrowTimes: "1111"
            },
            {
                key: '2',
                sortIndex: 2,
                bookName: '计算机理论2',
                bookIndex: "B27689",
                writer: "张三",
                public: '华中科技大学出版社',
                borrowTimes: "1111"
            },
            {
                key: '3',
                sortIndex: 3,
                bookName: '计算机理论3',
                bookIndex: "B27689",
                writer: "张三",
                public: '华中科技大学出版社',
                borrowTimes: "1111"
            },
            {
                key: '4',
                sortIndex: 2,
                bookName: '计算机理论2',
                bookIndex: "B27689",
                writer: "张三",
                public: '华中科技大学出版社',
                borrowTimes: "1111"
            },
            {
                key: '5',
                sortIndex: 3,
                bookName: '计算机理论3',
                bookIndex: "B27689",
                writer: "张三",
                public: '华中科技大学出版社',
                borrowTimes: "1111"
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
                    <div style={{fontSize: 16, fontWeight: 700}}>预警情况</div>
                </div>}
                bodyStyle={{paddingTop: 0}}
            >
                <ShowList
                    data={this.state.data}
                    height={this.props.height - 34}
                />
            </Card>
        );
    }
}

export default Index;
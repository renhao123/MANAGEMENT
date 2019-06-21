import React, {Component} from 'react';
import {Card} from 'antd';
import ShowList from './showlist';

export default class Index extends Component {

   state={
       data: [
            {
                key: 1,
                sortIndex: 1,
                time: '2019-04-29 22:39:34',
                onLine: '02:06:26',
                type: 'PC'
            },
            {
                key: 2,
                sortIndex: 2,
                time: '2019-04-29 22:39:34',
                onLine: '02:06:26',
                type: 'PC'
            },
            {
                key: 3,
                sortIndex: 3,
                time: '2019-04-29 22:39:34',
                onLine: '02:06:26',
                type: 'PC'
            },
            {
                key: 4,
                sortIndex: 4,
                time: '2019-04-29 22:39:34',
                onLine: '02:06:26',
                type: 'PC'
            },
            {
                key: 5,
                sortIndex: 5,
                time: '2019-04-29 22:39:34',
                onLine: '02:06:26',
                type: 'PC'
            }
       ]
   }

    render () {
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>上网记录</div>
                </div>}
                bodyStyle={{paddingTop:0}}
            >
                <ShowList
                    data={this.state.data}
                />
            </Card>
        )
    }
}
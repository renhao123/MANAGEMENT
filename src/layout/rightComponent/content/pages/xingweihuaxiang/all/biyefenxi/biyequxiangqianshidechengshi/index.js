import React, {Component} from 'react';
import {Card} from 'antd';
import ShowList from './showlist';
import NoData from './nodata';


export default class Index extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : [
            {"classTeacher" : "课程1（任课老师）", "times" : 1432},
            {"classTeacher" : "课程2（任课老师）", "times" : 1432},
            {"classTeacher" : "课程3（任课老师）", "times" : 1432},
            {"classTeacher" : "课程4（任课老师）", "times" : 1432},
            {"classTeacher" : "课程5（任课老师）", "times" : 1432},
            {"classTeacher" : "课程6（任课老师）", "times" : 1432},
            {"classTeacher" : "课程7（任课老师）", "times" : 1432},
            {"classTeacher" : "课程8（任课老师）", "times" : 1432},
            {"classTeacher" : "课程9（任课老师）", "times" : 1432},
            {"classTeacher" : "课程10（任课老师）", "times" : 1432},
        ],
        }
    }
    render () {
        return (
            <Card
                style={{ height: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)', borderRadius: 4 }}
                headStyle={{ border: "none" }}
                bordered={false}
                title={<div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>毕业去向前十的城市</div>
                </div>}
                bodyStyle={{height: this.props.height - 10}}
            >
                {
                    this.state.data.length>0
                        ?
                        <ShowList
                            data={this.state.data}
                        />
                        :
                        <NoData/>
                }
            </Card>
        )
    }
}
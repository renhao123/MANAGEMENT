import React, { Component } from 'react'
import KeyWords from './keywords';
import Gerenguiji from './gerenguiji';
import Quntiguanxi from './quntiguanxi';

export default class index extends Component {
    render() {
        return (
            <div style={{margin:"0 20px"}}>
                <KeyWords/>
                <Gerenguiji/>
                <Quntiguanxi/>
            </div>
        )
    }
}

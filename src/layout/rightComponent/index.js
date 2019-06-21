import React, { Component } from 'react';
import Header from './header';
import Content from './content';

class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header collapsed={this.props.collapsed} toggle={this.props.toggle} ></Header>
                <Content></Content>
            </React.Fragment>
        );
    }
}

export default index;
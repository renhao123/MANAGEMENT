import React from 'react';
import { Layout } from 'antd';
import LeftComponent from './leftComponent';
import RightComponent from './rightComponent';

const { Sider } = Layout;

const siderStyle = {
    flex: "0 0 230px !important",
    maxWidth: "230px !important",
    minWidth: "230px !important",
    width: "230px !important",
    height: "100vh"
}

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        }
    }

    toggle = () => {
        this.setState({
            collapsed:!this.state.collapsed
        })
    }

    render () {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={siderStyle}>
                    <LeftComponent></LeftComponent>
                </Sider>
                <Layout style={{height:"100vh",display:"flex"}}>
                    <RightComponent collapsed={this.state.collapsed} toggle={this.toggle}></RightComponent>
                </Layout>
            </Layout>
        )
    }
}

export default Main
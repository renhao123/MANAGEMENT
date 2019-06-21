import React from 'react';
import { Layout } from 'antd';
import LeftComponent from './leftComponent';
import RightComponent from './rightComponent';

import styles from './index.module.less'

const { Sider } = Layout;

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
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} className={styles.sider}>
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
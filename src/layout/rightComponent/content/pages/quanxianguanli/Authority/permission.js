/**
 * Created by hutao on 2018/8/31.
 * 权限配置
 */
import React, { Component } from 'react';
import { Card, Tabs } from 'antd';
import FuncPermission from './funcPermission'
import DataJurisdiction from './DataJurisdiction'

const TabPane = Tabs.TabPane;

class MenuLists extends Component {
    state = {
        menuLists: [],//菜单列表
        roleMenuData: [],
        selectedKeys: [],
        keyNo: 1
    }

    callback = (key) => {
        this.setState({
            keyNo: key
        })
    }

    render() {

        return (
            <Card>
                <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                    {
                        this.props.activeRole.roleName === undefined || this.props.activeRole.roleName === ''
                            ?
                            <TabPane tab={'角色权限配置'} key="1">
                                <FuncPermission activeRole={this.props.activeRole}></FuncPermission>
                            </TabPane>
                            :
                            <TabPane tab={this.props.activeRole.roleName + '角色权限配置'} key="1">
                                <FuncPermission activeRole={this.props.activeRole}></FuncPermission>
                            </TabPane>
                    }
                    {
                        this.props.activeRole.roleName === undefined || this.props.activeRole.roleName === ''
                            ?
                            <TabPane tab={'数据权限配置'} key="2">
                                <DataJurisdiction activeRole={this.props.activeRole} keyNo={this.state.keyNo} />
                            </TabPane>
                            :
                            <TabPane tab={this.props.activeRole.roleName + '数据权限配置'} key="2">
                                <DataJurisdiction activeRole={this.props.activeRole} keyNo={this.state.keyNo} />
                            </TabPane>
                    }
                </Tabs>
            </Card>
        )
    }
}

export default MenuLists;
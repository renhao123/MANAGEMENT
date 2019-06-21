/**
 * Created by hutao on 2018/8/31.
 * 权限配置
 */
import React, { Component } from 'react';
import { Card, Button, message, Tree,Tabs } from 'antd';
import './style.less'
const TreeNode = Tree.TreeNode;
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}
class MenuLists extends Component {
    state = {
        menuLists: [],//菜单列表
        roleMenuData: [],
        selectedKeys: [],
    }
    componentWillMount() {
        //获取菜单列表,根绝请求数据设置菜单列表
        const res = {
            "success": true,
            "msg": "成功",
            "obj": [
                {
                    "id": '150',
                    "parentId": -1,
                    "name": "行为画像",
                    "url": "",
                    "iconUrl": "n_ico2.png",
                    "iconSelectedUrl": "n_ico2.png",
                    "seq": 11,
                    "tags": [],
                    "subMenus": [
                        {
                            "id": '151',
                            "parentId": 150,
                            "name": "群体画像",
                            "url": "/mainframe/xingweihuaxiang/all",
                            "iconUrl": "",
                            "iconSelectedUrl": "",
                            "seq": 12,
                            "tags": [],
                            "subMenus": [{
                                "id": '10001',
                                "parentId": 151,
                                "name": "整体画像",
                                "url": "/mainframe/xingweihuaxiang/all",
                                "iconUrl": "",
                                "iconSelectedUrl": "",
                                "seq": 12,
                                "tags": [],
                                "subMenus":[]
                            }, {
                                "id": '10002',
                                "parentId": 151,
                                "name": "学生分布",
                                "url": "/mainframe/xingweihuaxiang/all",
                                "iconUrl": "",
                                "iconSelectedUrl": "",
                                "seq": 12,
                                "tags": [],
                                "subMenus":[]
                            },
                            {
                                "id": '10003',
                                "parentId": 151,
                                "name": "学业分析",
                                "url": "/mainframe/xingweihuaxiang/all",
                                "iconUrl": "",
                                "iconSelectedUrl": "",
                                "seq": 12,
                                "tags": [],
                                "subMenus":[]
                            }]
                        },
                        {
                            "id": '152',
                            "parentId": 150,
                            "name": "个人画像",
                            "url": "/mainframe/xingweihuaxiang/personal",
                            "iconUrl": "",
                            "iconSelectedUrl": "",
                            "seq": 13,
                            "tags": [],
                            "subMenus": []
                        }
                    ]
                },
                {
                    "id": '178',
                    "parentId": -1,
                    "name": "综合预警",
                    "url": "/mainframe/comprehensivewarning",
                    "iconUrl": "",
                    "iconSelectedUrl": "",
                    "seq": 256,
                    "tags": [],
                    "subMenus": []
                },
                {
                    "id": '180',
                    "parentId": -1,
                    "name": "精准资助",
                    "url": "/mainframe/jinzhunzizhu",
                    "iconUrl": "",
                    "iconSelectedUrl": "",
                    "seq": 289,
                    "tags": [],
                    "subMenus": [
                        {
                            "id": '1801',
                            "parentId": 180,
                            "name": "家庭经济困难学生分析",
                            "url": "/mainframe/jinzhunzizhu/pinkunshengfenxi",
                            "iconUrl": "",
                            "iconSelectedUrl": "",
                            "seq": 1801,
                            "tags": [],
                            "subMenus": []
                        },
                        {
                            "id": '1802',
                            "parentId": 180,
                            "name": "家庭经济困难学生查询",
                            "url": "/mainframe/jinzhunzizhu/pinkunshengchaxun",
                            "iconUrl": "",
                            "iconSelectedUrl": "",
                            "seq": 1802,
                            "tags": [],
                            "subMenus": []
                        },
                        {
                            "id": '1803',
                            "parentId": 180,
                            "name": "异常家庭经济困难学生",
                            "url": "/mainframe/jinzhunzizhu/yichangpinkunsheng",
                            "iconUrl": "",
                            "iconSelectedUrl": "",
                            "seq": 1803,
                            "tags": [],
                            "subMenus": []
                        },
                        {
                            "id": '1804',
                            "parentId": 180,
                            "name": "建议关爱学生",
                            "url": "/mainframe/jinzhunzizhu/jianyiguanaipinkunsheng",
                            "iconUrl": "",
                            "iconSelectedUrl": "",
                            "seq": 1804,
                            "tags": [],
                            "subMenus": []
                        }
                    ]
                },
                {
                    "id": '181',
                    "parentId": -1,
                    "name": "心理健康",
                    "url": "/mainframe/xinlijiankang",
                    "iconUrl": "",
                    "iconSelectedUrl": "",
                    "seq": 296,
                    "tags": [],
                    "subMenus": [
                        {
                            "id": '1811',
                            "parentId": 181,
                            "name": "心理健康分析",
                            "url": "/mainframe/xinlijiankang/xinlijiankangfenxi",
                            "iconUrl": "",
                            "iconSelectedUrl": "",
                            "seq": 1811,
                            "tags": [],
                            "subMenus": []
                        },
                        {
                            "id": '1812',
                            "parentId": 181,
                            "name": "心理健康预警",
                            "url": "/mainframe/xinlijiankang/xinlijiankangyujing",
                            "iconUrl": "",
                            "iconSelectedUrl": "",
                            "seq": 1812,
                            "tags": [],
                            "subMenus": []
                        },
                        {
                            "id": '1813',
                            "parentId": 181,
                            "name": "心理访谈管理",
                            "url": "/mainframe/xinlijiankang/xinlijiankangguanli",
                            "iconUrl": "",
                            "iconSelectedUrl": "",
                            "seq": 1813,
                            "tags": [],
                            "subMenus": []
                        }
                    ]
                },
                {
                    "id": '179',
                    "parentId": -1,
                    "name": "系统设置",
                    "url": "/mainframe/systemsetup",
                    "iconUrl": "",
                    "iconSelectedUrl": "",
                    "seq": 257,
                    "tags": [],
                    "subMenus": [
                        {
                            "id": '1791',
                            "parentId": 179,
                            "name": "预警设置",
                            "url": "/mainframe/systemsetup/earlywarningsetting",
                            "iconUrl": "",
                            "iconSelectedUrl": "",
                            "seq": 387,
                            "tags": [],
                            "subMenus": []
                        },
                        {
                            "id": '1792',
                            "parentId": 179,
                            "name": "行为轨迹设置",
                            "url": "/mainframe/systemsetup/behaviortrajectory",
                            "iconUrl": "",
                            "iconSelectedUrl": "",
                            "seq": 388,
                            "tags": [],
                            "subMenus": []
                        }
                    ]
                },
                {
                    "id": '10',
                    "parentId": -1,
                    "name": "权限管理",
                    "url": "",
                    "iconUrl": "xitongguanli.png",
                    "iconSelectedUrl": "xitongguanli2.png",
                    "seq": 259,
                    "tags": [],
                    "subMenus": [
                        {
                            "id": '25',
                            "parentId": 10,
                            "name": "账户管理",
                            "url": "/mainframe/accessmanage/account",
                            "iconUrl": "",
                            "iconSelectedUrl": "",
                            "seq": 264,
                            "tags": [],
                            "subMenus": []
                        },
                        {
                            "id": '24',
                            "parentId": 10,
                            "name": "菜单管理",
                            "url": "/mainframe/accessmanage/menu",
                            "iconUrl": "",
                            "iconSelectedUrl": "",
                            "seq": 265,
                            "tags": [],
                            "subMenus": []
                        },
                        {
                            "id": '26',
                            "parentId": 10,
                            "name": "权限配置",
                            "url": "/mainframe/accessmanage/authority",
                            "iconUrl": "",
                            "iconSelectedUrl": "",
                            "seq": 266,
                            "tags": [],
                            "subMenus": []
                        }
                    ]
                }
            ],
            "errorCode": null
        }

        if (res.success) {
            this.setState({
                menuLists: res.obj || []
            })
        }
        this.getRoleMenuLists()
    }
    
    componentWillReceiveProps(nextProps) {
        //当选中角色改变时重新获取权限配置
        if (nextProps.activeRole.id !== this.props.activeRole.id) {
            this.getRoleMenuLists({ roleId: nextProps.activeRole.id, sourceCode: 'pc' })
        }
    }
    //获取角色菜单权限列表
    getRoleMenuLists = (data) => {
        //获取当前角色的权限列表
        const res = {
            "success": true,
            "msg": "成功",
            "obj": {
                "roleId": 1,
                "menu": [                    
                    '1802',
                    '1803',
                    '1804',
                    '181',
                    '10'              
                    
                ]
            },
            "errorCode": null
        }
        if (res.success) {
            this.setState({ 
                roleMenuData: res.obj.menu || [],
                selectedKeys:res.obj.menu || []
            })
        }
    }
    

    renderTreeNodes = (data) => {
        return data.map((item) => {
            if (item.subMenus) {
                return (
                    <TreeNode title={item.name} key={item.id} dataRef={item}>
                        {this.renderTreeNodes(item.subMenus)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item} />;
        });
    }
    //保存修改后的菜单权限
    saveAction = () => {
        // 进行保存操作，获取对应数据，发送请求，根据请求返回就行相应提示
        // let data = {
        //     roleId: this.props.activeRole.id,
        //     menuIds: this.state.roleMenuData.join(',')
        // }
        const res = { success: true };
        if (res.success) {
            message.success('权限配置成功！');
        } else {
            message.error(res.obj);
        }

    }
    handleCheckTree=(selectNodes)=>{
        this.setState({
            roleMenuData:selectNodes
        })
        // console.log(selectNodes)
    }
    render() {
        const {roleMenuData}=this.state
        return (
            <Card
                title={<span style={{ color: '#1890FF' }}>{this.props.activeRole.roleName}角色权限配置</span>}
            >
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="功能权限" key="1">
                        <Tree
                            checkable
                            // onExpand={this.onExpand}
                            // expandedKeys={this.state.expandedKeys}
                            // autoExpandParent={this.state.autoExpandParent}
                            // onCheck={this.onCheck}
                            // checkedKeys={this.state.checkedKeys}
                            // onSelect={this.onSelect}
                            defaultCheckedKeys={roleMenuData}
                            defaultExpandAll={true}
                            onCheck={this.handleCheckTree}
                        >
                            {this.renderTreeNodes(this.state.menuLists)}
                        </Tree>
                    </TabPane>
                    <TabPane tab="数据权限" key="2">
                    Content of Tab Pane 2
                    </TabPane>
                </Tabs>
                
                <div style={{ textAlign: 'right' }}>
                    <Button type="primary" onClick={this.saveAction}>保存</Button>
                </div>
            </Card>
        )
    }
}

export default MenuLists;
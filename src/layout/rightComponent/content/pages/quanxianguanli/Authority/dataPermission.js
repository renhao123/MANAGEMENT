/**
 * Created by hutao on 2018/8/31.
 * 权限配置
 */
import React, { Component } from 'react';
import { Button, message, Tree } from 'antd';
import './style.less'
const TreeNode = Tree.TreeNode;

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
                    "name": "全部",
                    "url": "",
                    "iconUrl": "n_ico2.png",
                    "iconSelectedUrl": "n_ico2.png",
                    "seq": 11,
                    "tags": [],
                    "subMenus": [                        
                        {
                            "id": '152',
                            "parentId": 150,
                            "name": "全校",
                            "url": "/mainframe/xingweihuaxiang/personal",
                            "iconUrl": "",
                            "iconSelectedUrl": "",
                            "seq": 13,
                            "tags": [],
                            "subMenus": []
                        },
                        {
                            "id": '151',
                            "parentId": 150,
                            "name": "经济学院",
                            "url": "/mainframe/xingweihuaxiang/all",
                            "iconUrl": "",
                            "iconSelectedUrl": "",
                            "seq": 12,
                            "tags": [],
                            "subMenus": [{
                                "id": '10001',
                                "parentId": 151,
                                "name": "理论经济学",
                                "url": "/mainframe/xingweihuaxiang/all",
                                "iconUrl": "",
                                "iconSelectedUrl": "",
                                "seq": 12,
                                "tags": [],
                                "subMenus": [
                                    {
                                        "id": '100021',
                                        "parentId": 151,
                                        "name": "1801班",
                                        "url": "/mainframe/xingweihuaxiang/all",
                                        "iconUrl": "",
                                        "iconSelectedUrl": "",
                                        "seq": 12,
                                        "tags": [],
                                        "subMenus": []
                                    },
                                    {
                                        "id": '100022',
                                        "parentId": 151,
                                        "name": "1802班",
                                        "url": "/mainframe/xingweihuaxiang/all",
                                        "iconUrl": "",
                                        "iconSelectedUrl": "",
                                        "seq": 12,
                                        "tags": [],
                                        "subMenus": []
                                    }
                                ]
                            }, {
                                "id": '10002',
                                "parentId": 151,
                                "name": "统计学",
                                "url": "/mainframe/xingweihuaxiang/all",
                                "iconUrl": "",
                                "iconSelectedUrl": "",
                                "seq": 12,
                                "tags": [],
                                "subMenus": [
                                    {
                                        "id": '100024',
                                        "parentId": 151,
                                        "name": "1801班",
                                        "url": "/mainframe/xingweihuaxiang/all",
                                        "iconUrl": "",
                                        "iconSelectedUrl": "",
                                        "seq": 12,
                                        "tags": [],
                                        "subMenus": []
                                    }
                                ]
                            }]
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
                selectedKeys: res.obj.menu || []
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
    handleCheckTree = (selectNodes) => {
        this.setState({
            roleMenuData: selectNodes
        })
        // console.log(selectNodes)
    }
    render() {
        const { roleMenuData } = this.state
        return (

            <div>
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


                <div style={{ textAlign: 'right' }}>
                    <Button type="primary" onClick={this.saveAction}>保存</Button>
                </div>
            </div>


        )
    }
}

export default MenuLists;
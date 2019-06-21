import React, { Component } from 'react';
import { Button, message, Tree, Select } from 'antd';
import './style.less'
import { getAction, postAction } from '@/axios'
const Option = Select.Option;
const TreeNode = Tree.TreeNode;

const curYear = new Date().getFullYear();
const curYearTwo = new Date().getFullYear();
const curMonth = new Date().getMonth() + 1;
let yearLists = [];
for (let i = 0; i < 7; i++) {
  yearLists.push({
    name: curYear - i + "年",
    value: curYear - i + ""
  })
}
class DataJurisdiction extends Component {
    state = {
        curYear: curMonth < 9 ? (curYear - 2) + "" : curYear + "",
        curYearName: curMonth < 9 ? (curYear - 1) + "年" : curYear + "年",
        yearLists,
        curYearTwo: curMonth < 9 ? (curYearTwo - 1) + "" : curYearTwo + "",
        menuLists: [],  //菜单列表
        roleMenuData: [],
        selectedKeys: [],
        halfCheckData: [],
    }

    handleMenuIdtoString(data) {
        data.forEach(item => {
            item.code = (item.code).toString()
            if (item.subDataPower && item.subDataPower.length > 0) {
                this.handleMenuIdtoString(item.subDataPower)
            }
        })
        return data
    }

    componentWillReceiveProps(nextProps) {
        //当选中角色改变时重新获取权限配置
        if (nextProps.activeRole.id !== this.props.activeRole.id) {
            this.getRoleMenuLists({ roleId: nextProps.activeRole.id, sourceCode: 'pc' })
        }
    }


    //获取角色对应数据权限
    getRoleMenuLists = (data) => {
        getAction('/bigdata/system/role/dataPower/list', data).then(res => {
            if (res.success) {
                let menus = []
                if (res.obj.allCheckData && res.obj.allCheckData.length > 0) {
                    res.obj.allCheckData.forEach(element => {
                        menus.push(element.toString())
                    })
                } else {
                    menus = []
                }
                this.setState({
                    roleMenuData: menus || [],
                    selectedKeys: menus || [],
                    halfCheckData: res.obj.halfCheckData
                })
            }
        })
    }

    renderTreeNodes = (data) => {
        return data.map(item => {
            if (item.subDataPower) {
                return (
                    <TreeNode title={item.name} key={item.code} dataRef={item}>
                        {this.renderTreeNodes(item.subDataPower)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item} title={item.name} dataRef={item}></TreeNode>;
        });
    }

    //保存修改后的菜单权限
    saveDataAction = () => {
        // 进行保存操作，获取对应数据，发送请求，根据请求返回就行相应提示
        let { classCode, halfCheckData,roleMenuData } = this.state;
        let classCodeObj = [];
        classCode.forEach(item => {
            let newItem = item;
            classCodeObj.push(newItem)
        })
        let resCodes = classCodeObj.concat(roleMenuData);

        let newArr = resCodes.filter(res => res.length < 9)
        if (newArr.length<=0) {
            return
        } else {
            let data = {
                roleId: this.props.activeRole.id,
                sourceCode: 'pc',
                allCheckData: newArr,
                halfCheckData:halfCheckData
            }
            postAction('/bigdata/system/role/dataPower/update', data).then(res => {
                if (res.success) {
                    message.success('权限配置成功！');
                } else {
                    message.error(res.obj);
                }
            })
        }
    }

    handleCheckTree = (selectNodes, e) => {
        let newClassCode = []
        e.checkedNodesPositions.forEach(item => {
            let split = item.pos.split("-")
            if(split.length === 5){//班级
                newClassCode.push(item.node.props.code)
            }
        })
        this.setState({
            roleMenuData: selectNodes,
            halfCheckData: e.halfCheckedKeys,
            classCode: newClassCode,
        })
    }

    //选择年份
    changeFilter(num, value) {
        if (num === 1) {
            this.setState({
                curYear: value
            })
        } else if (num === 0) {
            this.setState({
                curYearTwo: value
            })
        }
    }

    //查询
    searchData() {
        if (Number(this.state.curYear) < Number(this.state.curYearTwo)) {
            this.getlist()
        } else {
            message.error("起始时间不能晚于截止时间")
            return
        }
    }

    onExpand = (expandedKeys) => {
        this.setState({
            arr: expandedKeys
        });
    }

    //获取权限列表
    getlist() {
        let grade = `${this.state.curYear},${this.state.curYearTwo}`;
        getAction('/bigdata/system/dataPower/list', { grade: grade }).then(res => {
            if (res.success) {
                let data = this.handleMenuIdtoString(res.obj)
                this.setState({
                    menuLists: data || [],
                    arr: ['0#-1']
                }, () => {
                    this.getRoleMenuLists({ roleId: this.props.activeRole.id, sourceCode: 'pc' })
                })
            }
        })
    }

    render() {
        const { roleMenuData, menuLists } = this.state;
        return (
            <div>
                <div>
                    <span>年级</span>
                    <div style={{ display: 'inline', marginLeft: 15 }}>
                        <Select defaultValue={this.state.curYear} style={{ width: 120 }} onChange={this.changeFilter.bind(this, 1)}>
                            {
                                this.state.yearLists.map((item, index) => <Option key={index} value={item.value}>{item.name}</Option>)
                            }
                        </Select>
                        <span style={{ marginRight: 15, marginLeft: 15 }}>至</span>
                        <Select defaultValue={this.state.curYearTwo} style={{ width: 120 }} onChange={this.changeFilter.bind(this, 0)}>
                            {
                                this.state.yearLists.map((item, index) => <Option key={index} value={item.value}>{item.name}</Option>)
                            }
                        </Select>
                    </div>
                    <Button type="primary" onClick={this.searchData.bind(this)} style={{ marginLeft: 15 }}>查询</Button>
                </div>
                <Tree
                    checkable
                    expandedKeys={this.state.arr}
                    onExpand={this.onExpand.bind(this)}
                    checkedKeys={roleMenuData}
                    onCheck={this.handleCheckTree}
                >
                    {this.renderTreeNodes(menuLists)}
                </Tree>
                <div style={{ textAlign: 'right' }}>
                    <Button type="primary" onClick={this.saveDataAction}>保存</Button>
                </div>
            </div>
        )
    }
}

export default DataJurisdiction;
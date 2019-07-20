import React, { Component } from 'react';
import { Menu } from 'antd'
import { withRouter } from "react-router-dom";
import styles from './index.module.less';

const SubMenu = Menu.SubMenu;

class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            openKeys: [],
            rootSubmenuKeys: [],
            current: "",
            leftMenu:[
                // {
                //     id:"10",
                //     name:"行为画像",
                //     url:"",
                //     iconUrl:"behavioral-portrait_",
                //     subMenus:[
                //         {id:"11",name:"群体画像",url:"/main/xingweihuaxiang/all",iconUrl:"",subMenus:[]},
                //     ]
                // }
                {
                    id:"1",
                    name:"个人订单",
                    url:"/main/orderlist",
                    iconUrl:"icon-detail",
                    subMenus:[]
                },
                {
                    id:"2",
                    name:"单位订单",
                    url:"/main/company",
                    iconUrl:"icon-danwei",
                    subMenus:[]
                },
                // {
                //     id:"3",
                //     name:"账户管理",
                //     url:"/main/account",
                //     iconUrl:"icon-addteam",
                //     subMenus:[]
                // }
            ]
        }
    }

    componentDidMount(){
        let {leftMenu} = this.state;
        setTimeout(() => {
            let current = this.props.location.pathname;
            let openKeys = [], rootSubmenuKeys = [];
            leftMenu.forEach(item=>{
                if(item.subMenus){
                    item.subMenus.forEach(ele=>{
                        if(ele.url === current){
                            openKeys = [item.id];
                        }
                    })
                }
                rootSubmenuKeys.push(item.id)
            })
            this.setState({openKeys, rootSubmenuKeys, current});
        }, 50)
    }
    
    selectClick = ({ key })=> {
        this.setState({
            current:key
        })
        this.props.history.push(key);
    }

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
		if(this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			this.setState({
				openKeys
			});
		} else {
			this.setState({
				openKeys: latestOpenKey ? [latestOpenKey] : [],
			});
		}
    }

    renderMenu = (data) => data.map((item) => {
       
        if(item.subMenus && item.subMenus[0]){
            return (
                <SubMenu
                    key={item.id}
                    title={
                        <span>
                            <i className={`iconfont ${item.iconUrl}`}></i>
                            <span>{item.name}</span>
                        </span>
                    }
                >
                    {this.renderMenu(item.subMenus)}
                </SubMenu>
            )
        }else{
            if(item.iconUrl){
                return(<Menu.Item key={item.url}>
                    <i className={`iconfont ${item.iconUrl}`}></i>
                    <span>{item.name}</span>
                </Menu.Item>)
            }else{
                return <Menu.Item key={item.url}>{item.name}</Menu.Item>
            }
        }
    })
    
    render() {
        return (
            <React.Fragment>
                <div className={styles.logo} />
                <Menu theme="dark" mode="inline" 
                    onClick={this.selectClick}
                    onOpenChange={this.onOpenChange}
                    openKeys={this.state.openKeys}
                    selectedKeys={this.state.current ? [this.state.current] : null}
                >
                    {this.renderMenu(this.state.leftMenu)}
                </Menu>
            </React.Fragment>
        );
    }
}


export default withRouter(index);
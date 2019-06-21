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
                {
                    id:"10",
                    name:"行为画像",
                    url:"",
                    iconUrl:"behavioral-portrait_",
                    subMenus:[
                        {id:"11",name:"群体画像",url:"/main/xingweihuaxiang/all",iconUrl:"",subMenus:[]},
                        {id:"12",name:"个人画像",url:"/main/xingweihuaxiang/personal",iconUrl:"",subMenus:[]},
                        {id:"13",name:"群体行为轨迹",url:"/main/xingweihuaxiang/guiji",iconUrl:"",subMenus:[]},
                    ]
                },{
                    id:"20",
                    name:"精准资助",
                    url:"",
                    iconUrl:"shengq-",
                    subMenus:[
                        {id:"21",name:"家庭经济困难学生分析",url:"/main/jingzhunzizhu",iconUrl:"",subMenus:[]},
                        {id:"22",name:"家庭经济困难学生查询",url:"/main/jingzhunzizhu/xueshengchaxun",iconUrl:"",subMenus:[]},
                        {id:"23",name:"异常家庭经济困难学生",url:"/main/jingzhunzizhu/kunnanxuesheng",iconUrl:"",subMenus:[]},
                        {id:"24",name:"建议关爱学生",url:"/main/jingzhunzizhu/guanaixuesheng",iconUrl:"",subMenus:[]},
                    ]
                },{
                    id:"30",
                    name:"综合预警",
                    url:"",
                    iconUrl:"yujingchuzhi",
                    subMenus:[
                        {id:"31",name:"综合预警",url:"/main/comprehensivewarning",iconUrl:"",subMenus:[]},
                    ]
                },{
                    id:"40",
                    name:"系统设置",
                    url:"",
                    iconUrl:"shezhi",
                    subMenus:[
                        {id:"41",name:"资助达标金额配置",url:"/main/systemsetup/zizhudabiao",iconUrl:"",subMenus:[]},
                        {id:"42",name:"预警标签显示时间配置",url:"/main/systemsetup/yujingbiaoqian",iconUrl:"",subMenus:[]},
                        {id:"43",name:"预警配置",url:"/main/systemsetup/setting",iconUrl:"",subMenus:[]},
                        {id:"44",name:"预警白名单配置",url:"/main/systemsetup/baimingdan",iconUrl:"",subMenus:[]},
                        {id:"45",name:"预警处理达标配置",url:"/main/systemsetup/yujingchuli",iconUrl:"",subMenus:[]},
                    ]
                },{
                    id:"50",
                    name:"权限管理",
                    url:"",
                    iconUrl:"authority",
                    subMenus:[
                        {id:"51",name:"账户管理",url:"/main/quanxianguanli/account",iconUrl:"",subMenus:[]},
                        {id:"52",name:"角色权限管理",url:"/main/quanxianguanli/authority",iconUrl:"",subMenus:[]},
                        {id:"53",name:"菜单管理",url:"/main/quanxianguanli/menu",iconUrl:"",subMenus:[]},
                    ]
                }
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
        
        // let leftMenu = JSON.parse(window.localStorage.getItem("leftMenuList"));
        // console.log(leftMenu)
        // this.setState({leftMenu})
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
                            <i className={`iconfont icon-${item.iconUrl}`}></i>
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
                    <i className={`iconfont icon-${item.iconUrl}`}></i>
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
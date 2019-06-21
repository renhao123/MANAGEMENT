import React, { Component } from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import { layout } from 'antd';
import styles from './index.module.less'

const { Content } = layout;

let asyncComponent = (loadComponent, placeholder = null) => {
    class AsyncComponent extends Component {
        unmount = false;

        constructor() {
            super();

            this.state = {
                component: null
            };
        }

        componentWillUnmount() {
            this.unmount = true;
        }

        async componentDidMount() {
            const {default: component} = await loadComponent();

            if (this.unmount) return;

            this.setState({
                component: component
            });
        }

        render() {
            const C = this.state.component;

            return (
                C ? <C {...this.props}></C> : placeholder
            );
        }
    }

    return AsyncComponent;
}

// 群体画像
const All = asyncComponent(() => import('./pages/xingweihuaxiang/all'));
const ShengyuanfenbuDetail = asyncComponent(() => import('./pages/xingweihuaxiang/all/zhaoshengfenxi/shengyuanfenbutu/showchart/detail'));
// 个人画像列表页
const Personal = asyncComponent(() => import('./pages/xingweihuaxiang/personal'));
//个人画像详情页
const PersonalDetail = asyncComponent(() => import('./pages/xingweihuaxiang/personal/detail'));
//个人画像详情页
const Xingweiguiji = asyncComponent(() => import('./pages/xingweihuaxiang/xingweiguiji'));


// 权限管理
// 1,账户管理
const Account = asyncComponent(() => import('./pages/quanxianguanli/Account'));
// 2，权限管理
const Authority = asyncComponent(() => import('./pages/quanxianguanli/Authority'));
// 3，菜单管理
const Menu = asyncComponent(() => import('./pages/quanxianguanli/Menu'));
//家庭經濟困難學生分析
const Jingjikunnanxueshengfenxi = asyncComponent(() => import('./pages/jingzhunzizhu/jiatingkunnanfenxi'));
//家庭经济困难学生查询
const Jingjikunnanchaxun = asyncComponent(() => import('./pages/jingzhunzizhu/jingjikunnanchaxun'));
//家庭经济困难学生查询 -- 详情页面
const JingjikunnanchaxunDetail = asyncComponent(() => import('./pages/jingzhunzizhu/jingjikunnanchaxun/detail'));
//异常家庭经济困难学生
const Yichangkunnanxuesheng = asyncComponent(() => import('./pages/jingzhunzizhu/yichangkunnanxuesheng'));
//异常家庭经济困难学生详情
const YichangkunnanxueshengDetail = asyncComponent(() => import('./pages/jingzhunzizhu/yichangkunnanxuesheng/detail'));
//建议关爱学生
const Jianyiguanai = asyncComponent(() => import('./pages/jingzhunzizhu/jianyiguanai'));
// 建议关爱学生详情
const JianyiguanaiDetail = asyncComponent(() => import('./pages/jingzhunzizhu/jianyiguanai/detail'));

//综合预警-预警列表
const Yujingliebiao = asyncComponent(() => import('./pages/zongheyujing/liebiao'));
//综合预警-概况
const Yujinggaikuang = asyncComponent(() => import('./pages/zongheyujing/gaikuang'));
//资助达标金额配置
const Zizhudabiao = asyncComponent(() => import('./pages/xitongshezhi/zizhudabiao'));
//预警标签显示时间配置
const Yujingbiaoqian = asyncComponent(() => import('./pages/xitongshezhi/yujingbiaoqian'));
//预警配置
const Yujingpeizhi = asyncComponent(() => import('./pages/xitongshezhi/yujingpeizhi'));
//预警白名单配置
const Baimingdan = asyncComponent(() => import('./pages/xitongshezhi/baimingdan'));
//预警处理达标配置
const Yujingchuli = asyncComponent(() => import('./pages/xitongshezhi/yujingchuli'));

class index extends Component {

    getDefaultMenu = (data) => {
        if(data[0].subMenus.length>0){
            return this.getDefaultMenu(data[0].subMenus)
        }else{
            return (data[0].url);
        }
    }

    render() {
        // const leftMenu = window.localStorage.leftMenuList;//从本地存储获取菜单，设置默认匹配菜单为第一项
        const leftMenu = [
            {
                label:"行为画像",
                url:"",
                icon:"Windows",
                subMenus:[
                    {label:"群体画像",url:"/main/xingweihuaxiang/all",iconUrl:"",subMenus:[]},
                    {label:"个人画像",url:"/main/xingweihuaxiang/personal",iconUrl:"",subMenus:[]},
                    {label:"群体行为轨迹",url:"/main/xingweihuaxiang/guiji",iconUrl:"",subMenus:[]},
                ]
            }
        ];
        let defaultMenu = this.getDefaultMenu(leftMenu);
        return (
            <Content
                className={styles.container}
            >
                <Switch>
                    {/* 行为画像 */}
                    <Route exact path="/main/xingweihuaxiang/all" component={All} />
                    <Route exact path="/main/xingweihuaxiang/personal" component={Personal} />
                    <Route exact path="/main/xingweihuaxiang/personal/detail" component={PersonalDetail} />
                    <Route exact path="/main/xingweihuaxiang/guiji" component={Xingweiguiji} />
                    
                    {/* 权限管理 */}
                    <Route exact path="/main/quanxianguanli/account" component={Account} />
                    <Route exact path="/main/quanxianguanli/authority" component={Authority} />
                    <Route exact path="/main/quanxianguanli/menu" component={Menu} />
                    {/* 精準資助 */}
                    <Route exact path="/main/jingzhunzizhu" component={Jingjikunnanxueshengfenxi} />
                    <Route exact path="/main/jingzhunzizhu/xueshengchaxun" component={Jingjikunnanchaxun} />
                    <Route exact path="/main/jingzhunzizhu/xueshengchaxun/detail" component={JingjikunnanchaxunDetail} />
                    <Route exact path="/main/jingzhunzizhu/kunnanxuesheng" component={Yichangkunnanxuesheng} />
                    <Route exact path="/main/jingzhunzizhu/kunnanxuesheng/detail" component={YichangkunnanxueshengDetail} />
                    <Route exact path="/main/jingzhunzizhu/guanaixuesheng" component={Jianyiguanai} />
                    <Route exact path="/main/jingzhunzizhu/guanaixuesheng/detail" component={JianyiguanaiDetail} />
                    {/* 综合预警 */}
                    <Route exact path="/main/comprehensivewarning" component={Yujingliebiao} />
                    <Route exact path="/main/comprehensivewarning/survey" component={Yujinggaikuang} />
                    {/* 系统设置 */}
                    <Route exact path="/main/systemsetup/zizhudabiao" component={Zizhudabiao} />
                    <Route exact path="/main/systemsetup/yujingbiaoqian" component={Yujingbiaoqian} />
                    <Route exact path="/main/systemsetup/setting" component={Yujingpeizhi} />
                    <Route exact path="/main/systemsetup/baimingdan" component={Baimingdan} />
                    <Route exact path="/main/systemsetup/yujingchuli" component={Yujingchuli} />

                    <Route exact path="/main/xingweihuaxiang/all/zhaoshengfenxi/shengyuanfenbutu/detail" component={ShengyuanfenbuDetail} />
                    <Route path="*" render={(props) => <Redirect to={defaultMenu}/>} />
                </Switch>
            </Content>
        );
    }
}

export default withRouter(index);
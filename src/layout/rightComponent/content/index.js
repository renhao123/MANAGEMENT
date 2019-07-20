import React, { Component } from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import { layout } from 'antd';

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

// 个人订单
const OrderList = asyncComponent(() => import('./pages/OrderList'));
// 账户管理
// const Account = asyncComponent(() => import('./pages/Account'));
// 单位订单
const Company = asyncComponent(() => import('./pages/Company'));


class index extends Component {
    render() {
        return (
            <Content style={{margin: "4px 0 0 0",overflow: "auto",flex:"1",padding: "0px", background: "#f3f3f3"}}>
                <Switch>
                    <Route exact path="/main/orderlist" component={OrderList} />
                    {/*<Route exact path="/main/account" component={Account} />*/}
                    <Route exact path="/main/company" component={Company} />
                    <Route path="*" render={(props) => <Redirect to={"/main/orderlist"}/>} />
                </Switch>
            </Content>
        );
    }
}

export default withRouter(index);
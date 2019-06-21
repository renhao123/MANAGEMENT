import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import './index.less';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import 'moment/locale/zh-cn';

import Main from './layout';
import Login from './login';
import Loading from './loading';

class App extends React.Component {
    render(){
        let loginStatus = window.localStorage.getItem("loginStatus");//从cookie中取登录状态
        // loginStatus = true;//开发截断默认登录状态
        return (<LocaleProvider locale={zhCN}>
                <Router>
                    <React.Fragment>
                        {loginStatus==="true"?
                            <Main/>://登录状态跳转到主页
                            <Login/>//未登录状态跳转到登录页
                        }
                        <Loading/>
                    </React.Fragment>
                </Router>
        </LocaleProvider>);
    }
} 

const render = Component =>{
    ReactDOM.render(
        <Component/>,
        document.getElementById('root')
    );
}

if (module.hot) {
    module.hot.accept(() => {
        render(App);
    })
}

render(App);
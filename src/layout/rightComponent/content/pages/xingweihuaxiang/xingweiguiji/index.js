import React from 'react'
import { Tabs } from 'antd';
import styles from './index.module.less';

//整体画像
import Relitu from './relitu';
//学业成绩
import Jiqunguanli from './jiqunguanli';

const { TabPane } = Tabs;

export default function PersonalDetail(){
    return (
        <Tabs defaultActiveKey="2" className={styles.mainTabs}>
            <TabPane tab="校园热力图" key="1">
                <Relitu/>
            </TabPane>
            <TabPane tab="重点集群管理" key="2">
                <Jiqunguanli/>
            </TabPane>
        </Tabs>
    )
}

import React from 'react'
import { Tabs } from 'antd';
import styles from './index.module.less';

//整体画像
import Zhengtihuaxiang from './zhengtihuaxiang';
//学业成绩
import Xueyechengji from './xueyechengji';
//消费情况
import Xiaofeiqingkuang from './xiaofeiqingkuang';
//图书借阅
import Tushujieyue from './tushujieyue';
//上网情况
import Shangwangqingkuang from './shangwangqingkuang';
//第二课堂
import Dierketang from './dierketang';

const { TabPane } = Tabs;

export default function PersonalDetail(){
    return (
        <Tabs defaultActiveKey="1" className={styles.mainTabs}>
            <TabPane tab="整体画像" key="1">
                <Zhengtihuaxiang/>
            </TabPane>
            <TabPane tab="学业成绩" key="2">
                <Xueyechengji/>
            </TabPane>
            <TabPane tab="消费情况" key="3">
                <Xiaofeiqingkuang/>
            </TabPane>
            <TabPane tab="图书借阅" key="4">
                <Tushujieyue/>
            </TabPane>
            <TabPane tab="上网情况" key="5">
                <Shangwangqingkuang/>
            </TabPane>
            <TabPane tab="第二课堂" key="6">
                <Dierketang/>
            </TabPane>
        </Tabs>
    )
}

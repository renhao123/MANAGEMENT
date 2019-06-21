import React from 'react';
import { Row, Col } from 'antd';
import noDataImg from './NoData.png';
import styles from './index.module.less'
/**
 * data  无值时显示加载动画，设置为'nodata'时显示暂无数据
 * height  设置组件高度, 默认height为100%
 */

 export default function NoData(props){
     return(
            <Row className={styles.noDataCon} style={{height: props.height ? props.height : '100%'}}>
                <Col span={24} className={styles.noData}><img src={noDataImg} alt="nodata"/></Col>
            </Row>
     )
 }


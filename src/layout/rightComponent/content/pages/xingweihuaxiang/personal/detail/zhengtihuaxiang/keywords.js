import React, { Component } from 'react'
// import { Row, Col } from 'antd';
import styles from './index.module.less';

const manPng = require("./img/studentN.png");
const famlePng = require("./img/studentG.png");

export default class keywords extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentInfo:{
                name:"黄从丛",
                sex:"girl",
                location:"陕西武功",
                birthday:"1996.09.27",
                Political:"党员",//政治面貌
            }
        }
    }
    render() {
        return (
            <div className={styles.keywordContainer+' '+styles.flexRowContainer}>
                <div className={styles.flexColContainer+' '+styles.flexItem} style={{flex:3}}>
                    <div className={styles.flexItem+' '+styles.card+' '+styles.mainCard} style={{flex:"0 0 250px"}}>
                        <img alt="性别" src={this.state.studentInfo.sex==="girl"?famlePng:manPng}/>
                        <div>
                            <p>{this.state.studentInfo.name}</p>
                            <p>性别：{this.state.studentInfo.sex}</p>
                            <p>籍贯：{this.state.studentInfo.location}</p>
                            <p>生日：{this.state.studentInfo.birthday}</p>
                            <p>政治面貌：{this.state.studentInfo.Political}</p>
                        </div>
                    </div>
                    <div className={styles.flexRowContainer+' '+styles.flexItem}  style={{flex:"0 0 120px"}}>
                        <div className={styles.flexItem+' '+styles.card} style={{flex:1}}>
                            <div className={styles.cardTitle}>学习情况</div>
                            <div className={styles.cardContent}>
                                <span>学霸</span>
                            </div>
                        </div>
                        <div className={styles.flexItem+' '+styles.card} style={{flex:1}}>
                            <div className={styles.cardTitle}>体侧情况</div>
                            <div className={styles.cardContent}>
                                <span>学霸</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.flexColContainer+' '+styles.flexItem} style={{flex:2}}>
                    <div className={styles.flexItem+' '+styles.card} style={{flex:"0 0 210px"}}>
                        <div className={styles.cardTitle}>身份特点</div>
                        <div className={styles.cardContent}>
                            <span>一级家庭经济困难学生</span>
                            <span>少数民族预科班</span>
                        </div>
                    </div>
                    <div className={styles.flexItem+' '+styles.card} style={{flex:"0 0 160px"}}>
                        <div className={styles.cardTitle}>预警情况</div>
                        <div className={styles.cardContent}>
                            <span>学霸</span>
                        </div>
                    </div>
                </div>
                <div className={styles.flexColContainer+' '+styles.flexItem} style={{flex:2}}>
                    <div className={styles.flexRowContainer+' '+styles.flexItem} style={{flex:"0 0 120px"}}>
                        <div className={styles.flexItem+' '+styles.card} style={{flex:1}}>
                            <div className={styles.cardTitle}>上网情况</div>
                            <div className={styles.cardContent}>
                                <span>学霸</span>
                            </div>
                        </div>
                        <div className={styles.flexItem+' '+styles.card} style={{flex:1}}>
                            <div className={styles.cardTitle}>阅读情况</div>
                            <div className={styles.cardContent}>
                                <span>学霸</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.flexItem+' '+styles.card} style={{flex:"0 0 120px"}}>
                        <div className={styles.cardTitle}>消费水平</div>
                        <div className={styles.cardContent}>
                            <span>学霸</span>
                        </div>
                    </div>
                    <div className={styles.flexItem+' '+styles.card} style={{flex:"0 0 120px"}}>
                        <div className={styles.cardTitle}>资助情况</div>
                        <div className={styles.cardContent}>
                            <span>学霸</span>
                        </div>
                    </div>
                </div>
                <div className={styles.flexColContainer+' '+styles.flexItem} style={{flex:2}}>
                    <div className={styles.flexItem+' '+styles.card} style={{flex:"0 0 250px"}}>
                        <div className={styles.cardTitle}>个人荣誉</div>
                        <div className={styles.cardContent}>
                            <span>学霸</span>
                        </div>
                    </div>
                    <div className={styles.flexItem+' '+styles.card} style={{flex:"0 0 120px"}}>
                        <div className={styles.cardTitle}>三餐情况</div>
                        <div className={styles.cardContent}>
                            <span>学霸</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styles from "./index.module.less"

// import { postAction } from "../../../../../axios"
// import {hostUrl} from "../../../../../env";


export default class LibrtryCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            TotalBook: {},
            OnLineBook: {},
            AvgBook: {},
            overdueBook:{}
        }
    }

    //累计借阅图书
    getCountTotalBook = () => {
        // let _studentInfo = JSON.parse(localStorage.getItem("personalDetail"));
        // let filterCondition = this.props.filterCondition;
        let res = {
            obj:{ num:80 },
            success:true
        }
        this.setState({
            TotalBook:{ count: res.obj.num, name: '累计借阅图书' }
        })
    }

    //在借图书数量
    getCountOnLineBook = () => {
        // let _studentInfo = JSON.parse(localStorage.getItem("personalDetail"));
        // let filterCondition = this.props.filterCondition;
        // let filterCondition = this.props.filterCondition;
        let res = {
            obj:{ num:80 },
            success:true
        }
        this.setState({
            OnLineBook:{ count: res.obj.num, name: '累计借阅图书' }
        })
    }

    //月平均借阅
    getCountAvgBook = () => {
        // let _studentInfo = JSON.parse(localStorage.getItem("personalDetail"));
        // let filterCondition = this.props.filterCondition;
        let res = {
            obj:{ num:80 },
            success:true
        }
        this.setState({
            AvgBook:{ count: res.obj.num, name: '累计借阅图书' }
        })
    }

    //预期未还
    getOverdueBook = () => {
        // let _studentInfo = JSON.parse(localStorage.getItem("personalDetail"));
        // let filterCondition = this.props.filterCondition;
        let res = {
            obj:{ num:80 },
            success:true
        }
        this.setState({
            overdueBook:{ count: res.obj.num, name: '累计借阅图书' }
        })
    }

    //导出明细
    // handleMingxi=()=>{
    //     let _studentNo = JSON.parse(localStorage.getItem("studentItem")).studentNo;
    //     let year = new Date().getFullYear();
    //     window.location.href=`${hostUrl}/bigdata/book/exportBookBorrowDist?borrowCode=${_studentNo}&year=${year}`;
    // }

    componentDidMount() {
        this.getCountTotalBook()
        this.getCountOnLineBook()
        this.getCountAvgBook()
        this.getOverdueBook();
    }

    render() {
        const { TotalBook, OnLineBook, AvgBook, overdueBook } = this.state
        return (
            <Row gutter={16}>
                <Col span={6}>
                    {/* <Tooltip placement="top" title='导出明细'>
                        <Button
                            theme="outlined"
                            style={{float:"right", margin:"10px 10px 0 0 ",padding:"0px 8px"}}
                            onClick={this.handleMingxi}
                        >
                            <i className="iconfont icon-daochu" />
                        </Button>
                    </Tooltip> */}
                    <div  className={styles.cardContainer}>
                        {
                            TotalBook.count >= 0
                                ?
                                <div>
                                    <p><span>{TotalBook.count}</span>本</p>
                                    <p>{TotalBook.name}</p>
                                </div>
                                :
                                <div className={styles.noCardData}>暂无数据</div>
                        }
                    </div>
                </Col>
                <Col span={6}>
                    <div  className={styles.cardContainer}>
                        {
                            OnLineBook.count >= 0
                                ?
                                <div>
                                    <p><span>{OnLineBook.count}</span>本</p>
                                    <p>{OnLineBook.name}</p>
                                </div>
                                :
                                <div className={styles.noCardData}>暂无数据</div>
                        }
                    </div>
                </Col>
                <Col span={6}>
                    <div  className={styles.cardContainer}>
                        {
                            AvgBook.count >= 0
                                ?
                                <div>
                                    <p><span>{AvgBook.count}</span>本</p>
                                    <p>{AvgBook.name}</p>
                                </div>
                                :
                                <div className={styles.noCardData}>暂无数据</div>
                        }
                    </div>
                </Col>
                <Col span={6}>
                    <div className={styles.cardContainer}>
                        {
                            overdueBook.count >= 0
                                ?
                                <div>
                                    <p><span>{overdueBook.count}</span>本</p>
                                    <p>{overdueBook.name}</p>
                                </div>
                                :
                                <div className={styles.noCardData}>暂无数据</div>
                        }
                    </div>
                </Col>
            </Row>
        )
    }
}
import React, { Component } from 'react'
import styles from './index.module.less'

export default class index extends Component {
    render() {
        let { left, right  } = this.props.data;
        return (
            <div className={styles.course}>
                <div className={styles.item + ' ' + styles.left}>
                    <h3><span></span>{left.name}</h3>
                    <ul>
                        {
                            left.value[0] && left.value.map(item => {
                                return <li key={item.name}>
                                    <h6><b>{item.value}</b><span>{item.percent}</span></h6>
                                    <p>{item.name}（人）</p>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className={styles.item + ' ' + styles.right}>
                    <h3><span></span>{right.name}</h3>
                    <ul>
                        {
                            right.value[0] && right.value.map(item => {
                                return <li key={item.name}>
                                    <h6><b>{item.value}</b><span>{item.percent}</span></h6>
                                    <p>{item.name}（人）</p>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

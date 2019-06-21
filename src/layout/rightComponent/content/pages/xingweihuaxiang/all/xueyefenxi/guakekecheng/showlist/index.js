import React, {Component} from 'react';
import styles from './index.module.less';


export default class Index extends Component {
    render () {
        return (
            <ul className={styles.goCity}>
                {this.props.data.map((item, index) => {
                    if (index < 3) {
                        return (
                            <li key={index}>
                                <span className={`${styles.number} ${styles.selectActive}`}>{index + 1}</span>
                                <span className={styles.city}>{item.classTeacher}</span>
                                <span className={styles.count}>{item.times}次</span>
                            </li>
                        )
                    } else {
                        return (
                            <li key={index}>
                                <span className={styles.number}>{index + 1}</span>
                                <span className={styles.city}>{item.classTeacher}</span>
                                <span className={styles.count}>{item.times}次</span>
                            </li>
                        )
                    }
                })}
            </ul>
        )
    }
}
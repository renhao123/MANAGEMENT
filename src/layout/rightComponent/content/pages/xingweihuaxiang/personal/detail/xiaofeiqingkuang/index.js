import React, { Component } from 'react'
import {Row, Col} from 'antd'
import Filter from './Filter'
import SanCanPinJun from './SanCanPinJun'
import JinQiTian from './JinQiTian'
import XiaoFeiJieGou from './XiaoFeiJieGou'
import ShuaKaFenBu from './ShuaKaFenBu'
import SanCanGuLvDu from './SanCanGuLvDu'
import XiaoFeiQuShi from './XiaoFeiQuShi'
import CiShu from './CiShu'
import JiLu from './JiLu'

export default class index extends Component {
    render() {
        return (
            <div>
                <Filter />
                <Row style={{padding: "20px"}} gutter={20}>
                	<Col span={24} style={{marginBottom:"20px"}}>
                		<SanCanPinJun />
                	</Col>
                	<Col span={12} style={{marginBottom:"20px"}}>
                		<JinQiTian />
                	</Col>
                	<Col span={12} style={{marginBottom:"20px"}}>
                		<XiaoFeiJieGou />
                	</Col>
                	<Col span={8}>
                		<ShuaKaFenBu />
                	</Col>
                	<Col span={8}>
                		<SanCanGuLvDu />
                	</Col>
                	<Col span={8}>
                		<CiShu />
                	</Col>
                	<Col span={24}  style={{marginTop:"20px"}}>
                		<XiaoFeiQuShi />
                	</Col>
                	<Col span={24}  style={{marginTop:"20px"}}>
                		<JiLu />
                	</Col>
                </Row>
            </div>
        )
    }
}

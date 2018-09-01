import React from 'react';
import {Row,Col} from 'antd'
import PlatDetailItems from './PlatDetailItems'

class PlatDetail extends React.Component {


    render() {


        return (
            <div>
                <Row>
                    <Col span={8}>
                        <PlatDetailItems itemTitle=" 平台名称" itemContent="亚马逊"/>
                    </Col>
                    <Col span={8}>
                        <PlatDetailItems itemTitle="总运单量" itemContent="1114577"/>
                    </Col>
                    <Col span={8}>
                        <PlatDetailItems itemTitle="当日累计运单" itemContent="7890"/>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <PlatDetailItems itemTitle=" 完成件数量" itemContent="6789"/>
                    </Col>
                    <Col span={8}>
                        <PlatDetailItems itemTitle="异常件数量" itemContent="90"/>
                    </Col>
                    <Col span={8}>
                        <PlatDetailItems itemTitle="准点率" itemContent="97.30%"/>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <PlatDetailItems itemTitle=" 完成件数量" itemContent="6789"/>
                    </Col>
                    <Col span={8}>
                        <PlatDetailItems itemTitle="异常件数量" itemContent="90"/>
                    </Col>
                    <Col span={8}>
                        <PlatDetailItems itemTitle="准点率" itemContent="97.30%"/>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default PlatDetail;
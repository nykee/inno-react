import React from 'react';
import {Row,Col} from 'antd'
import EDPie from '../../componenets/Echarts/DPieChart'

class EChartContainer extends React.Component {


    render() {


        return (
            <div id="E-Chart">
                <Row>
                    <Col span={12} >
                        <EDPie />
                    </Col>
                    <Col span={12}>

                    </Col>
                </Row>
                <Row>
                    <Col span={12}>

                    </Col>
                    <Col span={12}>

                    </Col>
                </Row>
            </div>

        )
    }
}

export default EChartContainer;
import React from 'react';
import {Row,Col} from 'antd'
import HBarchart from '../../componenets/Hcharts/BarChart'
import HDpiechart from '../../componenets/Hcharts/DPieChart'
import HPiechart from '../../componenets/Hcharts/PieChart'
import HLinechart from '../../componenets/Hcharts/LineChart'

class HChartContainer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="H-Chart">
                <Row>
                    <Col span={12} >
                        <HBarchart />
                    </Col>
                    <Col span={12}>
                        <HDpiechart/>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <HPiechart/>
                    </Col>
                    <Col span={12}>
                        <HLinechart/>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default HChartContainer;
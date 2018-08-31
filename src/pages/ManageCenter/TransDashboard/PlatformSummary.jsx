import React from 'react';
import CommonTitle from '../../../componenets/common/CommonTitle'
import PieChart from '../../../componenets/Echarts/PieChart'
import {pieChartOption} from '../../../chartConfig/commonEchartsConifg'
import {Row,Col} from 'antd'

class PlatformSummary extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <CommonTitle titleName="各平台运单统计"/>
                <Row>
                    <Col lg={{span:12}}>
                        <PieChart DomID="PlatSummary" chartOption={pieChartOption}/>
                    </Col>
                    <Col lg={{span:12}}>

                    </Col>
                </Row>

            </div>

        )
    }
}

export default PlatformSummary;
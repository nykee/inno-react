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
                    <Col xs={{span:24}}
                             sm={{span:24}}
                             md={{span:12}}
                             lg={{span:12}}
                             xl={{span:12}} >
                        <HBarchart />
                    </Col>
                    <Col xs={{span:24}}
                             sm={{span:24}}
                             md={{span:12}}
                             lg={{span:12}}
                             xl={{span:12}}>
                        <HDpiechart/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{span:24}}
                             sm={{span:24}}
                             md={{span:12}}
                             lg={{span:12}}
                             xl={{span:12}}>
                        <HPiechart/>
                    </Col>
                    <Col xs={{span:24}}
                             sm={{span:24}}
                             md={{span:12}}
                             lg={{span:12}}
                             xl={{span:12}}>
                        <HLinechart/>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default HChartContainer;
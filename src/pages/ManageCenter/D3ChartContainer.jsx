import React from 'react';
import {Row,Col} from 'antd'
import D3BarChart from '../../componenets/D3Charts/BarChart';
import D3PieChart from '../../componenets/D3Charts/PieChart'
import D3ForceChart from '../../componenets/D3Charts/ForceChart'
import D3TreeChart from '../../componenets/D3Charts/TreeChart'
import D3PackChart from '../../componenets/D3Charts/PackChart'
import D3MapChart from '../../componenets/D3Charts/MapChart'
import D3ScatterChart from '../../componenets/D3Charts/ScatterChart'

class D3ChartContainer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (


                <div id="D3-Chart">
                    <Row>
                        <Col xs={{span:24}}
                             sm={{span:24}}
                             md={{span:12}}
                             lg={{span:12}}
                             xl={{span:12}}>
                            <D3BarChart/>
                        </Col>
                        <Col xs={{span:24}}
                             sm={{span:24}}
                             md={{span:12}}
                             lg={{span:12}}
                             xl={{span:12}}>
                            <D3PieChart/>
                        </Col>

                    </Row>
                    <Row>
                        <Col xs={{span:24}}
                             sm={{span:24}}
                             md={{span:12}}
                             lg={{span:12}}
                             xl={{span:12}}>
                            <D3ForceChart/>
                        </Col>
                        <Col xs={{span:24}}
                             sm={{span:24}}
                             md={{span:12}}
                             lg={{span:12}}
                             xl={{span:12}}>
                            <D3TreeChart/>
                        </Col>


                    </Row>
                    <Row>
                        <Col>
                            <D3ScatterChart/>
                        </Col>
                    </Row>
                </div>


        )
    }
}

export default D3ChartContainer;
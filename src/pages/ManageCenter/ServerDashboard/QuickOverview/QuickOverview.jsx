import React from 'react';
import SectionTitle from '../SectionTitle'
import {Row,Col} from 'antd'
import Problems from "./Problems";
import Applications from "./Applications";
import SmartScape from "./SmartScape";
import UseExperienceIndex from './MultipleCenterLocation'

class QuickOverview extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div >
                <SectionTitle titleName="Quick OverView" />
                <Row gutter={10} className="items">
                    <Col
                        xs={{span:12 }}
                        sm={{span:12 }}
                        md={{span:12 }}
                        lg={{span:12 }}
                        xl={{span:12 }}
                    >
                        <Problems amount={0}/>
                    </Col>
                    <Col xs={{span:12}}
                         sm={{span:12 }}
                         md={{span:12 }}
                         lg={{span:12 }}
                         xl={{span:12 }}
                         >
                        <Applications amount={3}/>
                    </Col>
                </Row>
                <Row className="items">
                    <Col span={24}>
                        <SmartScape/>
                    </Col>
                </Row>
                <Row className="items">
                    <Col span={24}>
                        <UseExperienceIndex/>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default QuickOverview;
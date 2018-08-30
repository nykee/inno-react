import React from 'react';
import {Col, Row} from "antd";

class CustomLegend extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        // let legends=this.props.legends;
        let legendItems=[];
        this.props.legends.map((leg,i)=>{
            legendItems.push(
                <Row>
                    <Col span={4}>
                        <span style={{display:'inline-block',borderBottom:'3px solid'+leg.color,width:'80%'}}/>
                    </Col>
                    <Col span={8} className="gray-color">
                        <span>{leg.name}</span>
                    </Col>
                    <Col span={6} offset={6}>
                        <span>{leg.value}</span>
                        <span className="gray-color">/min</span>
                    </Col>
                </Row>
            )
        });
        return (
            <div>
                {legendItems}
            </div>



        )
    }
}

export default CustomLegend;
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
        let legends=[
            {color:'#0CBFF8',name:'community.ru.com',value:4.5},
            {color:'#A17171',name:'www.ru.com',value:4},
            {color:'#3165CD',name:'support.ru.com',value:1},
            ];
        let legendItems=[];
        legends.map((leg)=>{
            legendItems.push(
                <Row>
                    <Col span={4}>
                        <span style={{display:'inline-block',borderBottom:'1px solid'+leg.color}}/>
                    </Col>
                    <Col span={8}>
                        <span>{leg.name}</span>
                    </Col>
                    <Col span={6} offset={6}>
                        <span>{leg.value}</span>
                        <span>/min</span>
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
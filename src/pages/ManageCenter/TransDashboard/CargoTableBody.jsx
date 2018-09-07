import React from 'react';
import {Col, Row} from "antd";

class CargoTableBody extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        console.log(this.props.datasource);
    }

    render() {
        let tableBodyStyle={
            color:'#fff',
            padding:'.3rem',
            borderTop:'none',
            borderRight:'1px solid #363B41',
            borderBottom:'1px solid #363B41',
        };
        let tableBodyStyleLeft={
            borderLeft:'1px solid #363B41',

        };

        return (
            <Row >
                {this.props.datasource.map((data,i)=>{
                    return (
                        <Row key={i}>
                            <Col span={6} className="tableBodyStyle" style={tableBodyStyleLeft} >{data.carNum}</Col>
                            <Col span={6} className="tableBodyStyle" >{data.warehouseNum}</Col>
                            <Col span={6} className="tableBodyStyle" >{data.loadingStatus}</Col>
                            <Col span={6} className="tableBodyStyle" >{data.finishTime}</Col>
                        </Row>
                    )
                })}
            </Row>

        )
    }
}

export default CargoTableBody;
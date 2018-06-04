import React from 'react';
import {Row,Col} from 'antd'
import CommonHeader from "../CommonHeader";
class Problems extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="box-container" style={{height:'8.125rem'}}>
                <CommonHeader title="PROBLEMS" titleSpan={12} lineSpan={12}/>
                <Row className="box-body">
                    <Col>
                        <span style={{fontSize:'3.8rem'}}>{this.props.amount}</span>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default Problems;
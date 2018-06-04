import React from 'react';
import {Row,Col} from 'antd'
import CommonHeader from "../CommonHeader";
class Applications extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="box-container" style={{height:'8.125rem'}}>
                <CommonHeader title="APPLICATIONS" titleSpan={12} lineSpan={12}/>
                <Row className="box-body">
                    <Col span={14} style={{textAlign:'center',height:'6rem',lineHeight:'6rem'}}>
                        <span style={{fontSize:'0.8rem'}}>All fine</span>
                    </Col>
                    <Col span={10} style={{textAlign:'center',height:'6rem',lineHeight:'6rem'}}>
                        <span style={{fontSize:'3.8rem'}}>{this.props.amount}</span>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default Applications;
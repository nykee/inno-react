import React from 'react';
import {Row,Col,Icon} from 'antd'

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            iconType:''
        };
    }
    componentWillMount(){

        if(this.props.selected ==='3'){
            this.setState({
                iconType:"dashboard"
            })

        }
        else if(this.props.selected ==='2'){
            this.setState({
                iconType:"barchart"
            })

        }
        else if(this.props.selected ==='1'){
            this.setState({
                iconType:"dotchart"
            })

        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <Row className={this.props.selected ==="3"?'blackHeader':'normalHeader'}>
                <Col span={6}>{this.props.title}</Col>
                <Col span={8} offset={10}>
                    <Icon type={this.state.iconType} style={{ fontSize: 16, color: '#08c',height:'1rem',width:'1rem',display:'inline-block' }}/>
                </Col>
            </Row>

        )
    }
}

export default Header;
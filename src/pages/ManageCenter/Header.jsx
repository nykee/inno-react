import React from 'react';
import {Row,Col} from 'antd'


class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            iconclass:''
        };
    }
    componentWillReceiveProps(nextProps){
        console.log("nextProps。。。");
        console.log(nextProps.selected);
        if(nextProps.selected ==='3'){
            this.setState({
                iconclass:"fa fa-tachometer fa-2x"
            })

        }
        else if(nextProps.selected ==='2'){
            this.setState({
                iconclass:"fa fa-line-chart fa-2x"
            })

        }
        else if(nextProps.selected ==='1'){
            this.setState({
                iconclass:"fa fa-bar-chart fa-2x"
            })

        }

    }
    componentWillMount(){
        // console.log(typeof this.props.selected)

        if(this.props.selected ==='3'){
            this.setState({
                iconclass:"fa fa-tachometer fa-2x"
            })

        }
        else if(this.props.selected ==='2'){
            this.setState({
                iconclass:"fa fa-line-chart fa-2x"
            })

        }
        else if(this.props.selected ==='1'){
            this.setState({
                iconclass:"fa fa-bar-chart fa-2x"
            })

        }
    }


    render() {
        return (
            <Row className={this.props.selected ==="3"?'blackHeader':'normalHeader'}>
                <Col span={6}>
                    <span className="title-header">
                        {this.props.title}
                    </span>
                </Col>
                <Col span={8} offset={10}>
                    <i className={this.state.iconclass}/>
                </Col>
            </Row>

        )
    }
}

export default Header;
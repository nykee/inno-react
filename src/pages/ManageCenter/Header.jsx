import React from 'react';
import {Row,Col} from 'antd'
import '../../style/SaleDashboard/Header.css'

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            iconclass:''
        };
    }
    componentWillReceiveProps(nextProps){
        // console.log("nextProps。。。");
        // console.log(nextProps.selected);
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
        else if(this.props.selected ==='4'){
            this.setState({
                iconclass:"fa fa-tachometer-alt fa-2x"
            })

        }
    }


    render() {
        return (
            <Row className={(this.props.selected ==="3"||this.props.selected ==="4"||this.props.selected ==="5")?'blackHeader':'normalHeader'}>
                <Col xs={{span:7}}
                     sm={{span:7}}
                     md={{span:7}}
                     lg={{span:6}}
                     xl={{span:4}}>
                    <span className="title-header">
                        {this.props.title}
                    </span>
                </Col>
                <Col xs={{span:5,offset :12}}
                     sm={{span:5,offset :12}}
                     md={{span:3,offset :14}}
                     lg={{span:3,offset :15}}
                     xl={{span:3,offset:17}}
                     style={{textAlign:'right'}}>
                    <i className={this.state.iconclass} style={{paddingRight:'.3rem'}}/>
                </Col>
            </Row>

        )
    }
}

export default Header;
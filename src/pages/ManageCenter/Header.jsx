import React from 'react';
import {Row,Col} from 'antd'
import '../../style/SaleDashboard/Header.css'
import screenfull from 'screenfull'

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            iconclass:''
        };
    }
    componentDidMount(){


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

    fullScreen(){
        if(screenfull.enabled){
            screenfull.request();
        }
    }


    render() {
        return (
            <Row className={(this.props.selected ==="3"||this.props.selected ==="4"||this.props.selected ==="5"||this.props.selected ==="6")?'blackHeader':'normalHeader'}>
                <Col xs={{span:18}}
                     sm={{span:6}}
                     md={{span:6}}
                     lg={{span:6}}
                     xl={{span:6}}>
                    <span className="title-header">
                        {this.props.title}
                    </span>
                </Col>

                <Col xs={{span:6}}
                     sm={{span:5,offset :13}}
                     md={{span:5,offset :13}}
                     lg={{span:5,offset :13}}
                     xl={{span:5,offset :13}}
                     style={{textAlign:'right'}}>
                    <i className="fa fa-expand fa-2x" style={{paddingRight:'.3rem',marginRight:'.6rem'}}  onClick={this.fullScreen.bind(this)} />
                    <i className={this.state.iconclass} style={{paddingRight:'.3rem'}}/>
                </Col>
            </Row>

        )
    }
}

export default Header;
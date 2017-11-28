import React from 'react';
import {Breadcrumb,Row,Col} from 'antd'
import ep from '../utils/eventProxy';
import h_301 from '../assets/img/mCenter/301.png'
class Hospital extends React.Component {
    constructor(){
        super();
        this.state ={
            dzxName:''
        }
    }
    componentWillMount(){
        ep.on('chkHospDetail',(sel)=>{
            console.log(sel);
            switch (sel){
                case "301":
                    /*this.setState({
                        dzxName:'301'
                    });*/
                    break;
                default:
                    /*this.setState({
                        dzxName:'XXX'
                    });*/
                    break;
            }
        })
    }
    render() {
        let _301 ={
            name:'解放军301',
            desc:'解放军301Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fugiat fugit id ipsum iste, labore minima nam neque nesciunt nulla, pariatur placeat possimus quae quam quas quod tempore? Aperiam, in.',
            imgsrc:h_301
        };
        return (
            <div>
                <Row>
                    <Col span={4}>
                        <Breadcrumb>
                            <Breadcrumb.Item>多中心</Breadcrumb.Item>
                            <Breadcrumb.Item>{this.state.dzxName}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>

                </Row>

                <Row>
                    <Col span={4}></Col>
                    <Col span={20}>{this.state.dzxName}</Col>
                </Row>
            </div>

        )
    }
}

export default Hospital;
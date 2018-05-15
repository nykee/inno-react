import React from 'react';
import {Row,Col} from 'antd'
import MonthlySummary from './MonthlySummary'
import AmountCount    from './AmountCount'
import OrderLists     from './OrderLists'
import PercentCount   from './PercentCount'
import ProductLists   from './ProductLists'
import SellersCount   from './SellersCount'

class SalesDashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            isFullScreen:false
        };



    }
    fullScreen  (element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }

    };
componentDidMount(){
        if(this.state.isFullScreen ===true){
            document.getElementById("Dash").webkitRequestFullscreen()
        }
        else {

        }

}
    changeFullScreen(){
        this.state.isFullScreen ===false? this.setState({isFullScreen:true}):this.setState({isFullScreen:false})
    }

    render() {


        return (
            <div style={{color:'#fff',paddingLeft:'0.5rem'}} id="Dash">
                <Row gutter={2}>
                    <Col span={17}>
                        <MonthlySummary/>
                    </Col>
                    <Col span={7}>
                        <PercentCount/>
                    </Col>
                </Row>
                <Row gutter={2} style={{marginTop:'.8rem'}}>
                    <Col span={17}>
                        <OrderLists/>
                    </Col>
                    <Col span={7}>
                        <AmountCount/>
                    </Col>
                </Row>
                <Row gutter={2} style={{marginTop:'.8rem'}}>
                    <Col span={17}>
                        <ProductLists/>
                    </Col>
                    <Col span={7}>
                        <SellersCount/>
                    </Col>
                </Row>
                {/*<button onClick={this.changeFullScreen.bind(this)}>全屏</button>*/}
            </div>

        )
    }
}

export default SalesDashboard;
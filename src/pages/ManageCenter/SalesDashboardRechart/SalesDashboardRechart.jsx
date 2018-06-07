import React from 'react';
import {Row,Col} from 'antd'
import MonthlySummary from './MonthlySummary'
import AmountCount    from './AmountCount'
import OrderLists     from '../SalesDashboard/OrderLists'
import PercentCount   from './PercentCount'
import ProductLists   from './ProductLists'
import SellersCount   from './SellersCount'
class SalesDashboardRechart extends React.Component {


    render() {


        return (
            <div style={{color:'#fff',paddingLeft:'0.5rem'}}>
                <Row gutter={2}>
                    <Col xxl={{span:17}} xl={{span:17}} lg={{span:17}}  md={{span:24}} sm={{span:24}} xs={{span:24}} style={{marginTop:'.8rem'}}>
                        <MonthlySummary/>
                    </Col>
                    <Col xxl={{span:7}} xl={{span:7}} lg={{span:7}}  md={{span:24}} sm={{span:24}} xs={{span:24}} style={{marginTop:'.8rem',textAlign:'center'}}>
                        <PercentCount/>
                    </Col>
                </Row>
                <Row gutter={2} style={{marginTop:'.8rem'}}>
                    <Col xxl={{span:17}}  xl={{span:17}} lg={{span:17}}  md={{span:24}} sm={{span:24}} xs={{span:24}} style={{marginTop:'.8rem'}}>
                        <OrderLists/>
                    </Col>
                    <Col xxl={{span:7}} xl={{span:7}} lg={{span:7}}  md={{span:24}} sm={{span:24}} xs={{span:24}} style={{marginTop:'.8rem'}}>
                        <AmountCount/>
                    </Col>
                </Row>
                <Row gutter={2} style={{marginTop:'.8rem'}}>
                    <Col xxl={{span:17}} xl={{span:17}}  lg={{span:17}}  md={{span:24}} sm={{span:24}} xs={{span:24}} style={{marginTop:'.8rem'}}>
                        <ProductLists/>
                    </Col>
                    <Col xxl={{span:7}} xl={{span:7}} lg={{span:7}}  md={{span:24}} sm={{span:24}} xs={{span:24}} style={{marginTop:'.8rem'}}>
                        <SellersCount/>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default SalesDashboardRechart;
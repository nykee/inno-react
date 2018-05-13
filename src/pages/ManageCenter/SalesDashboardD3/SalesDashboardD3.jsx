import React from 'react';
import {Row,Col} from 'antd'
import MonthlySummary from './MonthlySummary'
import AmountCount    from './AmountCount'
import OrderLists     from '../SalesDashboard/OrderLists'
import PercentCount   from './PercentCount'
import ProductLists   from './ProductLists'
import SellersCount   from './SellersCount'
class SalesDashboardD3 extends React.Component {


    render() {


        return (
            <div style={{color:'#fff',paddingLeft:'0.5rem'}}>
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
            </div>

        )
    }
}

export default SalesDashboardD3;
import React from 'react';
import {Row,Col} from 'antd'
import MonthlySummary from './MonthlySummary'
import AmountCount    from './AmountCount'
import OrderLists     from './OrderLists'
import PercentCount   from './PercentCount'
import ProductLists   from './ProductLists'
import SellersCount   from './SellersCount'

class SalesDashboard extends React.Component {


    render() {


        return (
            <div style={{color:'#fff',paddingLeft:'0.5rem'}}>
                <Row>
                    <Col span={17}>
                        <MonthlySummary/>
                    </Col>
                    <Col span={7}>
                        <PercentCount/>
                    </Col>
                </Row>
                <Row>
                    <Col span={17}>
                        <OrderLists/>
                    </Col>
                    <Col span={7}>
                        <AmountCount/>
                    </Col>
                </Row>
                <Row>
                    <Col span={16}>
                        <ProductLists/>
                    </Col>
                    <Col span={8}>
                        <SellersCount/>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default SalesDashboard;
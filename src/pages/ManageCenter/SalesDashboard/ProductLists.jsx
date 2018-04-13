import React from 'react';
import {Row,Col} from 'antd'

import ProductListsItems from './ProductListsItems'
class ProductLists extends React.Component {


    render() {


        return (
            <Row>
                <Col span={4} >
                    <ProductListsItems name="HuaWei" qty="1900"/>
                </Col>
                <Col span={4} offset={1}>
                     <ProductListsItems name="HTC" qty="852"/>
                </Col>
                <Col span={4} offset={1}>
                    <ProductListsItems name="SamSung" qty="121"/>
                </Col>
                <Col span={4} offset={1}>
                    <ProductListsItems name="Apple" qty="2400"/>
                </Col>
                <Col span={4} offset={1}>
                    <ProductListsItems name="XiaoMi" qty="1800"/>
                </Col>
            </Row>

        )
    }
}

export default ProductLists;
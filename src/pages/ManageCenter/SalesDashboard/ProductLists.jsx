import React from 'react';
import {Row,Col} from 'antd'

import ProductListsItems from './ProductListsItems'
class ProductLists extends React.Component {


    render() {


        return (
            <Row>
                <Col span={4} >
                    <ProductListsItems name="HuaWei"/>
                </Col>
                <Col span={4} offset={1}>
                     <ProductListsItems name="HTC"/>
                </Col>
                <Col span={4} offset={1}>
                    <ProductListsItems name="SamSung"/>
                </Col>
                <Col span={4} offset={1}>
                    <ProductListsItems name="Apple"/>
                </Col>
                <Col span={4} offset={1}>
                    <ProductListsItems name="XiaoMi"/>
                </Col>
            </Row>

        )
    }
}

export default ProductLists;
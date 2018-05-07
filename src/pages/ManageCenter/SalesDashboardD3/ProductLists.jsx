import React from 'react';
import ProductListsItems from "../SalesDashboardD3/ProductListsItems";

import {Col, Row} from "antd";

class ProductLists extends React.Component {


    render() {
        let colorLists=['#9F86FF','#2F323B'];
        let data= [43,57];

        return (
            <div>
                <Row>
                    <Col span={4} >
                        {/*<h4>HTC</h4>*/}
                        <ProductListsItems name="HTC" qty="450"  colorLists={colorLists} data={data} svgName="svg-htc"/>
                    </Col>
                    <Col span={4} offset={1} >
                        {/*<h4>Nokia</h4>*/}
                        <ProductListsItems name="Nokia" qty="657" colorLists={colorLists} data={data} svgName="svg-nokia"/>
                    </Col>
                    <Col span={4} offset={1} >
                        {/*<ProductListsItems name="LG" qty="1200" colorLists={colorLists} data={data}/>*/}
                    </Col>
                    <Col span={4} offset={1} >
                        {/*<ProductListsItems name="Samsung" qty="1800" colorLists={colorLists} data={data}/>*/}
                    </Col>
                    <Col span={4} offset={1} >
                        {/*<ProductListsItems name="Apple" qty="2400" colorLists={colorLists} data={data}/>*/}
                    </Col>
                </Row>
                {/*<Row>
                    <PieChart chartOption={chartOption} />
                </Row>*/}
            </div>

        )
    }
}

export default ProductLists;
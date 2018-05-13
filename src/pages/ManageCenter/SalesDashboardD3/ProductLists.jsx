import React from 'react';
import ProductListsItems from "../SalesDashboardD3/ProductListsItems";

import {Col, Row} from "antd";

class ProductLists extends React.Component {


    render() {
        let productItems=[
            {name:'HTC',qty:450,colorLists:['#1A97CD','#2F323B'],data:[66,34],svgName:'svg-htc',offset:0},
            {name:'Nokia',qty:657,colorLists:['#006AD0','#2F323B'],data:[57,43],svgName:'svg-nokia',offset:1},
            {name:'HTC',qty:1200,colorLists:['#8E76F2','#2F323B'],data:[78,22],svgName:'svg-lg',offset:1},
            {name:'HTC',qty:1800,colorLists:['#4A2ED6','#2F323B'],data:[82,18],svgName:'svg-samsung',offset:1},
            {name:'HTC',qty:2400,colorLists:['#006BD1','#2F323B'],data:[89,11],svgName:'svg-apple',offset:1},
        ];
        let colorLists=['#9F86FF','#2F323B'];
        let data_nokia= [43,57];
        let data_htc= [42,67];
        let data_lg= [33,57];
        let data_samsung= [22,47];
        let data_apple= [51,87];

        return (
            <div>
                <Row>
                    {
                        productItems.map((pitem)=>{
                            // console.log(pitem.data);
                            // console.log(pitem.colorLists)
                            return(
                                <Col span={4} offset={pitem.offset}>
                                    <ProductListsItems name={pitem.name} qty={pitem.qty}  colorLists={pitem.colorLists}  data={pitem.data} svgName={pitem.svgName}/>
                                </Col>
                            )

                        })
                    }
                    {/*<Col span={4} >*/}
                        {/*/!*<h4>HTC</h4>*!/*/}
                        {/*<ProductListsItems name="HTC" qty="450"  colorLists={colorLists}  data={data_htc} svgName="svg-htc"/>*/}
                    {/*</Col>*/}
                    {/*<Col span={4} offset={1} >*/}
                        {/*/!*<h4>Nokia</h4>*!/*/}
                        {/*<ProductListsItems name="Nokia" qty="657" colorLists={colorLists}  data={data_nokia} svgName="svg-nokia"/>*/}
                    {/*</Col>*/}
                    {/*<Col span={4} offset={1} >*/}
                        {/*<ProductListsItems name="LG" qty="1200" colorLists={colorLists} data={data_lg} svgName="svg-lg" />*/}
                    {/*</Col>*/}
                    {/*<Col span={4} offset={1} >*/}
                        {/*<ProductListsItems name="Samsung" qty="1800" colorLists={colorLists} data={data_samsung} svgName="svg-samsung" />*/}
                    {/*</Col>*/}
                    {/*<Col span={4} offset={1} >*/}
                        {/*<ProductListsItems name="Apple" qty="2400" colorLists={colorLists} data={data_apple} svgName="svg-apple" />*/}
                    {/*</Col>*/}
                </Row>
                {/*<Row>
                    <PieChart chartOption={chartOption} />
                </Row>*/}
            </div>

        )
    }
}

export default ProductLists;
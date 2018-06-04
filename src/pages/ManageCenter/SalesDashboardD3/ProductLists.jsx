import React from 'react';
import ProductListsItems from "../SalesDashboardD3/ProductListsItems";

import {Col, Row} from "antd";

class ProductLists extends React.Component {


    render() {
        let productItems=[
            {name:'HTC',qty:450,colorLists:['#1A97CD','#2F323B'],data:[66,34],svgName:'svg-htc',offset:0},
            {name:'NOKIA',qty:657,colorLists:['#006AD0','#2F323B'],data:[57,43],svgName:'svg-nokia',offset:1},
            {name:'LG',qty:1200,colorLists:['#8E76F2','#2F323B'],data:[78,22],svgName:'svg-lg',offset:1},
            {name:'SAMSUNG',qty:1800,colorLists:['#4A2ED6','#2F323B'],data:[82,18],svgName:'svg-samsung',offset:1},
            {name:'APPLE',qty:2400,colorLists:['#006BD1','#2F323B'],data:[89,11],svgName:'svg-apple',offset:1},
        ];

        return (
            <div>
                <Row>
                    {
                        productItems.map((pitem)=>{
                            // console.log(pitem.data);
                            // console.log(pitem.colorLists)
                            return(
                                <Col xs={{span:24}}
                                     sm={{span:24}}
                                     md={{span:24}}
                                     lg={{span:4}}
                                     xl={{span:4}} offset={pitem.offset}>
                                    <ProductListsItems name={pitem.name} qty={pitem.qty}  colorLists={pitem.colorLists}  data={pitem.data} svgName={pitem.svgName}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>

        )
    }
}

export default ProductLists;
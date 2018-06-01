import React from 'react';
import ProductListsItems from "./ProductListsItems";

import {Col, Row} from "antd";
import CommonTitle from "../SalesDashboard/CommonTitle";

class ProductLists extends React.Component {


    render() {
        let productItems=[
            {name:'HTC',qty:450,colorLists:'#1A97CD',endAngle:40,startAngle:370,svgName:'svg-htc',offset:0},
            {name:'NOKIA',qty:657,colorLists:'#006AD0',endAngle:252,startAngle:10,svgName:'svg-nokia',offset:1},
            {name:'LG',qty:1200,colorLists:'#8E76F2',endAngle:222,startAngle:10,svgName:'svg-lg',offset:1},
            {name:'SAMSUNG',qty:1800,colorLists:'#4A2ED6',endAngle:281,startAngle:10,svgName:'svg-samsung',offset:1},
            {name:'APPLE',qty:2400,colorLists:'#006BD1',endAngle:300,startAngle:10,svgName:'svg-apple',offset:1},
        ];

        return (
            <div>
                <Row>
                    <CommonTitle titleName="Products"/>
                    {
                        productItems.map((pitem)=>{
                            // console.log(pitem.data);
                            // console.log(pitem.colorLists)
                            return(
                                <Col span={4} offset={pitem.offset}>
                                    <ProductListsItems  name={pitem.name} qty={pitem.qty}  colorLists={pitem.colorLists}  data={pitem} endAngle={pitem.endAngle} startAngle={pitem.startAngle}/>
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
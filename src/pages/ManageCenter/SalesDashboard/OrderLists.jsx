import React from 'react';
import {Row,Col} from 'antd'
import CommonTitle from './CommonTitle'
import '../../../style/SaleDashboard/OrderLists.css'
class OrderLists extends React.Component {


    render() {
        let orders =[
            {item:'HTC Mobile',Costumer:'alan b',price:'$438',Product:'B-TZF'},
            {item:'Samsung Mobile',Costumer:'alan c',price:'$680',Product:'C-565'},
            {item:'Apple Mobile',Costumer:'alan d',price:'$680',Product:'A-292'},
            {item:'HTC Mobile',Costumer:'alan e',price:'$438',Product:'D-T23'},
            {item:'LG Mobile',Costumer:'alan G',price:'$230',Product:'G-T24'},
            {item:'Nokia Mobile',Costumer:'alan F',price:'$120',Product:'A-TG1'}

        ];

       let tbodyElement =[];
        for (let order of orders ){
            tbodyElement.push(


                        <Row>
                            <Col span={6} className="tbody-item">
                                <td>{order.item}</td>
                            </Col>
                            <Col span={4} offset={6} className="tbody-item">
                                <td >{order.Costumer}</td>
                            </Col>
                            <Col span={4} className="tbody-item-price">
                                <td>{order.price}</td>
                            </Col>
                            <Col span={4} className="tbody-item">
                                <td>{order.Product}</td>
                            </Col>
                        </Row>










            )
       }


        return (

            <div>
                <div>
                    <CommonTitle titleName="Your Orders"/>
                    {/*<h4 style={{textAlign:'left',color:'#fff',fontSize:'1rem',marginBottom:'.5rem'}}>Your Orders</h4>*/}
                </div>
                <div>
                        <Row>
                            <Col span={6} className="thead">Item</Col>
                            <Col span={4} offset={6} className="thead">Costumer</Col>
                            <Col span={4} className="thead">Price</Col>
                            <Col span={4} className="thead">Product</Col>
                        </Row>

                    {tbodyElement  }


                </div>

            </div>

        )
    }
}

export default OrderLists;
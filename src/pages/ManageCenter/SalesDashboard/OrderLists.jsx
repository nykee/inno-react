import React from 'react';
import {Row,Col} from 'antd'
import CommonTitle from './CommonTitle'
import '../../../style/SaleDashboard/OrderLists.css'
class OrderLists extends React.Component {
    constructor(){
        super();
        this.state ={
            pageShow:1
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.state.pageShow===1?this.setState({
                pageShow:2
            }):this.setState({
                pageShow:1
            })
        },10000)
    }

    render() {
        let orders =[
            {item:'HTC Mobile',Costumer:'alan B',price:'$438',ProductID:'B-TZF'},
            {item:'Samsung Mobile',Costumer:'alan C',price:'$680',ProductID:'C-565'},
            {item:'Apple Mobile',Costumer:'alan D',price:'$680',ProductID:'A-292'},
            {item:'XiaoMi Mobile',Costumer:'alan E',price:'$438',ProductID:'D-T23'},
            {item:'LG Mobile',Costumer:'alan G',price:'$230',ProductID:'G-T24'},
            {item:'Nokia Mobile',Costumer:'alan F',price:'$120',ProductID:'A-TG1'},
            {item:'HuaWei Mobile',Costumer:'alan Z',price:'$220',ProductID:'D-TG2'},
            {item:'Oppo Mobile',Costumer:'alan X',price:'$220',ProductID:'D-TG2'},
            {item:'Vivo Mobile',Costumer:'alan T',price:'$220',ProductID:'D-TG2'},
            {item:'MeiZu Mobile',Costumer:'alan K',price:'$220',ProductID:'D-TG2'},
        ];

       let page1 =[];
       let page2 =[];
       let amountPerPage =5;
       function PushData(array,index) {
           array.push(
               <Row style={{marginTop:'.7rem'}} key={index}>
                   <Col
                         xxl={{span:8}}
                         xl={{span:8}}
                         lg={{span:8}}
                         md={{span:8}}
                         sm={{span:8}}
                         xs={{span:8}} className="tbody-item">
                       <span>{orders[index].item}</span>
                   </Col>
                   <Col
                       xxl={{span:5,offset:1}}
                       xl={{span:5,offset:1}}
                        lg={{span:5,offset:1}}
                        md={{span:5,offset:1}}
                        sm={{span:5,offset:1}}
                        xs={{span:5,offset:1}}  className="tbody-item">
                       <span >{orders[index].Costumer}</span>
                   </Col>
                   <Col
                       xxl={{span:4,offset:1}}
                        xl={{span:4,offset:1}}
                        lg={{span:4,offset:1}}
                        md={{span:4,offset:1}}
                        sm={{span:4,offset:1}}
                        xs={{span:4,offset:1}} className="tbody-item-price">
                       <span>{orders[index].price}</span>
                   </Col>
                   <Col
                       xxl={{span:4,offset:1}}
                       xl={{span:4,offset:1}}
                        lg={{span:4,offset:1}}
                        md={{span:4,offset:1}}
                        sm={{span:4,offset:1}}
                        xs={{span:4,offset:1}} className="tbody-item">
                       <span>{orders[index].ProductID}</span>
                   </Col>
               </Row>
           )
       }
       for (let i=0;i<amountPerPage; i++ ){
            PushData(page1,i)
       }
       for(let i =amountPerPage;i<orders.length;i++){
           PushData(page2,i)
       }


        return (

            <div>
                <div>
                    <CommonTitle titleName="Your Orders"/>
                </div>
                <div>
                    <Row>
                        <Col
                            xxl={{span:8}}
                            xl={{span:8}}
                            lg={{span:8}}
                            md={{span:8}}
                            sm={{span:8}}
                            xs={{span:8}}
                            className="thead"
                        >
                            Item
                        </Col>
                        <Col   xxl={{span:5,offset:1}}
                               xl={{span:5,offset:1}}
                               lg={{span:5,offset:1}}
                               md={{span:5,offset:1}}
                               sm={{span:5,offset:1}}
                               xs={{span:5,offset:1}}
                             className="thead"
                        >
                            Costumer
                        </Col>
                        <Col  xxl={{span:4,offset:1}}
                              xl={{span:4,offset:1}}
                              lg={{span:4,offset:1}}
                              md={{span:4,offset:1}}
                              sm={{span:4,offset:1}}
                              xs={{span:4,offset:1}}
                             className="thead"
                        >
                            Price
                        </Col>
                        <Col  xxl={{span:4,offset:1}}
                              xl={{span:4,offset:1}}
                              lg={{span:4,offset:1}}
                              md={{span:4,offset:1}}
                              sm={{span:4,offset:1}}
                              xs={{span:4,offset:1}}
                             className="thead"
                        >
                            ProductID
                        </Col>
                    </Row>
                    {this.state.pageShow === 1?page1:page2 }
                </div>
            </div>
        )
    }
}

export default OrderLists;
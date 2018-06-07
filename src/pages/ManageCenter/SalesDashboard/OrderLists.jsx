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
            {item:'HTC Mobile',Costumer:'alan B',price:'$438',Product:'B-TZF'},
            {item:'Samsung Mobile',Costumer:'alan C',price:'$680',Product:'C-565'},
            {item:'Apple Mobile',Costumer:'alan D',price:'$680',Product:'A-292'},
            {item:'XiaoMi Mobile',Costumer:'alan E',price:'$438',Product:'D-T23'},
            {item:'LG Mobile',Costumer:'alan G',price:'$230',Product:'G-T24'},
            {item:'Nokia Mobile',Costumer:'alan F',price:'$120',Product:'A-TG1'},
            {item:'HuaWei Mobile',Costumer:'alan Z',price:'$220',Product:'D-TG2'},
            {item:'Oppo Mobile',Costumer:'alan X',price:'$220',Product:'D-TG2'},
            {item:'Vivo Mobile',Costumer:'alan T',price:'$220',Product:'D-TG2'},
            {item:'MeiZu Mobile',Costumer:'alan K',price:'$220',Product:'D-TG2'},
        ];

       let page1 =[];
       let page2 =[];
       let amountPerPage =5;
       function PushData(array,index) {
           array.push(
               <Row style={{marginTop:'.7rem'}}>
                   <Col  xl={{span:6}}
                         lg={{span:6}}
                         md={{span:6}}
                         sm={{span:6}}
                         xs={{span:6}} className="tbody-item">
                       <span>{orders[index].item}</span>
                   </Col>
                   <Col xl={{span:4}}
                        lg={{span:4}}
                        md={{span:5,offset:4}}
                        sm={{span:5,offset:4}}
                        xs={{span:6,offset:3}}  className="tbody-item">
                       <span >{orders[index].Costumer}</span>
                   </Col>
                   <Col xl={{span:4}}
                        lg={{span:4}}
                        md={{span:4}}
                        sm={{span:4}}
                        xs={{span:4}} className="tbody-item-price">
                       <span>{orders[index].price}</span>
                   </Col>
                   <Col xl={{span:4}}
                        lg={{span:4}}
                        md={{span:4}}
                        sm={{span:4}}
                        xs={{span:4}} className="tbody-item">
                       <span>{orders[index].Product}</span>
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
                            xl={{span:6}}
                            lg={{span:6}}
                            md={{span:6}}
                            sm={{span:6}}
                            xs={{span:6}}
                            className="thead"
                        >
                            Item
                        </Col>
                        <Col xl={{span:4}}
                             lg={{span:4}}
                             md={{span:5,offset:4}}
                             sm={{span:5,offset:4}}
                             xs={{span:6,offset:3}}
                             className="thead"
                        >
                            Costumer
                        </Col>
                        <Col xl={{span:4}}
                             lg={{span:4}}
                             md={{span:4}}
                             sm={{span:4}}
                             xs={{span:4}}
                             className="thead"
                        >
                            Price
                        </Col>
                        <Col xl={{span:4}}
                             lg={{span:4}}
                             md={{span:4}}
                             sm={{span:4}}
                             xs={{span:4}}
                             className="thead"
                        >
                            Product
                        </Col>
                    </Row>
                    {this.state.pageShow === 1?page1:page2 }
                </div>
            </div>
        )
    }
}

export default OrderLists;
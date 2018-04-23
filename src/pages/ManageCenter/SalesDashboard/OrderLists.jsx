import React from 'react';

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

                    <tr>
                        <td>{order.item}</td>
                        <td>{order.Costumer}</td>
                        <td>{order.price}</td>
                        <td>{order.Product}</td>
                    </tr>









            )
       }


        return (

            <div>
                <div>
                    <h4>Your Orders</h4>
                </div>
                <table>
                    <th>
                        <tr>
                            <td>Item</td>
                        </tr>
                    </th>
                    <th>
                        <tr>
                            <td>Costumer</td>
                        </tr>
                    </th><th>
                        <tr>
                            <td>Price</td>
                        </tr>
                    </th><th>
                        <tr>
                            <td>Product</td>
                        </tr>
                    </th>
                    {tbodyElement  }
                </table>

            </div>

        )
    }
}

export default OrderLists;
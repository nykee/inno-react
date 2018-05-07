import React from 'react';
import CustomDPie from '../../../componenets/D3Charts/CustomDPie'
class ProductListsItems extends React.Component {
    componentDidMount(){

    }

    render() {
        let colorLists=this.props.colorLists;
        let data= this.props.data;
        console.log(this.prop.svgName);

        return (
            <div>
                <h4 style={{color:'#dff'}}>{this.props.name}</h4>
                <CustomDPie colorLists={colorLists} data={data} />
            </div>

        )
    }
}

export default ProductListsItems;
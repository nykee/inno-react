import React from 'react';
import CustomDPie from '../../../componenets/D3Charts/CustomDPie'
class ProductListsItems extends React.Component {


    render() {




        return (
            <div>
                <h4 style={{color:'#dff'}}>{this.props.name}</h4>
                <CustomDPie colorLists={this.props.colorLists} data={this.props.data} svgName={this.props.svgName}/>
            </div>

        )
    }
}

export default ProductListsItems;
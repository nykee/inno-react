import React from 'react';

import PieChart from '../../../componenets/Echarts/PieChart'

class ProductListsItems extends React.Component {
    componentDidMount(){
        console.log(this.props.chartOption);
    }

    render() {

        return (
           <div  >
               <span style={{fontSize:'.9rem',fontWeight:'bold',textAlign:'left'}}>{this.props.name}</span>
               <PieChart chartOption={this.props.chartOption} charID={this.props.charID}/>
           </div>

        )
    }
}

export default ProductListsItems;
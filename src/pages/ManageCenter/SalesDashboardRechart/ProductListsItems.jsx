import React from 'react';
// import CustomDPie from '../../../componenets/D3Charts/CustomDPie'
import {PieChart,Pie} from 'recharts'
class ProductListsItems extends React.Component {


    render() {




        return (
            <div>
                <h4 style={{color:'#dff'}}>{this.props.name}</h4>
                {/*<CustomDPie colorLists={this.props.colorLists} data={this.props.data} svgName={this.props.svgName}/>*/}
                <PieChart width={190} height={220}>
                    <Pie
                        data={[this.props.data]} dataKey="qty" cx="50%" cy="50%"
                        innerRadius={55} outerRadius={70} fill={this.props.colorLists}
                        stroke={this.props.colorLists}
                        endAngle={this.props.endAngle}  startAngle={this.props.startAngle}

                    />
                    <g>
                        <text x={"50%"} y={"40%"} dy={8} textAnchor="middle" fill={'#888687'}>QTY</text>
                        <text x={"50%"} y={"50%"} dy={8} textAnchor="middle" fill={'#A6AEBF'}>{this.props.qty}</text>
                    </g>
                </PieChart>
            </div>

        )
    }
}

export default ProductListsItems;
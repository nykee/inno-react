import React from 'react';
// import CustomDPie from '../../../componenets/D3Charts/CustomDPie'
import {PieChart,Pie,ResponsiveContainer} from 'recharts'
class ProductListsItems extends React.Component {
    constructor(){
        super();
        this.state={
            activeColor:''
        }
    }
    handleMouseOver(data){
        // console.log(data);
        // console.log(index);
        if(data.name ==="NOKIA"){
          this.setState({
              activeColor:'#3590DE'
          })
        }
        else if(data.name ==="LG"){
            this.setState({
                activeColor:'#AD9AF6'
            })
        }
        else if(data.name ==="APPLE"){
            this.setState({
                activeColor:'#3591DF'
            })
        }
        else if(data.name ==="SAMSUNG"){
            this.setState({
                activeColor:'#765BE2'
            })
        }
        else if(data.name ==="HTC"){
            this.setState({
                activeColor:'#4AB3DB'
            })
        }
    }
    handleMouseOut(){
        this.setState({
            activeColor:''
        })
    }

    render() {


        // console.log(this.props.colorLists);
        // console.log(this.state.activeColor.length);

        return (
            <div>
                <h4 style={{color:'#dff'}}>{this.props.name}</h4>
                {/*<CustomDPie colorLists={this.props.colorLists} data={this.props.data} svgName={this.props.svgName}/>*/}
                <ResponsiveContainer width='100%' height={220}>
                    <PieChart >
                    <Pie
                        data={[this.props.data]} dataKey="qty" cx="50%" cy="50%"
                        innerRadius={45} outerRadius={60} fill={this.state.activeColor.length===0?this.props.colorLists:this.state.activeColor}
                        stroke={this.props.colorLists}
                        endAngle={this.props.endAngle}  startAngle={this.props.startAngle}
                        onMouseOver={this.handleMouseOver.bind(this)}
                        onMouseOut={this.handleMouseOut.bind(this)}
                        style={{cursor:'pointer'}}

                    />
                    <g>
                        <text x={"50%"} y={"40%"} dy={8} textAnchor="middle" fill={'#888687'}>QTY</text>
                        <text x={"50%"} y={"50%"} dy={8} textAnchor="middle" fill={'#A6AEBF'}>{this.props.qty}</text>
                    </g>
                </PieChart>
                </ResponsiveContainer>

            </div>

        )
    }
}

export default ProductListsItems;
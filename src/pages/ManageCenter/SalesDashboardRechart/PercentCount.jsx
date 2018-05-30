import React from 'react';
// import CustomDPie from '../../../componenets/D3Charts/CustomDPie'
import {PieChart,Pie, Legend,ResponsiveContainer} from 'recharts'

class PercentCount extends React.Component {
    constructor() {
        super();
        this.state = {
            activeItem:'',
            color1:'#9F86FF',
            color2:'#007AE1',
            color3:'#1CA8DD',
            outerRadius1:80,
            outerRadius2:80,
            outerRadius3:80,
            activeColor:''

        }
    }
    onMouseOver(data){
    // console.log(data);
    this.setState({
        activeItem:data.name,

    });

        data.name ==="New Customers"? this.setState({
          color1:'#B29EFF',
            activeColor:'#B29EFF',
            outerRadius1:85,
        }):'';
        data.name ==="Sales"? this.setState({
            color2:'#3394E7',
            activeColor:'#3394E7',
            outerRadius2:85,
        }):'';
        data.name ==="Refound"? this.setState({
            color3:'#49B9E3',
            activeColor:'#49B9E3',
            outerRadius3:85,
        }):'';

}
    onMouseOut(){
        this.setState({
            activeItem:'',
            color1:'#9F86FF',
            color2:'#007AE1',
            color3:'#1CA8DD',
            outerRadius1:80,
            outerRadius2:80,
            outerRadius3:80,
        })
    }

    render() {
        // let colorLists=['#9F86FF','#1CA8DD','#007AE1'];
        let data1= [
            {name: 'New Customers', value: 400},
            ]
        ;
        let data2 =[{name: 'Sales', value: 400},];
        let data3 =[{name: 'Refound', value: 400},];
        // let svgName ="cPie";
        return (
            <div>
                {/*<CustomDPie colorLists={colorLists} data={data} svgName={svgName}/>*/}
                <PieChart width={300} height={300}>
                    <Pie style={{cursor:'pointer'}} data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={this.state.outerRadius1} stroke={this.state.color1} fill={this.state.color1} startAngle={0} endAngle={170} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}/>
                    <Pie style={{cursor:'pointer'}} data={data2} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={this.state.outerRadius2} stroke={this.state.color2} fill={this.state.color2} startAngle={170} endAngle={280} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}/>
                    <Pie style={{cursor:'pointer'}} data={data3} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={this.state.outerRadius3} stroke={this.state.color3} fill={this.state.color3} startAngle={280} endAngle={360} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}/>
                    <g>
                        <text x={"50%"} y={"50%"} dy={8} textAnchor="middle" fill={this.state.activeColor}>{this.state.activeItem}</text>
                    </g>
                    <Legend/>
                </PieChart>
            </div>

        )
    }
}

export default PercentCount;
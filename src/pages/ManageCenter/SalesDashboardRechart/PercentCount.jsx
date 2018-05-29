import React from 'react';
import CustomDPie from '../../../componenets/D3Charts/CustomDPie'
import {PieChart,Pie, Legend} from 'recharts'

class PercentCount extends React.Component {


    render() {
        // let colorLists=['#9F86FF','#1CA8DD','#007AE1'];
        let data= [
            {name: 'New Customers', value: 400},
            {name: 'Sales', value: 400},
            {name: 'Refound', value: 400},
            ]
        ;
        // let svgName ="cPie";
        return (
            <div>
                {/*<CustomDPie colorLists={colorLists} data={data} svgName={svgName}/>*/}
                <PieChart width={300} height={300}>
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" />
                    <Legend/>
                </PieChart>
            </div>

        )
    }
}

export default PercentCount;
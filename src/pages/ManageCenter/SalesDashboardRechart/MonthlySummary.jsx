import React from 'react';
import {AreaChart, Area, XAxis, YAxis, Tooltip} from 'recharts'
import CommonTitle from "../SalesDashboard/CommonTitle";
class MonthlySummary extends React.Component {


    render() {
        const data = [
            {name: '1', uv: 4000, pv: 2400, amt: 2400},
            {name: '2', uv: 3000, pv: 1398, amt: 2210},
            {name: '3', uv: 2000, pv: 9800, amt: 2290},
            {name: '4', uv: 2780, pv: 3908, amt: 2000},
            {name: '5', uv: 1890, pv: 4800, amt: 2181},
            {name: '6', uv: 2390, pv: 3800, amt: 2500},
            {name: '7', uv: 3490, pv: 4300, amt: 2100},
            {name: '8', uv: parseInt(Math.random()*5000), pv:parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '9', uv:parseInt(Math.random()*5000) , pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '10', uv:parseInt(Math.random()*5000) , pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '11', uv:parseInt(Math.random()*5000) , pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '12', uv:parseInt(Math.random()*5000) , pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '13', uv:parseInt(Math.random()*5000) , pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '14', uv:parseInt(Math.random()*5000) , pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '15', uv:parseInt(Math.random()*5000) , pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '16', uv:parseInt(Math.random()*5000) , pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '17', uv: parseInt(Math.random()*5000), pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '18', uv: parseInt(Math.random()*5000), pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '19', uv: parseInt(Math.random()*5000), pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '20', uv: parseInt(Math.random()*5000), pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '21', uv: parseInt(Math.random()*5000), pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '22', uv: parseInt(Math.random()*5000), pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '23', uv: parseInt(Math.random()*5000), pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '24', uv: parseInt(Math.random()*5000), pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '25', uv: parseInt(Math.random()*5000), pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '26', uv: parseInt(Math.random()*5000), pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '27', uv:parseInt(Math.random()*5000) , pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '28', uv:parseInt(Math.random()*5000) , pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '29', uv:parseInt(Math.random()*5000) , pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
            {name: '30', uv: parseInt(Math.random()*5000), pv: parseInt(Math.random()*5000), amt: parseInt(Math.random()*5000)},
        ];

        return (
            <div>
                <CommonTitle titleName="Monthly Summary"/>
                <AreaChart width={700} height={300} data={data}
                           margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Area type='monotone' dataKey='uv' stackId="1"  fill='#9F86FF' />
                    <Area type='monotone' dataKey='pv' stackId="2"  fill='#007AE1' />
                    <Area type='monotone' dataKey='amt' stackId="3"  fill='#1CA8DD' />
                </AreaChart>
            </div>

        )
    }
}

export default MonthlySummary;
import React from 'react';
import BarLine from "../../../componenets/Echarts/BarLine";
import {barlineConfig} from "../../../chartConfig/barlineConfig";

class BarLineCombine extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        let config =new barlineConfig();
        config.barlineConfig.xAxis[0].show =false;
        config.barlineConfig.yAxis[0].show =false;
        config.barlineConfig.yAxis[1].show =false;
        config.barlineConfig.yAxis[0].splitLine={show:false};
        config.barlineConfig.yAxis[1].splitLine={show:false};
        config.barlineConfig.toolbox.show =false;
        config.barlineConfig.grid ={show:true,borderWidth:'0'};
        config.barlineConfig.legend.data =
            [{name:'蒸发量',textStyle:{color:'#fff'}},{name:'平均温度',textStyle:{color:'#fff'}}];


        return (
            <div>
                <BarLine chartID="barLineCombine" chartOption={config.barlineConfig}/>
            </div>

        )
    }
}

export default BarLineCombine;
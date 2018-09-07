import React from 'react';
import BarLine from "../../../componenets/Echarts/BarLine";
import {barlineConfig} from "../../../chartConfig/barlineConfig";
import EP from "../../../utils/eventProxy";
let Mock =require('mockjs');
class AreaSummary extends React.Component {
    constructor() {
        super();

        // this. Sdata_1 =[];
        // this.Sdata_2 =[];
        this.Sdata_1_amazon =[];
        this.Sdata_2_amazon =[];
        this.Sdata_1_tmall =[];
        this.Sdata_2_tmall =[];
        this.Sdata_1_taobao =[];
        this.Sdata_2_taobao =[];
        this.Sdata_1_jd =[];
        this.Sdata_2_jd =[];
        this.Sdata_1_yihaodian =[];
        this.Sdata_2_yihaodian =[];

        this.pushData(this.Sdata_1_amazon,this.Sdata_2_amazon);

        this.state = {
            seriesData_1:this.Sdata_1_amazon,
            seriesData_2:this.Sdata_2_amazon,
            chartTitle :'各地区运单统计-亚马逊'

        };
    }
    componentWillMount(){

        this.pushData(this.Sdata_1_tmall,this.Sdata_2_tmall);
        this.pushData(this.Sdata_1_taobao,this.Sdata_2_taobao);
        this.pushData(this.Sdata_1_jd,this.Sdata_2_jd);
        this.pushData(this.Sdata_1_yihaodian,this.Sdata_2_yihaodian);

    }
    pushData(array1,array2){
        for(let i=0;i<12;i++){
            array1.push( Mock.mock(
                {"number|10000-20000":20000}
            ).number);
            array2.push(
                Mock.mock(
                    {"number|1000-2000":2000}
                ).number
            )
        }
    }

    componentDidMount() {
        let self =this;
        EP.on('PIE_CLICK',(d)=>{
            self.setState({
                chartTitle:"各地区运单统计-"+d.name
            });
            switch (d.name){
                case "亚马逊":
                    self.setState({
                        seriesData_1:this.Sdata_1_amazon,
                        seriesData_2:this.Sdata_2_amazon,

                    });
                    break;
                case "天猫":
                    self.setState({
                        seriesData_1:this.Sdata_1_tmall,
                        seriesData_2:this.Sdata_2_tmall
                    });
                    break;
                case "淘宝":
                    self.setState({
                        seriesData_1:this.Sdata_1_taobao,
                        seriesData_2:this.Sdata_2_taobao
                    });
                    break;
                case "京东":
                    self.setState({
                        seriesData_1:this.Sdata_1_jd,
                        seriesData_2:this.Sdata_2_jd
                    });
                    break;
                case "一号店":
                    self.setState({
                        seriesData_1:this.Sdata_1_yihaodian,
                        seriesData_2:this.Sdata_2_yihaodian
                    });
                    break;
                default:
                    self.setState({
                        seriesData_1:this.Sdata_1_amazon,
                        seriesData_2:this.Sdata_2_amazon
                    });
                    break;
            }
        })

    }

    render() {
        let dataTextStyle = {
            fontSize: 12,
            color: '#fff'
        };
        let config = new barlineConfig();
        // config.barlineConfig.xAxis[0].show =false;
        config.barlineConfig.xAxis[0] = {

            type: 'category',
            axisLine: {show: false},
            axisLabel: {interval: 0, rotate: 40},
            data: [
                {value: '上海', textStyle: dataTextStyle},
                {value: '北京', textStyle: dataTextStyle},
                {value: '广州', textStyle: dataTextStyle},
                {value: '深圳', textStyle: dataTextStyle},
                {value: '杭州', textStyle: dataTextStyle},
                {value: '成都', textStyle: dataTextStyle},
                {value: '南京', textStyle: dataTextStyle},
                {value: '合肥', textStyle: dataTextStyle},
                {value: '青岛', textStyle: dataTextStyle},
                {value: '厦门', textStyle: dataTextStyle},
                {value: '哈尔滨', textStyle: dataTextStyle},
                {value: '乌鲁木齐', textStyle: dataTextStyle}
            ],
            splitLine: {show: false}
        };
        config.barlineConfig.yAxis[0].show = false;
        config.barlineConfig.yAxis[1].show = false;
        config.barlineConfig.yAxis[0].splitLine = {show: false};
        config.barlineConfig.yAxis[1].splitLine = {show: false};
        config.barlineConfig.yAxis[0].name ="月度运单量";
        config.barlineConfig.yAxis[1].name ="当日累计运单";
        config.barlineConfig.series[0].name ="月度运单量";
        config.barlineConfig.series[0].data =this.state.seriesData_1;
        config.barlineConfig.series[1].data =this.state.seriesData_2;
        config.barlineConfig.series[1].name ="当日累计运单量";
        config.barlineConfig.toolbox.show = false;
        config.barlineConfig.grid = {show: true, borderWidth: '0'};
        config.barlineConfig.legend.x ="right";
        config.barlineConfig.legend.data =
            [{name: "月度运单量", textStyle: {color: '#fff'}}, {name: "当日累计运单量", textStyle: {color: '#fff'}}];
        config.barlineConfig.title={
            text:this.state.chartTitle,
            x:'left',
            textStyle:{
                //文字颜色
                color:'#FFB95A',
                //字体风格,'normal','italic','oblique'
                fontStyle:'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight:'bold',
                //字体系列
                fontFamily:'sans-serif',
                //字体大小
                fontSize:18
            }
        };


        return (
            <div>
                <BarLine ref="barLineChart" chartID="barLineCombine" chartOption={config.barlineConfig}/>
            </div>

        )
    }
}

export default AreaSummary;
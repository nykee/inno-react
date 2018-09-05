class barlineConfig{
    constructor(){
        this.barlineConfig ={
            tooltip : {
                trigger: 'axis'
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            legend: {
                data:['蒸发量','平均温度']
            },
            xAxis : [
                {
                    // show:false,
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '蒸发量',
                    axisLabel : {
                        // show:false,
                        formatter: '{value} ml'
                    }
                },
                {
                    type : 'value',
                    name : '平均温度',
                    axisLabel : {
                        formatter: '{value} °C'
                    }
                }


            ],
            series : [

                {
                    name:'蒸发量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name:'平均温度',
                    type:'line',
                    yAxisIndex: 1,
                    data:[12, 14.2, 13.3, 14.5, 16.3, 10.2, 20.3, 23.4, 23.0, 26.5, 22.0, 26.2]
                }

            ]
        }
    }
}
export {barlineConfig}
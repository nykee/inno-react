

class dPieConfig{
    constructor(){
        this.seriesData_1 ={name:'other', value:550, itemStyle : {
                normal : {
                    color: '#1F242A',
                    label : {
                        show : false,
                        position : 'center'
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            }};
        this.seriesData_2 ={name:'main',
            value:450,
            itemStyle : {
                normal : {
                    color:'#F5AE46',
                    label : {
                        show : true,
                        position : 'center',
                        formatter : function (params) {
                            return params.data.value
                        },
                        textStyle: {


                            baseline : 'bottom'
                        }
                    },
                    labelLine : {
                        show : false
                    }
                }
            }};
        this.dpeiconfig ={
            title : {
                text: '按病种查看',
                x:'left'
            },
            series : [
                {

                    type : 'pie',
                    center : ['50%', '50%'],
                    radius : [40, 55],
                    x: '0%', // for funnel
                    // itemStyle : labelFromatter,
                    data : [
                        this.seriesData_1,
                        this.seriesData_2

                    ]
                },

            ]
        };
    }
}
export  {dPieConfig};
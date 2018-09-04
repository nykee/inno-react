let dpie_data1={name:'other', value:550, itemStyle : {
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
        }},
     dpie_data2={name:'main',
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
let config ={
    // dpie_data1:{name:'other', value:550, itemStyle : this.labelBottom},
    // dpie_data2:{name:'main', value:450,itemStyle : this.labelTop},
    series : [
        {

            type : 'pie',
            center : ['50%', '50%'],
            radius : [40, 55],
            x: '0%', // for funnel
            // itemStyle : labelFromatter,
            data : [
                dpie_data1,
                dpie_data2

            ]
        },

    ]
};
export  {config,dpie_data2,dpie_data1};
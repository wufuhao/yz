<template>
    <div>
        <div id="main" :style="{width:'100%',height:'400px'}"></div>
    </div>
</template>

<script>
var echarts = require('echarts');
export default {
    data(){
        return{
            myChart:null,
            sevenDate:[
                [
                    950,
                    1230,
                    955,
                    943,
                    917,
                    1088,
                    879,
                ],
                [
                    855,
                    536,
                    456,
                    557,
                    867,
                    690,
                    734,
                ],
                [
                    622,
                    356,
                    567,
                    489,
                    696,
                    550,
                    410,
                ],
                [
                    333,
                    346,
                    566,
                    479,
                    646,
                    320,
                    290,
                ],
                [
                    369,
                    538,
                    587,
                    677,
                    578,
                    125,
                    146,
                ],
                [
                    248,
                    340,
                    457,
                    489,
                    368,
                    375,
                    454,
                ],
                [
                    239,
                    538,
                    457,
                    896,
                    575,
                    872,
                    682,
                ],
                [
                    460,
                    560,
                    440,
                    340,
                    670,
                    700,
                    560,
                ],
                [
                    200,
                    590,
                    340,
                    540,
                    330,
                    230,
                    100,
                ],
                [
                    370,
                    320,
                    280,
                    180,
                    200,
                    230,
                    120,
                ],
                [
                    30,
                    60,
                    130,
                    40,
                    70,
                    230,
                    180,
                ],
                [
                    40,
                    50,
                    130,
                    53,
                    70,
                    63,
                    80,
                ],
                [
                    250,
                    260,
                    230,
                    410,
                    325,
                    276,
                    368,
                ],
            ],
            sevenDay:[
                "2017-05",
                "2017-06",
                "2017-07",
                "2017-08",
                "2017-09",
                "2017-10",
                "2017-11",
            ]
        }
    },
    mounted(){
        this.myChart = echarts.init(document.getElementById('main'));
        this.init();
    },
    methods:{
        init(){
            
            const colors = ['#5793f3', '#675bba', '#d14a61'];
            const option = {
                color: colors,
                title: {
                    text: '走势图',
                    subtext: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['1号线','2号线','3号线','3号线（北延段）','4号线','5号线','6号线','7号线','8号线','9号线','13号线','14号线','APM线','广佛线']
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {readOnly: false},
                        magicType: {type: ['bar', 'line']},
                        restore: {},
                    }
                },
                xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    data: this.sevenDay
                },
                yAxis: [
                    {
                        type: 'value',
                        name: '搜索次数',
                        min: 0,
                        max: 1500,
                        position: 'left',
                        axisLine: {
                            lineStyle: {
                                color: '#999'
                            }
                        },
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    // {
                    //     type: 'value',
                    //     name: '订单',
                    //     min: 0,
                    //     max: 200,
                    //     position: 'right',
                    //     axisLine: {
                    //         lineStyle: {
                    //             color: '#999'
                    //         }
                    //     },
                    //     axisLabel: {
                    //         formatter: '{value}'
                    //     }
                    // },
                ],
                series: [
                    {
                        name:'1号线',
                        type:'line',
                        data:this.sevenDate[0],
                        yAxisIndex: 0,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },
                    {
                        name:'2号线',
                        type:'line',
                        data:this.sevenDate[1],
                        yAxisIndex: 0,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },
                    {
                        name:'3号线',
                        type:'line',
                        data:this.sevenDate[2],
                        yAxisIndex: 0,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },
                    {
                        name:'3号线（北延段）',
                        type:'line',
                        data:this.sevenDate[3],
                        yAxisIndex: 0,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },
                    {
                        name:'4号线',
                        type:'line',
                        data:this.sevenDate[4],
                        yAxisIndex: 0,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },
                    {
                        name:'5号线',
                        type:'line',
                        data:this.sevenDate[5],
                        yAxisIndex: 0,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },
                    {
                        name:'6号线',
                        type:'line',
                        data:this.sevenDate[6],
                        yAxisIndex: 0,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },
                    {
                        name:'7号线',
                        type:'line',
                        data:this.sevenDate[7],
                        yAxisIndex: 0,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },
                    {
                        name:'8号线',
                        type:'line',
                        data:this.sevenDate[8],
                        yAxisIndex: 0,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },
                    {
                        name:'9号线',
                        type:'line',
                        data:this.sevenDate[9],
                        yAxisIndex: 0,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },
                    {
                        name:'13号线',
                        type:'line',
                        data:this.sevenDate[10],
                        yAxisIndex: 0,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },{
                        name:'14号线',
                        type:'line',
                        data:this.sevenDate[11],
                        yAxisIndex: 0,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },{
                        name:'APM',
                        type:'line',
                        data:this.sevenDate[12],
                        yAxisIndex: 0,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },{
                        name:'广佛线',
                        type:'line',
                        data:this.sevenDate[13],
                        yAxisIndex: 0,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },
                ]
            };
            this.myChart.setOption(option);
        },
    }
}
</script>

<style>

</style>

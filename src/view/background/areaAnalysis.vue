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
                    data:['天河区','海珠区','荔湾区','白云区','番禺区','越秀区','黄埔区','花都区','增城区','南沙区','从化区']
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
                        name:'天河区',
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
                        name:'海珠区',
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
                        name:'荔湾区',
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
                        name:'白云区',
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
                        name:'番禺区',
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
                        name:'越秀区',
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
                        name:'黄埔区',
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
                        name:'花都区',
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
                        name:'增城区',
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
                        name:'南沙区',
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
                        name:'从化区',
                        type:'line',
                        data:this.sevenDate[10],
                        yAxisIndex: 0,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    }
                ]
            };
            this.myChart.setOption(option);
        },
    }
}
</script>

<style>

</style>

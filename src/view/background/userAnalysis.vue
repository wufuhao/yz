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
                    100,
                    120,
                    130,
                    140,
                    150,
                    90,
                    170,
                ],
            sevenDay:[
                "2018-05-01",
                "2018-05-02",
                "2018-05-03",
                "2018-05-04",
                "2018-05-05",
                "2018-05-06",
                "2018-05-07",
            ]
        }
    },
    mounted(){
        this.myChart = echarts.init(document.getElementById('main'));
        this.init();
    },
    methods:{
        init(){
            
            const colors = ['#5793f3'];
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
                    data:['用户']
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
                        name: '用户',
                        min: 0,
                        max: 200,
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
                ],
                series: [
                    // {
                    //     name:'天河区',
                    //     type:'line',
                    //     data:this.sevenDate[0],
                    //     yAxisIndex: 0,
                    //     markPoint: {
                    //         data: [
                    //             {type: 'max', name: '最大值'},
                    //             {type: 'min', name: '最小值'}
                    //         ]
                    //     },
                    // },
                    // {
                    //     name:'海珠区',
                    //     type:'line',
                    //     data:this.sevenDate[1],
                    //     yAxisIndex: 0,
                    //     markPoint: {
                    //         data: [
                    //             {type: 'max', name: '最大值'},
                    //             {type: 'min', name: '最小值'}
                    //         ]
                    //     },
                    // },
                    {
                        name:'用户',
                        type:'line',
                        data:this.sevenDate,
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

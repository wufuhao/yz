<template>
    <div>
        <section class="data_section">
			<header class="section_title">数据统计</header>
			<el-row :gutter="20" style="margin-bottom: 10px;">
                <el-col :span="4"><div class="data_list today_head"><span class="data_num head">当日数据：</span></div></el-col>
				<el-col :span="4"><div class="data_list"><span class="data_num">33</span> 新增用户</div></el-col>
			</el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="data_list all_head"><span class="data_num head">总数据：</span></div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">1288</span> 注册用户</div></el-col>
            </el-row>
		</section>
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
                    10,
                    33,
                    75,
                    56,
                    86,
                    100,
                    54,
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
                    data:['新增用户']
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
                        name: '新增用户',
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
                        name:'新增用户',
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

<style lang="scss">
	// @import '../style/mixin';
	.data_section{
		padding: 20px;
		margin-bottom: 40px;
		.section_title{
			text-align: center;
			font-size: 30px;
			margin-bottom: 10px;
		}
		.data_list{
			text-align: center;
			font-size: 14px;
			color: #666;
            border-radius: 6px;
            background: #E5E9F2;
            .data_num{
                color: #333;
                font-size: 26px;

            }
            .head{
                border-radius: 6px;
                font-size: 22px;
                padding: 4px 0;
                color: #fff;
                display: inline-block;
            }
        }
        .today_head{
            background: #FF9800;
        }
        .all_head{
            background: #20A0FF;
        }
	}
    
</style>


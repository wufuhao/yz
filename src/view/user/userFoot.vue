<template>
    <div>
        <div class="userFoot-title">
            <span>我的足迹</span>
        </div>
        <div id="userFoot">
            <el-table :data="footList"  @selection-change="handleSelectionChange">
                <el-table-column type="selection"></el-table-column>
                <el-table-column prop="title" label="房源标题"></el-table-column>
                <el-table-column prop="createTime" label="访问时间"></el-table-column>
                <el-table-column label="操作">
                    <template scope="table">
                        <el-button type="text" @click="toDetail(table.row)" >查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                style="text-align:center"
                class="pagination-middle"
                background
                layout="prev, pager, next"
                :total="1"
                :page-size="10"
                @current-change="currentChange">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            footList:[
                {
                    title:'体育西最新单间，豪华装修',
                    comment:'区域挺好的，就是贵了些',
                    id:1,
                    createTime:'2018-06-04'
                },
                {
                    title:'仑头小学一房一厅 15分钟到琶洲地铁站',
                    comment:'交通便利',
                    id:2,
                    createTime:'2018-06-03'
                },
                {
                    title:'西朗地铁50米直达公寓，1号线8号线广佛线首选',
                    comment:'附近有菜市场，比较吵闹，看个人需要选择',
                    id:3,
                    createTime:'2018-06-01'
                },
            ],
            selectionHouses:[]
        }
    },
    mounted(){

    },
    methods:{
        handleSelectionChange(val){
            this.selectionHouses = val;
        },
        currentChange(val){
            console.log(val);
        },
        toDetail(row){

        },
    }
}
</script>

<style>
    .userFoot-title{
        height: 50px;
        margin-left: 10px;
        border: 1px solid rgba(221, 221, 221, 1);
        background-color: rgb(248,248,248);
        font-size: 25px;
        padding-top: 15px;
    }
    #userFoot{
        margin-left: 10px;
        border: 1px solid rgba(221, 221, 221, 1);
        
    }
    #userFoot .pagination-middle{
        margin-left: 20%
    }
</style>

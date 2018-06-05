<template>
    <div>
        <div class="userMessage-title">
            <span>我的足迹</span>
        </div>
        <div id="userMessage">
            <el-table :data="messaeList"  @selection-change="handleSelectionChange">
                <el-table-column type="selection"></el-table-column>
                <el-table-column prop="title" label="通知"></el-table-column>
                <el-table-column prop="createTime" label="时间"></el-table-column>
                <el-table-column label="操作">
                    <template scope="table">
                        <el-button type="text" @click="toDetail(table.row)" >删除</el-button>
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
            messaeList:[
                {
                    title:'你的房源已审核成功，请到我的发布查看详细信息',
                    comment:'区域挺好的，就是贵了些',
                    id:1,
                    createTime:'2018-06-04'
                },
                {
                    title:'房源[客村地铁站一房一厅 3号线8号线首选]审核失败，原因：不可在房源信息中添加联系方式',
                    comment:'交通便利',
                    id:2,
                    createTime:'2018-06-03'
                },
                {
                    title:'房源[西朗最新单间 100起租 环境好]被举报1次，原因：虚假房源，中介低价找人看房。温馨提示：举报次数超过5次将关闭该房源，并进入审核，审核通过会导致封禁账号',
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
    .userMessage-title{
        height: 50px;
        margin-left: 10px;
        border: 1px solid rgba(221, 221, 221, 1);
        background-color: rgb(248,248,248);
        font-size: 25px;
        padding-top: 15px;
    }
    #userMessage{
        margin-left: 10px;
        border: 1px solid rgba(221, 221, 221, 1);
        
    }
    #userMessage .pagination-middle{
        margin-left: 20%
    }
</style>

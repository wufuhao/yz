<template>
    <div>
        <div class="userPublish-title">
            <span>我的发布</span>
        </div>
        <div id="userPublish">
            <el-table :data="houseList"  @selection-change="handleSelectionChange">
                <el-table-column type="selection"></el-table-column>
                <el-table-column prop="title" label="房源标题"></el-table-column>
                <el-table-column prop="status" label="状态"></el-table-column>
                <el-table-column prop="createTime" label="发布时间"></el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <el-button type="text" v-if="scope.row.status == '已发布'">取消发布</el-button>
                        <el-button type="text" v-if="scope.row.status == '已取消'">重新发布</el-button>
                        <el-button type="text" >查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                class="pagination-middle"
                background
                layout="prev, pager, next"
                :total="1000"
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
            houseList:[
                {
                    title:'我发布的房源标题1',
                    status:'审核中',
                    id:1,
                    createTime:'2017-05-01'
                },
                {
                    title:'我发布的房源标题2',
                    status:'已取消',
                    id:2,
                    createTime:'2018-06-01'
                },
                {
                    title:'20字的房源标题啊啊啊啊啊啊啊啊啊啊啊啊啊',
                    status:'已发布',
                    id:3,
                    createTime:'2018-06-02'
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
    }
}
</script>

<style>
    .userPublish-title{
        height: 50px;
        margin-left: 10px;
        border: 1px solid rgba(221, 221, 221, 1);
        background-color: rgb(248,248,248);
        font-size: 25px;
        padding-top: 15px;
    }
    #userPublish{
        margin-left: 10px;
        border: 1px solid rgba(221, 221, 221, 1);
        
    }
    #userPublish .pagination-middle{
        margin-left: 20%
    }
</style>

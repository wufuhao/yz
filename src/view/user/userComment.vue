<template>
    <div>
        <div class="userComment-title">
            <span>我的评论</span>
        </div>
        <div id="userComment">
            <el-table  :data="houseList"  @selection-change="handleSelectionChange">
                <el-table-column width="50px" type="selection"></el-table-column>
                <el-table-column prop="title" label="房源标题"></el-table-column>
                <el-table-column prop="comment" label="评论内容"></el-table-column>
                <el-table-column width="100px" prop="createTime" label="评论时间"></el-table-column>
                <el-table-column width="100px" label="操作">
                    <template scope="scope">
                        <el-button type="text" @click="deleteComment(scope)">取消评论</el-button>
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
                    comment:'什么垃圾房源',
                    id:1,
                    createTime:'2017-05-01'
                },
                {
                    title:'我发布的房源标题2',
                    comment:'交通便利',
                    id:2,
                    createTime:'2018-06-01'
                },
                {
                    title:'20字的房源标题啊啊啊啊啊啊啊啊啊啊啊啊啊',
                    comment:'多字数评论多字数评论多字数评论多字数评论多字数评论多字数评论多字数评论多字数评论多字数评论多字数评论多字数评论多字数评论多字数评论多字数评论多字数评论',
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
        tableRowClassName(row, index) {
            if (index%2 === 1) {
            return 'info-row';
            }
            else {
            return 'positive-row';
            }
        },
        deleteComment(scope){

        }
    }
}
</script>

<style>
    .userComment-title{
        height: 50px;
        margin-left: 10px;
        border: 1px solid rgba(221, 221, 221, 1);
        background-color: rgb(248,248,248);
        font-size: 25px;
        padding-top: 15px;
    }
    #userComment{
        margin-left: 10px;
        border: 1px solid rgba(221, 221, 221, 1);
        
    }
    #userComment .pagination-middle{
        margin-left: 20%
    }
    #userComment .el-table .info-row {
        background-color: rgb(197, 227, 247);
    }

    #userComment .el-table .positive-row {
        background: #fae6cb;
    }
    #userComment .el-table_1_column_2   .cell{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    #userComment .el-table_1_column_3   .cell{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>

<template>
    <div>
        <div class="userPublish-title">
            <span>我的发布</span>
        </div>
        <div id="userPublish">
            <el-button type="primary" class="publishNewRoom"  @click="toPublishNewRoom">发布房源</el-button>
            <el-table :data="houseList"  @selection-change="handleSelectionChange">
                <el-table-column type="selection"></el-table-column>
                <el-table-column prop="title" label="房源标题"></el-table-column>
                <el-table-column prop="status" label="状态" width="100">
                    <template scope="scope">
                        <span v-if="scope.row.dk_pub_status == '0'">未审核</span>
                        <span v-if="scope.row.dk_pub_status == '1'">发布失败</span>
                        <span v-if="scope.row.dk_pub_status == '2'">发布成功</span>
                        <span v-if="scope.row.dk_pub_status == '3'">取消发布</span>
                        <span v-if="scope.row.dk_pub_status == '5'">已过期</span>
                    </template>
                </el-table-column>
                <el-table-column prop="createTime" label="发布时间" width="150"></el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <el-button type="text">查看</el-button>
                        <el-button type="text" v-if="scope.row.dk_pub_status == '1' || scope.row.dk_pub_status == '3' ||scope.row.dk_pub_status == '5'">编辑</el-button>
                        <el-button type="text" v-if="scope.row.dk_pub_status == '1' || scope.row.dk_pub_status == '3' ||scope.row.dk_pub_status == '5'">删除</el-button>
                        <el-button type="text" v-if="scope.row.dk_pub_status == '3' || scope.row.dk_pub_status == '5'">重新发布</el-button>
                        <el-button type="text" v-if="scope.row.dk_pub_status == '0' || scope.row.dk_pub_status == '2'" >取消发布</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                class="pagination-middle"
                background
                layout="prev, pager, next"
                :total="rowsCount"
                :page-size="queryParam.size"
                @current-change="currentChange">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import {getMyPublish} from '@/api/user.js'
export default {
    data(){
        return{
            houseList:[],
            selectionHouses:[],
            queryParam:{
                current: 1,
                size: 10
            },
            rowsCount:1,
        }
    },
    mounted(){
        this.search();
    },
    methods:{
        search(){
            getMyPublish(this.queryParam)
                .then(res =>{
                    if(res.resultCode == "200"){
                        this.houseList = res.busObj.records;
                    }
                })
        },
        handleSelectionChange(val){
            this.selectionHouses = val;
        },
        currentChange(val){
            console.log(val);
            this.queryParam.current = val;
            this.search();
        },
        toPublishNewRoom(){
            this.$router.push('/user/publishNewRoom')
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
        margin-left: 30%
    }
    #userPublish .publishNewRoom{
            position: absolute;
            z-index: 2;
            /* float: right; */
            margin-left: 50%;
            margin-top: 3px;
    }
</style>

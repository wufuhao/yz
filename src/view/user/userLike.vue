<template>
    <div>
        <div class="userLike-title">
            <span>我的收藏</span>
        </div>
        <div id="userLike">
            <el-table :data="houseList"  @selection-change="handleSelectionChange">
                <el-table-column type="selection"></el-table-column>
                <el-table-column prop="houseInfoTitle" label="房源标题"></el-table-column>
                <el-table-column label="状态" align="center" width="200">
                    <template scope="scope">
                        <span v-if="scope.row.houseInfoPubStatus  == '2'">正常</span>
                        <span v-else-if="scope.row.houseInfoPubStatus  == '3'">已过期</span>
                        <span v-else-if="scope.row.houseInfoPubStatus  == '4'">已过期</span>
                        <span v-else-if="scope.row.houseInfoPubStatus  == '5'">已过期</span>
                        <span v-else-if="scope.row.houseInfoPubStatus  == '6'">已过期</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="200">
                    <template scope="scope">
                        <el-button type="text" v-if="scope.row.houseInfoPubStatus  == '2'" @click="toDetail(scope.row)">查看</el-button>
                        <el-button type="text" @click="delFavorite(scope.row)">删除</el-button>
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
import {selectMyFavorites,cancelCollectHouse} from '@/api/user'
export default {
    data(){
        return{
            houseList:[],
            selectionHouses:[],
            queryParam:{
                current:1,
                size:10
            },
            rowsCount:1,
        }
    },
    mounted(){
        this.search();
    },
    methods:{
        handleSelectionChange(val){
            this.selectionHouses = val;
        },
        currentChange(val){
            this.queryParam.current = val;
            this.search();
        },
        search(){
            selectMyFavorites(this.queryParam).then(res =>{
                if(res.resultCode == '200'){
                    this.rowsCount = res.busObj.total;
                    this.houseList = res.busObj.records;
                }
            })
        },
        delFavorite(row){
            console.log(row);
            cancelCollectHouse({userFavoriteId:row.uFId}).then(res =>{
                if(res.resultCode == '200'){
                    this.$message('删除收藏成功');
                    this.search();
                }
            })
        },
        toDetail(row){
            sessionStorage.hId = row.hFavorite;
            this.$router.push('/room/detail')
        },
    }
}
</script>

<style>
    .userLike-title{
        height: 50px;
        margin-left: 10px;
        border: 1px solid rgba(221, 221, 221, 1);
        background-color: rgb(248,248,248);
        font-size: 25px;
        padding-top: 15px;
    }
    #userLike{
        margin-left: 10px;
        border: 1px solid rgba(221, 221, 221, 1);
        
    }
    #userLike .pagination-middle{
        margin-left: 20%
    }
</style>

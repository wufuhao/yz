<template>
    <div style="width:80%;margin-left:10%;padding-top:100px;">
        <el-form inline>
            <el-form-item label="关键字">
                <el-input v-model="queryParam.model.addressKey"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="search" type="primary">搜索</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="houseList" class="houseTable" >
            <el-table-column label="标题" align="center">
                <template scope="scope">
                    <span v-if="scope.row.title == '' || scope.row.title == null">无</span>
                    <span v-else>{{scope.row.title}}</span>
                </template>
            </el-table-column>
            <el-table-column label="联系人" align="center">
                <template scope="scope">
                    <span v-if="scope.row.contName == '' || scope.row.contName == null">无</span>
                    <span v-else>{{scope.row.contName}}</span>
                </template>
            </el-table-column>
            <el-table-column label="状态" align="center">
                <template scope="scope">
                    <span v-if="scope.row.dkPubStatus == 0">未审核</span>
                    <span v-else-if="scope.row.dkPubStatus == 1">审核未通过</span>
                    <span v-else-if="scope.row.dkPubStatus == 2">审核通过</span>
                    <span v-else-if="scope.row.dkPubStatus == 3">取消发布</span>
                    <span v-else-if="scope.row.dkPubStatus == 4">已删除</span>
                    <span v-else-if="scope.row.dkPubStatus == 5">已过期</span>
                    <span v-else>异常封禁</span>
                </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column label="操作" align="center">
                <template scope="scope">
                    <el-button type="text" @click="toDetail(scope.row.hId)">查看并审核</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            style="text-align: center;"
            class="pagination-middle"
            background
            layout="prev, pager, next"
            :total="rowsCount"
            :page-size="queryParam.size"
            @current-change="currentChange">
        </el-pagination>
    </div>
</template>

<script>
import {getHousePage,updateHousePubStatus} from '@/api/background'
export default {
    data(){
        return{
            houseList:[],
            rowsCount:1,
            queryParam:{
                current: 1,
                model:{
                    addressKey:'',
                    dkPubStatus:0,
                },
                orderBy: "dk_pub_status,create_time",
                asc: true,
                size: 10
            },
        }
    },
    mounted(){
        this.search();
    },
    methods:{
        currentChange(val){
            this.queryParam.current = val;
            this.search();
        },
        search(){
            getHousePage(this.queryParam).then(res=>{
                if(res.resultCode == '200'){
                    this.houseList = res.busObj.records;
                    this.rowsCount = res.busObj.total;
                }
            })
        },
        toDetail(hId){
            sessionStorage.hId = hId;
            this.$router.push('/room/admit')
        },
    }
}
</script>

<style>
    .houseTable{
        /* width:70%; */
        /* float:left; */
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
</style>

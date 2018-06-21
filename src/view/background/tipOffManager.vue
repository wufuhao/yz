<template>
    <div style="width:80%;margin-left:10%;padding-top:100px;">
        <el-form inline>
            <el-form-item label="关键字">
                <el-input v-model="queryParam.model.addressKey"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="search" type="primary">搜索</el-button>
            </el-form-item>
            <el-form-item>
                <el-button @click="search" type="primary">导出</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tipList" class="houseTable" >
            <el-table-column label="房源ID" align="center">
                <template scope="scope">
                    <span v-if="scope.row.hTipOff == '' || scope.row.hTipOff == null">无</span>
                    <span v-else>{{scope.row.hTipOff}}</span>
                </template>
            </el-table-column>
            <el-table-column label="举报用户" align="center">
                <template scope="scope">
                    <span v-if="scope.row.uId == '' || scope.row.uId == null">无</span>
                    <span v-else>{{scope.row.uId}}</span>
                </template>
            </el-table-column>
            <el-table-column label="举报内容" prop="hTipOffDesc"></el-table-column>
            <el-table-column label="状态" align="center">
                <template scope="scope">
                    <span v-if="scope.row.dkTipStatus == 1">未审核</span>
                    <span v-else-if="scope.row.dkTipStatus == 2">审核中</span>
                    <span v-else-if="scope.row.dkTipStatus == 3">审核成功</span>
                    <span v-else-if="scope.row.dkTipStatus == 4">审核失败</span>
                </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column label="操作" align="center">
                <template scope="scope">
                    <el-button type="text" @click="toDetail(scope.row.hId)" v-if="scope.row.dkTipStatus == 1 || scope.row.dkTipStatus == 2">查看并审核</el-button>
                    <el-button type="text" @click="toDetail(scope.row.hId)" v-else>查看</el-button>
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
import {getTipOffPage,updateTipStatus} from '@/api/background'
export default {
    data(){
        return{
            tipList:[
                // {
                //     hTipOff:'133',
                //     uId:'易租388',
                //     hTipOffDesc:'虚假房源，中介推销',
                //     dkTipStatus:1,
                //     createTime:'2018'
                // },
                // {
                //     hTipOff:'334',
                //     uId:'易租238',
                //     hTipOffDesc:'虚假房源，中介推销',
                //     dkTipStatus:2,
                //     createTime:'2018'
                // },
                // {
                //     hTipOff:'257',
                //     uId:'易租388',
                //     hTipOffDesc:'虚假房源，中介推销',
                //     dkTipStatus:3,
                //     createTime:'2018'
                // },
                // {
                //     hTipOff:'23',
                //     uId:'易租388',
                //     hTipOffDesc:'虚假房源，中介推销',
                //     dkTipStatus:4,
                //     createTime:'2018'
                // }
            ],
            rowsCount:1,
            queryParam:{
                current: 1,
                model:{
                    addressKey:'',
                },
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
            getTipOffPage(this.queryParam).then(res=>{
                if(res.resultCode == '200'){
                    this.tipList = res.busObj.records;
                    this.rowsCount = res.busObj.total;
                }
            })
        },
        toDetail(hId){
            
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

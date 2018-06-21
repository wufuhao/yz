<template>
    <div style="width:80%;margin-left:10%;padding-top:100px;">
        <el-form inline>
            <el-form-item label="关键字">
                <el-input v-model="queryParam.model.addressKey"></el-input>
            </el-form-item>
            <el-form-item>
                <el-select v-model="queryParam.model.dkPubStatus">
                    <el-option :value=0 label="未审核"></el-option>
                    <el-option :value=1 label="发布失败"></el-option>
                    <el-option :value=2 label="发布成功"></el-option>
                    <el-option :value=3 label="取消发布"></el-option>
                    <el-option :value=4 label="已删除"></el-option>
                    <el-option :value=5 label="已过期"></el-option>
                    <el-option :value=6 label="异常封禁"></el-option>
                    <el-option value="" label="不限"></el-option>
                </el-select>
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
                    <span v-else-if="scope.row.dkPubStatus == 1">发布失败</span>
                    <span v-else-if="scope.row.dkPubStatus == 2">发布成功</span>
                    <span v-else-if="scope.row.dkPubStatus == 3">取消发布</span>
                    <span v-else-if="scope.row.dkPubStatus == 4">已删除</span>
                    <span v-else-if="scope.row.dkPubStatus == 5">已过期</span>
                    <span v-else>异常封禁</span>
                </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column label="操作" align="center">
                <template scope="scope">
                    <el-button type="text" @click="toDetail(scope.row.hId)">查看</el-button>
                    <el-button type="text" @click="unForbidUser(scope.row.uId)" v-if="scope.row.dkPubStatus == 6">解封</el-button>
                    <el-button type="text" @click="unForbidUser(scope.row.uId)" v-if="scope.row.dkPubStatus == 2">封禁</el-button>
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
            houseList:[
                // {
                //     title:'广医2栋宿舍',
                //     contName:'易租451',
                //     dkPubStatus:0,
                //     createTime:'2018-05-01'
                // },
                // {
                //     title:'广州火车站附近单间',
                //     contName:'易租421',
                //     dkPubStatus:1,
                //     createTime:'2018-05-01'
                // },
                // {
                //     title:'客村小区一房一厅',
                //     contName:'易租351',
                //     dkPubStatus:2,
                //     createTime:'2018-05-01'
                // },
                // {
                //     title:'西朗全新公寓豪华一房一厅带家电',
                //     contName:'易租23',
                //     dkPubStatus:3,
                //     createTime:'2018-05-15'
                // },
                // {
                //     title:'仑头村5楼单间 10分钟到琶洲、大学城',
                //     contName:'易租468',
                //     dkPubStatus:4,
                //     createTime:'2018-05-21'
                // },
                // {
                //     title:'岗顶附近复式公寓精装修',
                //     contName:'易租451',
                //     dkPubStatus:5,
                //     createTime:'2018-04-01'
                // },
                // {
                //     title:'沙涌地铁站租房电话13258621468',
                //     contName:'易租451',
                //     dkPubStatus:6,
                //     createTime:'2018-03-01'
                // },
                    
            ],
            rowsCount:1,
            queryParam:{
                current: 1,
                model:{
                    addressKey:'',
                    dkPubStatus:0
                },
                orderBy: "create_time",
                asc: false,
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
            this.$router.push('/room/detail')
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

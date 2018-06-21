<template>
    <div style="width:80%;margin-left:10%;padding-top:100px;">
        <el-form inline>
            <el-form-item label="关键字">
                <el-input></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="search" type="primary">搜索</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="userList" class="userTable" >
            <el-table-column label="昵称" align="center">
                <template scope="scope">
                    <span v-if="scope.row.name == '' || scope.row.name == null">无</span>
                    <span v-else>{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column label="手机号" align="center">
                <template scope="scope">
                    <span v-if="scope.row.phoneNo == '' || scope.row.phoneNo == null">无</span>
                    <span v-else>{{scope.row.phoneNo}}</span>
                </template>
            </el-table-column>
            <el-table-column label="电子邮箱" align="center">
                <template scope="scope">
                    <span v-if="scope.row.email == '' || scope.row.email == null">无</span>
                    <span v-else>{{scope.row.email}}</span>
                </template>
            </el-table-column>
            <el-table-column label="状态" align="center">
                <template scope="scope">
                    <span v-if="scope.row.dkUException == 0">正常</span>
                    <span v-else style="color:red">封禁</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template scope="scope">
                    <el-button type="text" @click="forbidUser(scope.row.uId)" v-if="scope.row.dkUException == 0">封禁</el-button>
                    <el-button type="text" @click="unForbidUser(scope.row.uId)" v-else>解封</el-button>
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
import {getUserPage,updateUserEx} from '@/api/background'
export default {
    data(){
        return{
            userList:[
                // {
                //     uId:0,
                //     phoneNo:'1853447252',
                //     name:'易租451',
                //     email:'1853447252@163.com',
                //     dkUException:1
                // },
                // {
                //     uId:1,
                //     phoneNo:'18848246753',
                //     name:'易租482',
                //     email:'18848246753@163.com',
                //     dkUException:0
                // },
                // {
                //     uId:2,
                //     phoneNo:'18333747254',
                //     name:'易租483',
                //     email:'18333747254@163.com',
                //     dkUException:0
                // },
                // {
                //     uId:3,
                //     phoneNo:'13246307464',
                //     name:'易租484',
                //     email:'2465814977@qq.com',
                //     dkUException:0
                // },
            ],
            rowsCount:1,
            queryParam:{
                current: 1,
                size: 10
            },
        }
    },
    mounted(){
        this.search();
    },
    methods:{
        forbidUser(uId){
            updateUserEx({'uId':uid,ex:1}).then(res =>{
                if(res.resultCode == '200'){
                    this.$message('封禁账号成功');
                    this.search();
                }
            })
        },
        unForbidUser(uId){
            updateUserEx({'uId':uid,ex:0}).then(res =>{
                if(res.resultCode == '200'){
                    this.$message('解封账号成功');
                    this.search();
                }
            })
        },
        currentChange(val){
            this.queryParam.current = val;
            this.search();
        },
        search(){
            getUserPage(this.queryParam).then(res=>{
                if(res.resultCode == '200'){
                    this.userList = res.busObj.records;
                    this.rowsCount = res.busObj.total;
                }
            })
        },
    }
}
</script>

<style>
    .userTable{
        /* width:70%; */
        /* float:left; */
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
</style>

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
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            footList:[
                
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

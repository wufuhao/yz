<template>
    <div>
        <div class="userTipoff-title">
            <span>我的举报</span>
        </div>
        <div id="userTipoff">
            <el-radio-group v-model="selectTipoff">
                <el-radio label="houseTipoff">房源举报</el-radio>
                <el-radio label="commentTipoff">评论举报</el-radio>
            </el-radio-group>
            <div>
                <el-table :data="houseTipoffList"  @selection-change="handleSelectionChange">
                    <el-table-column type="selection"></el-table-column>
                    <el-table-column prop="titile" label="房源标题"></el-table-column>
                    <el-table-column prop="tipoffDetail" label="举报内容"></el-table-column>
                    <el-table-column prop="status" label="状态"></el-table-column>
                    <el-table-column prop="createTime" label="举报时间"></el-table-column>
                    <el-table-column label="操作">
                        <template scope="scope">
                            <el-button type="text">取消举报</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            selectTipoff:'',
            houseTipoffList:[
                {
                    titile:'房源标题1',
                    tipoffDetail:'虚假房源',
                    status:'审核通过',
                    createTime:'2018-06-01'
                },
                {
                    titile:'房源标题2',
                    tipoffDetail:'虚假房源',
                    status:'审核不',
                    createTime:'2018-06-01'
                },
                {
                    titile:'房源标题3',
                    tipoffDetail:'虚假房源',
                    status:'审核中',
                    createTime:'2018-06-01'
                },
            ],
            commentTipoffList:[
                {
                    username:'某某用户1',
                    tipoffDetail:'恶意评论房源',
                    status:'审核中',
                    title:'评论的房源标题1',
                    createTime:'2018-06-01',
                },
                {
                    username:'某某用户2',
                    tipoffDetail:'恶意评论房源',
                    status:'审核中',
                    title:'评论的房源标题2',
                    createTime:'2018-06-01',
                },
                {
                    username:'某某用户3',
                    tipoffDetail:'恶意评论房源3',
                    status:'审核中',
                    title:'评论的房源标题3',
                    createTime:'2018-06-01',
                },
            ],
            selectionHouses:'',
            selectionUsers:''
        }
    },
    mounted(){

    },
    methods:{
        handleSelectionChange(val){
            this.selectionHouses = val;
        },
    }
}
</script>

<style>
    .userTipoff-title{
        height: 50px;
        margin-left: 10px;
        border: 1px solid rgba(221, 221, 221, 1);
        background-color: rgb(248,248,248);
        font-size: 25px;
        padding-top: 15px;
    }
    #userTipoff{
        margin-left: 10px;
        border: 1px solid rgba(221, 221, 221, 1);
        
    }
    #userTipoff .pagination-middle{
        margin-left: 20%
    }
</style>

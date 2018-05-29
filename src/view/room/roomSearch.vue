<template>
    <div class="searchMain">
        <el-form>
            <el-form-item class="roomSearch_searchDiv">
                <el-select style="float:left" v-model="queryParam.district">
                    <el-option value="gz" label="海珠区"></el-option>
                    <el-option value="fs" label="越秀区"></el-option>
                </el-select>
                <el-input style="float:left;width:50%"></el-input>
                <el-button @click="toSearch">搜索</el-button>
            </el-form-item>
            <el-form-item label="房屋级别">
                <el-button type="text">不限</el-button>
                <el-checkbox v-model="queryParam.roomLevel" label="豪华"></el-checkbox>
                <el-checkbox v-model="queryParam.roomLevel" label="精品"></el-checkbox>
                <el-checkbox v-model="queryParam.roomLevel" label="舒适"></el-checkbox>
            </el-form-item>
            <el-form-item label="房价">
                <el-button type="text">不限</el-button>
                <el-checkbox v-model="queryParam.price" label="￥0-200"></el-checkbox>
                <el-checkbox v-model="queryParam.price" label="￥200-300"></el-checkbox>
                <el-checkbox v-model="queryParam.price" label="￥300-400"></el-checkbox>
                <el-checkbox v-model="queryParam.price" label="￥400-500"></el-checkbox>
                <el-checkbox v-model="queryParam.price" label="￥500-800"></el-checkbox>
                <el-checkbox v-model="queryParam.price" label="￥800-10000"></el-checkbox>
            </el-form-item>
            <el-form-item label="户型">
                <el-button type="text">不限</el-button>
                <el-checkbox v-model="queryParam.roomNum" label="一居"></el-checkbox>
                <el-checkbox v-model="queryParam.roomNum" label="二居"></el-checkbox>
                <el-checkbox v-model="queryParam.roomNum" label="三居"></el-checkbox>
                <el-checkbox v-model="queryParam.roomNum" label="四居及以上"></el-checkbox>
            </el-form-item>
            <el-form-item label="房型">
                <el-button type="text">不限</el-button>
                <el-checkbox v-model="queryParam.roomType" label="公寓"></el-checkbox>
                <el-checkbox v-model="queryParam.roomType" label="别墅"></el-checkbox>
                <el-checkbox v-model="queryParam.roomType" label="复式"></el-checkbox>
                <el-checkbox v-model="queryParam.roomType" label="老洋房"></el-checkbox>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            queryParam:{
                district:'',
                roomLevel:[],
                price:[],
                roomNum:[],
                roomType:[]
            },
            selectedCheckbox:[]
        }
    },
    mounted(){},
    methods:{
        toSearch(){

        },
        test(value){
            console.log(value);
        },
    }
}
</script>

<style>
.searchMain{
    padding-top: 70px;
    padding-left: 10%;
    width: 80%;
}
.roomSearch_searchDiv{
    background-color: rgba(61, 146, 196, 0.5);
    padding-left:5%;
    padding-top: 5px;
    height: 45px;

}
</style>

<template>
    <div>
        <div style="height:60px"></div>
        <div class="roomDetail">
            <el-carousel class="carousel" :interval="4000" height="500px" :autoplay="false">
                <el-carousel-item v-for="item in houseInfo.h_img_path" :key="item">
                    <img :src="item" />
                </el-carousel-item>
            </el-carousel>
            <el-form>
                <el-form-item>
                    <span>{{houseInfo.title}}</span>
                </el-form-item>
                <el-form-item>
                    <span>{{houseInfo.ctr}}次浏览</span>
                    <el-button type="text">收藏</el-button>
                    <el-button type="text">举报</el-button>
                </el-form-item>
                <el-form-item>
                    <span>￥{{houseInfo.rental}}元/月</span>
                    <div>
                        <span v-if="houseInfo.dk_rental_type == 1">押一付一</span>
                        <span v-if="houseInfo.dk_rental_type == 2">押一付二</span>
                        <span v-if="houseInfo.dk_rental_type == 3">押一付三</span>
                        <span v-if="houseInfo.dk_rental_type == 4">押二付一</span>
                        <span v-if="houseInfo.dk_rental_type == 5">押二付二</span>
                        <span v-if="houseInfo.dk_rental_type == 6">半年付</span>
                        <span v-if="houseInfo.dk_rental_type == 7">年付</span>
                        <span v-if="houseInfo.dk_rental_type == 8">面议</span>
                    </div>
                </el-form-item>
                <el-form-item label="户型">
                    <span>{{houseInfo.room}}室</span>
                    <span>{{houseInfo.hall}}厅</span>
                    <span>{{houseInfo.toilet}}卫</span>
                </el-form-item>
                <el-form-item label="朝向">
                    <span v-if="houseInfo.dk_orient == 1">东</span>
                    <span v-if="houseInfo.dk_orient == 2">南</span>
                    <span v-if="houseInfo.dk_orient == 3">西</span>
                    <span v-if="houseInfo.dk_orient == 4">北</span>
                    <span v-if="houseInfo.dk_orient == 5">南北</span>
                    <span v-if="houseInfo.dk_orient == 6">东西</span>
                    <span v-if="houseInfo.dk_orient == 7">东南</span>
                    <span v-if="houseInfo.dk_orient == 8">西南</span>
                    <span v-if="houseInfo.dk_orient == 9">东北</span>
                    <span v-if="houseInfo.dk_orient == 10">西北</span>
                </el-form-item>
                <el-form-item label="面积">
                    <span v-if="houseInfo.dk_rental_way == 0">整租</span>
                    <span v-if="houseInfo.dk_rental_way == 1">合租</span>
                    <span style="margin-left:5px">{{houseInfo.area}}㎡</span>
                </el-form-item>
                <el-form-item label="楼层">
                    <span>第{{houseInfo.floor}}层/</span>
                    <span>共{{houseInfo.total_floor}}层</span>
                </el-form-item>
                <el-form-item label="装修情况">
                    <span v-if="houseInfo.dk_decoration == 0">毛坯</span>
                    <span v-if="houseInfo.dk_decoration == 1">简单装修</span>
                    <span v-if="houseInfo.dk_decoration == 2">中等装修</span>
                    <span v-if="houseInfo.dk_decoration == 3">精装修</span>
                    <span v-if="houseInfo.dk_decoration == 4">豪华装修</span>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            houseInfo:{
                h_img_path:[
                    "https://pic.tujia.com/upload/landlordunit/day_170613/thumb/201706130927273987_670_390.jpg",
                    "https://pic.tujia.com/upload/landlordunit/day_170613/thumb/20170613092553117_670_390.jpg",
                    "https://pic.tujia.com/upload/landlordunit/day_170613/thumb/201706130926317509_670_390.jpg",
                    "https://pic.tujia.com/upload/landlordunit/day_170613/thumb/20170613092731473_670_390.jpg",
                    "https://pic.tujia.com/upload/landlordunit/day_170613/thumb/201706130927183686_670_390.jpg"
                    ],
                title:"广医正版铁板烧",//标题
                ctr:1,//点击率
                h_id:'',//房源id
                u_id:'',//用户id
                dk_rental_way:'',//出租方式
                room:'',//多少室
                hall:'',//多少厅
                toilet:'',//多少卫
                area:'',//占地面积
                dk_orient:'',//朝向
                dk_decoration:'',//装修类型
                floor:'',//楼层
                total_floor:'',//总楼层
                rental:'',//租金
                dk_rental_type:'',//押付方式
                water_rate:'',//水费
                power_rate:'',//电费
                dk_rental_cost:'',//租金包含费用
                dk_configure:'',//房源配置
                dk_rental_demand:'',//租赁要求
                dk_looktime:'',//看房时间
                suitable:'',//适宜居住人数
                cont_name:'',//房东姓名
                cont_phone:'',//房东电话
                introduce:'',//简介
                address:'',//地址详情
                add_longitude:'',//经度
                add_latitude:'',//纬度
                favorite:'',//收藏率

            },
        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>

<style lang="scss">
    .roomDetail{
        margin-left: 10%;
        width: 80%;
        background-color: rgba(235, 241, 243, 1);
        .carousel{
            width:50%;
            img{
                width:100%;
                height:100%
            }
        }
    }
</style>

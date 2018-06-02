<template>
    <div>
        <div style="height:60px"></div>
        <div class="roomDetail">
            <el-carousel class="carousel" :interval="4000" height="400px" :autoplay="false">
                <el-carousel-item v-for="item in houseInfo.h_img_path" :key="item">
                    <img :src="item" />
                </el-carousel-item>
            </el-carousel>
            <el-form class="roomSimpleInfo" inline>
                <el-form-item class="houseTitle">
                    <span>{{houseInfo.title}}</span>
                </el-form-item>
                <el-form-item class="ctr">
                    <span>{{houseInfo.ctr}}次浏览</span>
                    <span style="margin-left:20px">{{houseInfo.favorite}}次收藏</span>
                    <span style="margin-left:20px">{{houseInfo.tip_off}}次举报</span>
                    <div style="float:right;margin-top: -8px;">
                        <el-button type="text">
                            <img src="../../icons/favorite.png" style="height:20px;width:20px;position: relative;top: 2px;" />
                            收藏
                        </el-button>
                        <el-tooltip class="item" effect="dark" content="举报虚假房源" placement="top-start">
                            <el-button type="text">
                                <img src="../../icons/tip_off.png" style="height:20px;width:20px;position: relative;top: 2px;" />
                                举报
                            </el-button>
                        </el-tooltip>
                    </div>
                </el-form-item>
                <el-form-item class="roomPrice">
                    <span class="price">￥{{houseInfo.rental}}元/月</span>
                    <div class="dk_rental_type">
                        <span v-if="houseInfo.dk_rental_type == 1">押一付一</span>
                        <span v-else-if="houseInfo.dk_rental_type == 2">押一付二</span>
                        <span v-else-if="houseInfo.dk_rental_type == 3">押一付三</span>
                        <span v-else-if="houseInfo.dk_rental_type == 4">押二付一</span>
                        <span v-else-if="houseInfo.dk_rental_type == 5">押二付二</span>
                        <span v-else-if="houseInfo.dk_rental_type == 6">半年付</span>
                        <span v-else-if="houseInfo.dk_rental_type == 7">年付</span>
                        <span v-else-if="houseInfo.dk_rental_type == 8">面议</span>
                    </div>
                </el-form-item>
                <el-form-item label="户型：" class="roomSimpleInfo_middle">
                    <span>{{houseInfo.room}}室</span>
                    <span>{{houseInfo.hall}}厅</span>
                    <span>{{houseInfo.toilet}}卫</span>
                </el-form-item>
                <el-form-item label="面积：" class="roomSimpleInfo_middle">
                    <span v-if="houseInfo.dk_rental_way == 0">整租</span>
                    <span v-else-if="houseInfo.dk_rental_way == 1">合租</span>
                    <span style="margin-left:5px">{{houseInfo.area}}㎡</span>
                </el-form-item>
                <el-form-item label="朝向：" class="roomSimpleInfo_middle">
                    <span v-if="houseInfo.dk_orient == 1">东向</span>
                    <span v-else-if="houseInfo.dk_orient == 2">南向</span>
                    <span v-else-if="houseInfo.dk_orient == 3">西向</span>
                    <span v-else-if="houseInfo.dk_orient == 4">北向</span>
                    <span v-else-if="houseInfo.dk_orient == 5">南北向</span>
                    <span v-else-if="houseInfo.dk_orient == 6">东西向</span>
                    <span v-else-if="houseInfo.dk_orient == 7">东南向</span>
                    <span v-else-if="houseInfo.dk_orient == 8">西南向</span>
                    <span v-else-if="houseInfo.dk_orient == 9">东北向</span>
                    <span v-else-if="houseInfo.dk_orient == 10">西北向</span>
                </el-form-item>
                <el-form-item label="楼层：" class="roomSimpleInfo_middle">
                    <span>第{{houseInfo.floor}}层/</span>
                    <span>共{{houseInfo.total_floor}}层</span>
                </el-form-item>
                <el-form-item label="装修情况：">
                    <span v-if="houseInfo.dk_decoration == 0">毛坯</span>
                    <span v-else-if="houseInfo.dk_decoration == 1">简单装修</span>
                    <span v-else-if="houseInfo.dk_decoration == 2">中等装修</span>
                    <span v-else-if="houseInfo.dk_decoration == 3">精装修</span>
                    <span v-else-if="houseInfo.dk_decoration == 4">豪华装修</span>
                </el-form-item>
                <el-form-item label="区域-地铁">
                    <span>{{getaddressAreaName()}}-</span>
                    <span>{{getsubStationName()}}</span>
                </el-form-item>
                <el-form-item label="详细地址">
                    {{houseInfo.address}}
                </el-form-item>
                <el-button type="primary" style="width:30%">微聊</el-button>
            </el-form>
            <el-form class="roomRestInfo">
                <el-form-item label="房屋配置">
                    <div v-for=" item in houseInfo.dk_configure" :key="item" class="roomConfig">
                        <p>
                            <img src="../../icons/bed.png" v-if="item == '1'" />
                            <img src="../../icons/wifi.png" v-else-if="item == '2'" />
                            <img src="../../icons/tv.png" v-else-if="item == '3'" />
                            <img src="../../icons/fridge.png" v-else-if="item == '4'" />
                            <img src="../../icons/washingMachine.png" v-else-if="item == '5'" />
                            <img src="../../icons/air-conditioning.png" v-else-if="item == '6'" />
                            <img src="../../icons/waterHeater.png" v-else-if="item == '7'" />
                            <img src="../../icons/sofa1.png" v-else-if="item == '8'" />
                            <img src="../../icons/clothespress.png" v-else-if="item == '9'" />
                            <img src="../../icons/table_chair.png" v-else-if="item == '10'" />
                            <img src="../../icons/range_hood.png" v-else-if="item == '11'" />
                            <img src="../../icons/microwave.png" v-else-if="item == '12'" />
                        </p>
                        <p style="margin-top: -30px;">
                            <span>{{getDkConfigureName(item)}}</span>
                        </p>
                    </div>
                    <!-- <img src="../../icons/tv.png" style="height:44px;width:44px;"/> -->
                </el-form-item>
                <el-form-item label="租金包含费用">
                    <el-tag style="margin-left: 15px;" v-for="item in houseInfo.dk_rental_cost" :key="item">
                        {{getCostName(item)}}
                    </el-tag>
                </el-form-item>
                <el-form-item label="租赁要求">
                    <el-tag style="margin-left: 15px;" v-for="item in houseInfo.dk_rental_demand" :key="item">
                        {{getRentalDemandName(item)}}
                    </el-tag>
                </el-form-item>
                <el-form-item label="房屋简介">
                    <p style="width:80%;margin-left:10%">
                        {{houseInfo.introduce}}
                    </p>
                </el-form-item>
                <el-form-item label="地图">
                    <div id="XSDFXPage" style="width:80%;margin-left:10%;height:500px">

                    </div>
                </el-form-item>
                <el-form-item label="点评"></el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import {findDkRentalDemandNameByCode,findCostNameByCode,finddDkConfigureNameByCode,findaddareaNameByCode,findSubwayNameByCode} from '@/utils/yz.js'
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
                ctr:100,//点击率
                h_id:'',//房源id
                u_id:'',//用户id
                dk_rental_way:2,//出租方式
                room:1,//多少室
                hall:0,//多少厅
                toilet:1,//多少卫
                area:30,//占地面积
                dk_orient:'6',//朝向
                dk_decoration:1,//装修类型
                floor:5,//楼层
                total_floor:7,//总楼层
                rental:50000,//租金
                dk_rental_type:1,//押付方式
                water_rate:5.5,//水费
                power_rate:1.5,//电费
                dk_rental_cost:['1','2','3','4','5','6','7','8','9','10'],//租金包含费用
                dk_configure:['1','2','3','4','5','6','7','8','9','10','11','12'],//房源配置
                dk_rental_demand:['1','2','3','4','5','6','7','8','9'],//租赁要求
                dk_looktime:1,//看房时间
                suitable:4,//适宜居住人数
                cont_name:'邬富豪',//房东姓名
                cont_phone:'',//房东电话
                introduce:'晋福阁小区位于地铁3号线白云大道北站 从小区门口到地铁站步行仅需要3分钟 小区周边交通非常便利 门口就有超市 出租的房屋面积都在20平米左右 房子在8层 电梯房,视野开阔 通风非常好 楼前没有遮挡 希望找爱干净的年轻人居住 有正当工作 生活作息正常 有需要租房的朋友欢迎随时来电 随时看房！没有其他中间人的介绍费 好房不等人 先来先得！晋福阁小区位于地铁3号线白云大道北站 从小区门口到地铁站步行仅需要3分钟 小区周边交通非常便利 门口就有超市 出租的房屋面积都在20平米左右 房子在8层 电梯房,视野开阔 通风非常好 楼前没有遮挡 希望找爱干净的年轻人居住 有正当工作 生活作息正常 有需要租房的朋友欢迎随时来电 随时看房！没有其他中间人的介绍费 好房不等人 先来先得！​',//简介
                address:'广东医科大学广东医科大学广东医科大学广东医科大学广东医科大学广东医科大学广东医科大学',//地址详情
                add_longitude:'113.259166',//经度
                add_latitude:'23.154266',//纬度
                favorite:'xx',//收藏次数
                tip_off:'xx',//举报次数
                dk_add_area:2,//区域代码
                dk_sub_station:'1_01'//地铁站代码
            },
        }
    },
    mounted(){
        this.createBaiduMap();
    },
    methods:{
        getaddressAreaName(){
            return findaddareaNameByCode(this.houseInfo.dk_add_area);
        },
        getsubStationName(){
            return findSubwayNameByCode(this.houseInfo.dk_sub_station)
        },
        getDkConfigureName(code){
            return finddDkConfigureNameByCode(code);
        },
        getCostName(code){
            return findCostNameByCode(code);
        },
        getRentalDemandName(code){
            return findDkRentalDemandNameByCode(code);
        },
        createBaiduMap(){
            // 百度地图API功能
            // 在指定div位置创建Map实例
            var map = new BMap.Map("XSDFXPage",{enableMapClick:true});
            var new_point = new BMap.Point(this.houseInfo.add_longitude,this.houseInfo.add_latitude);
            map.centerAndZoom(new_point,11);

            map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
	        map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
            
            var marker = new BMap.Marker(new_point);  // 创建标注
			map.addOverlay(marker);              // 将标注添加到地图中
            map.panTo(new_point); 
            
            var stCtrl = new BMap.PanoramaControl(); //构造全景控件
            stCtrl.setOffset(new BMap.Size(20, 20));
            map.addControl(stCtrl);//添加全景控件

            //添加控件和比例尺
            var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
            var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
            var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
            map.addControl(top_left_control);        
            map.addControl(top_left_navigation);     
            // map.addControl(top_right_navigation);
        },
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
            float: left;
            margin-top: 50px;
            img{
                width:100%;
                height:100%
            }
        }
        .roomSimpleInfo{
            width: 40%;
            float: left;
            margin-left: 50px;
            margin-top: 50px;
            .el-form-item__label{
                color: rgba(0,0,0,0.5);
            }
            .el-form-item{
                margin-bottom: 0px;
                width: 100%;
            }
            .houseTitle{
                width: 100%;
                .el-form-item__content{
                    font-size: 30px;
                }
            }
            .ctr{
                width: 100%;
                .el-form-item__content{
                        font-size: 13px;
                        width: 100%;
                        color: rgba(0,0,0,0.5);
                }
            }
            .roomPrice{
                width: 100%;
                .el-form-item__content{
                        width: 100%;
                }
                .dk_rental_type{
                    float: right;
                    margin-right: 40%;
                    margin-top: 1px;
                }
                .price{
                    font-size: 30px;
                    color:rgba(255, 94, 0, 1);
                }
            }
            .roomSimpleInfo_middle{
                width: 45%;
            }
        }
        .roomRestInfo{
            padding-top: 500px;
            .el-form-item__label{
                color: rgba(0,0,0,0.8);
                font-size: 20px;
                font-weight:bold ;
                width: 100%;
                text-align: left;
            }
            img{
               height:44px;
               width:44px; 
            }
            .roomConfig{
                width: 10%;
                float: left;
                p{
                    text-align: center;
                }
            }
            .BMap_noprint .anchorTR{
                span{
                    top: 23px;
                }
            }
        }
    }
   
</style>

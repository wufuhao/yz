<template>
    <div>
        <div style="height:60px"></div>
        
        <div class="roomDetail">
            <el-carousel class="carousel" :interval="4000" height="400px" :autoplay="false">
                <el-carousel-item v-for="item in houseInfo.hImgPath" :key="item">
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
                    <span style="margin-left:20px">{{houseInfo.tipOff}}次举报</span>
                    <div style="float:right;margin-top: -8px;">
                        <el-button type="text" @click="addMyFavorite">
                            <img src="../../icons/favorite.png" style="height:20px;width:20px;position: relative;top: 2px;" />
                            收藏
                        </el-button>
                        <el-tooltip class="item" effect="dark" content="举报虚假房源" placement="top-start">
                            <el-button type="text" @click="showTipDialog = true">
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
                    <span v-if="houseInfo.dkOrient == 1">东向</span>
                    <span v-else-if="houseInfo.dkOrient == 2">南向</span>
                    <span v-else-if="houseInfo.dkOrient == 3">西向</span>
                    <span v-else-if="houseInfo.dkOrient == 4">北向</span>
                    <span v-else-if="houseInfo.dkOrient == 5">南北向</span>
                    <span v-else-if="houseInfo.dkOrient == 6">东西向</span>
                    <span v-else-if="houseInfo.dkOrient == 7">东南向</span>
                    <span v-else-if="houseInfo.dkOrient == 8">西南向</span>
                    <span v-else-if="houseInfo.dkOrient == 9">东北向</span>
                    <span v-else-if="houseInfo.dkOrient == 10">西北向</span>
                </el-form-item>
                <el-form-item label="楼层：" class="roomSimpleInfo_middle">
                    <span>第{{houseInfo.floor}}层/</span>
                    <span>共{{houseInfo.totalFloor}}层</span>
                </el-form-item>
                <el-form-item label="装修情况：">
                    <span v-if="houseInfo.dkDecoration == 0">毛坯</span>
                    <span v-else-if="houseInfo.dkDecoration == 1">简单装修</span>
                    <span v-else-if="houseInfo.dkDecoration == 2">中等装修</span>
                    <span v-else-if="houseInfo.dkDecoration == 3">精装修</span>
                    <span v-else-if="houseInfo.dkDecoration == 4">豪华装修</span>
                </el-form-item>
                <el-form-item label="区域-地铁:">
                    <span>{{getaddressAreaName()}}-</span>
                    <span>{{getsubStationName()}}</span>
                </el-form-item>
                <el-form-item label="详细地址:">
                    {{houseInfo.address}}
                </el-form-item>
                <el-form-item>
                    <span style="font-size: 10px;color: red;">郑重提示：在签订合同之前，切勿支付任何形式的费用，以免上当受骗</span>
                </el-form-item>
                <el-button type="primary" style="width:30%" @click="toContact(houseInfo.uId)">微聊</el-button>
            </el-form>
            <el-form class="roomRestInfo">
                <el-form-item label="房屋配置">
                    <div v-for=" item in houseInfo.dkConfigure" :key="item" class="roomConfig">
                        <p>
                            <img src="../../icons/bed.png" v-if="item == 1" />
                            <img src="../../icons/wifi.png" v-else-if="item == 2" />
                            <img src="../../icons/tv.png" v-else-if="item == 3" />
                            <img src="../../icons/fridge.png" v-else-if="item == 4" />
                            <img src="../../icons/washingMachine.png" v-else-if="item == 5" />
                            <img src="../../icons/air-conditioning.png" v-else-if="item == 6" />
                            <img src="../../icons/waterHeater.png" v-else-if="item == 7" />
                            <img src="../../icons/sofa1.png" v-else-if="item == 8" />
                            <img src="../../icons/clothespress.png" v-else-if="item == 9" />
                            <img src="../../icons/table_chair.png" v-else-if="item == 10" />
                            <img src="../../icons/range_hood.png" v-else-if="item == 11" />
                            <img src="../../icons/microwave.png" v-else-if="item == 12" />
                            <el-tag style="margin-left: -25px;" v-else>
                                未知
                            </el-tag>
                        </p>
                        <p style="margin-top: -35px;">
                            <span v-if="getDkConfigureName(item)!='未知'">{{getDkConfigureName(item)}}</span>
                        </p>
                    </div>
                    <!-- <img src="../../icons/tv.png" style="height:44px;width:44px;"/> -->
                </el-form-item>
                <el-form-item label="租金包含费用">
                    <el-tag style="margin-left: 15px;" v-for="item in houseInfo.dkRentalCost" :key="item">
                        {{getCostName(item)}}
                    </el-tag>
                </el-form-item>
                <el-form-item label="租赁要求">
                    <el-tag style="margin-left: 15px;" v-for="item in houseInfo.dkRentalDemand" :key="item">
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
                <el-form-item label="点评" class="comment">
                    <el-button type="text" style="z-index:2;position: relative;float: right;margin-right: 10%;top: -20px;" @click="showCommentDialog = true">点评</el-button>
                    <el-row v-for="item in houseComment" :key="item">
                        <el-col :span="4">
                            <img :src="uIcon" style="width:50px;height:50px;float:right;margin-top: 50px;" />
                        </el-col>
                        <el-col :span="20">
                            <span>{{item.name}}</span>
                            <span style="margin-left:100px;color:rgba(0,0,0,0.8);">{{item.createTime}}</span>
                            <br/>
                            <div style="width:90%;margin-top:5px;">
                                {{item.myComment}}
                            </div>
                        </el-col>
                    </el-row>
                    <el-pagination
                        class="pagination-middle"
                        background
                        layout="prev, pager, next"
                        :total="rowsCount"
                        :page-size="getCommentParam.size"
                        @current-change="currentChange">
                    </el-pagination>
                </el-form-item>
            </el-form>

            <el-dialog
            style="text-align:center;"
            title="举报"
            :visible.sync="showTipDialog"
            width="30%">
            <el-input type="textarea" resize="none" :maxlength="150" class="tipoffInout" v-model="tipOffParam.hTipOffDesc"></el-input>
            <el-button type="primary" @click="tipHouse">举报</el-button>
            </el-dialog>

            <el-dialog
            title="点评"
            :visible.sync="showCommentDialog"
            width="30%">
            <el-input resize="none" type="textarea" :maxlength="150" class="tipoffInout" v-model="commentHouseParam.myComment"></el-input>
            <el-button type="primary" @click="commentHouse">点评</el-button>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import {findDkRentalDemandNameByCode,findCostNameByCode,finddDkConfigureNameByCode,findaddareaNameByCode,findSubwayNameByCode} from '@/utils/yz.js'
import {selectDetail,getHouseCommentPage,commentHouseInfo} from '@/api/room'
import {collectHouseInfo,tipOffHouse,getUserInfo} from '@/api/user'
export default {
    data(){
        return{
            hId:'',
            houseInfo:{
                addLongitude:'113.2756',//经度
                addLatitude:'23.1171',//纬度
            },
            rowsCount:1,
            mapEntity:null,
            showTipDialog:false,
            showCommentDialog:false,
            tipOffParam:{
                hTipOff:0,
                hTipOffDesc:''
            },
            houseComment:[],
            getCommentParam:{
                current: 1,
                model: {
                    hComment: 21
                },
                size: 10
            },
            commentHouseParam:{
                hComment: 21,
                myComment: ""
            }
        }
    },
    mounted(){
        this.hId = sessionStorage.hId;
        this.getCommentParam.model.hComment = parseInt(this.hId);
        this.commentHouseParam.hComment = parseInt(this.hId);
        this.tipOffParam.hTipOff =parseInt( this.hId);
        if(this.hId == null || this.hId == ''){
            this.$message('未选择任何房源');
            this.$router.push('/index');
            return;
        }
        this.createBaiduMap();
        this.search();
    },
    methods:{
        getaddressAreaName(){
            return findaddareaNameByCode(this.houseInfo.dkAddArea);
        },
        getsubStationName(){
            return findSubwayNameByCode(this.houseInfo.dkSubStation)
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
            this.mapEntity = map;
            var new_point = new BMap.Point(this.houseInfo.addLongitude,this.houseInfo.addLatitude);
            map.centerAndZoom(new_point,17);

            map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
	        map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
            
            
            
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
        search(){
            console.log(this.hId);
            selectDetail({hId:this.hId}).then(res =>{
                if(res.resultCode == '200'){
                    console.log(res);
                    this.houseInfo = res.busObj;
                    this.houseInfo.dkConfigure = res.busObj.dkConfigure.split(",");
                    this.houseInfo.dkRentalCost = res.busObj.dkRentalCost.split(",");
                    this.houseInfo.dkRentalDemand = res.busObj.dkRentalDemand.split(",");
                    this.houseInfo.hImgPath = res.busObj.hImgPath.split(",");
                    console.log(this.houseInfo);

                    var new_point = new BMap.Point(this.houseInfo.addLongitude,this.houseInfo.addLatitude);
                    var marker = new BMap.Marker(new_point);  // 创建标注
                    this.mapEntity.addOverlay(marker);              // 将标注添加到地图中
                    this.mapEntity.panTo(new_point); 
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }
            });
            getHouseCommentPage(this.getCommentParam).then(res=>{
                if(res.resultCode == '200'){
                    this.rowsCount = res.busObj.total;
                    this.houseComment = res.busObj.records
                }
            });

        },
        addMyFavorite(){
            collectHouseInfo({hId:this.hId}).then(res =>{
                if(res.resultCode == '200'){
                    this.$message('收藏成功');
                }
            })
        },
        tipHouse(){
            tipOffHouse(this.tipOffParam).then(res=>{
                if(res.resultCode == "200"){
                    this.$message('举报成功');
                    this.showTipDialog = false;
                }
            })
        },
        commentHouse(){
            commentHouseInfo(this.commentHouseParam).then(res=>{
                if(res.resultCode == '200'){
                    this.$message('点评成功');
                    this.showCommentDialog = false;
                    getHouseCommentPage(this.getCommentParam).then(res=>{
                        if(res.resultCode == '200'){
                            this.rowsCount = res.busObj.total;
                            this.houseComment = res.busObj.records
                        }
                    });
                }
            })
        },
        currentChange(val){
            this.getCommentParam.current = val;
            getHouseCommentPage(this.getCommentParam).then(res=>{
                if(res.resultCode == '200'){
                    this.rowsCount = res.busObj.total;
                    this.houseComment = res.busObj.records
                }
            });
        },
        toContact(uId){
            getUserInfo({uId:uId}).then(res=>{
                if(res.resultCode == '200'){
                    var hUserIdNow = {
                        uId:res.busObj.uId,
                        icon:res.busObj.uImgPath,
                        name:res.busObj.name
                    };
                    this.$emit('connHouseUser',hUserIdNow);
                }
            })
            console.log(uId);
        }
    }
}
</script>

<style lang="scss">
    .roomDetail{
        .tipoffInout{
            height: 200px;
            textarea{
                min-height: 160px !important;
            }
        }
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
            .el-table th, .el-table tr{
                background-color: rgba(235, 241, 243, 1);
            }
            .el-table td, .el-table th.is-leaf{
                border-bottom: 1px solid #24272e;
            }
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
    .contact{
        position:absolute;
        position:fixed;
        right:40px;
        bottom: 40px;
        height: 500px;
        width: 400px;
        border: 1px solid red;
        background-color: #24272e;
        z-index: 3;
    }
</style>

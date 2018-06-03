<template>
    <div class="roomCompare">
        <el-row :gutter="20">
            <el-col :span="12" style="border:1px solid #ccc; border-top:none;border-bottom:none;border-left:none">
                <el-form style="padding-left:10%">
                    <el-form-item>
                        <img :src="houseInfo1.hImgPath[0]" style=" width:80%;height:300px;" />
                    </el-form-item>
                    <el-form-item class="title">
                        <span>{{houseInfo1.title}}</span>
                    </el-form-item>
                    <el-form-item label="租金：">
                        <span class="price">￥{{houseInfo1.rental}}元/月</span>
                    </el-form-item>
                    <el-form-item label="户型：">
                        <span>{{houseInfo1.room}}室</span>
                        <span>{{houseInfo1.hall}}厅</span>
                        <span>{{houseInfo1.toilet}}卫</span>
                    </el-form-item>
                    <el-form-item label="面积：">
                        <span style="margin-left:5px">{{houseInfo1.area}}㎡</span>
                    </el-form-item>
                    <el-form-item label="朝向：">
                        <span v-if="houseInfo1.dkOrient == 1">东向</span>
                        <span v-else-if="houseInfo1.dkOrient == 2">南向</span>
                        <span v-else-if="houseInfo1.dkOrient == 3">西向</span>
                        <span v-else-if="houseInfo1.dkOrient == 4">北向</span>
                        <span v-else-if="houseInfo1.dkOrient == 5">南北向</span>
                        <span v-else-if="houseInfo1.dkOrient == 6">东西向</span>
                        <span v-else-if="houseInfo1.dkOrient == 7">东南向</span>
                        <span v-else-if="houseInfo1.dkOrient == 8">西南向</span>
                        <span v-else-if="houseInfo1.dkOrient == 9">东北向</span>
                        <span v-else-if="houseInfo1.dkOrient == 10">西北向</span>
                    </el-form-item>
                    <el-form-item label="楼层：">
                        <span>第{{houseInfo1.floor}}层/</span>
                        <span>共{{houseInfo1.totalFloor}}层</span>
                    </el-form-item>
                    <el-form-item label="装修情况：">
                        <span v-if="houseInfo1.dkDecoration == 0">毛坯</span>
                        <span v-else-if="houseInfo1.dkDecoration == 1">简单装修</span>
                        <span v-else-if="houseInfo1.dkDecoration == 2">中等装修</span>
                        <span v-else-if="houseInfo1.dkDecoration == 3">精装修</span>
                        <span v-else-if="houseInfo1.dkDecoration == 4">豪华装修</span>
                    </el-form-item>
                    <el-form-item label="区域-地铁：">
                        <span>{{getaddressAreaName(houseInfo1.dkAddArea)}}-</span>
                        <span>{{getsubStationName(houseInfo1.dkSubStation)}}</span>
                    </el-form-item>
                    <el-form-item label="房屋配置" class="detailMiddle" style="height:250px">
                        <div v-for=" item in houseInfo1.dkConfigure" :key="item" class="roomConfig">
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
                            </p>
                            <p style="margin-top: -30px;">
                                <span>{{getDkConfigureName(item)}}</span>
                            </p>
                        </div>
                    </el-form-item>
                    <el-form-item label="租金包含费用" class="detailMiddle" style="height:150px">
                        <el-tag style="margin-left: 15px;" v-for="item in houseInfo1.dkRentalCost" :key="item">
                            {{getCostName(item)}}
                        </el-tag>
                    </el-form-item>
                    <el-form-item label="租赁要求" class="detailMiddle" style="height:150px">
                        <el-tag style="margin-left: 15px;" v-for="item in houseInfo1.dkRentalDemand" :key="item">
                            {{getRentalDemandName(item)}}
                        </el-tag>
                    </el-form-item>
                </el-form>
            </el-col>



            <el-col :span="12">
                <el-form style="padding-left:10%">
                    <el-form-item>
                        <img :src="houseInfo2.hImgPath[0]" style="width:80%;height:300px;" />
                    </el-form-item>
                    <el-form-item  class="title">
                        <span>{{houseInfo2.title}}</span>
                    </el-form-item>
                    <el-form-item label="租金：">
                        <span class="price">￥{{houseInfo2.rental}}元/月</span>
                    </el-form-item>
                    <el-form-item label="户型：">
                        <span>{{houseInfo2.room}}室</span>
                        <span>{{houseInfo2.hall}}厅</span>
                        <span>{{houseInfo2.toilet}}卫</span>
                    </el-form-item>
                    <el-form-item label="面积：">
                        <span style="margin-left:5px">{{houseInfo2.area}}㎡</span>
                    </el-form-item>
                    <el-form-item label="朝向：">
                        <span v-if="houseInfo2.dkOrient == 1">东向</span>
                        <span v-else-if="houseInfo2.dkOrient == 2">南向</span>
                        <span v-else-if="houseInfo2.dkOrient == 3">西向</span>
                        <span v-else-if="houseInfo2.dkOrient == 4">北向</span>
                        <span v-else-if="houseInfo2.dkOrient == 5">南北向</span>
                        <span v-else-if="houseInfo2.dkOrient == 6">东西向</span>
                        <span v-else-if="houseInfo2.dkOrient == 7">东南向</span>
                        <span v-else-if="houseInfo2.dkOrient == 8">西南向</span>
                        <span v-else-if="houseInfo2.dkOrient == 9">东北向</span>
                        <span v-else-if="houseInfo2.dkOrient == 10">西北向</span>
                    </el-form-item>
                    <el-form-item label="楼层：">
                        <span>第{{houseInfo2.floor}}层/</span>
                        <span>共{{houseInfo2.totalFloor}}层</span>
                    </el-form-item>
                    <el-form-item label="装修情况：">
                        <span v-if="houseInfo2.dkDecoration == 0">毛坯</span>
                        <span v-else-if="houseInfo2.dkDecoration == 1">简单装修</span>
                        <span v-else-if="houseInfo2.dkDecoration == 2">中等装修</span>
                        <span v-else-if="houseInfo2.dkDecoration == 3">精装修</span>
                        <span v-else-if="houseInfo2.dkDecoration == 4">豪华装修</span>
                    </el-form-item>
                    <el-form-item label="区域-地铁：">
                        <span>{{getaddressAreaName(houseInfo2.dkAddArea)}}-</span>
                        <span>{{getsubStationName(houseInfo2.dkSubStation)}}</span>
                    </el-form-item>
                    <el-form-item label="房屋配置" class="detailMiddle" style="height:250px">
                        <div v-for=" item in houseInfo2.dkConfigure" :key="item" class="roomConfig" >
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
                            </p>
                            <p style="margin-top: -30px;">
                                <span>{{getDkConfigureName(item)}}</span>
                            </p>
                        </div>
                    </el-form-item>
                    <el-form-item label="租金包含费用" class="detailMiddle" style="height:150px">
                        <el-tag style="margin-left: 15px;" v-for="item in houseInfo2.dkRentalCost" :key="item">
                            {{getCostName(item)}}
                        </el-tag>
                    </el-form-item>
                    <el-form-item label="租赁要求" class="detailMiddle" style="height:150px">
                        <el-tag style="margin-left: 15px;" v-for="item in houseInfo2.dkRentalDemand" :key="item">
                            {{getRentalDemandName(item)}}
                        </el-tag>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        



        
    </div>
</template>

<script>
import {selectDetail} from '@/api/room'
import {findDkRentalDemandNameByCode,findCostNameByCode,finddDkConfigureNameByCode,findaddareaNameByCode,findSubwayNameByCode} from '@/utils/yz.js'
export default {
    data(){
        return{
            hId1:'',
            hId2:'',
            houseInfo1:{},
            houseInfo2:{}
        }
    },
    mounted(){
        this.hId1 = localStorage["hId1"];
        this.hId2 = localStorage["hId2"];
        if(this.hId1 == '' || this.hId2 == ''){
            this.$message('房源对比消息错误，请重新对比');
            this.$router.push('/room/search');
        }
        console.log(this.hId1+"***************"+this.hId2);
        this.search1();
        this.search2(); 
    },
    methods:{
        search1(){
            selectDetail({hId:this.hId1}).then(res =>{
                if(res.resultCode == '200'){
                    console.log(res);
                    this.houseInfo1 = res.busObj;
                    this.houseInfo1.dkConfigure = res.busObj.dkConfigure.split(",");
                    this.houseInfo1.dkRentalCost = res.busObj.dkRentalCost.split(",");
                    this.houseInfo1.dkRentalDemand = res.busObj.dkRentalDemand.split(",");
                    this.houseInfo1.hImgPath = res.busObj.hImgPath.split(",");
                    console.log(this.houseInfo1);
                }
            })
        },
        search2(){
            selectDetail({hId:this.hId2}).then(res =>{
                if(res.resultCode == '200'){
                    console.log(res);
                    this.houseInfo2 = res.busObj;
                    this.houseInfo2.dkConfigure = res.busObj.dkConfigure.split(",");
                    this.houseInfo2.dkRentalCost = res.busObj.dkRentalCost.split(",");
                    this.houseInfo2.dkRentalDemand = res.busObj.dkRentalDemand.split(",");
                    this.houseInfo2.hImgPath = res.busObj.hImgPath.split(",");
                }
            })
        },
        getaddressAreaName(code){
            return findaddareaNameByCode(code);
        },
        getsubStationName(code){
            return findSubwayNameByCode(code)
        },
        getRentalDemandName(code){
            return findDkRentalDemandNameByCode(code);
        },
        getCostName(code){
            return findCostNameByCode(code);
        },
        getDkConfigureName(code){
            return finddDkConfigureNameByCode(code);
        },
    }
}
</script>

<style lang="scss">
    .roomCompare{
        padding-top: 70px;
        .title .el-form-item__content{
            font-size: 25px;
        }
        .detailMiddle{
            .el-form-item__label{
                width:100%;
                text-align: left;
            }
        }
    }
    
    .roomConfig{
        width: 10%;
        float: left;
        img{
            height:44px;
            width:44px; 
        }
        p{
            text-align: center;
        }
    }
</style>

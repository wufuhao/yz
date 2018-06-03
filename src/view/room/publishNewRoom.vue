<template>
    <div class="publishRoomMain">
        <el-form class="publishRoomForm" >
            <span class="publishRoomTitle">类别</span>
            <el-form-item label="出租方式">
                <el-radio v-model="houseInfo.dkRentalWay" label="0">整租</el-radio>
                <el-radio v-model="houseInfo.dkRentalWay" label="1">合租</el-radio>
            </el-form-item>
            <el-form-item label="卧室类型" v-if="houseInfo.dkRentalWay == 1">
                <el-radio v-model="houseInfo.dkRoomType" label="1">主卧</el-radio>
                <el-radio v-model="houseInfo.dkRoomType" label="2">次卧</el-radio>
            </el-form-item>
            <span class="publishRoomTitle">基础信息</span>
            <el-form-item label="详细地址" id="searchResultPanel">
                <el-input id="suggestId" v-model="houseInfo.address"></el-input>
            </el-form-item>
            <el-form-item label="区域">
                <!-- <span>区域</span> -->
                <el-input  style="width:30%" v-model="houseInfo.dkAddArea" disabled></el-input>
                <span>地铁站点</span>
                <el-input style="width:30%" v-model="houseInfo.dkSubStation" disabled></el-input>
            </el-form-item>
            <el-form-item label="房屋类型">
                <el-input-number :controls="false" style="width:20%;" v-model="houseInfo.room"></el-input-number>
                <span class="housetype">室</span>
                <el-input-number :controls="false" style="width:20%" v-model="houseInfo.hall"></el-input-number>
                <span class="housetype" >厅</span>
                <el-input-number :controls="false" style="width:20%" v-model="houseInfo.toilet"></el-input-number>
                <span class="housetype">卫</span>
                <span style="position: absolute;z-index: 2;margin-left: 5px;">共</span>
                <el-input-number :controls="false" style="width:20%" v-model="houseInfo.area"></el-input-number>
                <span class="housetype">㎡</span>
                <el-select style="margin-top:10px;width:300px;" placeholder="请选择朝向" v-model="houseInfo.dkOrient">
                    <el-option value="1" label="东"></el-option>
                    <el-option value="2" label="南"></el-option>
                    <el-option value="3" label="西"></el-option>
                    <el-option value="4" label="北"></el-option>
                    <el-option value="5" label="南北"></el-option>
                    <el-option value="6" label="东西"></el-option>
                    <el-option value="7" label="东南"></el-option>
                    <el-option value="8" label="西南" ></el-option>
                    <el-option value="9" label="东北" ></el-option>
                    <el-option value="10" label="西北" ></el-option>
                </el-select>
                <el-select v-model="houseInfo.dkDecoration" style="margin-top:10px;margin-left: -140px;width: 300px;" placeholder="请选择装修情况">
                    <el-option value="0" label="毛坯" ></el-option>
                    <el-option value="1" label="简单装修" ></el-option>
                    <el-option value="2" label="中等装修" ></el-option>
                    <el-option value="3" label="精装修" ></el-option>
                    <el-option value="4" label="豪华装修" ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="楼层" style="margin-top:70px;">
                <el-input-number :controls="false" style="width:20%" v-model="houseInfo.floor"></el-input-number>
                <span style="position: absolute; margin-left: -120px;">第</span>
                <span style="position: absolute;margin-left: -25px;">层</span>
                <el-input-number :controls="false" style="width:20%" v-model="houseInfo.totalFloor"></el-input-number>
                <span style="position: absolute;margin-left: -120px;">共</span>
                <span style="position: absolute;margin-left: -25px;">层</span>
            </el-form-item>
            <el-form-item label="租金">
                <el-input-number :controls="false" style="width:40%" v-model="houseInfo.rental"></el-input-number>
                <span style="position: absolute;margin-left: -50px;">元/月</span>
                <el-select v-model="houseInfo.dkRentalType" placeholder="押付方式">
                    <el-option value="1" label="押一付一"></el-option>
                    <el-option value="2" label="押一付二"></el-option>
                    <el-option value="3" label="押一付三"></el-option>
                    <el-option value="4" label="押二付一"></el-option>
                    <el-option value="5" label="押二付二"></el-option>
                    <el-option value="6" label="半年付"></el-option>
                    <el-option value="7" label="年付"></el-option>
                    <el-option value="8" label="面议"></el-option>
                </el-select>
            </el-form-item>
            <span class="publishRoomTitle">详细信息</span>
            <el-form-item label="水费" style="margin-top:20px">
                <el-input-number :controls="false" style="width:20%" v-model="houseInfo.waterRate"></el-input-number>
                <span>元/吨</span>
                <span style="margin-left:50px">电费</span>
                <el-input-number :controls="false" style="width:20%" v-model="houseInfo.powerRate"></el-input-number>
                <span>元/度</span>
            </el-form-item>
            <el-form-item label="租金已包含费用" style="margin-top:-20px;">
                <el-checkbox-group v-model="houseInfo.dkRentalCosts">
                    <el-checkbox label="1">水费</el-checkbox>
                    <el-checkbox label="2">电费</el-checkbox>
                    <el-checkbox label="3">燃气费</el-checkbox>
                    <el-checkbox label="4">宽带费</el-checkbox>
                    <el-checkbox label="5">物业费</el-checkbox>
                    <el-checkbox label="6">取暖费</el-checkbox>
                    <el-checkbox label="7">有线电视费</el-checkbox>
                    <el-checkbox label="8">停车费</el-checkbox>
                    <el-checkbox label="9">卫生费</el-checkbox>
                    <el-checkbox label="10">管理费</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="房源配置" style="margin-top:50px">
                <el-checkbox-group v-model="houseInfo.dkConfigures">
                    <el-checkbox label="1">床</el-checkbox>
                    <el-checkbox label="2">宽带</el-checkbox>
                    <el-checkbox label="3">电视</el-checkbox>
                    <el-checkbox label="4">冰箱</el-checkbox>
                    <el-checkbox label="5">洗衣机</el-checkbox>
                    <el-checkbox label="6">空调</el-checkbox>
                    <el-checkbox label="7">热水器</el-checkbox>
                    <el-checkbox label="8">沙发</el-checkbox>
                    <el-checkbox label="9">衣柜</el-checkbox>
                    <el-checkbox label="10">桌椅</el-checkbox>
                    <el-checkbox label="11">油烟机</el-checkbox>
                    <el-checkbox label="12">微波炉</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="出租要求" style="margin-top:90px">
                <el-checkbox-group v-model="houseInfo.dkRentalDemands">
                    <el-checkbox label="1">只限女生</el-checkbox>
                    <el-checkbox label="2">只限男生</el-checkbox>
                    <el-checkbox label="3">禁止养宠物</el-checkbox>
                    <el-checkbox label="4">半年起租</el-checkbox>
                    <el-checkbox label="5">可短租</el-checkbox>
                    <el-checkbox label="6">租户稳定</el-checkbox>
                    <el-checkbox label="7">作息正常</el-checkbox>
                    <el-checkbox label="8">禁烟</el-checkbox>
                    <el-checkbox label="9">禁止情侣</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="看房时间" style="margin-top:50px;">
                <el-radio v-model="houseInfo.dkLooktime" label="0">仅工作日</el-radio>
                <el-radio v-model="houseInfo.dkLooktime" label="1">仅周末</el-radio>
                <el-radio v-model="houseInfo.dkLooktime" label="2">随时看房</el-radio>
            </el-form-item>
            <el-form-item label="宜居人数">
                <el-input-number :controls="false" style="width:30%" v-model="houseInfo.suitable"></el-input-number>
                <span style="position: absolute;margin-left: -25px;">人</span>
            </el-form-item>
            <el-form-item label="标题">
                <el-input :minlength="3" :maxlength="20" style="width:80%" v-model="houseInfo.title"></el-input>
            </el-form-item>
            <el-form-item label="房源描述">
                <el-input type="textarea" autosize v-model="houseInfo.introduce" :minlength="10" :maxlength="300"></el-input>
            </el-form-item>
            <!-- <el-form-item label="上传图片" class="uploadPicture">
                <el-upload
                    action="http://up.imgapi.com/"
                    list-type="picture-card"
                    :on-success="successUploadPicutre"
                    :on-remove="removePicture"
                    :on-error="uploadPictureErr"
                    :data="pictureToken"
                    :limit="6">
                <i class="el-icon-plus"></i>
                </el-upload>
            </el-form-item> -->
             <el-form-item label="上传图片" class="uploadPicture">
                <el-upload
                    action="/yz/house/houseInfo/uploadHouseImg"
                    list-type="picture-card"
                    :on-success="successUploadPicutre"
                    :on-remove="removePicture"
                    :on-error="uploadPictureErr"
                    name="upload_file"
                    :limit="6">
                <i class="el-icon-plus"></i>
                </el-upload>
            </el-form-item>
            <div style="margin-top:300px;">
                <span class="publishRoomTitle">其他信息</span>
            </div>
            <el-form-item label="联系人姓名">
                <el-input v-model="houseInfo.contName"></el-input>
            </el-form-item>
            <el-form-item label="联系人电话">
                <el-input v-model="houseInfo.contPhone"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="publish">发布</el-button>
            </el-form-item>
        </el-form>
        <div class="baidumap" id="XSDFXPage" hidden></div>
    </div>
</template>

<script>
import {findSubwayCodeByName,findaddareaCodeByName} from '@/utils/yz.js'
import {publishNewRoom} from '@/api/room'
export default {
    data(){
        return{
            houseInfo:{
                dkRoomType:"0",
                dkRentalWay:"0",
                title:'',
                introduce:'',
                rental:'',
                waterRate:'',
                powerRate:'',
                room:'',
                hall:'',
                toilet:'',
                area:'',
                dkOrient:'',
                floor:'',
                totalFloor:'',
                dkDecoration:'',
                dkConfigures:[],
                dkRentalType:'',
                dkLooktime:'',
                dkRentalCosts:[],
                dkRentalDemands:[],
                suitable:'',
                contName:'',
                contPhone:'',
                address:'',
                addLongitude:'',
                addLatitude:'',
                dkSubStation:'无',
                dkAddArea:'',
                hImgPaths:[],
            },
            querySubwayParam: {
                ak:"1sEQF1CiskKm52GuETRVGAK5wpzBFV7f",
                query:"地铁",
                location:"39.915,116.404",
                output:"json",
                scope:2,
                filter:"sort_rule:1",
                },
            pictureToken:{
                Token:'6b9df6ad1c07a79228fa76df6ec4fc498f87fb7d:VHHUaleIKP3_ZemCHFnSpxwFL6Y=:eyJkZWFkbGluZSI6MTUyNzYxNDExMiwiYWN0aW9uIjoiZ2V0IiwidWlkIjoiNjQ3NjM2IiwiYWlkIjoiMTQ0OTczNyIsImZyb20iOiJmaWxlIn0='
            },
        }
    },
    mounted(){
        this.createBaiduMap();
    },
    methods:{
        createBaiduMap() {
            // 百度地图API功能
            // 在指定div位置创建Map实例
            var map = new BMap.Map("XSDFXPage",{enableMapClick:true});

            var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
                {"input" : "suggestId",
                "location" : map
            });

            var myValue;
            var _this = this;
            ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
            var _value = e.item.value;
                myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
                _this.houseInfo.address = myValue;
                setPlace();
            });

            function setPlace(){
                map.clearOverlays();    //清除地图上所有覆盖物
                function myFun(){
                    var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
                    _this.houseInfo.addLongitude = pp.lng;
                    _this.houseInfo.addLatitude = pp.lat;
                    // console.log(pp)//获取经纬度
                    _this.querySubwayParam.location = pp.lat + ',' + pp.lng;
                    _this.querySubway();
                    console.log(local);
                    _this.houseInfo.dkAddArea = local.Fa.content[0].area_name;
                    // map.centerAndZoom(pp, 18);
                    // map.addOverlay(new BMap.Marker(pp));    //添加标注
                }
                var local = new BMap.LocalSearch(map, { //智能搜索
                onSearchComplete: myFun
                });
                local.search(myValue);
            }  
        },
        querySubway(){
            this.$http.jsonp('http://api.map.baidu.com/place/v2/search', {
                params: this.querySubwayParam,
            }).then((res) => {
                if(res.body.results.length != 0 ){
                    this.houseInfo.dkSubStation = res.body.results[0].name;
                }else{
                    this.houseInfo.dkSubStation = "无";
                }
                console.log(res);
            })
        },
        publish(){
            var params = JSON.parse(JSON.stringify(this.houseInfo));
            params.dkAddArea = findaddareaCodeByName(this.houseInfo.dkAddArea);
            params.dkSubStation = findSubwayCodeByName(this.houseInfo.dkSubStation);
            
            console.log(params);
            publishNewRoom(params).then(res =>{
                if(res.resultCode == '200'){
                    this.$message('发布成功');
                    this.$router.push('/user/publish');
                }
            })
        },
        successUploadPicutre(response, file, fileList){
            console.log(response);
            this.getImgUrl(fileList);
            console.log(fileList);
        },
        removePicture(file, fileList){
            this.getImgUrl(fileList);
            console.log(fileList);
        },
        uploadPictureErr(file, fileList){
            this.getImgUrl(fileList);
            this.$message('图片上传失败');
        },
        getImgUrl(fileList){
            this.houseInfo.hImgPaths=[];
            if(fileList.length != 0){
                 for(var i = 0 ; i < fileList.length ; i++){
                    this.houseInfo.hImgPaths.push(fileList[i].response.busObj[0]);
                }
            }
        },
    }
}
</script>

<style>
.publishRoomMain{
    margin-left: 3%;
    height: 100%;
    border: 1px solid rgba(221, 221, 221, 1);
}
.baidumap{
    height: 500px;
    width: 500px;;
}
.publishRoomTitle{
    font-size: 25px;
    /* text-align: right; */
    font-weight:bold; 
}
.publishRoomForm{
    margin-left: 5%;
    /* height: 100%; */
}
.publishRoomForm .el-form-item{
    height: 50px;
    
}
.publishRoomForm .el-form-item .el-input{
    width: 50%;
    
}
.publishRoomForm .el-input-number .el-input{
    width: 100%;
    
}
.publishRoomForm input{
    text-align: center;
}
.publishRoomForm .housetype{
    margin-left: -25px;
    position: absolute;
    /* position: relative; */
}
.publishRoomForm .el-form-item__label{
    width: 120px;
}
.publishRoomForm .el-form-item__content{
    margin-left: 120px;
}
.houseLift .el-input{
    width: 100% !important;
}
.uploadPicture{
    margin-top: 130px;
}

.publishRoomForm .el-textarea__inner{
    height: 150px !important;
    width: 80%;
}
.publishRoomForm .el-checkbox{
    width: 110px;
    margin-left: 0px;
}
</style>

<template>
    <div class="publishRoomMain">
        <el-form class="publishRoomForm" >
            <span class="publishRoomTitle">类别</span>
            <el-form-item label="出租方式">
                <el-radio v-model="houseInfo.dk_rental_way" label="0">整套出租</el-radio>
                <el-radio v-model="houseInfo.dk_rental_way" label="1">单间出租</el-radio>
                <el-radio v-model="houseInfo.dk_rental_way" label="2">合租</el-radio>
            </el-form-item>
            <span class="publishRoomTitle">基础信息</span>
            <el-form-item label="详细地址" id="searchResultPanel">
                <el-input id="suggestId" v-model="houseInfo.address"></el-input>
            </el-form-item>
            <el-form-item label="房屋类型">
                <el-input style="width:20%;" v-model="houseInfo.room"></el-input>
                <span class="housetype">室</span>
                <el-input style="width:20%" v-model="houseInfo.hall"></el-input>
                <span class="housetype" >厅</span>
                <el-input style="width:20%" v-model="houseInfo.toilet"></el-input>
                <span class="housetype">卫</span>
                <span style="position: absolute;z-index: 2;margin-left: 5px;">共</span>
                <el-input style="width:20%" v-model="houseInfo.area"></el-input>
                <span class="housetype">㎡</span>
                <el-select style="margin-top:10px;width:300px;" placeholder="请选择朝向" v-model="houseInfo.dk_orient">
                    <el-option value="东" label="东"></el-option>
                    <el-option value="南" label="南"></el-option>
                    <el-option value="西" label="西"></el-option>
                    <el-option value="北" label="北"></el-option>
                    <el-option value="南北" label="南北"></el-option>
                    <el-option value="东西" label="东西"></el-option>
                    <el-option value="东南" label="东南"></el-option>
                    <el-option value="西南" label="西南" ></el-option>
                    <el-option value="东北" label="东北" ></el-option>
                    <el-option value="西北" label="西北" ></el-option>
                </el-select>
                <el-select v-model="houseInfo.dk_decoration" style="margin-top:10px;margin-left: -140px;width: 300px;" placeholder="请选择装修情况">
                    <el-option value="毛坯" label="毛坯" ></el-option>
                    <el-option value="简单装修" label="简单装修" ></el-option>
                    <el-option value="中等装修" label="中等装修" ></el-option>
                    <el-option value="精装修" label="精装修" ></el-option>
                    <el-option value="豪华装修" label="豪华装修" ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="楼层" style="margin-top:70px;">
                <span style="position: absolute; z-index: 1;margin-left: 5px;">第</span>
                <el-input style="width:20%"></el-input>
                <span style="position: absolute;margin-left: -25px;">层</span>
                <span style="position: absolute; z-index: 1;margin-left: 5px;">共</span>
                <el-input style="width:20%"></el-input>
                <span style="position: absolute;margin-left: -25px;">层</span>
            </el-form-item>
            <el-form-item label="租金">
                <el-input style="width:40%" v-model="houseInfo.rental"></el-input>
                <span style="position: absolute;margin-left: -50px;">元/月</span>
                <el-select v-model="houseInfo.dk_rental_type" placeholder="押付方式">
                    <el-option value="押一付三">押一付三</el-option>
                    <el-option value="押一付一">押一付一</el-option>
                    <el-option value="半年付">半年付</el-option>
                    <el-option value="年付">年付</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="租金已包含费用">
                <el-checkbox-group v-model="houseInfo.dk_rental_cost">
                    <el-checkbox label="水费"></el-checkbox>
                    <el-checkbox label="电费"></el-checkbox>
                    <el-checkbox label="燃气费"></el-checkbox>
                    <el-checkbox label="宽带费"></el-checkbox>
                    <el-checkbox label="物业费"></el-checkbox>
                    <el-checkbox label="取暖费"></el-checkbox>
                    <el-checkbox label="有线电视费"></el-checkbox>
                    <el-checkbox label="停车费"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <span class="publishRoomTitle">详细信息</span>
            <el-form-item label="看房时间">
                <el-radio v-model="houseInfo.dk_looktime" label="0">仅周末</el-radio>
                <el-radio v-model="houseInfo.dk_looktime" label="1">仅工作日</el-radio>
                <el-radio v-model="houseInfo.dk_looktime" label="2">随时看房</el-radio>
            </el-form-item>
            <el-form-item label="宜居人数">
                <el-input style="width:30%" v-model="houseInfo.suitable"></el-input>
                <span style="position: absolute;margin-left: -25px;">人</span>
            </el-form-item>
            <el-form-item label="标题">
                <el-input style="width:80%"></el-input>
            </el-form-item>
            <el-form-item label="房源描述">
                <el-input type="textarea" style="width:100%;" autosize></el-input>
            </el-form-item>
            <el-form-item label="上传图片">
                <el-upload
                    action="http://up.imgapi.com/"
                    list-type="picture-card"
                    :on-success="successUploadPicutre"
                    :data="pictureToken"
                    :limit="1">
                <i class="el-icon-plus"></i>
                </el-upload>
            </el-form-item>
            <div style="margin-top:300px;">
                <span class="publishRoomTitle">其他信息</span>
            </div>
            <el-form-item label="联系人姓名">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="联系人电话">
                <el-input></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="publish">发布</el-button>
            </el-form-item>
        </el-form>
        <div class="baidumap" id="XSDFXPage" hidden></div>
    </div>
</template>

<script>
 import { login } from '@/api/login'
export default {
    data(){
        return{
            houseInfo:{
                houseAddress:'',
                dk_rental_way:'0',
                title:'',
                introduce:'',
                rental:'',
                water_rate:'',
                power_rate:'',
                room:'',
                hall:'',
                toilet:'',
                area:'',
                dk_orient:'',
                floor:'',
                total_floor:'',
                dk_decoration:'',
                dk_configure:'',
                dk_rental_type:'',
                dk_looktime:'',
                dk_rental_cost:[],
                dk_rental_demand:'',
                suitable:'',
                cont_name:'',
                cont_phone:'',
                address:'',
                add_longitude:'',
            },
            loginForm: {
                wsUserName: 'admin',
                wsPassword: '123456'
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
            var _mit = this;
            ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
                var _value = e.item.value;
                myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
                _mit.houseInfo.address = myValue;
                function myFun(){
                
                console.log(local)
            }
            var local = new BMap.LocalSearch(map, { //智能搜索
            onSearchComplete: myFun
            });
            local.search(myValue);
            });

            
           
           
        },
        publish(){
            login(this.loginForm)
            .then(res => {
                this.loading = false
                this.$router.push({ path: '/' })
            })
        },
        successUploadPicutre(response, file, fileList){
            console.log(response);
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
</style>

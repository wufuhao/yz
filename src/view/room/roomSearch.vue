<template>
    <div class="searchMain">
        <el-form>
            <el-form-item class="roomSearch_searchDiv">
                <el-input style="float:left;width:80%" id="suggestId" v-model="queryParam.model.addressKey" @change="search"></el-input>
                <el-button @click="search">搜索</el-button>
            </el-form-item>
            <el-form-item label="区域">
                <el-radio-group v-model="queryParam.model.dkAddArea" size="small" @change="search">
                    <el-radio-button label="3">海珠区</el-radio-button>
                    <el-radio-button label="5">越秀区</el-radio-button>
                    <el-radio-button label="6">荔湾区</el-radio-button>
                    <el-radio-button label="1">天河区</el-radio-button>
                    <el-radio-button label="2">白云区</el-radio-button>
                    <el-radio-button label="7">黄埔区</el-radio-button>
                    <el-radio-button label="8">花都区</el-radio-button>
                    <el-radio-button label="10">南沙区</el-radio-button>
                    <el-radio-button label="11">从化区</el-radio-button>
                    <el-radio-button label="9">增城区</el-radio-button>
                    <el-radio-button label="4">番禺区</el-radio-button>
                    <el-radio-button :label="null">不限</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="地铁线路">
                <el-radio-group v-model="queryParam.model.subway" @change="changeSubwayLine" size="small">
                    <el-radio-button label="1">1号线</el-radio-button>
                    <el-radio-button label="2">2号线</el-radio-button>
                    <el-radio-button label="3">3号线</el-radio-button>
                    <el-radio-button label="3N">3号线(北延段)</el-radio-button>
                    <el-radio-button label="4">4号线</el-radio-button>
                    <el-radio-button label="5">5号线</el-radio-button>
                    <el-radio-button label="6">6号线</el-radio-button>
                    <el-radio-button label="7">7号线</el-radio-button>
                    <el-radio-button label="8">8号线</el-radio-button>
                    <el-radio-button label="9">9号线</el-radio-button>
                    <el-radio-button label="13">13号线</el-radio-button>
                    <el-radio-button label="14">14号线</el-radio-button>
                    <el-radio-button label="GF">广佛线</el-radio-button>
                    <el-radio-button label="APM">APM线</el-radio-button>
                    <el-radio-button :label="null">不限</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="地铁站点" v-if="showSubwayStation && queryParam.model.subway != null" >
                <el-checkbox-group v-model="selectSubwayStations" @change="search">
                    <el-checkbox v-for="item in subwayStations" :key="item" :label="item"></el-checkbox>
                    <el-button type="text" @click="clearSubwayStation">不限</el-button>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="类型">
                <el-radio-group size="small" v-model="queryParam.model.dkRentalWay" @change="search">
                    <el-radio label="0">整租</el-radio>
                    <el-radio label="1">合租</el-radio>
                    <el-radio :label="null">不限</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="租金">
                <el-radio-group  v-model="queryParam.model.priceRange" @change="search">
                    <el-radio label="0,500">￥0-500</el-radio>
                    <el-radio label="500,1000">￥500-1000</el-radio>
                    <el-radio label="1000,1500">￥1000-1500</el-radio>
                    <el-radio label="1500,2000">￥1500-2000</el-radio>
                    <el-radio label="2000,3000">￥2000-3000</el-radio>
                    <el-radio label="3000,">￥3000及以上</el-radio>
                    <el-radio :label="null">不限</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="居室">
                <el-radio-group  v-model="queryParam.model.room" @change="search">
                    <el-radio :label="1">一居</el-radio>
                    <el-radio :label="2">二居</el-radio>
                    <el-radio :label="3">三居</el-radio>
                    <el-radio :label="4">四居及以上</el-radio>
                    <el-radio :label="null">不限</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="朝向">
                <el-radio-group v-model="queryParam.model.dkOrient" @change="search">
                    <el-radio label="1">东</el-radio>
                    <el-radio label="2">南</el-radio>
                    <el-radio label="3">西</el-radio>
                    <el-radio label="4">北</el-radio>
                    <el-radio label="5">南北</el-radio>
                    <el-radio label="6">东西</el-radio>
                    <el-radio label="7">东南</el-radio>
                    <el-radio label="8">西南</el-radio>
                    <el-radio label="9">东北</el-radio>
                    <el-radio label="10">西北</el-radio>
                    <el-radio :label="null">不限</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="装修">
                <el-radio-group v-model="queryParam.model.dkDecoration" @change="search">
                    <el-radio label="0">毛坯</el-radio>
                    <el-radio label="1">简单装修</el-radio>
                    <el-radio label="2">中等装修</el-radio>
                    <el-radio label="3">精装修</el-radio>
                    <el-radio :label="null">不限</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <div class="baidumap" id="XSDFXPage" hidden></div>
        <div>排序方式</div>
        <div>
               
            <el-table :data="houseList">
                <el-table-column>
                    <template scope="scope">
                        <el-row :gutter="10">
                            <el-col :span="8" class="housePic">
                                <img  :src="scope.row.hImgPath" />
                            </el-col>
                            <el-col :span="8">
                                <el-form class="houseSimpleInfo">
                                    <el-form-item class="houseTittle">
                                        <span>{{scope.row.title}}</span>
                                    </el-form-item>
                                    <el-form-item style="margin-top: 50px;">
                                        <span v-if="scope.row.dkRentalWay == 0">整租</span>
                                        <span v-else>合租</span>
                                        <span>/</span>
                                        <span>{{scope.row.room}}</span>
                                        <span>室</span>
                                        <span>{{scope.row.hall}}</span>
                                        <span>厅</span>
                                        <span>{{scope.row.toilet}}</span>
                                        <span>卫/</span>
                                        <span>{{scope.row.area}}</span>
                                        <span>㎡/宜居</span>
                                        <span>{{scope.row.suitable}}</span>
                                        <span>人</span>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                            <el-col :span="8" class="houseDetail">
                                <div style="color:rgb(255,85,46);font-size:30px;padding-left: 33.3%;margin-top: 66px;">
                                    <span >{{scope.row.rental}}元/月</span>
                                </div>
                                <el-button type="primary" style="width:40%;margin-top: 15%;margin-left: 10%;" @click="toDetail(scope.row.hId)">查看详情</el-button>
                                <el-checkbox v-model="compares" @change="checkboxChangeEvn" border :label="scope.row.hId" style="width:40%">对比</el-checkbox>
                            </el-col>
                        </el-row>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                class="pagination-middle"
                background
                layout="prev, pager, next"
                :total="rowsCount"
                :page-size="queryParam.size"
                @current-change="currentChange">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import {getPage} from '@/api/room'
import {findSubwayNameByCode,findSubwayCodeByName} from '@/utils/yz'
export default {
    data(){
        return{
            queryParam:{
                current: 1,
                model: {
                    addressKey: null,//关键字
                    dkAddArea: null,//区域
                    subway: null,//地铁线路
                    subStations: [],//地铁站点
                    dkRentalWay: null,//整租合租
                    priceRange: null,//价格范围
                    room: null,//居室
                    dkOrient: null,//朝向
                    dkDecoration: null,//装修类型
                },
                orderBy: null,
                asc:null,
                size: 10
            },
            rowsCount:1,
            showSubwayStation:false,
            subwayStations:[],
            selectSubwayStations:[],
            subwayInfos:{
                '1':["广州东站"," 体育中心", "体育西路" ,"杨箕" ,"东山口" ,"烈士陵园" ,"农讲所" ,"公园前" ,"西门口" ,"陈家祠" ,"长寿路", "黄沙", "芳村" ,"花地湾" ,"坑口", "西朗"],
                '2':["广州南站" ,"石壁" ,"会江" ,"南浦" ,"洛溪" ,"南洲" ,"东晓南" ,"江泰路" ,"昌岗" ,"江南西" ,"市二宫" ,"海珠广场" ,"公园前" ,"纪念堂" ,"越秀公园" ,"广州火车站" ,"三元里" ,"飞翔公园" ,"白云公园" ,"白云文化广场" ,"萧岗" ,"江夏" ,"黄边" ,"嘉禾望岗" ],
                '3':["天河客运站" ,"五山" ,"华师" ,"岗顶" ,"石牌桥" ,"体育西路" ,"珠江新城" ,"广州塔" ,"客村" ,"大塘" ,"沥滘" ,"厦滘" ,"大石" ,"汉溪长隆" ,"市桥" ,"番禺广场" ],
                '3N':["体育西路","林和西" ,"广州东站" ,"燕塘" ,"梅花园" ,"京溪南方医院" ,"同和" ,"永泰" ,"白云大道北" ,"嘉禾望岗" ,"龙归" ,"人和" ,"机场南" ],
                '4':["黄村" ,"车陂" ,"车陂南" ,"万胜围" ,"官洲" ,"大学城北" ,"大学城南" ,"新造" ,"石碁" ,"海傍" ,"低涌" ,"东涌" ,"黄阁汽车城" ,"黄阁" ,"蕉门" ,"金洲" ],
                '5':["滘口" ,"坦尾" ,"中山八" ,"西场" ,"西村" ,"广州火车站" ,"小北" ,"淘金" ,"区庄" ,"动物园" ,"杨箕" ,"五羊邨" ,"珠江新城" ,"猎德" ,"潭村" ,"员村" ,"科韵路" ,"车陂南" ,"东圃" ,"三溪" ,"鱼珠" ,"大沙地" ,"大沙东" ,"文冲" ],
                '6':["浔峰岗" ,"横沙" ,"沙贝" ,"河沙" ,"坦尾" ,"如意坊" ,"黄沙" ,"文化公园" ,"一德路" ,"海珠广场" ,"北京路" ,"团一大广场" ,"东湖" ,"东山口" ,"区庄" ,"黄花岗" ,"沙河顶" ,"天平架", "燕塘" ,"天河客运站" ,"长湴" ,"龙洞" ,"高塘石" ,"植物园" ,"黄陂" ,"金峰" ,"柯木塱" ,"暹岗" ,"苏元" ,"萝岗" ,"香雪"],
                '7':["广州南站" ,"石壁" ,"谢村" ,"钟村" ,"汉溪长隆" ,"南村万博" ,"员岗" ,"板桥" ,"大学城南"],
                '8':["凤凰新村" ,"沙园" ,"宝岗大道" ,"昌岗" ,"晓港" ,"中大" ,"鹭江" ,"客村" ,"赤岗" ,"磨碟沙" ,"新港东" ,"琶洲" ,"万胜围" ],
                '9':["高增" ,"清塘" ,"清布" ,"莲塘" ,"马鞍山公园" ,"花都广场" ,"花果山公园" ,"花城路" ,"广州北站" ,"花都汽车城" ,"飞鹅岭"],
                '13':["新沙" ,"官湖" ,"新塘" ,"白江" ,"沙村"],
                '14':["新和","红卫","新南","枫下","知识城","何棠下","旺村","汤村","镇龙北","镇龙"],
                APM:["广州塔" ,"林和西" ,"体育中心南" ,"天河南" ,"黄埔大道" ,"妇儿中心" ,"花城大道" ,"大剧院" ,"大剧院(歌剧院)" ,"海心沙"],
                GF:["金融高新区", "千灯湖", "礌岗", "南桂路", "桂城", "朝安", "普君北路", "祖庙", "同济路", "季华园", "魁奇路", "澜石", "世纪莲", "东平", "新城东", "燕岗", "沙园", "沙涌", "鹤洞", "西朗", "菊树", "龙溪"]
            },
            houseList:[],
            compares:[]
        }
    },
    mounted(){
        this.queryParam.model.addressKey = sessionStorage.queryName;
        this.queryParam.model.dkAddArea = sessionStorage.district;
        this.createBaiduMap();
        this.search();
    },
    methods:{
        search(){
            this.queryParam.model.subStations = [];
            for(var i = 0 ; i < this.selectSubwayStations.length ; i ++){
                this.queryParam.model.subStations.push(findSubwayCodeByName(this.selectSubwayStations[i]))
            }
            console.log(this.queryParam);
            getPage(this.queryParam).then(res=>{
                if(res.resultCode == '200'){
                    this.houseList = res.busObj.records;
                    this.rowsCount = res.busObj.total;
                    for(var j = 0 ; j < this.houseList.length ; j++){
                        this.houseList[j].hImgPath = this.houseList[j].hImgPath.split(',')[0];
                    }
                }
            })
        },
        createBaiduMap(){
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
                _this.queryParam.queryName = myValue;
                console.log(_this.queryParam.queryName);
            }); 
        },
        changeSubwayLine(){
            this.showSubwayStation = true;
            this.selectSubwayStations = [];
            this.subwayStations = this.subwayInfos[this.queryParam.model.subway];
            this.search();
        },
        clearSubwayStation(){
            this.selectSubwayStations = [];
            this.search();
        },
        //分页改变触发的方法，val为当前显示的页数
        currentChange(val){
            this.queryParam.current = val;
            this.search();
        },
        toDetail(hId){
            sessionStorage.hId = hId;
            this.$router.push('/room/detail')
        },
        checkboxChangeEvn(){
            if (!window.localStorage){
                this.$message('该浏览器不支持本地存储，无法使用对比功能');
                return
            }
            console.log(this.compares);
            if(this.compares.length == 2){
                window.localStorage.hId1 = this.compares[0];
                window.localStorage.hId2 = this.compares[1];
                window.open("#/room/compare");
                this.compares = [];
            }
        }
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
.searchMain .el-checkbox__inner{
    z-index: 0;
}
.searchMain .el-checkbox{
    width:130px;
    margin-left: 0px;
}
.searchMain .el-form-item__label{
    width: 70px;
}
.searchMain .el-form-item__content{
    padding-left: 70px;
}
.searchMain .el-checkbox-group{
    float: left;
}
.searchMain .housePic{
    height: 200px;
    width: 30%
}
.searchMain .housePic img{
    width:100%;
    height:100%
}
.searchMain .houseSimpleInfo{
    height: 200px;
}
.houseSimpleInfo .el-form-item{
    height: 40px;
    margin-bottom: 0px;
}
.houseSimpleInfo .houseTittle .el-form-item__content{
    font-size: 20px;
    
}
.houseSimpleInfo .el-form-item__content{
    padding-left: 0px;
}
.searchMain .houseDetail{
    height: 200px;
    border-left: 1px solid rgba(61, 146, 196, 0.5);
    /* padding-left: 10% !important;
    padding-top: 66px; */
}
.searchMain .pagination-middle{
    margin-left:33.3%; 
    width: 33.3%;
}
</style>

<template>
    <div>
        <div class="block">
            <el-carousel height="550px">
                <el-carousel-item>
                    <img src="../picture/1.jpg" />
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../picture/2.jpg" />
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../picture/3.jpg" />
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="searchDiv">
            <el-select style="float:left" v-model="queryParam.district">
                <el-option value="" label="不限"></el-option>
                <el-option value="3" label="海珠区"></el-option>
                <el-option value="5" label="越秀区"></el-option>
                <el-option value="6" label="荔湾区"></el-option>
                <el-option value="1" label="天河区"></el-option>
                <el-option value="2" label="白云区"></el-option>
                <el-option value="7" label="黄埔区"></el-option>
                <el-option value="4" label="番禺区"></el-option>
                <el-option value="8" label="花都区"></el-option>
                <el-option value="10" label="南沙区"></el-option>
                <el-option value="11" label="从化区"></el-option>
                <el-option value="9" label="增城区"></el-option>
            </el-select>
            <el-input id="suggestId" style="float:left;width:50%"></el-input>
            <el-button @click="toSearch">搜索</el-button>
        </div>

        <div class="hot">
            <div style="width:100%;text-align: center;">
                <span style="font-weight: bold;font-size: 40px;">热门房源</span>
            </div>
            <div style="margin-top:20px">
                <el-row >
                    <el-col :span="8">
                        <div class="grid-content bg-purplegrid-content bg-purple indexRoomPic" @click="toDetails" >
                            <img  src="../picture/hot1.jpg" style="height:290px;width:390px" /><br/>
                            <span >金碧花园第二金碧4居室</span><br/>
                            <span>海珠金碧2号东晓南</span>
                            <span>￥1700/月</span>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple indexRoomPic">
                            <img  src="../picture/hot2.jpg" style="height:290px;width:390px" /><br/>
                            <span >金碧花园第二金碧4居室</span><br/>
                            <span>海珠金碧2号东晓南</span>
                            <span>￥1700/月</span>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple indexRoomPic">
                            <img  src="../picture/hot3.jpg" style="height:290px;width:390px" /><br/>
                            <span >金碧花园第二金碧4居室</span><br/>
                            <span>海珠金碧2号东晓南</span>
                            <span>￥1700/月</span>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="newHouse">
            <div style="width:100%;text-align: center;">
                <span style="font-weight: bold;font-size: 40px;" >最新房源</span>
            </div>
            <div style="margin-top:20px">
                <el-row >
                    <el-col :span="8">
                        <div class="grid-content bg-purple indexRoomPic">
                            <img  src="../picture/hot1.jpg" style="height:290px;width:390px" /><br/>
                            <span >金碧花园第二金碧4居室</span><br/>
                            <span>海珠金碧2号东晓南</span>
                            <span>￥1700/月</span>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple indexRoomPic">
                            <img  src="../picture/hot2.jpg" style="height:290px;width:390px" /><br/>
                            <span >金碧花园第二金碧4居室</span><br/>
                            <span>海珠金碧2号东晓南</span>
                            <span>￥1700/月</span>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple indexRoomPic">
                            <img  src="../picture/hot3.jpg" style="height:290px;width:390px" /><br/>
                            <span >金碧花园第二金碧4居室</span><br/>
                            <span>海珠金碧2号东晓南</span>
                            <span>￥1700/月</span>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="buttom">
            <el-row :gutter="20">
                <el-col :span="6"><el-button type="text">关于易租</el-button></el-col>
                <el-col :span="6"><el-button type="text">联系我们</el-button></el-col>
                <el-col :span="6"><el-button type="text">用户协议</el-button></el-col>
                <el-col :span="6"><el-button type="text">版权声明</el-button></el-col>
            </el-row> 
        </div>
        <div class="baidumap" id="XSDFXPage" hidden></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            queryParam:{
                district:'',
                queryName:'',
            }
        }
    },
    mounted(){
        this.createBaiduMap();
    },
    methods:{
       toDetails(){
           console.log("点击跳到详细");
       },
       toSearch(){
           sessionStorage.district = this.queryParam.district;
           sessionStorage.queryName = this.queryParam.queryName;
           this.$router.push('/room/search')
       },
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
                _this.queryParam.queryName = myValue;
            });
        },
       
       
    }
}
</script>

<style>
    .top{
        /* background-color: #545c64; */
        /* 透明 */
        /* background-color: transparent; */
        position:relative;
    }
    .topBtn{
        margin:auto;
        height:60px;
    }
    .topBtn span{
        color: #fff;
    }
    .searchDiv{
        position:absolute;
        /* z-index:2; */
        margin-top:400px;
        padding-left: 25%;
        padding-right: 25%;
        width: 50%;
        /* margin-left: 15%; */
        /* margin-right: 25% */
    }
    .block{
        position:absolute;
        z-index:0;
        width:100%;
        /* margin-top:60px; */
    }

    .el-menu--horizontal{
        border-bottom:0px;
    }
    .el-menu-top{
        position:absolute;
        /* z-index:2; */
        width:100%;
        height:60px; 
        background-color:rgba(0,0,0,0.5) !important;
    }
    .hot{
        margin-top: 600px;
        position:absolute;
        /* z-index:3; */
        text-align: center;
        width: 100%;
    }
    .newHouse{
        margin-top: 1100px;
        position:absolute;
        /* z-index:3; */
        text-align: center;
        width: 100%;
    }
    .buttom{
        margin-top: 1600px;
        position:absolute;
        /* z-index:3; */
        text-align: center;
        width: 100%;
        background-color:rgba(0,0,0,0.1) ;
    }
    .indexRoomPic{
        cursor: pointer;
    }
   
</style>

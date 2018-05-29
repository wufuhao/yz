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
            <el-select style="float:left">
                <el-option value="gz">海珠区</el-option>
                <el-option value="fs">越秀区</el-option>
            </el-select>
            <el-input style="float:left;width:50%"></el-input>
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

        <div class="button">
            <ul style="width:100px">
                <li><a>关于我们</a></li>
                <li><a>联系我们</a></li>
                <li><a>招贤纳士</a></li>
                <li><a>法律声明</a></li>
                <li><a>友情链接</a></li>
                <li><a>支付方式</a></li>
                <li><a>配送方式</a></li>
                <li><a>服务声明</a></li>
                <li><a>广告声明</a></li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    mounted(){
    },
    methods:{
       toDetails(){
           console.log("点击跳到详细");
       },
       toSearch(){
           this.$router.push('/room/search')
       }
       
       
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
        z-index:2;
        margin-top:400px;
        padding-left: 25%;
        padding-right: 25%;
        width: 50%;
        /* margin-left: 15%; */
        /* margin-right: 25% */
    }
    .block{
        position:absolute;
        z-index:1;
        width:100%;
        /* margin-top:60px; */
    }

    .el-menu--horizontal{
        border-bottom:0px;
    }
    .el-menu-top{
        position:absolute;
        z-index:2;
        width:100%;
        height:60px; 
        background-color:rgba(0,0,0,0.5) !important;
    }
    .hot{
        margin-top: 600px;
        position:absolute;
        z-index:3;
        text-align: center;
        width: 100%;
    }
    .newHouse{
        margin-top: 1100px;
        position:absolute;
        z-index:3;
        text-align: center;
        width: 100%;
    }
    .button{
        margin-top: 1600px;
        position:absolute;
        z-index:3;
        text-align: center;
        width: 100%;
        background-color:rgba(0,0,0,0.1) ;
    }
    .indexRoomPic{
        cursor: pointer;
    }
   
</style>

<template>
    <div>
        <!-- <div class="contact">
            {{data}}
        </div> -->
        <el-dialog
        title="易租聊天室"
        :visible.sync="contactDialog"
        class="contactDialog"
        width="50%">
            <el-table :data="houseUserInfo" height="400px" class="HouseUserList">
                <el-table-column label="联系人">
                    <template scope="scope">
                        <el-button style="width: 100%;" type="text" @click="gethository(scope.row.uId)">{{scope.row.name}}</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="contactInfo">
                <el-table :data="historyDetil" height="300">
                    <el-table-column :label="'正与['+hUserIdNow.name+']聊天'">
                        <template scope="scope">
                            <div v-if="scope.row.from != userInfo.uId">
                                <p style="margin: 0px;color: rgba(0,0,0,0.5);">{{scope.row.sendTimes}}</p>
                                <p style="text-align:left;margin: 0px;">
                                    
                                    <span>{{hUserIdNow.name}}:</span><span>{{scope.row.message}}</span>
                                </p>
                            </div>
                            <div v-else>
                                <p style="margin: 0px;color: rgba(0,0,0,0.5);text-align:right;">{{scope.row.sendTimes}}</p>
                                <p style="margin: 0px;text-align:right">
                                    <span>{{scope.row.message}}</span><span>:{{userInfo.name}}</span>
                                </p>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <el-row>
                    <el-col :span="20">
                        <el-input v-model="myMsg"></el-input>
                    </el-col>
                    <el-col :span="3">
                        <el-button @click="sendMsg" disabled v-if="hUserIdNow == null || hUserIdNow.uId == 'admin'">发送</el-button>
                        <el-button @click="sendMsg(myMsg)" v-else>发送</el-button>
                    </el-col>
                </el-row>
                
            </div>

        </el-dialog>
        <router-view @toContact="openDialog" @toConnectWs="connectWebSocket" @closeWs="closeWebSocket" @connHouseUser="connHouseUser"></router-view>
    </div>
</template>

<script>
import {formatDate} from '@/utils/date'
export default {
    data(){
        return{
            contactDialog:false,
            ws:null,
            userInfo:null,
            hUserIdNow:{
                uId:"admin",
                icon:"",
                name:'系统管理员'
            },//当前聊天的联系人
            houseUserInfo:[],//所有的联系人
            historyDetil:[],//存显示的聊天记录
            history:[],//存所有聊天记录
            myMsg:''
        }
    },
    mounted(){
        this.onLoad();
    },
    methods:{
        openDialog(){
            this.contactDialog = true;
        },
        onLoad(){
            if(sessionStorage.user != null){
                this.connectWebSocket();
            }
        },
        connectWebSocket(){
            var _this = this;
            this.userInfo = JSON.parse(sessionStorage.user)
            this.ws = new WebSocket('ws://192.168.253.5:8085/yz/chat/'+this.userInfo.uId);
            this.ws.onopen = function(event) { 
                // this.$message('成功连接到易租聊天室')
                console.log("已连接到易租聊天室");
            };
            //接收数据时的处理
            this.ws.onmessage = function(event) {
                var receiveMsg = JSON.parse(event.data);
                if(receiveMsg.message == '用户不在线'){
                    _this.hUserIdNow = {
                        uId:"admin",
                        icon:"",
                        name:'系统管理员'
                    };
                    _this.gethository(_this.hUserIdNow.uId);
                }
                _this.history.push(receiveMsg);
                
                if(!_this.hadContact(receiveMsg.from)){
                    if(receiveMsg.from != 'admin'){
                        _this.houseUserInfo.push({
                            uId:receiveMsg.from,
                            icon:receiveMsg.icon,
                            name:receiveMsg.name
                        })
                    }else{
                        _this.houseUserInfo.push({
                            uId:receiveMsg.from,
                            icon:receiveMsg.icon,
                            name:'系统管理员'
                        })
                    }
                }
                console.log(_this.history);
                console.log(_this.houseUserInfo);
                if(_this.hUserIdNow != null){
                    _this.gethository(_this.hUserIdNow.uId);
                }
            };
            this.ws.onclose = function(event) {
                // this.$message('成功退出易租聊天室')
                console.log("已退出易租聊天室");
            }; 
            this.ws.onerror = function(event) {
                // this.$message('使用websocker发生异常')
                console.log('使用websocker发生异常')
            };
            
        },
        closeWebSocket(){
            this.ws.close();
        },
        sendMsg( message ){
            this.ws.send(this.hUserIdNow.uId+">"+message);
            var a = {
                from:this.userInfo.uId,
                icon:this.userInfo.uImgPath,
                name:this.userInfo.name,
                sendTimes:formatDate(new Date(),'hh:mm'),
                sendTo:this.hUserIdNow.uId,
                message:message
            };
            this.historyDetil.push(a);
            console.log(this.historyDetil);
            this.history.push(a);
            this.myMsg = '';
        },
        gethository(uId){
            console.log(uId)
            this.historyDetil = [];
            for(var i = 0 ; i < this.history.length ; i++){
                if(this.history[i].from == uId || this.history[i].sendTo == uId){
                    this.historyDetil.push(this.history[i]);
                }
            }
            //获取当前聊天的用户
            for(var j = 0 ; j < this.houseUserInfo.length ; j++){
                if(this.houseUserInfo[j].uId == uId){
                    this.hUserIdNow = this.houseUserInfo[j];
                }
            }
            console.log(this.historyDetil);
        },
        connHouseUser(hUserIdNow){
            this.hUserIdNow = hUserIdNow;
            if(!this.hadContact(this.hUserIdNow.uId)){
                this.houseUserInfo.push(hUserIdNow);
            }
            this.gethository(this.hUserIdNow.uId);
            this.contactDialog = true;
            // console.log(hUserIdNow)
        },
        hadContact(uId){
            if(this.houseUserInfo.length == 0){
                return false;
            }
            for(var i = 0 ; i < this.houseUserInfo.length ; i++){
                if(this.houseUserInfo[i].uId == uId){
                    return true;
                }
            }
            return false;
        },
    }
}
</script>

<style>
    .contact{
        position:absolute;
        position:fixed;
        right:40px;
        bottom: 40px;
        height: 400px;
        width: 400px;
        border: 1px solid red;
        background-color: white;
        z-index: 3;
    }
    .contactList{
        width: 20%;
        float: left;
        height: 400px;
    }
    .contactList .el-menu-item{
        padding: 0px;
    }
    .contactInfo{
        float: right;
        width: 79%;
    }
    .contactDialog .el-dialog__body{
        height: 400px;
    }
    .HouseUserList{
        width: 20%;
        float: left;
    }
</style>

<template>
    <div>
        <div style="text-align:center;">易租网在线聊天平台</div>
        <el-menu
        class="contactList" 
        background-color="#545c64"
        text-color="#fff">
            <el-menu-item v-for="item in hUserIds" :key="item.uId" index="item.uId">
                <i class="el-icon-location"></i>
                <el-radio v-model="hUserIdNow" :label="item" @change="changeHouseUserIdNow">{{item.name}}</el-radio>
            </el-menu-item>
        </el-menu>
        <div class="contactInfo">
            <el-table :data="historyDetil">
                <el-table-column label="聊天窗口">
                    <template scope="scope">
                        <div v-if="scope.row.sender != userInfo.uId">
                            <p style="text-align:left">
                                <span>{{hUserIdNow.name}}:</span><span>{{scope.row.msg}}</span>
                            </p>
                        </div>
                        <div v-else>
                            <p style="text-align:right">
                                <span>{{scope.row.msg}}</span><span>:{{userInfo.name}}</span>
                            </p>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <el-button @click="sendMsg">发送</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userInfo:{
                uId:366,
                name:'wfh'
            },   
            ws:null,
            hUserIdNow:{
                uId:1,
                name:'hzj'
            },
            hUserIds:[
                    {
                        uId:1,
                        name:'hzj'
                    },
                    {
                        uId:2,
                        name:'zrq'
                    }
                ],
            historyDetil:[],
            history:{
                1:[
                    {
                        sender:366,
                        msg:'366发送给1'
                    },
                    {
                        sender:1,
                        msg:'1发送给366'
                    },
                    {
                        sender:1,
                        msg:'1发送给366'
                    },
                    {
                        sender:1,
                        msg:'1发送给366'
                    },
                    {
                        sender:366,
                        msg:'366发送给1'
                    }
                ],
                2:[
                    {
                        sender:2,
                        msg:'2发送给366'
                    },
                    {
                        sender:366,
                        msg:'366发送给2'
                    },
                    {
                        sender:2,
                        msg:'2发送给366'
                    },
                    {
                        sender:2,
                        msg:'2发送给366'
                    },
                    {
                        sender:366,
                        msg:'366发送给2'
                    }
                ]
            }
        }
    },
    mounted(){
        // this.createWebSocket();
        this.test();
    },
    methods:{
        createWebSocket(){
            this.ws = new WebSocket('ws://47.106.115.158:8080/reverse/'+this.userInfo.uId)
            this.ws.onopen = function(evt) { 
                console.log("ws Connection open ...");
            };
            this.ws.onmessage = function(evt) {
            console.log( "ws Received Message: " + evt.data);
            };
        },
        cloaseWebSocket(){
            this.ws.onclose = function(evt) {
            console.log("ws Connection closed.");
            };
        },
        sendMsg(){
            // this.ws.send(this.hUserIdNow.uId+">"+this.sendMessage1);
            this.history[this.hUserIdNow.uId].push({
                sender:this.userInfo.uId,
                msg:"我新发送的消息"
            });
        },
        changeHouseUserIdNow(){
            console.log(this.hUserIdNow);
            this.historyDetil = this.history[this.hUserIdNow.uId];
            console.log(this.historyDetil);
        },
        test(){
            var ws1 = new WebSocket('ws://192.168.253.5:8085/yz/chat/1')
            ws1.onopen = function(evt) { 
                console.log("ws1 Connection open ...");
                ws1.send("3>  1发送消息给4啦");
            };
            ws1.onmessage = function(evt) {
            console.log( "ws1 Received Message: " + evt.data);
                // if(evt.data != "Welcome" && evt.data != "ByeBye" ){
                //     console.log(JSON.parse(evt.data));
                // }else{
                //     console.log(evt.data);
                // }
            };
            ws1.onerror = function(evt) {
                console.log( "ws1 onerror Message: " + evt.data);
            };

            // var ws2 = new WebSocket('ws://192.168.253.5:8085/yz/chat/2')
            // ws2.onopen = function(evt) { 
            //     console.log("ws2 Connection open ...");
            // };
            // ws2.onmessage = function(evt) {
            // console.log( "ws2 Received Message: " + evt.data);
            // };

            // ws2.send(1+">  2发送消息给1啦");
            
        }
    }
}
</script>

<style>
    .contactList{
        width:20%;
        float: right;
        height: 1000px;
    }
    .contactInfo{
        width: 75%;
        float: left;
    }
</style>


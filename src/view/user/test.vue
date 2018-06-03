<template>
    <div>
        <el-form>
            <el-form-item label="ws1">
                <el-input v-model="sendMessage1"></el-input>
                <el-button @click="sendMsg1">ws1发送</el-button>
            </el-form-item>
            <el-form-item label="ws2">
                <el-input v-model="sendMessage2"></el-input>
                <el-button @click="sendMsg2">ws2发送</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            ws1:null,
            ws2:null,
            sendMessage1:'',
            sendMessage2:''
        }
    },
    mounted(){
        this.createWebSocket();
    },
    methods:{
        createWebSocket(){
            this.ws1 = new WebSocket('ws://47.106.115.158:8080/reverse/1')
            this.ws2 = new WebSocket('ws://47.106.115.158:8080/reverse/2')
            this.ws1.onopen = function(evt) { 
                console.log("ws1 Connection open ...");
            };
            this.ws2.onopen = function(evt) { 
                console.log("ws2 Connection open ...");
            };
            this.ws1.onmessage = function(evt) {
            console.log( "ws1 Received Message: " + evt.data);
            };
            this.ws2.onmessage = function(evt) {
            console.log( "ws2 Received Message: " + evt.data);
            };
        },
        cloaseWebSocket(){
            this.ws1.onclose = function(evt) {
            console.log("ws1 Connection closed.");
            }; 
            this.ws2.onclose = function(evt) {
            console.log("ws2 Connection closed.");
            }; 
        },
        sendMsg1(){
            this.ws1.send("2>"+this.sendMessage1);
        },
        sendMsg2(){
            this.ws2.send("1>"+this.sendMessage2);
        }
    }
}
</script>

<style>

</style>
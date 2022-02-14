//引入express
const express=require('express');
//创建对象
const app=express();

//创建路由规则
 //request 请求封装 response响应报文封装
app.get('/server',(request,response)=>{

 //设置响应头 设置允许跨域
   response.setHeader('Access-Control-Allow-Origin','*');
    //发送响应头 
   response.send("hello ajax");
})
;
//监听服务
app.listen(8400,()=>{
     console.log("8400端口已经开启");
})
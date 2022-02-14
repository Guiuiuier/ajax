//引入express
const express=require('express');

//创建对象
const app=express();

//创建路由规则
 //request 请求封装 response响应报文封装
app.get('/',(request,response)=>{
  response.send("hello ajax");
})
;
app.listen(8400,()=>{
     console.log("8400端口已经开启");
})
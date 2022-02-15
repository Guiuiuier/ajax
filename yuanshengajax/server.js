//引入express
const express=require('express');
//创建对象
const app=express();

// //创建路由规则
//  //request 请求封装 response响应报文封装
// app.get('/server',(request,response)=>{

//  //设置响应头 设置允许跨域
//    response.setHeader('Access-Control-Allow-Origin','*');
//     //发送响应头 
//    response.send("hello ajax get");

// })
// ;

//这条是针对ie缓存的  在第一次缓存后再更新一次后台的 响应数据再调用还是使用响应前的数据
// app.get('/ie',(request,response)=>{

//      //设置响应头 设置允许跨域
//        response.setHeader('Access-Control-Allow-Origin','*');
//         //发送响应头 
//        response.send("hello ie 5");
    
//     })
//     ;

// post 请求方法   app.all表示所有类型的请求都可以接收 
// app.all('/server',(request,response)=>{

//      //设置响应头 设置允许跨域
//        response.setHeader('Access-Control-Allow-Origin','*');
//         //表示允许所有的请求头
//        response.setHeader('Access-Control-Allow-Headers','*');

//         const data={
//              name:'fed'
//         };
//         let str=JSON.stringify(data);
//        //设置响应体
//        response.send(str);
//      //   send请求体 send(sada)
//     })
//     ;

 //做一个延时响应
//     app.get('/delay',(request,response)=>{

//      //设置响应头 设置允许跨域
//        response.setHeader('Access-Control-Allow-Origin','*');
//        setTimeout(()=>{
//             //发送响应头 
//             response.send("延时响应");

//        },3000)
    
//     })
//     ;
//  jquery post方法 all全部
    app.all('/jquery',(request,response)=>{
     //设置响应头 设置允许跨域
            response.setHeader('Access-Control-Allow-Headers','*');
     response.setHeader('Access-Control-Allow-Origin','*');
        const  data={
               name:"niu"
          }
       response.send(JSON.stringify(data));
     //   response.send('jquery');
     });

//监听服务
app.listen(8400,()=>{
     console.log("8400端口已经开启");
})

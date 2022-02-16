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
//     app.all('/jquery',(request,response)=>{
//      //设置响应头 设置允许跨域
//             response.setHeader('Access-Control-Allow-Headers','*');
//      response.setHeader('Access-Control-Allow-Origin','*');
//         const  data={
//                name:"niu"
//           }
//        response.send(JSON.stringify(data));
//      //   response.send('jquery');
//      });

 //axios服务
// app.all('/axios',(request,response)=>{
//      //设置响应头 设置允许跨域
//             response.setHeader('Access-Control-Allow-Headers','*');
//      response.setHeader('Access-Control-Allow-Origin','*');
//         const  data={
//                name:"niu"
//           }
//        response.send(JSON.stringify(data));
//      //   response.send('jquery');
//      });

 //fetch
//  app.all('/fetch',(request,response)=>{
//      //设置响应头 设置允许跨域
//             response.setHeader('Access-Control-Allow-Headers','*');
//      response.setHeader('Access-Control-Allow-Origin','*');
//         const  data={
//                name:"niu"
//           }
//        response.send(JSON.stringify(data));
//      //   response.send('jquery');
//      });


// jsonp
// app.all('/jsonp',(request,response)=>{
//      //   response.send('jsonp'); //chrome会报错 此时是无法解析的 js引擎无法解析  要用js代码 
//      //   response.send('console.log("jsonp")');
//        const data={
//             name:'asdasdasd',
//        };
//      //   将结果转化为字符串
//        let str=JSON.stringify(data);
//        //返回结果
//        response.end(`handle(${str})`); //模板字符串    ``
//      });

//   json实践 用户名检测是否存在
// app.all('/check',(request,response)=>{
//        const data={
//             exits:1,
//             msg:'用户名已经存在',
//        };
//      //   将结果转化为字符串
//        let str=JSON.stringify(data);
//        //返回结果
//        response.end(`handle(${str})`); //模板字符串    ``
//      });

//  jq jsonp 请求
// app.all('/jqjsonp',(request,response)=>{
//      const data={
//           name:'asd',
//           msg:'用户名已经存在',
//           city:['sad','asd','asd']
//      };
//    //   将结果转化为字符串
//      let str=JSON.stringify(data);
//      // 接收callback参数
//        let cb=request.query.callback;
//      //返回结果
//      response.end(`${cb}(${str})`); //模板字符串    ``
//    });

//  cros 跨域请求
app.all('/getcros',(request,response)=>{
     // 允许所有响应头  *是通配
     response.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500');  //允许请求的网站 记得不是8400 是5500 live server
//   大多数是后会添加 headers那个跨域
// 还有method 跨域  ACC-C-A--Method  ‘*’
     // response.setHeader('Access-Control-Allow-Origin','*');
   response.send("cors get");

   });
//监听服务
app.listen(8400,()=>{
     console.log("8400端口已经开启");
})
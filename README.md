

ajax对seo不友好，没有回退 存在跨域问题

 express 使用
   const express =require('express');
    //创建应用对象
     const app=express();
     //创建路由规则
     app.get('/',()=>{});

启动
 npm  i  install express 下载express框架 记得在在外层
 npm init  node 
 然后进入目标文件夹下终端 
  node server.js 就可以使用

  下载nodemon自动更新不用每次重启服务  
  npm -install -g nodemon
  此时使用 
  nodemon server.js

  同源策略:协议，域名，端口号必须完全相同，违背同源策略就是跨域。

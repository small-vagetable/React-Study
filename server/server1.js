const express = require('express');
const app = express();

app.get('/student',(req,res)=>{
    let data = [
        {id:1,name:'ada',age:23},
        {id:2,name:'ada',age:23},
        {id:3,name:'ada',age:23},
        {id:4,name:'ada',age:23},
    ]
    res.send(data)
})

app.listen(4000,'localhost',(err)=>{
    if(!err){
        console.log('服务器1开启成功\n请求接口为：http://wwww.localhost:4000/student')
    }
})
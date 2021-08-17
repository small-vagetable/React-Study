const express = require('express');
const app = express();

app.get('/car',(req,res)=>{
    let data = [
        {id:1,name:'奔驰',age:23},
        {id:2,name:'宝马',age:23},
        {id:3,name:'法拉利',age:23},
        {id:4,name:'布加迪',age:23},
    ]
    console.log('请求成功')
    res.send(data)
})

app.listen(5000,'localhost',(err)=>{
    if(!err){
        console.log('服务器2开启成功\n请求接口为：http://wwww.localhost:5000/car')
    }
})
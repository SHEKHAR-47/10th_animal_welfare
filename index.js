const express=require('express')
const app=express()

app.use(express.static('public'))

app.get('/',function(req,res){
    res.sendFile('D:/BK BIRLA/10/Animal Welfare/views/home.html')

})

app.get('/register',function(req,res){
    res.sendFile('D:/BK BIRLA/10/Animal Welfare/views/register.html')

})

app.listen(3000,function(){
    console.log("node server is running")
})

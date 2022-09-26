const express = require('express');
const mongoose = require('mongoose');
require('./db/configr');
const Uuser=require('./db/User')
const app = express();
app.use(express.json());

app.post('/regst',async (req,resp)=>{
    let user=new Uuser(req.body);
    let result=await user.save();
    resp.send(result);
})
app.listen(9000);



// const http = require('http');
// const ppath = path.join(__dirname, 'public');
// const api = require('./api');

//const path = require('path');
// const reqfilter = require('./middleware')

//app.use(express.static(ppath));

// app.set('view engine','ejs')

// app.get('',(req,res)=>{
//     res.sendFile(ppath+"/index.html");
// })Documents

// app.get('/about',(req,res)=>{
//     res.sendFile(ppath+"/about.html");
// })

// app.get('/profile',(req,res)=>{
//     res.render('profile');
// })

// app.get('/login',(req,res)=>{
//     res.render('login');
// })


// app.get('*',(req,res)=>{
//     res.sendFile(ppath+"/error.html");
// })

// app.listen(5000);


// http.createServer((req, resp) => {
//     resp.writeHead(200, { 'Content-Type': 'application\json' });
//     resp.write(JSON.stringify(api));
//     resp.end();
// })
//     .listen(9000);

// route.use(reqfilter);

// app.get('', (req, resp) => {
//     resp.send('welcome home ')
// });

// route.get('/about', (req, resp) => {
//     resp.send("welcome about")
// });

// route.get('/help', (req, resp) => {
//     resp.send(api)
// });
// app.use('/',route)
// app.listen(5000);
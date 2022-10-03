const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('./db/configr');
const User = require('./db/User');
const Teacher = require('./db/teacher');
const Student = require('./db/student');
const teacher = require('./db/teacher');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/login', async (req, resp) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body);
        if (user) {
            resp.send(user);
        }
        else {
            resp.send("user not found");
        }
    }
    else {
        resp.send("user not found");
    }
})

app.post('/teacher', async (req, resp) => {
    let teacher = new Teacher(req.body);
    let result = await teacher.save();
    resp.send(result);
})

app.get('/getteacher', async (req, resp) => {
    let teachers = await Teacher.find();
    resp.send(teachers);
})

app.delete('/teacher/:id', async (req, resp) => {
    const result = await Teacher.deleteOne({ _id: req.params.id });
    resp.send(result);
})

app.get('/getteacher/:id', async (req, resp) => {
    let result = await Teacher.findOne({ _id: req.params.id });
    if (result) {
        resp.send(result);
    }
    else {
        resp.send({ result: "no result found" });
    }
})

app.put('/teacher/:id', async (req, resp) => {
    let result = await Teacher.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    resp.send(result);
})

app.post('/student', async (req, resp) => {
    let student = new Student(req.body);
    let result = await student.save();
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
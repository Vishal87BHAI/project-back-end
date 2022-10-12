const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('./db/configr');
const User = require('./db/User');
const Teacher = require('./db/teacher');
const Student = require('./db/student');
const teacher = require('./db/teacher');
const jwt=require('jsonwebtoken');
const jwtkey=('school');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/login', async (req, resp) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            jwt.sign({user},jwtkey,{expiresIn:"2h"},(err,token)=>{
                if(err)
                {
                    resp.send({result:"Something went wrong"})
                }
                resp.send({user,auth:token})
            })
        }
        else {
            resp.send({ error: "user not found" });
        }
    }
    else {
        resp.send({ error: "user not found" });
    }
})

app.post('/teacher',verifytoken, async (req, resp) => {
    let teacher = new Teacher(req.body);
    let result = await teacher.save();
    resp.send(result);
})

app.get('/getteacher',verifytoken, async (req, resp) => {
    let teachers = await Teacher.find();
    resp.send(teachers);
})

app.delete('/teacher/:id',verifytoken, async (req, resp) => {
    const result = await Teacher.deleteOne({ _id: req.params.id });
    resp.send(result);
})

app.get('/getteacher/:id',verifytoken, async (req, resp) => {
    let result = await Teacher.findOne({ _id: req.params.id });
    if (result) {
        resp.send(result);
    }
    else {
        resp.send({ result: "no result found" });
    }
})

app.put('/teacher/:id',verifytoken, async (req, resp) => {
    let result = await Teacher.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    resp.send(result);
})

app.get('/search/:key',verifytoken, async (req, resp) => {
    let result = await Teacher.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { id: { $regex: req.params.key } },
            { subject: { $regex: req.params.key } },
            { dob: { $regex: req.params.key } },
            { age: { $regex: req.params.key } },
            { gender: { $regex: req.params.key } }
        ]
    });
    resp.send(result);
})



app.get('/getstudent',verifytoken, async (req, resp) => {
    let students = await Student.find();
    resp.send(students);
})

app.post('/student',verifytoken, async (req, resp) => {
    let student = new Student(req.body);
    let result = await student.save();
    resp.send(result);
})

app.delete('/student/:id',verifytoken, async (req, resp) => {
    const result = await Student.deleteOne({ _id: req.params.id });
    resp.send(result);
})

app.get('/getstudent/:id',verifytoken, async (req, resp) => {
    let result = await Student.findOne({ _id: req.params.id });
    if (result) {
        resp.send(result);
    }
    else {
        resp.send({ result: "no result found" });
    }
})

app.put('/student/:id',verifytoken, async (req, resp) => {
    let result = await Student.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    resp.send(result);
})

app.get('/search/:key',verifytoken, async (req, resp) => {
    let result = await Student.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { id: { $regex: req.params.key } },
            { subject: { $regex: req.params.key } },
            { dob: { $regex: req.params.key } },
            { age: { $regex: req.params.key } },
            { gender: { $regex: req.params.key } }
        ]
    });
    resp.send(result);
})

function verifytoken(req,resp,next)
{
    let token=req.headers['Authorization'];
    if(token)
    {
        token=token.split(' ')[1];
        jwt.verify(token,jwtkey,(err,valid)=>{
            if(err)
            {
                resp.send({result:"Please provide valid token"});
            }
            else{
                next();
            }
        })
    }
    else
    {
        resp.send({result:"Please provide token with header"});
    }
}


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
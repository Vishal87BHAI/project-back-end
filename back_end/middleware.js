module.exports=reqfilter=(req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send('please enter the age');
    }
    else if(req.query.age<18)
    {
        resp.send('you cannot access this page');
    }
    else{
        next();
    }
};


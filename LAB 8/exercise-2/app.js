const express = require('express');

const app =express();

app.listen (3000);

app.get('/greet', (req, res)=>{
    console.log('GET recieved:' + req.requestTime);
    res.send('Hello World');
})

let requestTime= (req, res, next)=>{
    req.requestTime= Date.now()
    next()
}
app.use(requestTime)

app.post("/friend", (req, res)=>{
    
    res.send("Hello Friend");

});
app.delete("/api/friend", (req, res)=>{

    res.send("Hello Friend");
});
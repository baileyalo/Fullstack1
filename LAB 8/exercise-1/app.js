const express = require('express');

const app =express();

app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.get('/html', (req, res)=> {
    res.send('<html><head></head><body><h1>HEllo World!</h1></body></html>');

});
app.get('/json', (req, res)=> {
    res.json({firstname: 'John', lastname:'Smith'});
});

app.get('/toronto*team', (req, res)=> {
    res.send('<html><head></head><body><h1>Go Toronto!</h1></body></html>');

});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log ('server started on port' + PORT));

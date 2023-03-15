const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
var cors = require('cors');
app.use(cors());


app.listen(8080, function(){
    console.log('listening on 8080');
})

app.get('/', function(req, res){
    res.send('hallo');
})

app.get('/test', (req, res)=>{
    const result = {
        code: 0,
        message: 'success'
    };
    res.send(result);
})

const result = [
    {id:'1', textTitle:'title1', createdDate:'date'},
    {id:'2', textTitle:'title2', createdDate:'date'},
    {id:'3', textTitle:'title3', createdDate:'date'},
    {id:'4', textTitle:'title4', createdDate:'date'},
    {id:'5', textTitle:'title5', createdDate:'date'},
]

let id = 5;
app.post('/post', (req, res)=>{
    var dt = new Date();
    req.body.id = ++id;
    req.body.createdDate = `${dt.getMonth()+1}/${dt.getDate()}`
    result.push(req.body);
    console.log(req.body);
})

app.get('/list', (req, res)=>{
    console.log('get detected');
    res.send(result); 
})
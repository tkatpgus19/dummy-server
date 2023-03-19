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


const result = [
    {id: 1, textCategory:'front', textTitle:'title1', textBody:'bodybodybody1', createdDate:'date'},
    {id: 2, textCategory:'front', textTitle:'title2', textBody:'bodybodybody2', createdDate:'date'},
    {id: 3, textCategory:'front', textTitle:'title3', textBody:'bodybodybody3', createdDate:'date'},
    {id: 4, textCategory:'front', textTitle:'title4', textBody:'bodybodybody4', createdDate:'date'},
    {id: 5, textCategory:'front', textTitle:'title5', textBody:'bodybodybody5', createdDate:'date'},
    {id: 6, textCategory:'front', textTitle:'title1', textBody:'bodybodybody1', createdDate:'date'},
    {id: 7, textCategory:'front', textTitle:'title2', textBody:'bodybodybody2', createdDate:'date'},
    {id: 8, textCategory:'front', textTitle:'title3', textBody:'bodybodybody3', createdDate:'date'},
    {id: 9, textCategory:'front', textTitle:'title4', textBody:'bodybodybody4', createdDate:'date'},
    {id: 10, textCategory:'server', textTitle:'title5', textBody:'bodybodybody5', createdDate:'date'},
    {id: 11, textCategory:'server', textTitle:'title1', textBody:'bodybodybody1', createdDate:'date'},
    {id: 12, textCategory:'server', textTitle:'title2', textBody:'bodybodybody2', createdDate:'date'},
    {id: 13, textCategory:'server', textTitle:'title3', textBody:'bodybodybody3', createdDate:'date'},
    {id: 14, textCategory:'server', textTitle:'title4', textBody:'bodybodybody4', createdDate:'date'},
    {id: 15, textCategory:'server', textTitle:'title5', textBody:'bodybodybody5', createdDate:'date'},
]

let id = 5;
app.post('/post', (req, res)=>{
    if(req.body){
        var dt = new Date();
        req.body.id = ++id;
        req.body.createdDate = `${dt.getMonth()+1}/${dt.getDate()}`
        result.push(req.body);
        console.log(req.body);
        res.send('success');
    }
    else{
        res.send('failed');
    }
    
})

app.get('/list', (req, res)=>{
    console.log('get detected');
    res.send(result); 
})

app.get('/list/:id', (req, res)=>{
    console.log('detail get detected');
    console.log(result[req.params.id-1])
    res.send(result[req.params.id-1]); 
})

let url = require('url');

app.get('/api/list', (req, res)=>{
    let reqUrl = req.url;
    let parsedUrl = url.parse(reqUrl, true);

    console.log(parsedUrl);
})

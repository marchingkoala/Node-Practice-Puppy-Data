const express = require('express');
const app = express();

const volleyball = require('volleyball');
app.use(volleyball);

const timeago = require('node-time-ago');
const path = require('path');
const middleware = express.static(path.join(__dirname, 'css'))
app.use(middleware)

const puppyData = require('./puppyData')
const pupFunc = require('./pupFunc')
const findpup = require('./findpup');
const { find } = require('lodash');


app.get('/', (req, res) => {
    let string = `
    <!DOCTYPE html>
    <html lagn="en">
    <head>
    <title>I love Dogs!</title>
    </head>
    <body>
    <h1>Welcome to the Pup List!</h1>
    <h2>~Server is online~</h2>
    </body>
    </html>
    `;

    res.send(string);
})

//I'm using pupFunc function I imported from pupFunc.js file here
app.get('/main', (req, res)=>{
    let pups = puppyData.list();
    res.send(pupFunc(pups))
})
//cleaned up nicely with imported findpup function
app.get(`/posts/:id`, (req, res)=>{
    const id = req.params.id;
    const pup = puppyData.find(id);
    let pups = puppyData.list();
    if(!pup.id){
        throw new Error('Not found')
    }
    res.send(findpup(pups, id));
})

app.use((err,req,res,next)=>{
    const html = `
    <!DOCTYPE html>
    <html lagn="en">
    <head>
    <title>I love Dogs!</title>
    <link rel="stylesheet" href="/main.css" />
    </head>
    <body class="error-body">
    <h1 class="error-head">Woof! Something went wrong!</h1>
    <h2 class="second-head">But it's ok. Have a nose boop</h2>
    <br>
    <div class="boop">
    <img src="https://c.tenor.com/6qweAHQw5hwAAAAd/puppy-white-puppy.gif">
    </div>
    <br>
    <a class="goback" href="/main">Paw here to go back</a>
    </body>
    </html>
    `;
    console.log(err.stack);
    res.status(404).send(html);
})

const port = 3000;
app.listen(port, ()=>{
    console.log('Port is open!')
})
const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const Advice = require('./myConf/adviceModel');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const dbUrl = require('./private/dbkeys').dbUrl;


const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
.then(()=>{
    const server = express();

    //connecting the database
    mongoose.connect(dbUrl,function () {
        console.log('mongodb is connected...');
    });
    //Middlewares
    server.use(cors());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended:false}));
    //Routes for AJAX API
    server.post('/api/advice', (req, res)=>{
       newAdvice = new Advice();
       newAdvice.email = req.body.email;
       newAdvice.content = req.body.content;
       newAdvice.save().then(doc=>{
           res.send(doc);
       }).catch(err=>{
           res.status(400).send(err);
       })
    });

    //Server side support for the front end react
    server.get('/letsTalk/:id', (req, res) =>{
        const actualPage = '/letsTalk';
        const queryParams = { id: req.params.id };
        app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) =>{
        return handle(req, res);
    });
    server.listen(port, (err)=>{
        if(err) throw err;
        console.log(`>listening on: ${port}`);
    });
})
.catch((ex)=>{
    console.log(ex.stack);
    process.exit(1);
});
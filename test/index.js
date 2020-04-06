const express = require('express'),
    app = express();
const dotenv = require ('dotenv');
    dotenv.config();
const bd = require('./db');

const initRouter = require('./routes');

const  bodyParser = require('body-parser');

bd.sync();

app.use(bodyParser.json());

initRouter(app);


app.listen(process.env.PORT, ()=>console.log('Serv startanul na  '+ process.env.PORT));

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const massive = require('massive');
require('dotenv').config();
const products_controller = require('./products_controller');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );
massive( process.env.CONNECTION_STRING )
.then( dbInstance => 
    app.set('db', dbInstance) );

app.post('/api/product', products_controller.create);
app.get('/api/products', products_controller.getAll);
app.get('/api/product/:id', products_controller.getOne);
app.put('/api/product/:id', products_controller.update);
app.delete('/api/product/:id', products_controller.destroy);



const port = process.env.PORT || 3000; 
app.listen( port, () => { console.log(`Hello Server, Sir on ${port}. `)});
import express from 'express';
import router from './routes/index';
const app = express();
const port = 3000;// TODO move to dotenv

import './database';

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.use('/todos', router);

app.listen(port,()=>{
    console.log('express init', port);
});

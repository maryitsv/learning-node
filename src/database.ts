import mongoose from "mongoose";

// move to dotenv
mongoose.connect('mongodb://127.0.0.1:27017/todos', 
{useNewUrlParser: true, useUnifiedTopology:true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('connect');
});

connection.on('error',(err)=>{
    console.log('error connect', err);
});
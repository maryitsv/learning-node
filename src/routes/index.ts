import {Router} from "express";
import TodoModel, { Todo } from '../models/index';

const router:Router = Router();

// curl  -X GET "http://localhost:3000/todos"
router.get('/',(req,res)=>{
    console.log("on router get all")
    TodoModel.find().then( (doc:any) => {
        res.json({response:'success', data: doc});
    }, (err:any) =>{
        console.log('error get', err);
    });
});

// curl -X POST "http://localhost:3000/todos" -H "Content-Type: application/json" -d '{"text":"play"}'
router.post('/',(req,res) =>{
    const todo:Todo = new TodoModel({text:req.body.text, completed:false});

    todo.save().then((doc:any) =>{
        console.log('inserted', doc);
    }, ((err:any)=>{
        console.log('error insert', err);
    }));
});

router.put('/',(req,res)=>{
    TodoModel.find().then( (doc:any) => {
        const id = req.params.id;
        const status = req.params.status === 'true';

        /*
        // TODO: Review this gets broken on ts migration
        TodoModel.findByIdAndUpdate({_id:id},{$set:{completed:status}})
        .then( (doc:any)  => {
            res.json({response:'success', data: doc});
        }, (err:any) => {
            console.log('error update', err);
        });
        */

        res.json({response:'success', data: "tezt"});
    }, (err:any)  =>{
        console.log('error get', err);
    });
});


export default router;
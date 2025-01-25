const express = require('express');
const app = express();
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors')

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())


app.post('/todo',async function (req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: {
            type: Boolean,
            default: false
        }
    })

    res.json({
        msg: "todo created successfully"
    })


})

app.get('/todo',async function (req, res){
    // const todos =await todo.find({})
    // console.log(todos)
    // res.json({
    //     todos
    // })
})

app.put('/completed',async function (req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed:true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 

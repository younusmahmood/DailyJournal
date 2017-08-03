const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

var { mongoose } = require('./db/mongoose');
var { TaskList } = require('./models/taskList');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors())

app.post('/taskslist', (req, res) => {
    var task = new TaskList({
        task: req.body.task,
        time: req.body.time
    });

    task.save().then(doc => {
        res.send(doc)
    }).catch(e => res.send(e));
})

app.get('/taskslist', (req, res) => {
    TaskList.find().then((tasks) => {
        res.send({ tasks })
    }, (e) => {
        res.status(400).send(e)
    })
})


app.listen(port, () => {
    console.log(`Started on port ${port}`);
});
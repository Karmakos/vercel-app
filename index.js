import express from 'express'

const port = '3000';
const app = express();

app.use('/', function (req, res){
    res.send("Perfect")
});

app.listen(port,
    console.log("App running")
    );
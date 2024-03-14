const {RsnChat} = require("rsnchat")
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors())
app.use(bodyParser.json());
app.post('/api',(req,res)=>{
    const {text,model}=req.body;
    const rsnchat = new RsnChat("rsnai_W4YjLo3R20ONZ93B9MhXlgIc")
rsnchat.bard(text).then((response)=>{
    console.log(response.message);
    res.json(response.message)
    // res.send(response.message)
})


})

app.listen(port,()=>{
    console.log('server is running')
})
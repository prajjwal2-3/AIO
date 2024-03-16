const {RsnChat} = require("rsnchat")
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const rsnchat = new RsnChat("rsnai_W4YjLo3R20ONZ93B9MhXlgIc")
app.use(cors())
app.use(bodyParser.json());
function bard(text,res){
    rsnchat.bard(text).then((response)=>{
        console.log("message aagya")
        res.json(response.message)
        
    })
}
function gemini(text){
    rsnchat.gemini(text).then((response)=>{
     return response.message
    })
}
function gpt(text,res){
    rsnchat.gpt(text).then((response)=>{
        console.log("message aagya")
        res.json(response.message)
     
    })
}

app.post('/api',(req,res)=>{
    const {text,model}=req.body;
    if(model==='bard'){
      const data = bard(text,res)
     
      
    }else if(model==='gpt'){
        const data = gpt(text,res)
    }
   



})

app.listen(port,()=>{
    console.log('server is running')
})
module.exports=app;
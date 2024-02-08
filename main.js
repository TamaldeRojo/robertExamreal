const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3000

app.use(cors())
app.use(bodyParser.json())

let arr = [{taskId:0,title:"default task",status:true}]


app.get("/task",(req,res)=>{
    res.send(arr)
})
app.post("/task",(req,res)=>{
    console.log(req.body)
    const {title,status} = req.body
    data = {taskId:arr.length ,title:title,status:status}
    arr.push(data)
    res.send(arr)
})
app.put("/task",(req,res)=>{
    console.log(req.body)
    const id = req.body.taskId
    const {title,status} = req.body
    arr.map(({taskId})=>{
        if(taskId == id){
            console.log("got you")
            arr[id] = {taskId:id ,title:title,status:status}
            res.send(arr)
        }
    })
})
app.delete("/task",(req,res)=>{
    console.log(req.body)
    const id = req.body.taskId
    arr.splice(id,1)
  

    res.send(arr)
})


app.listen(port,()=>{
    console.log("jala pa en el puerto 3000")
})
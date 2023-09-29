const express = require("express");

const rg = express()

rg.use(express.json())



rg.get("/", (req, res)=>{
    return(res.json({
        data: 'Hello'
    }))
})

rg.get("/b", (req, res )=>{
    return res.json({data: 'Hello b'})
})


rg.listen(3000, ()=>{
    console.log('server is running')
})


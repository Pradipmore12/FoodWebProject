//const http =require("http");
//import express
const express=require("express");
const fs=require("fs");
const path=require("path");
//const homefile=fs.readFileSync(__dirname +"/"+"index.html","utf-8");
//const server =http.createServer((req,res)=>{

const app=express();
app.use((req,res,next)=>{
console.log(`${req.path}`);
next();
});
app.use(express.static(path.join(__dirname +'/public')));
app.get('^/$|/index(.html)?', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(process.env.PORT || 3000,()=>{
    console.log("server is listening;");
    console.log(__dirname);
});
    

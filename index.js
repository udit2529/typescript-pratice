"use strict";
// let message="hello";
// console.log(message);
exports.__esModule = true;
// function compute(a:number, b:number){
//     return a+b;
// }
// console.log(compute(2,3));
//hhtp modules
// import http from "http"; 
// http.createServer((req,res)=>{
//     res.end("hello")
// }).listen(3000,()=>{
//     console.log("server started")
// });
//express
var express_1 = require("express");
//import { router } from "./routes";
var db_1 = require("./db");
var app = (0, express_1["default"])();
var port = 4000;
//app.use("/",router);
//app.post("/test",(req:Request,res:Response):void=>{
// fs.readFile("user.json","utf-8",function(err,data){
//     if(err){
//         console.log(err);
//     }
//     res.end(data);
// })
//     res.json({data:"test page"})
// })
app.get("/", function (req, res) {
    res.json({ data: "test page" });
});
//db connection
(0, db_1["default"])();
app.listen(port, function () {
    console.log("Server is runing");
});

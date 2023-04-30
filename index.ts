// let message="hello";
// console.log(message);

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
import express,{ Request,Response } from "express";
import fs from "fs";
//import { router } from "./routes";
import connects from "./db";
const app = express();
const port = 4000;

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
app.get("/",(req:Request,res:Response):void=>{
res.json({data:"test page"});
})

//db connection
connects();


app.listen(port,():void=>{
console.log("Server is runing");
})
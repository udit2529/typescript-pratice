import express, { Request,Response } from "express";
const router = express.Router();

router.get("/home",(req:Request,res:Response)=>{
    let obj={
        x:12,
        y:13
    }
    const data = sumData(obj);
    res.json({
        message:"home page",data:data
    })
})
interface params{
    x:number;
    y:number;
}
const sumData=(ob:params)=>{
    return ob.x+ob.y;
}
router.get("/about",(req:Request,res:Response)=>{
    res.json({
        message:"home page"
    })
})

export {
    router
}
import mongoose,{connect} from "mongoose";

function connects(){
    return connect("mongodb://0.0.0.0:27017/local")
    .then(()=>{
        console.log("server connected");
    })
    .catch((err:any)=>{
        console.log(err);
    })
}

export default connects;
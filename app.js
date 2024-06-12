const express= require("express");
const app=express();
const mongoose=require("mongoose");


const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() => {
    console.log('Connected to db');
    })
    .catch((err) => {
        console.error(err);
        });


async function main (){
    await mongoose.connect(MONGO_URL);
}

app.get("/",(req,res)=>{
    res.send("Welcome to my API");
})


app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})



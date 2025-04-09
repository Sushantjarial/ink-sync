import express from "express";
import {JWT_SECRET} from "@repo/common-backend/config"
import {prisma} from "@repo/db/client"

const app = express();
app.get("/",(req,res)=>{
    console.log(process.env.JWT_SECRET);
    const users=prisma.user.findMany();
    res.send({
        jwt: JWT_SECRET ,
        users,
        message:"hello"
    });
})



app.listen(3000);



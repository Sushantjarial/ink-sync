import express from "express";
import {middleware} from "./middlewares"
import {JWT_SECRET} from "@repo/common-backend/config"
import {prisma} from "@repo/db/client"
import {Request, Response} from "express"
import {createRoomSchema, signupSchema} from "@repo/common/types"
import jwt from "jsonwebtoken"


const app = express();
app.use(express.json())

app.post("/signup",async(req,res)=>{
    

    const{success,error}=signupSchema.safeParse(req.body)

    if(success){
        try{
            const existingUser=await prisma.user.findUnique({
                where:{
                    userName:req.body.userName
                }
            })
            if(existingUser){
                 res.status(400).json({
                error:"user already exists with this username"
                })
            }

            const user =await prisma.user.create({
                data:{
                    userName:req.body.userName,
                    password:req.body.password,
                    name:req.body.name
                    
                    
                }
            })
            const token=jwt.sign(user.id,JWT_SECRET)
            res.status(200).json({
                message:"user created successfully",
                user,
                token
            })
        }
        catch(e){
            res.status(500).json({message:"database is ofline",
                error:e
            })
        }
    }
    else{
        res.status(400).json({
            error:error.format(),
            message:"zod error"
        })
    }
 

})

app.post("/signin",async (req, res) => {
 const {userName,password}=req.body
    if(!userName || !password){
         res.status(400).json({
            error:"username and password are required"
        })
    }
    try{
        const user =await prisma.user.findFirst({
            where:{
                userName,
                password
            }
        })
        if(!user){
            res.status(400).json({
                error:" User not found"
            })
        }
        else{
        const token=jwt.sign(user.id,JWT_SECRET)
        res.status(200).json({
            message:"user logged in successfully",
            user,token
        })
    }
    }
    catch(e){
        res.status(500).json({
            message:"database is offline",
            error:e

        })
    }

});
app.get("/",(req,res)=>{
    res.status(200).json({
        message:"hello world"
    })
})

app.post("/createRoom",async(req,res)=>{
    const {success,error}=createRoomSchema.safeParse(req.body)
    if(success){
        try{
            const room=await prisma.room.create({
                data:{
                    slog:req.body.slog,
                    userName:req.body.userName
                    
                }
            })
            if(!room){
                res.status(400).json({
                    error:"slog already exists"
                })
            }
            else{
                res.status(200).json({
                    message:"room created successfully",
                    room
                })
            }
        }
        catch(e){
            res.status(500).json({
                message:"database is offline",
                error:e
            })
        }
    }
    else{
        res.status(400).json({
            error:error.format(),
            message:"zod error"
        })
    }
})


app.listen(3000);



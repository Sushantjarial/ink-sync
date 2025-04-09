import { WebSocketServer } from "ws";

const wss= new WebSocketServer({port:8080});
import {prisma} from "@repo/db/client"

wss.on("connection",(socket)=>{
    console.log("connected")
})

import { WebSocketServer } from "ws";
import {prisma} from "@repo/db/client"
const wss= new WebSocketServer({port:8080});
type user= {
    socket :WebSocket,
    rooms:[]
    username:string
}
const users:Map<string,user>=new Map()
wss.on("connection",(socket,request)=>{







})

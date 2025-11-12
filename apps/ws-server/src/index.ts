import { WebSocketServer, WebSocket } from "ws";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/common-backend/config";

import { prisma } from "@repo/db/client";
const wss = new WebSocketServer({ port: 8080 });
type user = {
  socket: WebSocket;
  rooms: string[];
  userName: string;
  userId: string;
};
const users: Map<string, user> = new Map();


function verifyRoom(roomToken: string): string | null {
  console.log(roomToken);
  try {
    const decoded = jwt.verify(roomToken, JWT_SECRET);
    console.log(decoded);
    if (!decoded) {
      return null;
    }
    if (typeof decoded == "string") {
      return null;
    }
    const roomId = decoded.roomId;
    if (!roomId) {
      return null;
    }
    return roomId;
  } catch (e) {
    return null;
  }
}

wss.on("connection", (socket, request) => {

  socket.on("message", async (message) => {
    const { type, userId, userName, roomToken ,data} = JSON.parse(
      message.toString()
    );

    console.log("message", message.toString());
    const roomId = verifyRoom(roomToken);
    console.log("roomId", roomId);
    if (!roomId) {
      socket.send(
        JSON.stringify({
          type: "error",
          message: "invalid room token",
        })
      );
      return;
    }
    if (type === "join") {
      const user = users.get(userId);
     
      users.set(userId, {
        socket,
        userId,
        rooms: [roomId],
        userName,
      });
      console.log("users", users);
      users.forEach((user) => {
        if (user.rooms.includes(roomId) && user.userId !== userId) {
          user.socket.send(
            JSON.stringify({
              type: "joined",
              message: userName + " have joined the room",
              userId,
              roomId,
            })
          );
        }
      });
    }

    if (type === "message") {

      console.log(data);
      const user = users.get(userId);
      if (!user) {
        console.log("User not found");
        socket.send(
          JSON.stringify({
            type: "error",
            message: "user not found",
          })
        );
        return;
      } else {
        // const message = await prisma.message.create({
        //   data: {
        //     roomId: Number(roomId),
        //     content: data,
        //     senderId: userId,
        //   },
        // });
        console.log("Broadcasting message to room:", roomId);
        
        users.forEach((user) => {
          if (user.rooms.includes(roomId) && user.userId !== userId) {
            console.log("Sending message to user:", user.userId);
            user.socket.send(
              JSON.stringify({
                data,
                type: "message",
                userName,
                userId,
                roomId,
              })
            );
          }
          
        });
      }
    }
    if (type === "leave") {
      const user = users.get(userId);
      if (!user) {
        socket.send(
          JSON.stringify({
            type: "error",
            message: "user not found",
          })
        );
        return;
      } else {
        users.delete(userId);
      }
    }
  });
});

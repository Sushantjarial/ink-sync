import { WebSocketServer, WebSocket } from "ws";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/common-backend/config";

// import { prisma } from "@repo/db/client"; // Not needed for live shape sync right now
const wss = new WebSocketServer({ port: 8080 });
type User = {
  socket: WebSocket;
  rooms: string[];
  userName: string;
  userId: string;
};
const users: Map<string, User> = new Map();

type Shape = any; // Trust clients for now; validate as needed
type RoomState = {
  shapes: Shape[];
};
const roomStates: Map<string, RoomState> = new Map();

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

wss.on("connection", (socket) => {
  socket.on("message", async (raw) => {
    let parsed: any;
    try {
      parsed = JSON.parse(raw.toString());
    } catch (e) {
      socket.send(
        JSON.stringify({ type: "error", message: "invalid json payload" })
      );
      return;
    }
    const { type, userId, userName, roomToken } = parsed;
    const roomId = verifyRoom(roomToken);
    if (!roomId) {
      socket.send(
        JSON.stringify({ type: "error", message: "invalid room token" })
      );
      return;
    }

    // Ensure room state exists
    if (!roomStates.has(roomId)) {
      roomStates.set(roomId, { shapes: [] });
    }

    if (type === "join") {
      users.set(userId, {
        socket,
        userId,
        rooms: [roomId],
        userName,
      });
      // Send current board state to joining user
      const state = roomStates.get(roomId)!;
      socket.send(
        JSON.stringify({
          type: "board_state",
          roomId,
          shapes: state.shapes,
        })
      );
      // Notify others
      broadcast(roomId, userId, {
        type: "joined",
        userId,
        userName,
        roomId,
      });
      return;
    }

    if (type === "shape_add") {
      const { shape } = parsed;
      const state = roomStates.get(roomId)!;
      state.shapes.push(shape);
      broadcast(roomId, userId, { type: "shape_add", shape });
      return;
    }
    if (type === "shape_move") {
      const { index, shape } = parsed;
      const state = roomStates.get(roomId)!;
      if (state.shapes[index]) {
        state.shapes[index] = shape;
        broadcast(roomId, userId, { type: "shape_move", index, shape });
      }
      return;
    }
    if (type === "shape_remove") {
      const { index } = parsed;
      const state = roomStates.get(roomId)!;
      if (state.shapes[index]) {
        state.shapes.splice(index, 1);
        broadcast(roomId, userId, { type: "shape_remove", index });
      }
      return;
    }
    if (type === "board_state_request") {
      const state = roomStates.get(roomId)!;
      socket.send(
        JSON.stringify({ type: "board_state", shapes: state.shapes, roomId })
      );
      return;
    }
    if (type === "leave") {
      users.delete(userId);
      broadcast(roomId, userId, { type: "left", userId, roomId });
      return;
    }
    // Unknown type
    socket.send(
      JSON.stringify({ type: "error", message: `unknown type: ${type}` })
    );
  });
});

function broadcast(roomId: string, exceptUserId: string, payload: any) {
  users.forEach((u) => {
    if (u.rooms.includes(roomId) && u.userId !== exceptUserId) {
      try {
        u.socket.send(JSON.stringify(payload));
      } catch (e) {
        console.error("broadcast failed", e);
      }
    }
  });
}

"use client";
import Toolbar from "@/components/ui/Toolbar";
import Board from "@/components/Board";
import { useEffect, useRef } from "react";
export default function Draw() {
  const socketRef = useRef<WebSocket | null>(null);
  useEffect(() => {
    socketRef.current = new WebSocket("ws://localhost:8080");
    const ws = socketRef.current;
    if (!ws) return;

    ws.onopen = (e) => {
      console.log(" ws connected", e);
      ws.send(
        JSON.stringify({
          type: "join",
          userId: "12345", // Replace with actual user ID
          userName: "testUser", // Replace with actual user name
          roomToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb29tSWQiOiIxIiwiaWF0IjoxNzU0MDcwNTA5fQ.ilQ3scHhSL-Ue-HP-prnoU14Hc9XhFyitJb3G11cHQ4", // Replace with actual room token
        })
      );
    };

    return () => {
      ws.close();
    };
  });

  return (
    <div>
      <div>
        <div className="absolute">
          <Board />
        </div>
        <div className=" z-50">
          {" "}
          <Toolbar />
        </div>
      </div>
    </div>
  );
}

"use client";
import Toolbar from "@/components/ui/Toolbar";
import Board from "@/components/Board";
import { useEffect, useRef } from "react";
import { useBoardStore } from "@/store/store";
import { useParams } from "next/navigation";

export default function Draw() {
  const socketRef = useRef<WebSocket | null>(null);
  const roomToken = useBoardStore((s) => s.roomToken);
  const shapes = useBoardStore((s) => s.shapes);
  const setUser = useBoardStore((s) => (s as any).setUser);
  const userId = useBoardStore((s) => (s as any).userId as string | null);
  const userName = useBoardStore((s) => (s as any).userName as string | null);
  const remoteAddShape = useBoardStore((s) => (s as any).remoteAddShape);
  const remoteMoveShape = useBoardStore((s) => (s as any).remoteMoveShape);
  const remoteRemoveShape = useBoardStore((s) => (s as any).remoteRemoveShape);
  const replaceBoard = useBoardStore((s) => (s as any).replaceBoard);
  const setRoom = useBoardStore((s) => s.setRoom);
  const params = useParams<{ token: string }>();


  useEffect(() => {
    if (roomToken) return;

    try {
      setRoom(params.token);
    } catch (e) {
      console.error("Failed to fetch room token", e);
    }
  }, []);

  useEffect(() => {

    if (!userId || !userName) {
      const tmpId = crypto.randomUUID();
      setUser(tmpId, "guest");
    }

    if (!roomToken) return;
    const ws = new WebSocket("ws://localhost:8080");
    socketRef.current = ws;

    ws.onopen = () => {
      const uid = useBoardStore.getState().userId!;
      const uname = useBoardStore.getState().userName!;
      ws.send(
        JSON.stringify({
          type: "join",
          userId: uid,
          userName: uname,
          roomToken,
        })
      );
      // Expose globally for emit helpers
      (window as any).__ws = ws;
    };
    ws.onmessage = (evt) => {
      try {
        const msg = JSON.parse(evt.data);
        switch (msg.type) {
          case "board_state":
            replaceBoard(msg.shapes || []);
            break;
          case "shape_add":
            remoteAddShape(msg.shape);
            break;
          case "shape_move":
            remoteMoveShape(msg.index, msg.shape);
            break;
          case "shape_remove":
            remoteRemoveShape(msg.index);
            break;
          default:
            // ignore other events for now
            break;
        }
      } catch (e) {
        console.error("ws parse error", e);
      }
    };
    ws.onclose = () => {
      if ((window as any).__ws === ws) {
        (window as any).__ws = undefined;
      }
    };

    return () => {
      ws.close();
    };
  }, [roomToken]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
    <div className="absolute top-4 flex justify-center inset-x-0 ">
      <Toolbar /> 
    </div>
    <div className="absolute inset-0">
      <Board />
    </div>
</div>
  );
}

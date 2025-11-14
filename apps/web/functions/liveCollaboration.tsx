"use client";

import { useBoardStore } from "@/store/store";
import {redirect} from 'next/navigation';

const API_BASE =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_API_URL) ||
  (typeof window !== "undefined" && window.location.hostname === "127.0.0.1"
    ? "http://127.0.0.1:4000"
    : "http://localhost:4000");


export default async function  liveCollaboration(setRoom:  (roomToken: string) => void ,setUser: { (id: string, name: string): void; (arg0: string, arg1: string): void; },userId: string | null,userName: string | null,router:any) {


   if (!userId || !userName) {
      const tmpId = (typeof crypto !== "undefined" && (crypto as any).randomUUID) ? crypto.randomUUID() : Math.random().toString(36).slice(2);
      setUser(tmpId, "guest");
    }

    

    try {
      const admin = useBoardStore.getState().userId ?? "guest";
      const res = await fetch(`${API_BASE}/createRoom`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug:Math.random().toString(36).slice(2,10), adminId: admin }),
      });
      if (!res.ok) {
        let message = `${res.status} ${res.statusText}`;
        try {
          const body = await res.json();
          if (body?.error) message = typeof body.error === "string" ? body.error : JSON.stringify(body.error);
          if (body?.message) message = body.message;
        } catch {}

        return;
      }
      const { room, roomToken } = await res.json();
      if (!room || !roomToken) {
        console.error("Create failed: invalid response from server.");
        return;
      }
      setRoom(roomToken);

  router.push(`/room/${roomToken}`);
    
    } catch (error) {
      console.error("Failed to create room", error);
    } 
  


}


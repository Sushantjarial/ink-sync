"use client";

import { useBoardStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface LiveCollabDialogProps {
  onClose: () => void;
}

export default function LiveCollabDialog({ onClose }: LiveCollabDialogProps) {
  const [mode, setMode] = useState<"create" | "join" | null>(null);
  const [roomSlug, setRoomSlug] = useState("");
  const setRoom = useBoardStore((state) => state.setRoom);
  const router = useRouter();

  const handleCreateRoom = async () => {
    if (!roomSlug) return;
    try {
      const res = await fetch("http://localhost:4000/createRoom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug: roomSlug }),
      });
      const { room, roomToken } = await res.json();
      if (room && roomToken) {
        setRoom(room, roomToken);
        router.push(`/landing/${room.slug}`);
      }
    } catch (error) {
      console.error("Failed to create room", error);
    }
  };

  const handleJoinRoom = async () => {
    if (!roomSlug) return;
    try {
      const res = await fetch(`http://localhost:4000/rooms/${roomSlug}`);
      const { room, roomToken } = await res.json();
      if (room && roomToken) {
        setRoom(room, roomToken);
        router.push(`/landing/${room.slug}`);
      } else {
        console.error("Room not found");
      }
    } catch (error) {
      console.error("Failed to join room", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#23232A] p-6 rounded-lg shadow-lg text-white w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Live Collaboration</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            &times;
          </button>
        </div>
        {!mode ? (
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => setMode("create")}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Create Room
            </button>
            <button
              onClick={() => setMode("join")}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Join Room
            </button>
          </div>
        ) : mode === "create" ? (
          <div>
            <input
              type="text"
              placeholder="Enter room name"
              value={roomSlug}
              onChange={(e) => setRoomSlug(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white mb-4"
            />
            <button
              onClick={handleCreateRoom}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Create
            </button>
            <button
              onClick={() => setMode(null)}
              className="w-full mt-2 text-gray-400 hover:text-white"
            >
              Back
            </button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Enter room code"
              value={roomSlug}
              onChange={(e) => setRoomSlug(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white mb-4"
            />
            <button
              onClick={handleJoinRoom}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Join
            </button>
            <button
              onClick={() => setMode(null)}
              className="w-full mt-2 text-gray-400 hover:text-white"
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

import Toolbar from "@/components/ui/Toolbar";
import Board from "@/components/Board";
import { useBoardStore } from "@/store/store";
import { useEffect } from "react";
export default function Home() {
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

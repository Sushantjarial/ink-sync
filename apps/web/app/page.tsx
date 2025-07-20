import Toolbar from "@/components/ui/Toolbar";
import Board from "@/components/Board";
export default function Home() {
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

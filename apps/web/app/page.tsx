import Board from "@/components/Board";
import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";
import Toolbar from "@/components/ui/Toolbar";
export default function Home() {
  


  return (
  <div>
    <div>
      <div className="absolute"><Board /></div>
      <div className=" z-50" > <Toolbar /></div>
      
    </div>
 
   
  </div>
  );
}

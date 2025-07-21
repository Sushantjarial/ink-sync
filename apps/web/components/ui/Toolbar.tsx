"use client";

import { useState } from "react";
import {
  MousePointer,
  Square,
  Circle,
  Triangle,
  PenTool,
  Type,
  Hand,
  Trash2,
  Image,
  Undo,
  Redo,
  Download,
  PenLine,
} from "lucide-react";
import { useBoardStore } from "@/store/store";

export default function Toolbar() {
  const activeTool = useBoardStore((state) => state.activeTool);
  const setActiveTool = useBoardStore((state) => state.setActiveTool);
  console.log(activeTool);

  const tools = [
    {
      id: "line",
      icon: <PenLine size={20} />,
      tooltip: "Line (L)",
    },
    { id: "rectangle", icon: <Square size={20} />, tooltip: "Rectangle (R)" },
    { id: "ellipse", icon: <Circle size={20} />, tooltip: "Ellipse (E)" },
    { id: "polygon", icon: <Triangle size={20} />, tooltip: "Triangle (T)" },
    { id: "draw", icon: <PenTool size={20} />, tooltip: "Pencil (P)" },
    { id: "text", icon: <Type size={20} />, tooltip: "Text (A)" },
    { id: "hand", icon: <Hand size={20} />, tooltip: "Hand Tool (H)" },
    { id: "eraser", icon: <Trash2 size={20} />, tooltip: "Eraser" },
  ];

  const actions = [
    { id: "undo", icon: <Undo size={20} />, tooltip: "Undo (Ctrl+Z)" },
    { id: "redo", icon: <Redo size={20} />, tooltip: "Redo (Ctrl+Y)" },
    { id: "save", icon: <Download size={20} />, tooltip: "Save (Ctrl+S)" },
  ];

  const undo = useBoardStore((state) => state.undo);
  const redo = useBoardStore((state) => state.redo);

  const handleToolClick = (toolId: any) => {
    setActiveTool(toolId);
  };

  const handleActionClick = (actionId: any) => {
    if (actionId === "undo") {
      undo();
      return;
    }
    if (actionId === "redo") {
      redo();
      return;
    }
    if (actionId === "save") {
      window.dispatchEvent(new Event("download-canvas"));
      return;
    }
    console.log(`Action clicked: ${actionId}`);
    // Implementation for actions would go here
  };

  return (
    <div className="flex items-center justify-center w-full h-16 z-50  bg-black">
      <div className="flex flex-row items-center bg-[#23232A] rounded-lg shadow-md p-1 max-w-3xl">
        <div className="flex flex-row space-x-1 mr-4">
          {tools.map((tool) => (
            <button
              key={tool.id}
              className={`p-2 rounded hover:bg-purple-400 transition-colors relative group ${
                activeTool === tool.id ? "bg-purple-400" : ""
              }`}
              onClick={() => handleToolClick(tool.id)}
              aria-label={tool.tooltip}
            >
              <div className="flex justify-center items-center">
                {tool.icon}
              </div>
              <div className="absolute top-full mt-2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {tool.tooltip}
              </div>
            </button>
          ))}
        </div>

        <div className="h-8 w-px bg-gray-200 mr-4"></div>

        <div className="flex flex-row space-x-1">
          {actions.map((action) => (
            <button
              key={action.id}
              className="p-2 rounded hover:bg-purple-400 transition-colors relative group"
              onClick={() => handleActionClick(action.id)}
              aria-label={action.tooltip}
            >
              <div className="flex justify-center items-center">
                {action.icon}
              </div>
              <div className="absolute top-full mt-2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {action.tooltip}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Rectangle } from "roughjs/bin/geometry";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// interface BoardState  {
//     activeTool:string
//     shapes: string[]
//     setActiveTool: (toolid:string)=> void
//     setShape: (shape:string)=> void
// }
export type Shape =
  | {
      type: "rectangle";
      startX: number;
      startY: number;
      width: number;
      height: number;
    }
  | {
      type: "ellipse";
      centerX: number;
      centerY: number;
      width: number;
      height: number;
    }
  | {
      type: "line";
      startX: number;
      startY: number;
      endX: number;
      endY: number;
    }
  | {
      type: "text";
      text: string;
      x: number;
      y: number;
    }
  | {
      type: "draw";
      points: { x: number; y: number }[];
    }
  | {
      type: "polygon";
      points: { x: number; y: number }[]; // 3 points for triangle
    };

type activeTool =
  | "rectangle"
  | "ellipse"
  | "line"
  | "text"
  | "polygon"
  | "hand"
  | "eraser"
  | "draw";

type Room = {
  id: number;
  slug: string;
  adminId: string | null;
  ownerToken: string | null;
  createdAt: string;
  updatedAt: string;
};

const BoardState = (set: any, get: any) => ({
  activeTool: "" as activeTool,
  shapes: [] as Shape[],
  history: [] as Shape[][],
  future: [] as Shape[][],
  room: null as Room | null,
  roomToken: null as string | null,
  setRoom: (room: Room, roomToken: string) => set({ room, roomToken }),
  setActiveTool: (toolId: string) => set({ activeTool: toolId }),
  setShape: (shape: Shape) =>
    set((state: any) => ({
      history: [...state.history, state.shapes],
      future: [],
      shapes: [...state.shapes, shape],
    })),
  removeShape: (index: number) =>
    set((state: any) => ({
      history: [...state.history, state.shapes],
      future: [],
      shapes: state.shapes.filter((_: any, i: number) => i !== index),
    })),
  undo: () =>
    set((state: any) => {
      if (state.history.length === 0) return {};
      const prev = state.history[state.history.length - 1];
      const newHistory = state.history.slice(0, -1);
      return {
        future: [state.shapes, ...state.future],
        history: newHistory,
        shapes: prev,
      };
    }),
  redo: () =>
    set((state: any) => {
      if (state.future.length === 0) return {};
      const next = state.future[0];
      const newFuture = state.future.slice(1);
      return {
        history: [...state.history, state.shapes],
        future: newFuture,
        shapes: next,
      };
    }),
});

export const useBoardStore = create(
  devtools(
    persist(BoardState, {
      name: "board-storage",
    })
  )
);

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
  | "draw"
  | "select";

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
  selectedIndex: null as number | null,
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
      selectedIndex:
        state.selectedIndex === index
          ? null
          : state.selectedIndex !== null && state.selectedIndex > index
            ? state.selectedIndex - 1
            : state.selectedIndex,
    })),
  setSelectedIndex: (index: number | null) => set({ selectedIndex: index }),
  moveShape: (index: number, dx: number, dy: number) =>
    set((state: any) => {
      const shapes = state.shapes.slice();
      const s = shapes[index];
      if (!s) return {};
      let moved: Shape = s as any;
      switch (s.type) {
        case "rectangle":
          moved = { ...s, startX: s.startX + dx, startY: s.startY + dy };
          break;
        case "ellipse":
          moved = { ...s, centerX: s.centerX + dx, centerY: s.centerY + dy };
          break;
        case "line":
          moved = {
            ...s,
            startX: s.startX + dx,
            startY: s.startY + dy,
            endX: s.endX + dx,
            endY: s.endY + dy,
          };
          break;
        case "polygon":
          moved = {
            ...s,
            points: s.points.map((p: { x: number; y: number }) => ({
              x: p.x + dx,
              y: p.y + dy,
            })),
          };
          break;
        case "draw":
          moved = {
            ...s,
            points: s.points.map((p: { x: number; y: number }) => ({
              x: p.x + dx,
              y: p.y + dy,
            })),
          };
          break;
        case "text":
          moved = { ...s, x: s.x + dx, y: s.y + dy };
          break;
      }
      shapes[index] = moved;
      return { shapes };
    }),
  undo: () =>
    set((state: any) => {
      if (state.history.length === 0) return {};
      const prev = state.history[state.history.length - 1];
      const newHistory = state.history.slice(0, -1);
      return {
        future: [state.shapes, ...state.future],
        history: newHistory,
        shapes: prev,
        selectedIndex: null,
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
        selectedIndex: null,
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

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



const BoardState = (set: any, get: any) => ({
  activeTool: "" as activeTool,
  shapes: [] as Shape[],
  history: [] as Shape[][],
  future: [] as Shape[][],
  selectedIndex: null as number | null,

  roomToken: null as string | null,
  userId: null as string | null,
  userName: null as string | null,
  setIsLive: (isLive: boolean) => set({ isLive }),
  setRoom: (roomToken: string | null) => set({ roomToken }),
  setUser: (userId: string, userName: string) => set({ userId, userName }),
  setActiveTool: (toolId: string) => set({ activeTool: toolId }),

  setShape: (shape: Shape) =>
    set((state: any) => ({
      history: [...state.history, state.shapes],
      future: [],
      shapes: [...state.shapes, shape],
    })),
  remoteAddShape: (shape: Shape) =>
    set((state: any) => ({ shapes: [...state.shapes, shape] })),

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
  remoteRemoveShape: (index: number) =>
    set((state: any) => ({
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

  remoteMoveShape: (index: number, newShape: Shape) =>
    set((state: any) => {
      if (!state.shapes[index]) return {};
      const shapes = state.shapes.slice();
      shapes[index] = newShape;
      return { shapes };
    }),

  replaceBoard: (shapes: Shape[]) =>
    set({ shapes, history: [], future: [], selectedIndex: null }),

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

// Side-effect wrappers to emit over websocket; keep outside of state creator for clarity
export function emitShapeAdd(shape: Shape) {
  if (typeof window === "undefined") return;
  const ws: WebSocket | undefined = (window as any).__ws;
  const { roomToken, userId, userName } = useBoardStore.getState();
  if (ws && ws.readyState === 1 && roomToken && userId && userName) {
    ws.send(
      JSON.stringify({ type: "shape_add", shape, roomToken, userId, userName })
    );
  }
}

export function emitShapeMove(index: number, shape: Shape) {
  if (typeof window === "undefined") return;
  const ws: WebSocket | undefined = (window as any).__ws;
  const { roomToken, userId, userName } = useBoardStore.getState();
  if (ws && ws.readyState === 1 && roomToken && userId && userName) {
    ws.send(
      JSON.stringify({
        type: "shape_move",
        index,
        shape,
        roomToken,
        userId,
        userName,
      })
    );
  }
}

export function emitShapeRemove(index: number) {
  if (typeof window === "undefined") return;
  const ws: WebSocket | undefined = (window as any).__ws;
  const { roomToken, userId, userName } = useBoardStore.getState();
  if (ws && ws.readyState === 1 && roomToken && userId && userName) {
    ws.send(
      JSON.stringify({
        type: "shape_remove",
        index,
        roomToken,
        userId,
        userName,
      })
    );
  }
}

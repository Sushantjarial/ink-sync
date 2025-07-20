"use client";
import { useBoardStore } from "@/store/store";
import { Shape } from "@/store/store";
import { div } from "motion/react-client";
import {
  act,
  MouseEventHandler,
  use,
  useEffect,
  useRef,
  useState,
} from "react";

export default function Board() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [start, setStart] = useState<{ x: number; y: number } | null>(null);
  const [current, setCurrent] = useState<{ x: number; y: number } | null>(null);
  // Track points for pen tool
  const [drawPoints, setDrawPoints] = useState<{ x: number; y: number }[]>([]);
  const activeTool = useBoardStore((state) => state.activeTool);
  const addShape = useBoardStore((state) => state.setShape);
  const existingShapes: Shape[] = useBoardStore((state) => state.shapes);
  const removeShape = useBoardStore((state) => state.removeShape);
  const undo = useBoardStore((state) => state.undo);
  const redo = useBoardStore((state) => state.redo);

  // Pan state for hand tool
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState<{ x: number; y: number } | null>(
    null
  );

  // Set canvas size on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, []);

  // Redraw shapes whenever they change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    clearCanvas(existingShapes, canvas, ctx, pan);
  }, [existingShapes, pan]);

  // Draw preview shape while drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || (!isDrawing && !isPanning) || !start || !current) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    clearCanvas(existingShapes, canvas, ctx, pan);
    ctx.strokeStyle = "rgba(255, 255, 255)";
    const width = current.x - start.x;
    const height = current.y - start.y;
    const offsetX = pan.x;
    const offsetY = pan.y;
    if (activeTool === "rectangle") {
      ctx.strokeRect(start.x + offsetX, start.y + offsetY, width, height);
    } else if (activeTool === "ellipse") {
      ctx.beginPath();
      ctx.ellipse(
        start.x + width / 2 + offsetX,
        start.y + height / 2 + offsetY,
        Math.abs(width / 2),
        Math.abs(height / 2),
        0,
        0,
        Math.PI * 2
      );
      ctx.stroke();
      ctx.closePath();
    } else if (activeTool === "line") {
      ctx.beginPath();
      ctx.moveTo(start.x + offsetX, start.y + offsetY);
      ctx.lineTo(current.x + offsetX, current.y + offsetY);
      ctx.stroke();
      ctx.closePath();
    } else if (activeTool === "polygon") {
      // Draw triangle preview
      const p1 = { x: start.x + offsetX, y: current.y + offsetY };
      const p2 = {
        x: (start.x + current.x) / 2 + offsetX,
        y: start.y + offsetY,
      };
      const p3 = { x: current.x + offsetX, y: current.y + offsetY };
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineTo(p3.x, p3.y);
      ctx.closePath();
      ctx.stroke();
    } else if (String(activeTool) === "draw" && drawPoints.length > 1) {
      ctx.beginPath();
      ctx.moveTo(drawPoints[0].x + offsetX, drawPoints[0].y + offsetY);
      for (let i = 1; i < drawPoints.length; i++) {
        ctx.lineTo(drawPoints[i].x + offsetX, drawPoints[i].y + offsetY);
      }
      ctx.stroke();
      ctx.closePath();
    }
  }, [
    isDrawing,
    isPanning,
    start,
    current,
    activeTool,
    existingShapes,
    drawPoints,
    pan,
  ]);

  // Pan logic for hand tool
  const handlePanMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsPanning(true);
    setPanStart({ x: e.clientX, y: e.clientY });
  };
  const handlePanMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isPanning || !panStart) return;
    setPan((prev) => ({
      x: prev.x + (e.clientX - panStart.x),
      y: prev.y + (e.clientY - panStart.y),
    }));
    setPanStart({ x: e.clientX, y: e.clientY });
  };
  const handlePanMouseUp = () => {
    setIsPanning(false);
    setPanStart(null);
  };

  const handleMouseDown: React.MouseEventHandler<HTMLCanvasElement> = (e) => {
    if (String(activeTool) === "hand") {
      handlePanMouseDown(e);
      return;
    }
    if (String(activeTool) === "eraser") {
      // Find and remove the topmost shape under the cursor
      const x = e.clientX;
      const y = e.clientY;
      for (let i = existingShapes.length - 1; i >= 0; i--) {
        const shape = existingShapes[i];
        if (isPointInShape(x, y, shape)) {
          removeShape(i);
          break;
        }
      }
      return;
    }
    if (String(activeTool) === "text") {
      const text = window.prompt("Enter text:");
      if (text && text.trim() !== "") {
        addShape({ type: "text", text, x: e.clientX, y: e.clientY });
      }
      return;
    }
    setIsDrawing(true);
    setStart({ x: e.clientX, y: e.clientY });
    setCurrent({ x: e.clientX, y: e.clientY });
    if (String(activeTool) === "draw") {
      setDrawPoints([{ x: e.clientX, y: e.clientY }]);
    }
  };

  const handleMouseMove: React.MouseEventHandler<HTMLCanvasElement> = (e) => {
    if (String(activeTool) === "hand") {
      handlePanMouseMove(e);
      return;
    }
    if (!isDrawing || !start) return;
    setCurrent({ x: e.clientX, y: e.clientY });
    if (String(activeTool) === "draw") {
      setDrawPoints((prev) => [...prev, { x: e.clientX, y: e.clientY }]);
    }
  };

  const handleMouseUp: React.MouseEventHandler<HTMLCanvasElement> = (e) => {
    if (String(activeTool) === "hand") {
      handlePanMouseUp();
      return;
    }
    if (!isDrawing || !start) return;
    setIsDrawing(false);
    const end = { x: e.clientX, y: e.clientY };
    const width = end.x - start.x;
    const height = end.y - start.y;
    let shape: Shape | null = null;
    if (activeTool === "rectangle") {
      shape = {
        type: "rectangle",
        startX: start.x,
        startY: start.y,
        width,
        height,
      };
    } else if (activeTool === "ellipse") {
      shape = {
        type: "ellipse",
        centerX: start.x + width / 2,
        centerY: start.y + height / 2,
        width,
        height,
      };
    } else if (activeTool === "line") {
      shape = {
        type: "line",
        startX: start.x,
        startY: start.y,
        endX: end.x,
        endY: end.y,
      };
    } else if (activeTool === "polygon") {
      // Calculate triangle points
      const p1 = { x: start.x, y: end.y };
      const p2 = { x: (start.x + end.x) / 2, y: start.y };
      const p3 = { x: end.x, y: end.y };
      shape = {
        type: "polygon",
        points: [p1, p2, p3],
      };
    } else if (String(activeTool) === "draw" && drawPoints.length > 1) {
      shape = {
        type: "draw",
        points: drawPoints,
      };
    }
    if (shape) {
      addShape(shape);
    }
    setStart(null);
    setCurrent(null);
    setDrawPoints([]);
  };

  useEffect(() => {
    function handleDownload() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = url;
      link.download = "board.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    window.addEventListener("download-canvas", handleDownload);
    return () => {
      window.removeEventListener("download-canvas", handleDownload);
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handlePanMouseUp}
        style={{ display: "block", background: "black" }}
      ></canvas>
    </div>
  );
}

function clearCanvas(
  existingShapes: Shape[],
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  pan: { x: number; y: number } = { x: 0, y: 0 }
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0, 0, 0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  existingShapes.map((shape) => {
    if (shape.type === "rectangle") {
      ctx.strokeStyle = "rgba(255, 255, 255)";
      ctx.strokeRect(
        shape.startX + pan.x,
        shape.startY + pan.y,
        shape.width,
        shape.height
      );
    } else if (shape.type === "ellipse") {
      ctx.strokeStyle = "rgba(255, 255, 255)";
      ctx.beginPath();
      ctx.ellipse(
        shape.centerX + pan.x,
        shape.centerY + pan.y,
        Math.abs(shape.width) / 2,
        Math.abs(shape.height) / 2,
        0,
        0,
        Math.PI * 2
      );
      ctx.stroke();
      ctx.closePath();
    } else if (shape.type === "line") {
      ctx.strokeStyle = "rgba(255, 255, 255)";
      ctx.beginPath();
      ctx.moveTo(shape.startX + pan.x, shape.startY + pan.y);
      ctx.lineTo(shape.endX + pan.x, shape.endY + pan.y);
      ctx.stroke();
      ctx.closePath();
    } else if (shape.type === "polygon") {
      ctx.strokeStyle = "rgba(255, 255, 255)";
      ctx.beginPath();
      ctx.moveTo(shape.points[0].x + pan.x, shape.points[0].y + pan.y);
      ctx.lineTo(shape.points[1].x + pan.x, shape.points[1].y + pan.y);
      ctx.lineTo(shape.points[2].x + pan.x, shape.points[2].y + pan.y);
      ctx.closePath();
      ctx.stroke();
    } else if (shape.type === "draw" && shape.points.length > 1) {
      ctx.strokeStyle = "rgba(255, 255, 255)";
      ctx.beginPath();
      ctx.moveTo(shape.points[0].x + pan.x, shape.points[0].y + pan.y);
      for (let i = 1; i < shape.points.length; i++) {
        ctx.lineTo(shape.points[i].x + pan.x, shape.points[i].y + pan.y);
      }
      ctx.stroke();
      ctx.closePath();
    } else if (shape.type === "text") {
      ctx.fillStyle = "rgba(255, 255, 255)";
      ctx.font = "20px sans-serif";
      ctx.fillText(shape.text, shape.x + pan.x, shape.y + pan.y);
    }
  });
}

function isPointInShape(x: number, y: number, shape: Shape): boolean {
  if (shape.type === "rectangle") {
    return (
      x >= shape.startX &&
      x <= shape.startX + shape.width &&
      y >= shape.startY &&
      y <= shape.startY + shape.height
    );
  } else if (shape.type === "ellipse") {
    const rx = Math.abs(shape.width) / 2;
    const ry = Math.abs(shape.height) / 2;
    const cx = shape.centerX;
    const cy = shape.centerY;
    return (
      ((x - cx) * (x - cx)) / (rx * rx) + ((y - cy) * (y - cy)) / (ry * ry) <= 1
    );
  } else if (shape.type === "line") {
    // Distance from point to line segment
    const dist = pointToSegmentDistance(
      x,
      y,
      shape.startX,
      shape.startY,
      shape.endX,
      shape.endY
    );
    return dist < 8; // threshold
  } else if (shape.type === "polygon") {
    // Check if point is inside triangle using barycentric technique
    const [a, b, c] = shape.points;
    return pointInTriangle({ x, y }, a, b, c);
  } else if (shape.type === "draw") {
    // Check if point is near any segment
    for (let i = 1; i < shape.points.length; i++) {
      const dist = pointToSegmentDistance(
        x,
        y,
        shape.points[i - 1].x,
        shape.points[i - 1].y,
        shape.points[i].x,
        shape.points[i].y
      );
      if (dist < 8) return true;
    }
    return false;
  } else if (shape.type === "text") {
    // Simple bounding box for text
    // Assume 20px font, width = 10 * text.length, height = 24
    const width = 10 * shape.text.length;
    const height = 24;
    return (
      x >= shape.x &&
      x <= shape.x + width &&
      y <= shape.y &&
      y >= shape.y - height
    );
  }
  return false;
}

function pointToSegmentDistance(
  px: number,
  py: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  const A = px - x1;
  const B = py - y1;
  const C = x2 - x1;
  const D = y2 - y1;
  const dot = A * C + B * D;
  const len_sq = C * C + D * D;
  let param = -1;
  if (len_sq !== 0) param = dot / len_sq;
  let xx, yy;
  if (param < 0) {
    xx = x1;
    yy = y1;
  } else if (param > 1) {
    xx = x2;
    yy = y2;
  } else {
    xx = x1 + param * C;
    yy = y1 + param * D;
  }
  const dx = px - xx;
  const dy = py - yy;
  return Math.sqrt(dx * dx + dy * dy);
}

function pointInTriangle(
  p: { x: number; y: number },
  a: { x: number; y: number },
  b: { x: number; y: number },
  c: { x: number; y: number }
) {
  // Barycentric technique
  const area =
    0.5 * (-b.y * c.x + a.y * (-b.x + c.x) + a.x * (b.y - c.y) + b.x * c.y);
  const s =
    (1 / (2 * area)) *
    (a.y * c.x - a.x * c.y + (c.y - a.y) * p.x + (a.x - c.x) * p.y);
  const t =
    (1 / (2 * area)) *
    (a.x * b.y - a.y * b.x + (a.y - b.y) * p.x + (b.x - a.x) * p.y);
  const u = 1 - s - t;
  return s >= 0 && t >= 0 && u >= 0;
}

// async function getExistingShapes(roomId: string) {
//   const res = await axios.get(`${HTTP_BACKEND}/chats/${roomId}`);
//   const messages = res.data.messages;

//   const shapes = messages.map((x: { message: string }) => {
//     const messageData = JSON.parse(x.message);
//     return messageData.shape;
//   });

//   return shapes;
// }

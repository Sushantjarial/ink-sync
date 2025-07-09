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
  console.log("Board component rendered");
  const ctx = canvasRef.current?.getContext("2d");
  const activeTool = useBoardStore((state) => state.activeTool);
  let existingShapes: Shape[] = useBoardStore((state) => state.shapes);
  //   socket.onmessage = (event) => {
  //     const message = JSON.parse(event.data);

  //     if (message.type == "chat") {
  //       const parsedShape = JSON.parse(message.message);
  //       existingShapes.push(parsedShape.shape);
  //       clearCanvas(existingShapes, canvas, ctx);
  //     }
  //   };

  if (ctx && canvasRef.current) {
    let clicked = false;
    let startX = 0;
    let startY = 0;

    canvasRef.current.addEventListener("mousedown", (e) => {
      clicked = true;
      startX = e.clientX;
      startY = e.clientY;
    });

    canvasRef.current.addEventListener("mouseup", (e) => {
      clicked = false;
      const width = e.clientX - startX;
      const height = e.clientY - startY;

      // @ts-ignore
      const selectedTool = activeTool;
      let shape: Shape | null = null;
      if (selectedTool === "rectangle") {
        shape = {
          type: "rectangle",
          startX,
          startY: startY,
          height,
          width,
        };
      } else if (selectedTool === "ellipse") {
        shape = {
          type: "ellipse",
          centerX: startX + width / 2,
          centerY: startY + height / 2,
          width,
          height,
        };
      }
      // } else if (selectedTool === "circle") {
      //   const radius = Math.max(width, height) / 2;
      //   shape = {
      //     type: "circle",
      //     radius: radius,
      //     centerX: startX + radius,
      //     centerY: startY + radius,
      //   };
      // }

      if (shape) {
        existingShapes.push(shape);
        console.log(existingShapes, "existing shapes");
      }
      // socket.send(
      //   JSON.stringify({
      //     type: "chat",
      //     message: JSON.stringify({
      //       shape,
      //     }),
      //     roomId,
      //   })
      // );
    });

    canvasRef.current.addEventListener("mousemove", (e) => {
      if (clicked) {
        if (!canvasRef.current) {
          return;
        }
        const width = e.clientX - startX;
        const height = e.clientY - startY;
        clearCanvas(existingShapes, canvasRef.current, ctx);
        ctx.strokeStyle = "rgba(255, 255, 255)";
        // @ts-ignore
        const selectedTool = activeTool;
        if (selectedTool === "rectangle") {
          ctx.strokeRect(startX, startY, width, height);
        } else if (selectedTool === "ellipse") {
          ctx.beginPath();
          ctx.ellipse(
            startX + width / 2,
            startY + height / 2,
            Math.abs(width / 2),
            Math.abs(height / 2),
            0,
            0,
            Math.PI * 2
          );
          ctx.stroke();
          ctx.closePath();
        }
        // else if (selectedTool === "circle") {
        //   const radius = Math.max(width, height) / 2;
        //   const centerX = startX + radius;
        //   const centerY = startY + radius;
        //   ctx.beginPath();
        //   ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        //   ctx.stroke();
        //   ctx.closePath();
        // }
      }
    });
  }
  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear the canvas initially
    if (!ctx) return;
    clearCanvas(existingShapes, canvas, ctx);
  });

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

function clearCanvas(
  existingShapes: Shape[],
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0, 0, 0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  existingShapes.map((shape) => {
    if (shape.type === "rectangle") {
      ctx.strokeStyle = "rgba(255, 255, 255)";
      ctx.strokeRect(shape.startX, shape.startY, shape.width, shape.height);
    } else if (shape.type === "ellipse") {
      ctx.strokeStyle = "rgba(255, 255, 255)";
      ctx.beginPath();
      ctx.ellipse(
        shape.centerX,
        shape.centerY,
        Math.abs(shape.width) / 2,
        Math.abs(shape.height) / 2,
        0,
        0,
        Math.PI * 2
      );
      ctx.stroke();
      ctx.closePath();
      ``;
    }

    // else if (shape.type === "circle") {
    //   ctx.beginPath();
    //   ctx.arc(shape.centerX, shape.centerY, shape.radius, 0, Math.PI * 2);
    //   ctx.stroke();
    //   ctx.closePath();
    // }
  });
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

"use client"
import { useBoardStore } from "@/store/store"
import { act, MouseEventHandler, useEffect, useRef } from "react"
import rough from "roughjs"
import { RoughCanvas } from "roughjs/bin/canvas"
import { RoughGenerator } from "roughjs/bin/generator"
export default function Board(){
    const activeTool=useBoardStore((state)=>state.activeTool)
    console.log(activeTool);
    const canvasRef=useRef<HTMLCanvasElement>(null)
    let isDrawing=false;
    let start =0;
    let end =0;
    let movex=0;
    let movey=0;

const roughCanvasRef = useRef<RoughCanvas>(null)
const generatorRef = useRef<RoughGenerator>(rough.generator())


    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        isDrawing=true
             start=e.clientX
            end =e.clientY
          

         
           

      }
        const handleMouseMove= (e: React.MouseEvent<HTMLCanvasElement>) => {
            if(!isDrawing) return
             movex=e.clientX
             movey=e.clientY
             const canvas = canvasRef.current!;
             const ctx = canvas.getContext("2d");
             ctx?.clearRect(0, 0, canvas.width, canvas.height);
            if(activeTool==="line"){
                let rect=generatorRef.current.line(start,end ,movex,movey, {
       
                    stroke: "white",
                   })
                   roughCanvasRef.current?.draw(rect)   
                   return 

            }
            if(activeTool==="rectangle"){
                let rect=generatorRef.current.rectangle(start,end ,movex-start,movey-end , {
       
                    stroke: "white",
                   })
                   roughCanvasRef.current?.draw(rect)   
                   return 
            }
            if(activeTool==="circle"){
                let rect=generatorRef.current.ellipse(start,end,movex-start ,movey-end, {
       
                    stroke: "white",
                   })
                   roughCanvasRef.current?.draw(rect)   
                   return 
            }
    if(activeTool==="triangle"){
     
        let rect = generatorRef.current.polygon(  [[start, end],
            [movex, end],
            [movex, start],
            [end, movey],
            [start, end]], {
            stroke: "white",
        });
        roughCanvasRef.current?.draw(rect);
        return;
    }

            
          
       
          
                      
        }
            const handleMouseUp= (e: React.MouseEvent<HTMLCanvasElement>) => {
                isDrawing=false
            }
 
    useEffect(()=>{
        const canvas=canvasRef.current as HTMLCanvasElement
        canvas.width=window.innerWidth
        canvas.height=window.innerHeight
        roughCanvasRef.current=rough.canvas(canvas as HTMLCanvasElement)
       


       
           
       
        },[handleMouseDown])
    return(
        <canvas ref={canvasRef} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown} width={100} height={100}>  </canvas>
    )
}
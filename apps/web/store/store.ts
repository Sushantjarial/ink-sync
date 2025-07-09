import { Rectangle } from "roughjs/bin/geometry";
import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";

// interface BoardState  {
//     activeTool:string
//     shapes: string[]
//     setActiveTool: (toolid:string)=> void
//     setShape: (shape:string)=> void
// }
export type Shape = {
    type: "rectangle",
    startX:number,
    startY:number,
    width:number,
    height:number

} | {
    type: "ellipse",
    centerX:number,
    centerY:number,
    width:number,
    height:number
} | {
    type: "line",
    startX:number,
    startY:number,
    endX:number,
    endY:number
} | {
    type: "text",
    text:string,
    x:number,
    y:number
}

type activeTool = "rectangle" | "ellipse"| "line"| "text" |"polygon"


const BoardState = (set:any)=>({
   
        activeTool:"" as activeTool,
        shapes: [] as Shape[],  
        setActiveTool:(toolId:string)=>set({activeTool:toolId}),
        setShape:(shape:Shape)=>set((state:any)=>({shapes:[...state.shapes, shape]}))

    
})



export const useBoardStore =create(
devtools(
    persist(
        BoardState,
        {
            name:"board-storage",
        }
    )
)

)
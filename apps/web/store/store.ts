import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";

// interface BoardState  {
//     activeTool:string
//     shapes: string[]
//     setActiveTool: (toolid:string)=> void
//     setShape: (shape:string)=> void
// }


const BoardState = (set:any)=>({
   
        activeTool: "select",
        shapes:[] as string[],
        setActiveTool:(toolId:string)=>set({activeTool:toolId}),
        setShape:(shape:string)=>set((state:any)=>({shapes:[...state.shapes, shape]}))

    
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
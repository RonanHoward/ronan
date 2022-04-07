import { Context, createContext } from "react";

export const IsMobile: Context<
        boolean
    > = createContext<
        boolean
    >(false);

export const MousePosition: Context<
        {x:number,y:number}
    > = createContext<
        {x:number,y:number}
    >({x:0,y:0});

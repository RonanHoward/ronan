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

export const ScrollPosition: Context<
        number
    > = createContext<
        number
    >(0);

export const WindowSize: Context<
        {width: number, height: number}
    > = createContext<
        {width: number, height: number}
    >({width:0,height:0});

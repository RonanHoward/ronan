import { FC } from "react";

interface props {
    height?: string;
    width?: string;
}
export const Spacer: FC<props> = ({ height, width }) => {
    return <div style={{height:height,width:width}}/>
}

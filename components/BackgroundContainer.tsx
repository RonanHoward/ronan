/**
 * THIS HOLDS 3 COMPONENTS
 * 
 * BackgroundContainer
 * - Div container with fancy background
 * 
 * BackgroundCenterContainer
 * - Complete overlay absolute div flex container to center elements
 * 
 * BackgroundContentContainer
 * - Full width opaque container for general overlay content
 */
import { FC, useContext } from "react";
import { MousePosition, ScrollPosition, WindowSize } from "../lib/context";
const wiggleRoom = 18
interface BgProps {
    background: string;
    height?: string;
    children: JSX.Element | JSX.Element[];
    invertMouseEffect?: boolean;
}
export const BackgroundContainer: FC<BgProps> = ({background, children, height, invertMouseEffect = false}) => {
    const mouse = useContext(MousePosition)
    const wsize = useContext(WindowSize)
    const scroll = useContext(ScrollPosition)

    const xOffset = ((mouse.x-wsize.width/2)/wsize.width) * wiggleRoom * (invertMouseEffect?1:-1)
    const yOffset = ((mouse.y-wsize.height/2)/wsize.height) * wiggleRoom * (invertMouseEffect?1:-1)
    // parallax
    const pOffset = scroll*0.13

    return (
        <div
            style={{
                width: '100%',
                position: 'relative',
                height: height,
                background: `url('${background}') repeat center`,
                backgroundSize: 'cover',
                backgroundPositionX: xOffset - wiggleRoom/2,
                backgroundPositionY: (yOffset - wiggleRoom/2) + pOffset
            }}
        >
            {children}
        </div>
    )
}

interface bgccProps {
    children: JSX.Element | JSX.Element[];
    includeContentContainer?: boolean;
}
export const BackgroundCenterContainer: FC<bgccProps> = ({children, includeContentContainer}) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: '60%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center'
            }}
        >
            {
                includeContentContainer ?
                <div style={{backgroundColor:'#ffffff',padding:'15px 20px'}}>
                    {children}
                </div>
                : children
            }
        </div>
    )
}

interface bccProps {
    children: JSX.Element | JSX.Element[];
}
export const BackgroundContentContainer: FC<bccProps> = ({children}) => {
    return (
        <div style={{
            backgroundColor: '#ffffff',
            textAlign: 'center',
            padding: '2em 0'
        }}>
            {children}
        </div>
    )
}

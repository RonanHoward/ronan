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
import { MousePosition } from "../lib/context";

interface BgProps {
    background: string;
    height?: string;
    children: JSX.Element | JSX.Element[];
}
export const BackgroundContainer: FC<BgProps> = ({background, children, height}) => {
    const mouse = useContext(MousePosition)

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: height,
                background: `url('${background}') no-repeat center`,
                backgroundSize: '110%',
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
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
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

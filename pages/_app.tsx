import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { IsMobile, MousePosition, ScrollPosition, WindowSize } from '../lib/context';
import { Toaster } from 'react-hot-toast';
import { useWindowSize } from '../lib/hooks';
import { StickyNavbar } from '../components/StickyNavbar';

function MyApp({ Component, pageProps }: AppProps) {
    // Context for mouse position
    const [x, setX] = useState<number>(0)
    const [y, setY] = useState<number>(0)
    useEffect(() => {
        const update = (e: any) => {
            setX(e.x)
            setY(e.y)
        }
        window.addEventListener('mousemove', update)
        window.addEventListener('touchmove', update)
        return () => {
            window.removeEventListener('mousemove', update)
            window.removeEventListener('touchmove', update)
        }
    }, [setX, setY]);

    // Context for scroll position
    const [scroll, setScroll] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScroll(position)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })
    
    // Context for window size
    const windowSize = useWindowSize()

    return <>
        <IsMobile.Provider value={windowSize.width < 760}>
        <WindowSize.Provider value={windowSize}>
        <ScrollPosition.Provider value={scroll}>
        <MousePosition.Provider value={{x:x,y:y}}>

            <StickyNavbar />
            <Component {...pageProps} />
            
        </MousePosition.Provider>
        </ScrollPosition.Provider>
        </WindowSize.Provider>
        </IsMobile.Provider>

        <Toaster />
    </>
}

export default MyApp

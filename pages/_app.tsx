import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { MousePosition } from '../lib/context';
import { Toaster } from 'react-hot-toast';

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

    return <>
        <MousePosition.Provider value={{x:x,y:y}}>
            <Component {...pageProps} />
        </MousePosition.Provider>
        <Toaster />
    </>
}

export default MyApp

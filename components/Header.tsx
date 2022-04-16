import { FC, useContext, useRef } from "react"
import { IsMobile } from "../lib/context"

export const Header:FC = ({ }) => {
    const mobile = useContext(IsMobile)

    // get <header> size
    // const headerRef = useRef(null)
    // console.log(headerRef.current?.offsetHeight)
    return (
        <header
            /*ref={headerRef}*/
            style={{marginTop:mobile?'1em':''}}
        >
            <h1>Ronan Howard</h1>
        </header>
    )
}
